import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="bg-green-600 text-white">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <Link to="/" className="text-xl font-bold">
                    Becof Organic Chemicals
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>

                {/* Links */}
                <ul
                    className={`md:flex md:space-x-4 items-center ${isMenuOpen ? "block" : "hidden"
                        } md:block`}
                >
                    <li>
                        <Link to="/" className="block py-2 px-4 hover:bg-green-700">
                            Home
                        </Link>
                    </li>
                    <li className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="flex items-center space-x-1 py-2 px-4 hover:bg-green-700"
                        >
                            <span>Features</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        {isDropdownOpen && (
                            <ul className="absolute bg-white text-black mt-2 w-48 rounded shadow-lg">
                                <li className="p-2 hover:bg-gray-200">
                                    <Link to="/consultation">Consultation</Link>
                                </li>
                                <li className="p-2 hover:bg-gray-200">
                                    <Link to="/careers">Careers</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <Link to="/about" className="block py-2 px-4 hover:bg-green-700">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="block py-2 px-4 hover:bg-green-700">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
