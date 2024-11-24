import React, { useState } from 'react';

function Contact() {
    const [message, setMessage] = useState('');
    const [messageLength, setMessageLength] = useState(0);

    const handleMessageChange = (e) => {
        const text = e.target.value;
        if (text.length <= 800) {
            setMessage(text);
            setMessageLength(text.length);
        }
    };

    return (
        <div className="container mx-auto px-6 py-8">
            <section className="text-center">
                <h1 className="text-4xl font-bold text-green-700">Contact Us</h1>
                <p className="text-lg text-gray-600 mt-4">
                    We’d love to hear from you! Reach out to us for inquiries, support, or feedback.
                </p>
            </section>

            <form
                className="bg-white shadow-md rounded-lg p-6 mt-8 max-w-lg mx-auto"
                action="https://formspree.io/f/YOUR_FORM_ID"
                method="POST"
                encType="multipart/form-data"
            >
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full border rounded-lg px-3 py-2"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full border rounded-lg px-3 py-2"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        className="w-full border rounded-lg px-3 py-2"
                        rows="5"
                        value={message}
                        onChange={handleMessageChange}
                        required
                    />
                    <p className="text-sm text-gray-500 mt-1">
                        {messageLength}/800 words
                    </p>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="attachments">
                        Attach Documents or Images
                    </label>
                    <input
                        type="file"
                        id="attachments"
                        name="attachments"
                        className="w-full border rounded-lg px-3 py-2"
                        accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                        multiple
                    />
                    <p className="text-sm text-gray-500 mt-1">
                        File size limit: 5MB each.
                    </p>
                </div>

                <button
                    type="submit"
                    className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}

export default Contact;
