import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { products, categories } from '../data/mockData';
import { useCart } from '../context/CartContext';
import { Filter } from 'lucide-react';

const Shop = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="min-h-screen pt-24 pb-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-primary font-bold text-wood mb-4">
            Shop <span className="text-clay italic">All Products</span>
          </h1>
          <p className="text-lg font-secondary text-wood/70">
            Discover our complete collection of premium sweets and treats
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 bg-white p-6 rounded-lg shadow-md">
          <div className="flex-1">
            <label className="block text-sm font-secondary font-semibold text-wood mb-2">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-clay font-secondary"
            >
              <option value="all">All Categories</option>
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-secondary font-semibold text-wood mb-2">
              Sort By
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-clay font-secondary"
            >
              <option value="name">Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-gold text-wood px-3 py-1 rounded-full text-xs font-secondary font-semibold">
                  {product.weight}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-primary font-semibold text-wood mb-2">
                  {product.name}
                </h3>
                <p className="text-sm font-secondary text-wood/60 mb-3 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-primary font-bold text-clay">
                    ₹{product.price}
                  </span>
                  <span className="text-xs font-secondary text-wood/50">
                    Shelf life: {product.shelf_life}
                  </span>
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-clay text-white py-2 rounded-md hover:bg-opacity-90 transition-colors duration-200 font-secondary font-semibold"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 font-secondary text-lg">
              No products found in this category
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
