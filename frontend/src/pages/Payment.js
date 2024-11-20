import React, { useState } from 'react';
import { processPayment } from '../utils/api';

function Payment() {
    const [amount, setAmount] = useState('');
    const [paymentStatus, setPaymentStatus] = useState(null);

    const handlePayment = async () => {
        try {
            const response = await processPayment({ amount: 1000 }); // Replace with dynamic data
            setPaymentStatus(response.data.status);
        } catch (error) {
            console.error('Error processing payment:', error);
            setPaymentStatus('Error');
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold">Payment</h1>
            <p>Complete your transaction securely.</p>
            <div className="mt-4">
                <input
                    type="number"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="border p-2 rounded w-full mb-4"
                />
                <button
                    onClick={handlePayment}
                    className="bg-green-600 text-white px-4 py-2 rounded"
                >
                    Pay Now
                </button>
                {paymentStatus && (
                    <p className="mt-4">
                        Payment Status: <span className="font-semibold">{paymentStatus}</span>
                    </p>
                )}
            </div>
        </div>
    );
}

export default Payment;
