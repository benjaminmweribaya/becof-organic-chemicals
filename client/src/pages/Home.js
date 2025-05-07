import React, { useEffect, useRef, useState } from 'react';
import Statehouse from '../assets/Statehouse.jpg';
import PIAGoup from '../assets/PIA-Group.jpg';
import NationNews from '../assets/NationNews.jpg';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Plaque from '../assets/PIA-Plaque.png';
import DummyCheque from '../assets/KIW2023-Dummy-cheque.jpg';
import ReceivingPlaque from '../assets/PIA-Receiving-Plaque2.jpg';

function Counter({ target, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !hasAnimated) {
          let start = 0;
          const end = parseInt(target);
          const duration = 1500;
          const incrementTime = 20;
          const steps = Math.floor(duration / incrementTime);
          const stepSize = Math.ceil(end / steps);

          const counter = setInterval(() => {
            start += stepSize;
            if (start >= end) {
              start = end;
              clearInterval(counter);
            }
            setCount(start);
          }, incrementTime);
          setHasAnimated(true);
        }
      },
      { threshold: 0.6 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div ref={ref} className="text-center">
      <h3 className="text-5xl font-extrabold text-green-700">{count.toLocaleString()}</h3>
      {label && <p className="text-gray-700 text-lg mt-2">{label}</p>}
    </div>
  );
}

const awards = [
  {
    src: Plaque,
    caption: 'Plaque Award - Presidential Innovation Award 2024',
  },
  {
    src: DummyCheque,
    caption: 'Top Innovator Kilifi County Winner – Kenya Innovation Week 2023',
  },
  {
    src: ReceivingPlaque,
    caption: 'Receiving the Presidential Innovation Award Plaque',
  },
];

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const images = [Statehouse, PIAGoup];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Image slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto max-w-7xl px-6 py-8 pt-20">
      {/* Hero Section with Slideshow Background */}
      <section className="relative h-[80vh] rounded-lg overflow-hidden shadow-md">
        {/* Slideshow background images */}
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        ))}

        {/* Overlay content */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-8 text-center text-white">
          <div className="rounded-lg">
            <h1 className="text-4xl md:text-5xl font-bold">
              Welcome to Becof Organic Chemicals Limited
            </h1>
            <p className="text-lg md:text-xl mt-4">
              Saving Lives Through Sustainable Agricultural Solutions
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mt-12">
        <h2 className="text-3xl font-semibold text-green-600">Who We Are</h2>
        <div className="flex flex-wrap justify-center mt-6">
          <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 m-4">
            <h3 className="text-xl font-bold text-green-700">Our Mission</h3>
            <p className="text-gray-700 mt-4">
              To innovate and manufacture a diverse range of eco-friendly chemical products that reduce environmental pollution, protect human health, and promote sustainable agricultural practices.
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
        <h2 className="text-3xl font-semibold text-green-600 text-center">
          The Problem We Are Solving
        </h2>

        {/* Flex layout for desktop */}
        <div className="mt-10 flex flex-col lg:flex-row gap-8 items-start">

          {/* Left side - Vertical stack of problem points */}
          <div className="flex-1 space-y-6">
            {[
              "Agricultural productivity in Kenya is significantly affected by declining soil fertility and crop damage due to chemical-based pesticides.",
              "Over 70% of smallholder farmers, who produce 80% of the country's food, face soil degradation from excessive synthetic fertilizers and pesticides.",
              "35% of crops are lost annually due to pests, leading to financial losses and food insecurity.",
              "Chemical pesticides pose health risks, linked to respiratory diseases and cancer.",
              "Chemical residues from synthetic pesticides and fertilizers pose a serious threat to food safety, affecting both local consumption and international market acceptance."
            ].map((text, index) => (
              <div
                key={index}
                className="bg-white shadow-md p-6 rounded-lg flex items-start space-x-3"
              >
                <span className="text-green-600 text-2xl">✅</span>
                <p className="text-gray-800 text-sm">{text}</p>
              </div>
            ))}
          </div>

          {/* Right side - Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={NationNews}
              alt="Nation News"
              className="rounded-lg shadow-lg w-full h-auto max-w-md object-contain"
            />
          </div>
        </div>
      </section>

      {/* Our Impact Section with Counter */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-green-600 text-center mb-8">Our Impact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <Counter target="200" label="Farmers Reached in Kenya" />
          <Counter target="30000" label="3-Year Farmer Target in East Africa" />
          <Counter target="50" label="Pest Reduction (%)" />
          <Counter target="30" label="Soil Fertility Improvement (%)" />
        </div>

        {/* ✅ Our Geographic Coverage */}
        <div className="mt-10 flex justify-center">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-bold text-green-700 text-center">Geographic Coverage</h3>
            <p className="text-gray-700 mt-2 text-center">
              Active in Kilifi and Kajiado counties, with plans to expand across East Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-12">
            Awards & Recognition
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {awards.map((award, index) => (
              <figure
                key={index}
                className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-xl transition"
                onClick={() => {
                  setIsOpen(true);
                  setPhotoIndex(index);
                }}
              >
                <img
                  src={award.src}
                  alt={award.caption}
                  className="rounded-lg w-full h-64"
                />
                <figcaption className="mt-4 text-sm text-green-600 font-medium">
                  {award.caption}
                </figcaption>
              </figure>
            ))}
          </div>
          {isOpen && (
            <Lightbox
              open={isOpen}
              close={() => setIsOpen(false)}
              index={photoIndex}
              slides={awards.map((award) => ({ src: award.src, title: award.caption }))}
              mainSrc={awards[photoIndex].src}
              nextSrc={awards[(photoIndex + 1) % awards.length].src}
              prevSrc={awards[(photoIndex + awards.length - 1) % awards.length].src}
              onCloseRequest={() => setIsOpen(false)}
              onMovePrevRequest={() =>
                setPhotoIndex((photoIndex + awards.length - 1) % awards.length)
              }
              onMoveNextRequest={() =>
                setPhotoIndex((photoIndex + 1) % awards.length)
              }
              imageCaption={awards[photoIndex].caption}
            />
          )}
        </div>
      </section>
    </div>
  );
}

export default Home;

