import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/mockData';
import { useCart } from '../context/CartContext';
import { ArrowLeft, Minus, Plus, ShoppingCart, Package, Clock, Leaf } from 'lucide-react';

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-primary font-bold text-wood mb-4">
            Product not found
          </h2>
          <button
            onClick={() => navigate('/shop')}
            className="bg-clay text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors duration-200 font-secondary"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen pt-24 pb-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-wood hover:text-clay transition-colors duration-200 mb-8 font-secondary"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </motion.button>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[500px] object-cover"
            />
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <h1 className="text-4xl md:text-5xl font-primary font-bold text-wood mb-4">
              {product.name}
            </h1>
            
            <p className="text-lg font-secondary text-wood/70 mb-6">
              {product.description}
            </p>

            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-5xl font-primary font-bold text-clay">
                ₹{product.price}
              </span>
              <span className="text-lg font-secondary text-wood/60">
                for {product.weight}
              </span>
            </div>

            {/* Product Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                <Package className="w-6 h-6 text-clay flex-shrink-0" />
                <div>
                  <p className="font-secondary text-sm text-wood/60">Weight</p>
                  <p className="font-secondary font-semibold text-wood">{product.weight}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                <Clock className="w-6 h-6 text-clay flex-shrink-0" />
                <div>
                  <p className="font-secondary text-sm text-wood/60">Shelf Life</p>
                  <p className="font-secondary font-semibold text-wood">{product.shelf_life}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                <Leaf className="w-6 h-6 text-clay flex-shrink-0" />
                <div>
                  <p className="font-secondary text-sm text-wood/60">Type</p>
                  <p className="font-secondary font-semibold text-wood">100% Vegetarian</p>
                </div>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-8">
              <label className="block font-secondary font-semibold text-wood mb-3">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 bg-white rounded-lg shadow-sm p-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-md border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-secondary text-xl font-semibold text-wood">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-md border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-clay text-white py-4 px-8 rounded-md hover:bg-opacity-90 transition-colors duration-200 font-secondary font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 text-sm font-secondary text-wood/70">
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>Fresh & Hygienic</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>Traditional Recipe</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg p-8 shadow-md mb-12"
        >
          <h2 className="text-3xl font-primary font-bold text-wood mb-6">
            About this Product
          </h2>
          <p className="font-secondary text-lg text-wood/80 leading-relaxed mb-6">
            {product.fullDescription}
          </p>
          
          {product.ingredients && (
            <div>
              <h3 className="text-xl font-primary font-semibold text-wood mb-4">
                Ingredients
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ingredient, index) => (
                  <span
                    key={index}
                    className="bg-cream px-4 py-2 rounded-full font-secondary text-wood/80 text-sm"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-primary font-bold text-wood mb-8 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  onClick={() => {
                    navigate(`/product/${relatedProduct.id}`);
                    window.scrollTo(0, 0);
                  }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-primary font-semibold text-wood mb-2">
                      {relatedProduct.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-primary font-bold text-clay">
                        ₹{relatedProduct.price}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(relatedProduct);
                        }}
                        className="bg-clay text-white px-3 py-1 rounded-md hover:bg-opacity-90 transition-colors duration-200 font-secondary text-sm"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
