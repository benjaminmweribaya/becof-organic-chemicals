import React from 'react';
import Layout from '../components/Layout';

const Home = () => (
    <Layout>
        <section>
            <h1>Welcome to Becof Organic Chemicals</h1>
            <h2>Mission</h2>
            <p>To innovate and manufacture a diverse range of eco-friendly chemical products that reduce environmental pollution, protect human health, and promote sustainable agricultural practices.</p>
            <h2>Vision</h2>
            <p>To lead the global transformation towards safer and more sustainable agriculture by pioneering innovative, eco-friendly chemical solutions that protect human health, enhance environmental well-being, and empower communities.</p>
            <h2>Aim</h2>
            <p>To create a positive impact on the environment, health, and well-being of individuals, communities, and the planet.</p>
            <h2>Core Values</h2>
            <ul>
                <li>Sustainability</li>
                <li>Diligence</li>
                <li>Customer-Centricity</li>
                <li>Teamwork</li>
                <li>Integrity</li>
                {/* Add all core values here */}
            </ul>
        </section>
    </Layout>
);

export default Home;