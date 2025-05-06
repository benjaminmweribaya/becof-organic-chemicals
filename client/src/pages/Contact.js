import React from 'react';
import { useFormik } from 'formik';

function Contact() {
    // Formik setup for form handling
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
            attachments: null,
        },
        onSubmit: (values) => {
            console.log('Form data:', values);
            alert('Message sent!');
        },
    });

    return (
        <div className="container mx-auto px-6 py-8 max-w-7xl pt-20">
            <section className="text-center">
                <h1 className="text-4xl font-bold text-green-700">Contact Us</h1>
                <p className="text-lg text-gray-600 mt-4">
                    We’d love to hear from you! Reach out to us for inquiries, support, or feedback.
                </p>
            </section>

            {/* Updated form with Formik */}
            <form
                onSubmit={formik.handleSubmit}
                className="bg-white shadow-xl rounded-xl p-8 mt-8 w-full"
                encType="multipart/form-data"
            >
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        maxLength="800"
                        onChange={formik.handleChange}
                        value={formik.values.message}
                        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                    <p className="text-sm text-gray-500 mt-1">
                        {formik.values.message.length}/800 characters
                    </p>
                </div>

                <div className="mb-4">
                    <label htmlFor="attachments" className="block text-gray-700 font-semibold mb-2">
                        Attach Documents or Images
                    </label>
                    <input
                        type="file"
                        id="attachments"
                        name="attachments"
                        onChange={(event) => {
                            formik.setFieldValue('attachments', event.currentTarget.files);
                        }}
                        className="w-full border rounded-lg px-4 py-2"
                        accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                        multiple
                    />
                    <p className="text-sm text-gray-500 mt-1">
                        File size limit: 5MB each.
                    </p>
                </div>

                <button
                    type="submit"
                    className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
                >
                    Send Message
                </button>
            </form>

            {/* Google Map Embed for Kikambala, Kilifi County */}
            <div className="mt-12">
                <h2 className="text-2xl font-semibold text-green-600 mb-4 text-center">Our Location</h2>
                <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
                    <iframe
                        title="Kikambala Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127539.76850267696!2d39.68222339870083!3d-3.8713244175062686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184012a8b36ea1c3%3A0x9ea7cb7c2849b36c!2sKikambala!5e0!3m2!1sen!2ske!4v1689879469074!5m2!1sen!2ske"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Contact;
