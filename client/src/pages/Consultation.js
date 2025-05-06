import React from "react";
import { Brain, Leaf, DollarSign, Wrench, Users, PhoneCall, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Consultation = () => {
    return (
        <div className="container mx-auto px-4 py-10 max-w-7xl pt-20">
            {/* Header Section with animation */}
            <motion.header
                className="text-center bg-gradient-to-r from-green-700 to-lime-600 text-white py-10 px-6 rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <h1 className="text-4xl font-extrabold tracking-tight">
                    Expert Guidance for a Sustainable Future
                </h1>
                <p className="mt-4 text-xl max-w-7xl mx-auto">
                    Personalized advice for farmers, cooperatives, and chemical manufacturers.
                </p>
            </motion.header>

            {/* Introduction Cards Section */}
            <section className="mt-16">
                <h2 className="text-3xl font-bold text-center text-gray-800">
                    Why Consult with Becof Experts?
                </h2>
                <div className="grid gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Card 1 */}
                    <motion.div
                        className="bg-white rounded-xl shadow-lg p-6 text-center"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Brain className="h-10 w-10 text-green-600 mx-auto mb-3" />
                        <h3 className="text-xl font-semibold">Unmatched Expertise</h3>
                        <p className="text-gray-600 mt-2">
                            Our team comprises experienced engineers with extensive sustainable knowledge.
                        </p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        className="bg-white rounded-xl shadow-lg p-6 text-center"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Wrench className="h-10 w-10 text-green-600 mx-auto mb-3" />
                        <h3 className="text-xl font-semibold">Tailored Solutions</h3>
                        <p className="text-gray-600 mt-2">
                            Get advice tailored to your specific needs for better outcomes.
                        </p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        className="bg-white rounded-xl shadow-lg p-6 text-center"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Leaf className="h-10 w-10 text-green-600 mx-auto mb-3" />
                        <h3 className="text-xl font-semibold">Eco-Friendly Focus</h3>
                        <p className="text-gray-600 mt-2">
                            All recommendations align with sustainability goals and environmental health.
                        </p>
                    </motion.div>

                    {/* Card 4 */}
                    <motion.div
                        className="bg-white rounded-xl shadow-lg p-6 text-center"
                        whileHover={{ scale: 1.05 }}
                    >
                        <DollarSign className="h-10 w-10 text-green-600 mx-auto mb-3" />
                        <h3 className="text-xl font-semibold">Affordable Access</h3>
                        <p className="text-gray-600 mt-2">
                            Free online consultations and affordable advanced packages.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section className="mt-20">
                <h2 className="text-3xl font-bold text-center text-gray-800">
                    Services Offered
                </h2>

                {/* Free Consultations */}
                <motion.div
                    className="mt-10 bg-green-50 p-8 rounded-xl shadow-md"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-2xl font-semibold flex items-center gap-2 text-green-700">
                        <PhoneCall className="w-6 h-6" />
                        Free Online Consultations
                    </h3>
                    <p className="mt-2 text-gray-700">
                        Quick solutions via email, phone, or video calls on topics like:
                    </p>
                    <ul className="mt-3 space-y-2 text-gray-600">
                        {[
                            "Safe and effective use of biopesticides.",
                            "Sustainable farming practices.",
                            "Waste management and composting strategies.",
                            "Eco-friendly packaging solutions."
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                </motion.div>

                {/* Paid Consultations */}
                <motion.div
                    className="mt-8 bg-white p-8 rounded-xl shadow-md"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-2xl font-semibold flex items-center gap-2 text-green-800">
                        <Users className="w-6 h-6" />
                        Paid In-Depth Consultations
                    </h3>
                    <p className="mt-2 text-gray-700">
                        In-depth support and personalized guidance through:
                    </p>
                    <ul className="mt-3 space-y-2 text-gray-600">
                        {[
                            "Farm Assessments",
                            "Training Workshops",
                            "Product Development Support",
                            "Market Analysis",
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="mt-3 text-sm text-gray-600">
                        Fees are based on the scope and complexity. Contact us for a detailed quote.
                    </p>
                </motion.div>
            </section>

            {/* Call-to-Action Section */}
            <motion.section
                className="mt-20 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl font-bold text-gray-800">Ready to Transform Your Practices?</h2>
                <p className="mt-3 text-lg text-gray-700">
                    Book your consultation today and join the sustainable agriculture movement.
                </p>
                <button className="mt-6 px-8 py-3 bg-green-600 text-white font-medium rounded-full shadow hover:bg-green-700 transition">
                    Book Now
                </button>
            </motion.section>
        </div>
    );
};

export default Consultation;

