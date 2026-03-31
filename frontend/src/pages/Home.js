import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Award, TrendingUp } from 'lucide-react';
import { products, categories } from '../data/mockData';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const popularProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#fdf7e1] via-[#f6e8e6] to-[#a3caca]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-clay rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold font-secondary text-lg mb-4 italic">
              From Mumbai, With Love
            </p>
            <h1 className="text-5xl md:text-7xl font-primary font-bold text-wood mb-6 leading-tight">
              The <span className="text-clay italic">Original</span>
              <br />
              Taste Makers
            </h1>
            <p className="text-xl md:text-2xl font-secondary text-wood/80 mb-8 max-w-3xl mx-auto">
              Experience timeless flavors crafted with <span className="text-clay font-semibold">love</span> and <span className="text-clay font-semibold">tradition</span> since 1995
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/shop"
                className="bg-clay text-white px-8 py-4 rounded-md hover:bg-opacity-90 transition-all duration-300 font-secondary font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                Explore Our Collection
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="border-2 border-wood text-wood px-8 py-4 rounded-md hover:bg-wood hover:text-white transition-all duration-300 font-secondary font-semibold"
              >
                Our Story
              </Link>
            </div>
          </motion.div>

          {/* Floating decorative elements */}
          <motion.div
            className="absolute top-1/4 left-10 hidden lg:block"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Award className="w-16 h-16 text-gold opacity-30" />
          </motion.div>
          <motion.div
            className="absolute bottom-1/4 right-10 hidden lg:block"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          >
            <Star className="w-16 h-16 text-clay opacity-30" />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-wood rounded-full flex justify-center">
            <div className="w-1 h-3 bg-wood rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Trust Banner */}
      <section className="bg-wood text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-gold" />
              <span className="font-secondary">Premium Quality</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-gold" />
              <span className="font-secondary">Trusted Since 1995</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-gold" />
              <span className="font-secondary">Made with Pure Ingredients</span>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-gold font-secondary text-lg mb-2 italic">Curated by Popular Demand</p>
            <h2 className="text-4xl md:text-5xl font-primary font-bold text-wood mb-4">
              Our <span className="text-clay italic">Bestsellers</span>
            </h2>
            <p className="text-lg font-secondary text-wood/70 max-w-2xl mx-auto">
              Discover the sweets that have won hearts across Mumbai
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-primary font-semibold text-wood mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm font-secondary text-wood/60 mb-4">
                    {product.description.substring(0, 60)}...
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-primary font-bold text-clay">
                      ₹{product.price}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                      }}
                      className="bg-clay text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors duration-200 font-secondary text-sm"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 bg-wood text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300 font-secondary font-semibold"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-gold font-secondary text-lg mb-2 italic">Flavours for Every Moment</p>
            <h2 className="text-4xl md:text-5xl font-primary font-bold text-wood mb-4">
              Explore Our <span className="text-clay italic">Collections</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/categories/${category.id}`}
                  className="block relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-wood/90 via-wood/50 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-2xl font-primary font-bold mb-2">
                        {category.name}
                      </h3>
                      <p className="font-secondary text-white/90">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-peach">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800&q=80"
                  alt="Hariom Story"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-gold text-wood p-6 rounded-lg shadow-lg">
                  <p className="text-4xl font-primary font-bold">30+</p>
                  <p className="font-secondary">Years of Excellence</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-gold font-secondary text-lg mb-4 italic">
                A Legacy Built on Trust
              </p>
              <h2 className="text-4xl md:text-5xl font-primary font-bold text-wood mb-6">
                A Sweetness <br />
                <span className="text-clay italic">Perfected Over Time</span>
              </h2>
              <p className="font-secondary text-lg text-wood/80 mb-6 leading-relaxed">
                Inside each Hariom box, the legacy of mithai kalakari comes to life. Years of expertise unfolds in delicate textures and rich flavours - all inspired by one man's pursuit of the perfect sweet.
              </p>
              <p className="font-secondary text-lg text-wood/80 mb-8 leading-relaxed">
                We believe in making sweets the traditional way, using premium cashews, almonds, pistachios, sugar and fragrant real kesar. Every piece is a labour of love.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-clay text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300 font-secondary font-semibold"
              >
                Read Our Story
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-clay text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-primary font-bold mb-6">
              Corporate & Wedding Gifting
            </h2>
            <p className="text-xl font-secondary mb-8 max-w-2xl mx-auto">
              Handpicked delights perfect for your special occasions and celebrations
            </p>
            <Link
              to="/gifting"
              className="inline-flex items-center gap-2 bg-white text-clay px-8 py-4 rounded-md hover:bg-opacity-90 transition-all duration-300 font-secondary font-semibold"
            >
              Explore Gifting Options
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
