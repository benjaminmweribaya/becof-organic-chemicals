import React from 'react';

function About() {
    return (
        <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Our Story */}
            <div className="bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-3xl font-bold text-green-700 mb-4">Our Story</h1>
                <p className="text-gray-700">
                    Founded by Eng. Benjamin Mweri Baya in October 2023, Becof Organic Chemicals Limited began its journey as a registered business name, "Becof Chemicals," on 27th December 2023. Incorporated as a Private Limited Company on 20th November 2024, the company aims to transform the chemical industry with eco-friendly solutions.
                </p>
            </div>

            {/* Card 2: Vision */}
            <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-green-600 mb-4">Our Vision</h2>
                <p className="text-gray-700">
                    To lead the global transformation towards safer and more sustainable agriculture by pioneering innovative, eco-friendly chemical solutions that protect human health and the environment.
                </p>
            </div>

            {/* Card 3: Mission */}
            <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-green-600 mb-4">Our Mission</h2>
                <p className="text-gray-700">
                    To innovate and manufacture eco-friendly products that reduce pollution, protect health, and promote sustainability.
                </p>
            </div>

            {/* Card 4: Core Values */}
            <div className="bg-white shadow-lg rounded-lg p-6 col-span-1 md:col-span-2 lg:col-span-3">
                <h2 className="text-2xl font-semibold text-green-600 mb-4">Core Values</h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Sustainability: Ensuring long-term environmental and social well-being.</li>
                    <li>Diligence: Committed to excellence.</li>
                    <li>Customer-Centricity: Meeting customer needs through innovation.</li>
                    <li>Teamwork: Collaborating for success.</li>
                    <li>Integrity: Upholding honesty and ethics.</li>
                </ul>
            </div>
        </div>
    );
}

export default About;
