import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Star, Award, TrendingUp } from 'lucide-react';
import { products, categories } from '../data/mockData';
import { useCart } from '../context/CartContext';
import { 
  containerVariants, 
  itemVariants, 
  fadeSlideUp, 
  fadeSlideLeft, 
  fadeSlideRight,
  scaleFade 
} from '../hooks/useScrollAnimation';

const Home = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const popularProducts = products.slice(0, 4);
  
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  // Smooth spring animation for scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // Bidirectional animations
  const bannerY = useTransform(smoothProgress, [0, 1], ["0%", "30%"]);
  const bannerOpacity = useTransform(smoothProgress, [0, 0.5, 1], [1, 0.6, 0]);
  const bannerScale = useTransform(smoothProgress, [0, 1], [1, 1.1]);
  const textY = useTransform(smoothProgress, [0, 1], ["0%", "50%"]);
  const textOpacity = useTransform(smoothProgress, [0, 0.3], [1, 0]);

  return (
    <div className="min-h-screen" ref={ref}>
      {/* Hero Banner Section with Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Banner Image with Parallax */}
        <motion.div 
          className="absolute inset-0"
          style={{ 
            y: bannerY,
            scale: bannerScale
          }}
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1758910536889-43ce7b3199fd?w=1920&q=85')",
              opacity: bannerOpacity
            }}
          />
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-wood/95 via-wood/75 to-wood/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-wood/60 via-transparent to-transparent"></div>
        </motion.div>
        
        {/* Hero Text Content */}
        <motion.div 
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          style={{ 
            y: textY,
            opacity: textOpacity
          }}
        >
          <div className="max-w-3xl">
            <motion.p 
              className="text-gold font-secondary text-xl md:text-2xl mb-4 italic"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              From Mumbai, With Love
            </motion.p>
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-primary font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              The <span className="text-gold italic">Original</span>
              <br />
              Taste Makers
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl font-secondary text-white/90 mb-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Experience timeless flavors crafted with <span className="text-gold font-semibold">love</span> and <span className="text-gold font-semibold">tradition</span> since 1995
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 bg-clay text-white px-8 py-4 rounded-md hover:bg-opacity-90 transition-all duration-300 font-secondary font-semibold shadow-2xl hover:shadow-xl"
                >
                  Explore Our Collection
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/about"
                  className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-md hover:bg-white hover:text-wood transition-all duration-300 font-secondary font-semibold"
                >
                  Our Story
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-1/4 right-10 hidden lg:block"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ opacity: textOpacity }}
        >
          <Award className="w-20 h-20 text-gold opacity-40" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-10 hidden lg:block"
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{ opacity: textOpacity }}
        >
          <Star className="w-20 h-20 text-gold opacity-40" />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ opacity: textOpacity }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeSlideUp}
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

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            {popularProducts.map((product, index) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
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
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-clay text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors duration-200 font-secondary text-sm"
                    >
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleFade}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-wood text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300 font-secondary font-semibold shadow-lg hover:shadow-xl"
              >
                View All Products
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeSlideUp}
            className="text-center mb-12"
          >
            <p className="text-gold font-secondary text-lg mb-2 italic">Flavours for Every Moment</p>
            <h2 className="text-4xl md:text-5xl font-primary font-bold text-wood mb-4">
              Explore Our <span className="text-clay italic">Collections</span>
            </h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <Link
                  to={`/categories/${category.id}`}
                  className="block relative group overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-500"
                >
                  <motion.img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-72 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-wood/90 via-wood/50 to-transparent flex items-end p-6"
                    initial={{ opacity: 0.9 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="text-white">
                      <h3 className="text-2xl font-primary font-bold mb-2">
                        {category.name}
                      </h3>
                      <p className="font-secondary text-white/90">
                        {category.description}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-peach overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeSlideLeft}
            >
              <div className="relative">
                <motion.img
                  src="https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800&q=80"
                  alt="Hariom Story"
                  className="rounded-lg shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div 
                  className="absolute -bottom-6 -right-6 bg-gold text-wood p-6 rounded-lg shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                >
                  <p className="text-4xl font-primary font-bold">30+</p>
                  <p className="font-secondary">Years of Excellence</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeSlideRight}
            >
              <p className="text-gold font-secondary text-lg mb-4 italic">
                A Legacy Built on Trust
              </p>
              <h2 className="text-4xl md:text-5xl font-primary font-bold text-wood mb-6">
                A Sweetness <br />
                <span className="text-clay italic">Perfected Over Time</span>
              </h2>
              <motion.p 
                className="font-secondary text-lg text-wood/80 mb-6 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Inside each Hariom box, the legacy of mithai kalakari comes to life. Years of expertise unfolds in delicate textures and rich flavours - all inspired by one man's pursuit of the perfect sweet.
              </motion.p>
              <motion.p 
                className="font-secondary text-lg text-wood/80 mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                We believe in making sweets the traditional way, using premium cashews, almonds, pistachios, sugar and fragrant real kesar. Every piece is a labour of love.
              </motion.p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-clay text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300 font-secondary font-semibold shadow-lg hover:shadow-xl"
                >
                  Read Our Story
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-clay text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scaleFade}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-primary font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Corporate & Wedding Gifting
            </motion.h2>
            <motion.p 
              className="text-xl font-secondary mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Handpicked delights perfect for your special occasions and celebrations
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/gifting"
                className="inline-flex items-center gap-2 bg-white text-clay px-8 py-4 rounded-md hover:bg-opacity-90 transition-all duration-300 font-secondary font-semibold shadow-lg hover:shadow-xl"
              >
                Explore Gifting Options
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
