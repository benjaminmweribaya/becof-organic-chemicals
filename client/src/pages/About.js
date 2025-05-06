import React, { useState } from 'react';
import CEOImage from '../assets/CEO.png';
import COOImage from '../assets/COO.jpg';
import { CheckCircle, X, ChevronLeft, ChevronRight } from 'lucide-react';
import DTPImage from '../assets/DTP.jpg';
import FFA2023GroupImage from '../assets/FFA2023-Group.jpg';
import FFACertificateImage from '../assets/FFACertificate.jpg';
import KENIATeamKilifi1Image from '../assets/KENIA-TEAM-KILIFI1.jpg';
import KENIATeamKilifi3Image from '../assets/KENIA-TEAM-KILIFI3.jpg';
import KENIATeamKilifi4Image from '../assets/KENIA-TEAM-KILIFI4.jpg';
import KIW2023Image from '../assets/KIW2023.jpg';
import MISImage from '../assets/MIS.jpg';
import NITF1Image from '../assets/NITF1.png';
import NITF2Image from '../assets/NITF2.jpg';
import NITF3Image from '../assets/NITF3.jpg';
import NITF4Image from '../assets/NITF4.jpg';
import NITF6Image from '../assets/NITF6.jpg';
import PIAGroupImage from '../assets/PIA-Group.jpg';
import PIAReceivingPlaqueImage from '../assets/PIA-Receiving-Plaque.jpg';
import ShakinghandsImage1 from '../assets/Shaking-hands-with-pres1.jpg';
import ShakinghandsImage2 from '../assets/Shaking-hands-with-pres2.jpg';
import ShakinghandsImage3 from '../assets/Shaking-hands-with-pres3.jpg';
import ShakinghandsImage4 from '../assets/Shaking-hands-with-pres4.jpg';
import StatehouseImage2 from '../assets/statehouse2.jpg';


const coreValues = [
    {
        title: 'Sustainability',
        description:
            'We are committed to employing sustainable practices in the development of our products thus safeguarding the well-being of future generations and the planet.',
    },
    {
        title: 'Diligence',
        description:
            'We are committed to thoroughness, persistence, and attention to detail in all aspects of our company\'s operations.',
    },
    {
        title: 'Customer-Centricity',
        description:
            'We are committed to understanding and meeting the unique needs of our customers.',
    },
    {
        title: 'Teamwork',
        description:
            'We are committed to cultivating a collaborative, innovative, and high-performing organizational culture.',
    },
    {
        title: 'Integrity',
        description:
            'We are committed to ethical and transparent practices in all aspects of our business.',
    },
];

const principles = [
    {
        title: 'Betterment',
        description: 'Our commitment to continuous improvement, innovation, and advancement in the chemical industry.',
    },
    {
        title: 'Environment',
        description: 'Our commitment to environmental sustainability, eco-friendly practices, and reducing pollution through alternative chemical solutions.',
    },
    {
        title: 'Customer Satisfaction',
        description: 'Our commitment to meeting our customer needs and ensuring high-quality products and services.',
    },
    {
        title: 'Optimization',
        description: 'Our commitment to optimizing processes, resources, and outcomes to enhance efficiency and effectiveness in our operations.',
    },
    {
        title: 'Future',
        description: 'Our commitment to shaping a sustainable future for the chemical industry and society.',
    },
];

const galleryImages = [
    DTPImage, FFA2023GroupImage, FFACertificateImage,
    KENIATeamKilifi1Image, KENIATeamKilifi3Image, KENIATeamKilifi4Image,
    KIW2023Image, MISImage, NITF1Image, NITF2Image, NITF3Image, NITF4Image, NITF6Image,
    PIAGroupImage, PIAReceivingPlaqueImage,
    ShakinghandsImage1, ShakinghandsImage2, ShakinghandsImage3, ShakinghandsImage4, StatehouseImage2
];

