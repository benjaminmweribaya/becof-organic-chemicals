import React from 'react';
import { Mail, Phone, MapPin, Globe, Facebook, Twitter, Youtube, Instagram, Linkedin, PlayCircle } from 'lucide-react';
import Logo from '../assets/Logo.jpg';

function Footer() {
  return (
    <footer className="bg-green-600 text-white px-6 py-6">
      <div className="container mx-auto max-w-6xl text-center space-y-8">
        {/* Logo */}
        <div className="flex justify-center">
          <img src={Logo} alt="Becof Logo" className="h-14 w-auto" />
        </div>

        {/* Contact Info */}
        <div className="space-y-2 text-sm sm:text-base">
          <div className="flex justify-center items-center space-x-2">
            <Mail size={18} />
            <a href="mailto:becoforganicchemicals@gmail.com" className="hover:underline">becoforganicchemicals@gmail.com</a>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <Phone size={18} />
            <a href="tel:+254735283397" className="hover:underline">+254 735 283397</a>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <MapPin size={18} />
            <span>Kilifi, Kenya</span>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <Globe size={18} />
            <a href="https://becoforganicchemicals.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              becoforganicchemicals.com
            </a>
          </div>
        </div>

        <hr className="border-t border-white/30 w-2/3 mx-auto" />

        {/* Social Media */}
        <div>
          <p className="mb-3 text-lg font-semibold">Follow Us</p>
          <div className="flex justify-center gap-6">
            <a href="https://x.com/BecofOrganicChe" target="_blank" rel="noopener noreferrer"><Twitter /></a>
            <a href="https://www.tiktok.com/@becoforganicchemicals" target="_blank" rel="noopener noreferrer"><PlayCircle /></a>
            <a href="https://www.facebook.com/becoforganicchemicals" target="_blank" rel="noopener noreferrer"><Facebook /></a>
            <a href="https://www.youtube.com/@becoforganicchemicals" target="_blank" rel="noopener noreferrer"><Youtube /></a>
            <a href="https://www.instagram.com/becoforganicchemicals" target="_blank" rel="noopener noreferrer"><Instagram /></a>
            <a href="https://www.linkedin.com/company/becof-organic-chemicals" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
          </div>
        </div>

        <hr className="border-t border-white/30 w-2/3 mx-auto" />

        {/* Copyright */}
        <div>
          <p className="text-sm">&copy; {new Date().getFullYear()} Becof Organic Chemicals Limited. All rights reserved.</p>
        </div>

        {/* CTA */}
        <div className="pt-6 text-sm">
          <p>
            Need a similar website?{" "}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc5wB4BdJ-QwCgiV0e_rWxpubjcZTiLgDkt3AFh3B_VPCg7GA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold hover:text-green-200"
            >
              Contact Tevexa Technologies here
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
