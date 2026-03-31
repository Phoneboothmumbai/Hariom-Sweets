import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-wood text-white">
      {/* Newsletter Section */}
      <div className="bg-clay py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-primary mb-2">Stay Connected</h3>
              <p className="font-secondary text-white/90">
                Subscribe for exclusive offers and updates
              </p>
            </div>
            <div className="flex w-full md:w-auto max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-md text-wood focus:outline-none"
              />
              <button className="bg-wood text-white px-6 py-3 rounded-r-md hover:bg-opacity-90 transition-colors duration-200 font-secondary">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-primary font-bold text-gold mb-4">
              HARIOM
            </h3>
            <p className="font-secondary text-white/80 mb-4">
              The Original Taste Makers Since 1995
            </p>
            <p className="font-secondary text-sm text-white/70">
              Premium sweets and traditional delicacies crafted with love and authenticity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-primary font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-secondary">
              <li>
                <Link to="/about" className="text-white/80 hover:text-gold transition-colors duration-200">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-white/80 hover:text-gold transition-colors duration-200">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/gifting" className="text-white/80 hover:text-gold transition-colors duration-200">
                  Corporate Gifting
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-gold transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-primary font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 font-secondary">
              <li>
                <Link to="/categories/signature" className="text-white/80 hover:text-gold transition-colors duration-200">
                  Signature Sweets
                </Link>
              </li>
              <li>
                <Link to="/categories/traditional" className="text-white/80 hover:text-gold transition-colors duration-200">
                  Traditional Sweets
                </Link>
              </li>
              <li>
                <Link to="/categories/dryfruit" className="text-white/80 hover:text-gold transition-colors duration-200">
                  Dry Fruits
                </Link>
              </li>
              <li>
                <Link to="/categories/namkeen" className="text-white/80 hover:text-gold transition-colors duration-200">
                  Namkeen & Snacks
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-primary font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 font-secondary text-white/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>HS Spring, Hanuman Chowk, Navghar Road, Mulund (E), Mumbai - 400701</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+91-7092925151</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>hariomdryfruitsandsweets@gmail.com</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-secondary text-white/70">
            <p>&copy; 2025 Hariom Sweets. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-gold transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-gold transition-colors duration-200">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
