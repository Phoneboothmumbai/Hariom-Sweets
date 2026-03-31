import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Users, TrendingUp } from 'lucide-react';

const About = () => {
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
            <p className="text-gold font-secondary text-lg mb-4 italic">
              Our Journey
            </p>
            <h1 className="text-5xl md:text-6xl font-primary font-bold text-wood mb-6">
              The Hariom <span className="text-clay italic">Story</span>
            </h1>
            <p className="text-xl font-secondary text-wood/80 max-w-3xl mx-auto">
              A legacy built on trust, taste, and traditions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
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
                alt="Hariom Heritage"
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
                Rooted in <span className="text-clay italic">Heritage</span>
              </h2>
              <div className="space-y-4 font-secondary text-lg text-wood/80 leading-relaxed">
                <p>
                  The ingredients that go into our kaju mithais start with premium cashews. We believe in making sweets the traditional way, using almonds, pistachios, sugar and fragrant real kesar.
                </p>
                <p>
                  You will love our rich, creamy milk burfees, dry fruit and mango kesar burfees, malai pedas, boondi and motichoor ladoos — prepared for everyday happiness and moments worth remembering.
                </p>
                <p>
                  Alongside these, our sizzling hot samosas and kachoris are fried in pure refined vegetable oil, with crispy, familiar varieties of farsan to bring it all together.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-primary font-bold text-wood mb-4">
              Our <span className="text-clay italic">Values</span>
            </h2>
            <p className="text-lg font-secondary text-wood/70 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 bg-clay/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-clay" />
              </div>
              <h3 className="text-xl font-primary font-semibold text-wood mb-3">
                Artisanal Craftsmanship
              </h3>
              <p className="font-secondary text-wood/70">
                Every sweet is handcrafted with precision and care
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 bg-clay/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-clay" />
              </div>
              <h3 className="text-xl font-primary font-semibold text-wood mb-3">
                Heritage Magic
              </h3>
              <p className="font-secondary text-wood/70">
                Recipes passed down through generations
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 bg-clay/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-clay" />
              </div>
              <h3 className="text-xl font-primary font-semibold text-wood mb-3">
                Transparent Quality
              </h3>
              <p className="font-secondary text-wood/70">
                Only the finest, purest ingredients
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 bg-clay/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-clay" />
              </div>
              <h3 className="text-xl font-primary font-semibold text-wood mb-3">
                Rooted in Traditions
              </h3>
              <p className="font-secondary text-wood/70">
                Bringing authentic taste to every box
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-20 bg-wood text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-primary font-bold mb-6">
              Our <span className="text-gold italic">Promise</span>
            </h2>
            <p className="text-xl font-secondary leading-relaxed mb-8">
              We are not just building a brand; we are tending to a legacy — a premium experience where tradition and delight meet, ensuring that what you share with your family today is built on a timeless foundation of absolute trust.
            </p>
            <div className="inline-block bg-gold text-wood px-8 py-4 rounded-md font-secondary font-semibold text-lg">
              TRUST • TASTE • TRADITIONS
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
