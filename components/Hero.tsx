
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Blobs */}
      <div className="blob-bg w-96 h-96 bg-brand-yellow top-10 -left-20"></div>
      <div className="blob-bg w-[500px] h-[500px] bg-brand-pink bottom-0 -right-20"></div>
      <div className="blob-bg w-72 h-72 bg-brand-blue top-1/2 left-1/2"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="z-10 text-center md:text-left"
        >
          <div className="inline-block bg-brand-yellow/30 text-brand-pink font-bold px-4 py-1 rounded-full mb-6 animate-pulse">
            🌟 Admissions 2026-27 Open!
          </div>
          <h1 className="text-5xl lg:text-7xl font-heading font-bold text-gray-900 leading-[1.1] mb-6">
            Where <span className="text-brand-pink drop-shadow-sm filter brightness-110 tracking-tight">SREE VEDA</span> Hearts Learn Big Dreams
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed font-medium">
            Welcome to Ramanthapur's most trusted preschool. We provide a joyful, safe, and wisdom-filled environment for your child's first steps into the world of learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#contact" 
              className="bg-brand-pink text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 text-center"
            >
              Start Enrollment
            </a>
            <a 
              href="#about" 
              className="bg-white border-2 border-brand-blue text-brand-blue px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-brand-blue hover:text-white transition-all transform hover:-translate-y-1 text-center"
            >
              Learn More
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <div className="relative">
            {/* Frame effect */}
            <div className="absolute inset-0 bg-brand-blue rounded-[3rem] rotate-3 transform z-0"></div>
            <img 
              src="public\images\hero.webp" 
              alt="Sree Veda Play School Playground" 
              className="relative rounded-[3rem] shadow-2xl z-10 -rotate-3 hover:rotate-0 transition-transform duration-700 object-cover aspect-[4/5] md:aspect-square w-full"
            />
            
            {/* Floating badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-brand-yellow/20"
            >
              <div className="w-10 h-10 bg-brand-yellow rounded-full flex items-center justify-center text-xl">🧘</div>
              <div>
                <p className="font-bold text-xs">Slokas & Yoga</p>
                <p className="text-[10px] text-gray-500">Holistic Growth</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-brand-pink/20"
            >
              <div className="w-10 h-10 bg-brand-pink rounded-full flex items-center justify-center text-xl">🎨</div>
              <div>
                <p className="font-bold text-xs">Creative Arts</p>
                <p className="text-[10px] text-gray-500">Smart Learning</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-12 md:h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#F9FAFB"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
