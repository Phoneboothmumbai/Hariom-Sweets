import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from '../hooks/use-toast';
import { CheckCircle } from 'lucide-react';

const Checkout = () => {
  const { cart, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock order placement
    setTimeout(() => {
      setOrderPlaced(true);
      clearCart();
      
      // Redirect to home after 3 seconds
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }, 1000);
  };

  if (cart.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center bg-cream">
        <div className="text-center">
          <h2 className="text-3xl font-primary font-bold text-wood mb-4">
            Your cart is empty
          </h2>
          <p className="font-secondary text-wood/70 mb-6">
            Add some delicious sweets to your cart first!
          </p>
          <button
            onClick={() => navigate('/shop')}
            className="bg-clay text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors duration-200 font-secondary font-semibold"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center bg-cream">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center bg-white p-12 rounded-lg shadow-xl max-w-md"
        >
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-primary font-bold text-wood mb-4">
            Order Placed Successfully!
          </h2>
          <p className="font-secondary text-wood/70 mb-6">
            Thank you for your order. We'll contact you shortly to confirm the details.
          </p>
          <p className="font-secondary text-sm text-wood/50">
            Redirecting to homepage...
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-primary font-bold text-wood mb-8 text-center">
            Checkout
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-primary font-semibold text-wood mb-6">
                Delivery Details
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-secondary font-semibold text-wood mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-clay font-secondary"
                  />
                </div>

                <div>
                  <label className="block font-secondary font-semibold text-wood mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-clay font-secondary"
                  />
                </div>

                <div>
                  <label className="block font-secondary font-semibold text-wood mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-clay font-secondary"
                  />
                </div>

                <div>
                  <label className="block font-secondary font-semibold text-wood mb-2">
                    Address *
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-clay font-secondary"
                  ></textarea>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-secondary font-semibold text-wood mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-clay font-secondary"
                    />
                  </div>

                  <div>
                    <label className="block font-secondary font-semibold text-wood mb-2">
                      Pincode *
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-clay font-secondary"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-clay text-white py-4 rounded-md hover:bg-opacity-90 transition-colors duration-200 font-secondary font-semibold text-lg mt-6"
                >
                  Place Order
                </button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="bg-white p-8 rounded-lg shadow-md h-fit sticky top-24">
              <h2 className="text-2xl font-primary font-semibold text-wood mb-6">
                Order Summary
              </h2>
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4 pb-4 border-b">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h3 className="font-secondary font-semibold text-wood">
                        {item.name}
                      </h3>
                      <p className="text-sm text-wood/60">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-secondary font-semibold text-clay">
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 border-t pt-4">
                <div className="flex justify-between font-secondary">
                  <span className="text-wood/70">Subtotal:</span>
                  <span className="text-wood font-semibold">
                    ₹{getCartTotal().toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between font-secondary">
                  <span className="text-wood/70">Delivery:</span>
                  <span className="text-green-600 font-semibold">FREE</span>
                </div>
                <div className="flex justify-between text-xl font-primary font-bold pt-3 border-t">
                  <span className="text-wood">Total:</span>
                  <span className="text-clay">₹{getCartTotal().toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-cream rounded-md">
                <p className="font-secondary text-sm text-wood/70 text-center">
                  This is a demo checkout. No actual payment will be processed.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Checkout;
