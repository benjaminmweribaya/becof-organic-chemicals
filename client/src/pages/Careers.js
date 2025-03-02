import React from "react";

const Careers = () => {
    return (
        <div className="container mx-auto p-6">
            <header className="text-center bg-green-600 text-white py-6 rounded">
                <h1 className="text-3xl font-bold">Join Our Team</h1>
                <p className="mt-2 text-lg">
                    Be part of a movement driving global sustainability.
                </p>
            </header>

            {/* Why Join Us Section */}
            <section className="mt-8">
                <h2 className="text-2xl font-semibold text-center">Why Join Becof?</h2>
                <div className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-4">
                    <div className="p-4 bg-white shadow rounded">
                        <h3 className="text-xl font-semibold">Our Mission</h3>
                        <p>
                            Drive sustainability through groundbreaking eco-friendly innovations.
                        </p>
                    </div>
                    <div className="p-4 bg-white shadow rounded">
                        <h3 className="text-xl font-semibold">Career Growth</h3>
                        <p>
                            Tailored training programs and leadership opportunities await you.
                        </p>
                    </div>
                    <div className="p-4 bg-white shadow rounded">
                        <h3 className="text-xl font-semibold">Impactful Work</h3>
                        <p>
                            Contribute directly to global communities, agriculture, and the environment.
                        </p>
                    </div>
                    <div className="p-4 bg-white shadow rounded">
                        <h3 className="text-xl font-semibold">Employee-Centric Benefits</h3>
                        <p>
                            Enjoy flexible work, health perks, and recognition for excellence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Career Growth */}
            <section className="mt-12">
                <h2 className="text-2xl font-semibold text-center">Career Growth and Development</h2>
                <div className="mt-6 bg-green-100 p-6 rounded shadow">
                    <ul className="list-disc list-inside">
                        <li>Workshops, certifications, and continuous learning initiatives.</li>
                        <li>Leadership pipeline to nurture high-potential employees.</li>
                        <li>Collaboration with global industry experts.</li>
                        <li>Recognition programs celebrating excellence.</li>
                    </ul>
                </div>
            </section>

            {/* Call-to-Action */}
            <section className="mt-12 text-center">
                <h2 className="text-2xl font-semibold">Join Us</h2>
                <p className="mt-2">
                    Explore opportunities to work on impactful projects and grow professionally.
                </p>
                <button className="mt-4 px-6 py-3 bg-green-600 text-white rounded shadow hover:bg-green-700">
                    Join Talent Pool
                </button>
            </section>
        </div>
    );
};

export default Careers;