function About() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (index) => {
        setSelectedImage(galleryImages[index]);
        setCurrentIndex(index);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const goToNext = () => {
        const nextIndex = (currentIndex + 1) % galleryImages.length;
        setCurrentIndex(nextIndex);
        setSelectedImage(galleryImages[nextIndex]);
    };

    const goToPrev = () => {
        const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        setCurrentIndex(prevIndex);
        setSelectedImage(galleryImages[prevIndex]);
    };

    return (
        <div className="container mx-auto max-w-7xl p-6 space-y-10 pt-20">
            {/* Card 1: Our Story */}
            <div className="bg-white shadow-xl rounded-2xl p-8">
                <h1 className="text-3xl font-bold text-green-700 mb-4">Our Story</h1>
                <p className="text-gray-700">
                    Becof Organic Chemicals Limited is more than a company; it’s a vision brought to life—a beacon for sustainable innovation in agriculture and beyond. The journey began in October 2023, when Eng. Benjamin Mweri Baya, fueled by a passion for eco-friendly solutions, founded Becof Chemicals as a registered business name. The seeds of this vision began to sprout on December 27, 2023, as Becof Chemicals embarked on a mission to redefine chemical manufacturing for a better world.
                    On November 20, 2024, a monumental chapter unfolded as Becof Organic Chemicals Limited was officially incorporated as a Private Limited Company. With the addition of one brilliant mind, Eng. Andrew Mogambi Onwenga, the company’s foundation became a confluence of innovation, expertise, and commitment. Together, the two Director Shareholders set out to revolutionize agriculture with eco-friendly chemical solutions that safeguard human health, nurture the environment, and empower communities.
                    Today, Becof Organic Chemicals Limited stands as a testament to what’s possible when passion meets purpose. Rooted in sustainability, driven by diligence, and united by a shared vision, we are shaping a world where chemical manufacturing is not just safe but transformative—a force for good for generations to come.
                </p>
            </div>

            {/* Core Values */}
            <div className="bg-white shadow-xl rounded-2xl p-8">
                <h2 className="text-3xl font-semibold text-green-600 mb-8">Core Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {coreValues.map((value, index) => (
                        <div
                            key={index}
                            className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300"
                        >
                            <div className="flex items-start gap-3 mb-3">
                                <CheckCircle className="text-green-600 w-6 h-6 mt-1" />
                                <h3 className="text-xl font-bold text-green-800">{value.title}</h3>
                            </div>
                            <p className="text-gray-700 text-base">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Redesigned BECOF Principles */}
            <div className="bg-gradient-to-br from-green-50 to-white shadow-xl rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">BECOF PRINCIPLES</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {principles.map((principle, index) => (
                        <div key={index} className="bg-white border-l-4 border-green-500 shadow-md rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                            <h3 className="text-xl font-semibold text-green-700 mb-2">{principle.title}</h3>
                            <p className="text-gray-700 text-sm leading-relaxed">{principle.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Management Team */}
            <div className="bg-white shadow-xl rounded-2xl p-8">
                <h2 className="text-3xl font-semibold text-green-600 mb-6">Management Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* CEO */}
                    <div className="bg-gray-50 rounded-xl p-6 shadow-md flex flex-col items-center text-center">
                        <img
                            src={CEOImage}
                            alt="CEO - Eng. Benjamin Mweri Baya"
                            className="w-40 h-40 rounded-full object-contain shadow-lg mb-4"
                        />
                        <h3 className="text-xl font-bold text-green-700">Eng. Benjamin Mweri Baya</h3>
                        <p className="text-gray-600">Chief Executive Officer</p>
                    </div>

                    {/* COO */}
                    <div className="bg-gray-50 rounded-xl p-6 shadow-md flex flex-col items-center text-center">
                        <img
                            src={COOImage}
                            alt="COO - Eng. Andrew Mogambi Onwenga"
                            className="w-40 h-40 rounded-full object-contain shadow-lg mb-4"
                        />
                        <h3 className="text-xl font-bold text-green-700">Eng. Andrew Mogambi Omwenga</h3>
                        <p className="text-gray-600">Chief Operations Officer</p>
                    </div>
                </div>
            </div>

            {/* Gallery Section */}
            <div className="bg-white shadow-xl rounded-2xl p-8">
                <h2 className="text-3xl font-semibold text-green-600 mb-6 text-center">Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {galleryImages.map((img, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition duration-300"
                            onClick={() => openModal(index)}
                        >
                            <img
                                src={img}
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-60 object-contain bg-white"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                    <div className="relative max-w-7xl w-full p-4">
                        <button
                            className="absolute top-4 right-4 text-white hover:text-gray-300"
                            onClick={closeModal}
                        >
                            <X size={32} />
                        </button>
                        <img
                            src={selectedImage}
                            alt="Selected"
                            className="w-full max-h-[90vh] object-contain mx-auto rounded-lg"
                        />
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-white" onClick={goToPrev}>
                            <ChevronLeft size={40} />
                        </div>
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-white" onClick={goToNext}>
                            <ChevronRight size={40} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default About;
