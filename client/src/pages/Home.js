import React from 'react';

function Home() {
  return (
    <div className="container mx-auto px-6 py-8">
      {/* Hero Section */}
      <section className="text-center bg-green-100 p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-green-700">
          Welcome to Becof Organic Chemicals Limited
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Saving Lives Through Sustainable Solutions
        </p>
      </section>

      {/* Introduction */}
      <section className="mt-12">
        <h2 className="text-3xl font-semibold text-green-600">Who We Are</h2>
        <div className="flex flex-wrap justify-center mt-6">
          <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 m-4">
            <h3 className="text-xl font-bold text-green-700">Our Mission</h3>
            <p className="text-gray-700 mt-4">
              To transform agriculture and the chemical industry by innovating and manufacturing a diverse range of eco-friendly chemical products that reduce environmental pollution, protect human health, and promote sustainable agricultural practices.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 m-4">
            <h3 className="text-xl font-bold text-green-700">Our Vision</h3>
            <p className="text-gray-700 mt-4">
              To lead the global transformation towards safer and more sustainable agriculture by pioneering innovative, eco-friendly chemical solutions that protect human health, enhance environmental well-being, and empower communities.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mt-12">
        <h2 className="text-3xl font-semibold text-green-600">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-700">Eco-Friendly Innovation</h3>
            <p className="text-gray-700 mt-4">
              Our products are designed with sustainability at their core, prioritizing safety for both humans and the environment.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-700">Dedicated to Excellence</h3>
            <p className="text-gray-700 mt-4">
              Our mission is rooted in improving lives while protecting the planet for future generations.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-700">Customer Focused</h3>
            <p className="text-gray-700 mt-4">
              We tailor our solutions to meet the needs of modern farmers and communities, ensuring efficiency and sustainability.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-semibold text-green-600">Our Impact</h2>
        <div className="flex flex-wrap justify-center mt-6">
          <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 m-4">
            <ul className="text-gray-700 mt-4">
              <li>Reducing environmental pollution by introducing bio-based chemical alternatives.</li>
              <li>Enhancing agricultural productivity through safe and sustainable practices.</li>
              <li>Empowering farmers and communities to achieve economic resilience.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
