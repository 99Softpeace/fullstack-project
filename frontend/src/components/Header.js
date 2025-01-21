import React, { useState } from "react";
import { Menu, X, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link for routing
import logo from '../assets/images/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Company Logo" className="h-10 w-auto" />
          <span className="text-xl font-bold text-gray-800 ml-2">
            Smart Treasures
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-gray-800 hover:text-blue-600 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className="text-gray-800 hover:text-blue-600 transition-colors duration-200"
          >
            About Us
          </Link>
          <Link
            to="/our-mission"
            className="text-gray-800 hover:text-blue-600 transition-colors duration-200"
          >
            Our Mission
          </Link>
          <Link
            to="/achievements"
            className="text-gray-800 hover:text-blue-600 transition-colors duration-200"
          >
            Achievements
          </Link>
          <Link
            to="/join-us"
            className="text-gray-800 hover:text-blue-600 transition-colors duration-200"
          >
            Join Us
          </Link>
        </nav>

        {/* Social Media Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-500 hover:text-gray-800"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col space-y-4 px-4 py-6">
            <Link
              to="/"
              className="text-gray-800 hover:text-blue-600 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className="text-gray-800 hover:text-blue-600 transition-colors duration-200"
            >
              About Us
            </Link>
            <Link
              to="/our-mission"
              className="text-gray-800 hover:text-blue-600 transition-colors duration-200"
            >
              Our Mission
            </Link>
            <Link
              to="/achievements"
              className="text-gray-800 hover:text-blue-600 transition-colors duration-200"
            >
              Achievements
            </Link>
            <Link
              to="/join-us"
              className="text-gray-800 hover:text-blue-600 transition-colors duration-200"
            >
              Join Us
            </Link>

            {/* Social Media Links in Mobile Menu */}
            <div className="flex space-x-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
