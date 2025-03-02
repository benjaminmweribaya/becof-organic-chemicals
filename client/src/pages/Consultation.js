import React from "react";

const Consultation = () => {
    return (
        <div className="container mx-auto p-6">
            <header className="text-center bg-green-600 text-white py-6 rounded">
                <h1 className="text-3xl font-bold">Expert Guidance for a Sustainable Future</h1>
                <p className="mt-2 text-lg">
                    Personalized advice for farmers, cooperatives, and chemical manufacturers.
                </p>
            </header>

            {/* Introduction Section */}
            <section className="mt-8">
                <h2 className="text-2xl font-semibold">Why Consult with Becof Experts?</h2>
                <div className="grid gap-6 mt-4 md:grid-cols-2">
                    <div className="p-4 bg-white shadow rounded">
                        <h3 className="text-xl font-semibold">Unmatched Expertise</h3>
                        <p>
                            Our team comprises experienced engineers with extensive knowledge of sustainable practices.
                        </p>
                    </div>
                    <div className="p-4 bg-white shadow rounded">
                        <h3 className="text-xl font-semibold">Tailored Solutions</h3>
                        <p>
                            We provide advice tailored to your specific needs for better outcomes.
                        </p>
                    </div>
                    <div className="p-4 bg-white shadow rounded">
                        <h3 className="text-xl font-semibold">Commitment to Sustainability</h3>
                        <p>
                            Recommendations align with eco-friendly practices to minimize environmental impact.
                        </p>
                    </div>
                    <div className="p-4 bg-white shadow rounded">
                        <h3 className="text-xl font-semibold">Affordable Access</h3>
                        <p>
                            Free online consultations and competitive rates for advanced services.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="mt-12">
                <h2 className="text-2xl font-semibold">Services Offered</h2>
                <div className="mt-6">
                    <div className="bg-green-100 p-6 rounded shadow">
                        <h3 className="text-xl font-semibold">Free Online Consultations</h3>
                        <p className="mt-2">
                            Quick solutions via email, phone, or video calls on topics like:
                        </p>
                        <ul className="list-disc list-inside mt-2">
                            <li>Safe and effective use of biopesticides.</li>
                            <li>Sustainable farming practices.</li>
                            <li>Waste management and composting strategies.</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 mt-6 rounded shadow">
                        <h3 className="text-xl font-semibold">Paid In-Depth Consultations</h3>
                        <p className="mt-2">
                            On-site or advanced assistance for more complex challenges:
                        </p>
                        <ul className="list-disc list-inside mt-2">
                            <li>Farm Assessments</li>
                            <li>Training Workshops</li>
                            <li>Product Development Support</li>
                        </ul>
                        <p className="mt-2 text-gray-700">
                            Fees are based on the scope and complexity. Contact us for a detailed quote.
                        </p>
                    </div>
                </div>
            </section>

            {/* Call-to-Action */}
            <section className="mt-12 text-center">
                <h2 className="text-2xl font-semibold">Ready to Transform Your Practices?</h2>
                <p className="mt-2">
                    Book your consultation today and join the sustainable agriculture movement.
                </p>
                <button className="mt-4 px-6 py-3 bg-green-600 text-white rounded shadow hover:bg-green-700">
                    Book Now
                </button>
            </section>
        </div>
    );
};

export default Consultation;
