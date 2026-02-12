
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sun, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 grid grid-cols-2 gap-4"
          >
            <img 
              src="assets\yoga.webp" 
              className="rounded-3xl shadow-lg w-full h-full object-cover aspect-square" 
              alt="School Entrance" 
            />
            <div className="flex flex-col gap-4">
              <img 
                src="assets/ground.webp" 
                className="rounded-3xl shadow-lg w-full h-48 object-cover" 
                alt="Our Caring Staff" 
              />
              <div className="bg-brand-pink p-8 rounded-3xl text-white">
                <p className="text-4xl font-heading font-bold mb-1">5+</p>
                <p className="font-semibold text-sm opacity-90">Years of Excellence</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <p className="text-brand-blue font-bold tracking-widest uppercase mb-4">Discover SREE VEDA</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-gray-900 leading-tight">
              Empowering Every Child with <span className="text-brand-pink">Love & Wisdom</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At SREE VEDA Play School & Day Care, we believe that education is more than just ABCs and 123s. It's about nurturing the soul, encouraging curiosity, and building character from the ground up.
            </p>

            <div className="space-y-6">
              {[
                { icon: <Heart className="text-brand-pink" />, title: "Joyful Atmosphere", desc: "A colorful, happy space where kids feel at home." },
                { icon: <Sun className="text-brand-yellow" />, title: "Traditional Roots", desc: "Teaching slokas and rhymes to connect with our heritage." },
                { icon: <ShieldCheck className="text-brand-green" />, title: "Uncompromising Safety", desc: "CCTV surveillance and highly trained caring staff." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="bg-white p-3 rounded-2xl shadow-sm h-fit">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">{item.title}</h4>
                    <p className="text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
