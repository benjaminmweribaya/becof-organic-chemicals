import React from 'react';

function About() {
    return (
        <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Our Story */}
            <div className="bg-white shadow-lg rounded-lg p-6 col-span-1 md:col-span-2 lg:col-span-3">
                <h1 className="text-3xl font-bold text-green-700 mb-4">Our Story</h1>
                <p className="text-gray-700">
                    Becof Organic Chemicals Limited is more than a company; it’s a vision brought to life—a beacon for sustainable innovation in agriculture and beyond. The journey began in October 2023, when Eng. Benjamin Mweri Baya, fueled by a passion for eco-friendly solutions, founded Becof Chemicals as a registered business name. The seeds of this vision began to sprout on December 27, 2023, as Becof Chemicals embarked on a mission to redefine chemical manufacturing for a better world.
                    On November 20, 2024, a monumental chapter unfolded as Becof Organic Chemicals Limited was officially incorporated as a Private Limited Company. With the addition of two brilliant minds, Eng. Andrew Mogambi Onwenga and Eng. Boniface Kirikiru, the company’s foundation became a confluence of innovation, expertise, and commitment. Together, the three Director Shareholders set out to revolutionize agriculture with eco-friendly chemical solutions that safeguard human health, nurture the environment, and empower communities.
                    Today, Becof Organic Chemicals Limited stands as a testament to what’s possible when passion meets purpose. Rooted in sustainability, driven by diligence, and united by a shared vision, we are shaping a world where chemical manufacturing is not just safe but transformative—a force for good for generations to come.
                </p>
            </div>

            {/* Card 2: Core Values */}
            <div className="bg-white shadow-lg rounded-lg p-6 col-span-1 md:col-span-2 lg:col-span-3">
                <h2 className="text-2xl font-semibold text-green-600 mb-4">Core Values</h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Sustainability: We are committed to employing sustainable practices in the development of our products thus safeguarding the well-being of future generations and the planet.</li>
                    <li>Diligence: We are committed to thoroughness, persistence, and attention to detail in all aspects of our company's operations.</li>
                    <li>Customer-Centricity: We are committed to understanding and meeting the unique needs of our customers.</li>
                    <li>Teamwork: We are committed to cultivating a collaborative, innovative, and high-performing organizational culture.</li>
                    <li>Integrity: We are committed to ethical and transparent practices in all aspects of our business.</li>
                </ul>
            </div>

            {/* Card 2: BECOF Principles */}
            <div className="bg-white shadow-lg rounded-lg p-6 col-span-1 md:col-span-2 lg:col-span-3">
                <h2 className="text-2xl font-semibold text-green-600 mb-4">BECOF Principles</h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Betterment: This is our commitment to continuous improvement, innovation, and advancement in the chemical industry.</li>
                    <li>Environment: This is our commitment to environmental sustainability, eco-friendly practices, and reducing pollution through alternative chemical solutions.</li>
                    <li>Customer Satisfaction: This is our commitment to meeting our customer needs and ensuring high-quality products and services.</li>
                    <li>Optimization: This is our commitment to optimizing processes, resources, and outcomes to enhance efficiency and effectiveness in our operations.</li>
                    <li>Future: This is our commitment to shaping a sustainable future for the chemical industry and society.</li>
                </ul>
            </div>

            {/* Card 3: Our Team */}
            <div className="bg-white shadow-lg rounded-lg p-6 col-span-1 md:col-span-2 lg:col-span-3">
                <h2 className="text-2xl font-semibold text-green-600 mb-4">Management Team</h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Eng. Benjamin Mweri Baya (Chief Executive Officer)</li>
                    <li>Eng. Andrew Mogambi Onwenga (Chief Operations Officer)</li>
                    <li>Eng. Boniface Kirikiru (Chief Technical Officer)</li>
                </ul>
            </div>
        </div>
    );
}

export default About;
