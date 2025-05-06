import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.jpg';
import {
  Menu,
  X,
  Home,
  Package,
  Briefcase,
  Users,
  Info,
  Phone,
} from 'lucide-react'; // 👈 Import Lucide icons

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false); // 👈 Closes menu on link click

  return (
    <nav className="bg-green-600 text-white shadow-lg fixed w-full z-40">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Becof Logo" className="h-10 w-auto rounded-full" />
          <span className="text-xl font-bold">Becof Organic Chemicals</span>
        </Link>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li>
            <Link to="/" className="flex items-center gap-1 hover:text-gray-100">
              <Home size={16} /> Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="flex items-center gap-1 hover:text-gray-100">
              <Package size={16} /> Products
            </Link>
          </li>
          <li>
            <Link to="/consultation" className="flex items-center gap-1 hover:text-gray-100">
              <Briefcase size={16} /> Consultation
            </Link>
          </li>
          <li>
            <Link to="/careers" className="flex items-center gap-1 hover:text-gray-100">
              <Users size={16} /> Careers
            </Link>
          </li>
          <li>
            <Link to="/about" className="flex items-center gap-1 hover:text-gray-100">
              <Info size={16} /> About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="flex items-center gap-1 hover:text-gray-100">
              <Phone size={16} /> Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-green-700 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-green-500">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={toggleMenu}>
            <X className="text-white w-6 h-6" />
          </button>
        </div>
        <ul className="flex flex-col px-4 py-6 space-y-4 text-white font-medium">
          <li>
            <Link to="/" onClick={closeMenu} className="flex items-center gap-2 hover:text-gray-200">
              <Home size={18} /> Home
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={closeMenu} className="flex items-center gap-2 hover:text-gray-200">
              <Package size={18} /> Products
            </Link>
          </li>
          <li>
            <Link to="/consultation" onClick={closeMenu} className="flex items-center gap-2 hover:text-gray-200">
              <Briefcase size={18} /> Consultation
            </Link>
          </li>
          <li>
            <Link to="/careers" onClick={closeMenu} className="flex items-center gap-2 hover:text-gray-200">
              <Users size={18} /> Careers
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu} className="flex items-center gap-2 hover:text-gray-200">
              <Info size={18} /> About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu} className="flex items-center gap-2 hover:text-gray-200">
              <Phone size={18} /> Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

