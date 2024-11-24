import React from 'react';

function Home() {
  return (
    <div className="container mx-auto p-6">
      {/* Header Section */}
      <header className="text-center">
        <h1 className="text-4xl font-bold text-green-700">
          Welcome to Becof Organic Chemicals Limited
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Saving Lives Through Sustainable Solutions
        </p>
      </header>

      {/* Introduction */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-green-600">Introduction</h2>
        <p className="text-gray-700 mt-4">
          At Becof Organic Chemicals Limited, we are transforming agriculture
          and the chemical industry through innovative, eco-friendly solutions.
          Our products are designed to protect human health, nurture the
          environment, and empower communities to thrive sustainably.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-green-600">Why Choose Us?</h2>
        <ul className="list-disc list-inside mt-4 text-gray-700">
          <li>Eco-Friendly Innovation: We develop chemical products that prioritize safety, sustainability, and performance.</li>
          <li>Dedicated to Excellence: Our mission is rooted in improving lives while protecting the planet.</li>
          <li>Customer Focused: We listen, innovate, and deliver solutions tailored to meet the needs of modern farmers and communities.
          </li>
        </ul>
      </section>

      {/* Our Impact */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-green-600">Our Impact</h2>
        <ul className="list-disc list-inside mt-4 text-gray-700">
          <li>Reducing environmental pollution with bio-based alternatives.</li>
          <li>Enhancing agricultural productivity through sustainable practices.</li>
          <li>Empowering farmers and communities to achieve economic resilience.</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
