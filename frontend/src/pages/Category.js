import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products, categories } from '../data/mockData';
import { useCart } from '../context/CartContext';

const Category = () => {
  const { categoryId } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const category = categories.find(c => c.id === categoryId);
  const categoryProducts = products.filter(p => p.category === categoryId);

  if (!category) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <p className="text-xl font-secondary text-wood">Category not found</p>
      </div>
    );
  }

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
            {category.name}
          </h1>
          <p className="text-lg font-secondary text-wood/70">
            {category.description}
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoryProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => navigate(`/product/${product.id}`)}
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
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                  }}
                  className="w-full bg-clay text-white py-2 rounded-md hover:bg-opacity-90 transition-colors duration-200 font-secondary font-semibold"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {categoryProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 font-secondary text-lg">
              No products available in this category
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
