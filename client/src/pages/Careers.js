import React from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  TrendingUp,
  Globe,
  HeartHandshake,
  Lightbulb,
  Users,
  Trophy,
  Smile,
} from "lucide-react";

const Careers = () => {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 pt-20">
      {/* Header Section with animation */}
      <motion.header
        className="text-center bg-green-600 text-white py-10 rounded-xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold">Join Our Team</h1>
        <p className="mt-3 text-lg">
          Be part of a movement driving global sustainability and innovation.
        </p>
      </motion.header>

      {/* Why Join Us Section */}
      <motion.section
        className="mt-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-center mb-10">Why Join Becof?</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Cards with icons */}
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <Rocket className="mx-auto text-green-600 mb-3" size={32} />
            <h3 className="text-xl font-semibold mb-1">Our Mission</h3>
            <p>Drive sustainability through groundbreaking eco-friendly innovations.</p>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <TrendingUp className="mx-auto text-green-600 mb-3" size={32} />
            <h3 className="text-xl font-semibold mb-1">Career Growth</h3>
            <p>Tailored training programs and leadership opportunities await you.</p>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <Globe className="mx-auto text-green-600 mb-3" size={32} />
            <h3 className="text-xl font-semibold mb-1">Impactful Work</h3>
            <p>Contribute directly to global communities, agriculture, and the environment.</p>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <HeartHandshake className="mx-auto text-green-600 mb-3" size={32} />
            <h3 className="text-xl font-semibold mb-1">Benefits & Wellness</h3>
            <p>Enjoy flexible work, health perks, and recognition for excellence.</p>
          </div>
        </div>
      </motion.section>

      {/* Career Growth Section */}
      <motion.section
        className="mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-center mb-8">
          Career Growth & Development
        </h2>
        <div className="bg-green-100 p-6 rounded-xl shadow max-w-7xl mx-auto">
          <ul className="list-disc list-inside space-y-3 text-lg">
            <li>Workshops, certifications, and continuous learning initiatives.</li>
            <li>Leadership pipeline to nurture high-potential employees.</li>
            <li>Collaboration with global industry experts and mentors.</li>
            <li>Recognition programs celebrating excellence and innovation.</li>
          </ul>
        </div>
      </motion.section>

      {/* NEW: Our Values Section */}
      <motion.section
        className="mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-center mb-10">What We Value</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <Lightbulb className="mx-auto text-green-600 mb-3" size={32} />
            <h3 className="text-lg font-semibold mb-1">Innovation</h3>
            <p>We foster creativity to build sustainable solutions for tomorrow.</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <Users className="mx-auto text-green-600 mb-3" size={32} />
            <h3 className="text-lg font-semibold mb-1">Teamwork</h3>
            <p>Collaboration is at the heart of everything we achieve together.</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <Trophy className="mx-auto text-green-600 mb-3" size={32} />
            <h3 className="text-lg font-semibold mb-1">Excellence</h3>
            <p>We strive for exceptional results that positively impact the world.</p>
          </div>
        </div>
      </motion.section>

      {/* NEW: Culture Section */}
      <motion.section
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Smile className="mx-auto text-green-600 mb-4" size={40} />
        <h2 className="text-3xl font-semibold">Life at Becof</h2>
        <p className="mt-4 max-w-7xl mx-auto text-lg">
          At Becof, we celebrate diversity, nurture innovation, and support one another like family. 
          Our people are our greatest asset, and we believe in growing together while making a meaningful difference.
        </p>
      </motion.section>

      {/* Call-to-Action */}
      <motion.section
        className="mt-20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold">Ready to Shape the Future?</h2>
        <p className="mt-3 text-lg">
          Explore opportunities to work on impactful projects and grow professionally with us.
        </p>
        <button className="mt-6 px-8 py-3 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition duration-300">
          Join Talent Pool
        </button>
      </motion.section>
    </div>
  );
};

export default Careers;

