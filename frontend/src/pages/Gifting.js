import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Package, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Gifting = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#fdf7e1] to-[#f6e8e6] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Gift className="w-16 h-16 text-clay mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-primary font-bold text-wood mb-6">
              Corporate & Wedding <span className="text-clay italic">Gifting</span>
            </h1>
            <p className="text-xl font-secondary text-wood/80 max-w-3xl mx-auto">
              Handpicked delights for your employees, partners, and special celebrations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Corporate Gifting */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-4xl font-primary font-bold text-wood mb-6">
                Corporate <span className="text-clay italic">Collections</span>
              </h2>
              <p className="font-secondary text-lg text-wood/80 mb-6 leading-relaxed">
                Strengthen business relationships with premium gift boxes that reflect your company's values and appreciation.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-clay flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-secondary font-semibold text-wood mb-1">
                      Custom Branding Available
                    </h3>
                    <p className="font-secondary text-wood/70">
                      Add your company logo and personalized messages
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Package className="w-6 h-6 text-clay flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-secondary font-semibold text-wood mb-1">
                      Bulk Orders Welcome
                    </h3>
                    <p className="font-secondary text-wood/70">
                      Special pricing for large corporate orders
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-6 h-6 text-clay flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-secondary font-semibold text-wood mb-1">
                      Premium Packaging
                    </h3>
                    <p className="font-secondary text-wood/70">
                      Elegant boxes that leave a lasting impression
                    </p>
                  </div>
                </li>
              </ul>
              <a
                href="tel:+917092925151"
                className="inline-block bg-clay text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors duration-200 font-secondary font-semibold"
              >
                Contact Us: +91-7092925151
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <img
                src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=80"
                alt="Corporate Gifting"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wedding Gifting */}
      <section className="py-20 bg-peach">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800&q=80"
                alt="Wedding Gifting"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-primary font-bold text-wood mb-6">
                Wedding <span className="text-clay italic">Collections</span>
              </h2>
              <p className="font-secondary text-lg text-wood/80 mb-6 leading-relaxed">
                Make your special day even sweeter with elegant treats that celebrate your love and joy.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Gift className="w-6 h-6 text-clay flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-secondary font-semibold text-wood mb-1">
                      Customized Gift Boxes
                    </h3>
                    <p className="font-secondary text-wood/70">
                      Personalized boxes for your wedding guests
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Package className="w-6 h-6 text-clay flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-secondary font-semibold text-wood mb-1">
                      Variety Options
                    </h3>
                    <p className="font-secondary text-wood/70">
                      Mix and match sweets according to preferences
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-6 h-6 text-clay flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-secondary font-semibold text-wood mb-1">
                      On-Time Delivery
                    </h3>
                    <p className="font-secondary text-wood/70">
                      Guaranteed fresh delivery for your wedding date
                    </p>
                  </div>
                </li>
              </ul>
              <a
                href="tel:+917092925151"
                className="inline-block bg-clay text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors duration-200 font-secondary font-semibold"
              >
                Plan Your Wedding Gifting
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sample Boxes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-primary font-bold text-wood mb-4">
              Sample <span className="text-clay italic">Gift Boxes</span>
            </h2>
            <p className="text-lg font-secondary text-wood/70 max-w-2xl mx-auto">
              Choose from our curated collections or create your own
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-cream rounded-lg p-8 shadow-md"
            >
              <h3 className="text-2xl font-primary font-semibold text-wood mb-4">
                Classic Box
              </h3>
              <ul className="space-y-2 font-secondary text-wood/80 mb-6">
                <li>• Kaju Katli</li>
                <li>• Motichoor Laddu</li>
                <li>• Besan Laddu</li>
                <li>• Dry Fruit Barfi</li>
              </ul>
              <p className="text-3xl font-primary font-bold text-clay mb-4">₹1,200</p>
              <Link
                to="/shop"
                className="block text-center bg-clay text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors duration-200 font-secondary"
              >
                Customize
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-clay text-white rounded-lg p-8 shadow-md transform scale-105"
            >
              <h3 className="text-2xl font-primary font-semibold mb-4">
                Premium Box
              </h3>
              <ul className="space-y-2 font-secondary mb-6">
                <li>• Kaju Katli</li>
                <li>• Badam Halwa</li>
                <li>• Dry Fruit Mix</li>
                <li>• Kesar Peda</li>
                <li>• Assorted Barfi</li>
              </ul>
              <p className="text-3xl font-primary font-bold text-gold mb-4">₹2,500</p>
              <Link
                to="/shop"
                className="block text-center bg-white text-clay px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors duration-200 font-secondary font-semibold"
              >
                Customize
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-cream rounded-lg p-8 shadow-md"
            >
              <h3 className="text-2xl font-primary font-semibold text-wood mb-4">
                Deluxe Box
              </h3>
              <ul className="space-y-2 font-secondary text-wood/80 mb-6">
                <li>• Premium Kaju Katli</li>
                <li>• Badam Rocher</li>
                <li>• Dry Fruit Collection</li>
                <li>• Special Barfi Assortment</li>
                <li>• Traditional Laddu</li>
                <li>• Saffron Specialties</li>
              </ul>
              <p className="text-3xl font-primary font-bold text-clay mb-4">₹5,000</p>
              <Link
                to="/shop"
                className="block text-center bg-clay text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors duration-200 font-secondary"
              >
                Customize
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-wood text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-primary font-bold mb-6">
              Ready to Create Your <span className="text-gold italic">Perfect Gift</span>?
            </h2>
            <p className="text-xl font-secondary mb-8">
              Contact our gifting specialist to discuss your requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917092925151"
                className="bg-gold text-wood px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors duration-200 font-secondary font-semibold"
              >
                Call: +91-7092925151
              </a>
              <a
                href="mailto:hariomdryfruitsandsweets@gmail.com"
                className="border-2 border-gold text-gold px-8 py-3 rounded-md hover:bg-gold hover:text-wood transition-colors duration-200 font-secondary font-semibold"
              >
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gifting;
