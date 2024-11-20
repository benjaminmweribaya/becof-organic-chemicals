import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="bg-green-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-bold">Becof Organic Chemicals</Link>
                <ul className="flex space-x-4 items-center">
                    <li><Link to="/">Home</Link></li>
                    <li className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="flex items-center space-x-1"
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
                                    <Link to="/marketplace">Marketplace</Link>
                                </li>
                                <li className="p-2 hover:bg-gray-200">
                                    <Link to="/forum">Forum</Link>
                                </li>
                                <li className="p-2 hover:bg-gray-200">
                                    <Link to="/crop-diagnostics">Crop Diagnostics</Link>
                                </li>
                                <li className="p-2 hover:bg-gray-200">
                                    <Link to="/educational-resources">Educational Resources</Link>
                                </li>
                                <li className="p-2 hover:bg-gray-200">
                                    <Link to="/payment">Payment</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li><Link to="/about">About Us</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
