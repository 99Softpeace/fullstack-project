import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import { FaTelegramPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';  // Ensure you have react-router-dom installed

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold">ST Investment Group</h3>
            <p className="mt-4 text-gray-400">
              Empowering communities worldwide through innovation, sustainability, and collaboration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about-us" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <ul className="mt-4 flex space-x-6">
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-gray-400 hover:text-white"
                >
                  <Facebook className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="text-gray-400 hover:text-white"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-gray-400 hover:text-white"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/yourTelegramUsername" // Replace with actual Telegram username
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  className="text-gray-400 hover:text-white"
                >
                  <FaTelegramPlane className="h-6 w-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Us CTA */}
        <div className="mt-8 text-center">
          <Link to="/contact" className="text-lg font-semibold text-blue-500 hover:text-blue-400">
            Have questions? Contact Us
          </Link>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} <span className="font-semibold">ST Investment Group</span>. All rights reserved.
          </p>
          <p className="mt-2">
            Built with <span className="text-red-500">&hearts;</span> by our team.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
