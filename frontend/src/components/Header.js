import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { getCartCount, setIsCartOpen } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="text-2xl md:text-3xl font-primary font-bold text-clay tracking-wide">
              HARIOM
            </div>
            <div className="hidden md:block text-xs text-gold font-secondary">
              Since 1995
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/shop"
              className="text-wood hover:text-clay transition-colors duration-200 font-secondary"
            >
              Shop
            </Link>
            <Link
              to="/categories/signature"
              className="text-wood hover:text-clay transition-colors duration-200 font-secondary"
            >
              Signature Sweets
            </Link>
            <Link
              to="/categories/traditional"
              className="text-wood hover:text-clay transition-colors duration-200 font-secondary"
            >
              Traditional
            </Link>
            <Link
              to="/categories/dryfruit"
              className="text-wood hover:text-clay transition-colors duration-200 font-secondary"
            >
              Dry Fruits
            </Link>
            <Link
              to="/gifting"
              className="text-wood hover:text-clay transition-colors duration-200 font-secondary"
            >
              Gifting
            </Link>
            <Link
              to="/about"
              className="text-wood hover:text-clay transition-colors duration-200 font-secondary"
            >
              Our Story
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button
              className="text-wood hover:text-clay transition-colors duration-200"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className="text-wood hover:text-clay transition-colors duration-200"
              aria-label="Account"
            >
              <User className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative text-wood hover:text-clay transition-colors duration-200"
              aria-label="Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-clay text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-wood hover:text-clay transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <nav className="px-4 py-6 space-y-4">
              <Link
                to="/shop"
                className="block text-wood hover:text-clay transition-colors duration-200 font-secondary"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop All
              </Link>
              <Link
                to="/categories/signature"
                className="block text-wood hover:text-clay transition-colors duration-200 font-secondary"
                onClick={() => setIsMenuOpen(false)}
              >
                Signature Sweets
              </Link>
              <Link
                to="/categories/traditional"
                className="block text-wood hover:text-clay transition-colors duration-200 font-secondary"
                onClick={() => setIsMenuOpen(false)}
              >
                Traditional
              </Link>
              <Link
                to="/categories/dryfruit"
                className="block text-wood hover:text-clay transition-colors duration-200 font-secondary"
                onClick={() => setIsMenuOpen(false)}
              >
                Dry Fruits
              </Link>
              <Link
                to="/gifting"
                className="block text-wood hover:text-clay transition-colors duration-200 font-secondary"
                onClick={() => setIsMenuOpen(false)}
              >
                Gifting
              </Link>
              <Link
                to="/about"
                className="block text-wood hover:text-clay transition-colors duration-200 font-secondary"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Story
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
