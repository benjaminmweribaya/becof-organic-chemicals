import React, { useState } from 'react';

function Payment() {
    const [amount, setAmount] = useState('');
    const handlePayment = () => {
        if (!amount) return alert("Please enter an amount!");
        // Simulate payment processing
        alert(`Payment of $${amount} successful!`);
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
            </div>
        </div>
    );
}

export default Payment;
