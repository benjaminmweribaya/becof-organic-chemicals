import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
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
                    <li className="block py-2 px-4 hover:bg-green-700">
                        <Link to="/consultation">Consultation</Link>
                    </li>
                    <li className="block py-2 px-4 hover:bg-green-700">
                        <Link to="/careers">Careers</Link>
                    </li>
                    <li className="block py-2 px-4 hover:bg-green-700">
                        <Link to="/educational-resources">Educational Resources</Link>
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
