
import React from 'react';
import { motion } from 'framer-motion';
import { SITE_CONFIG } from '../../config/site';
import { Button } from '../common/Button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[95vh] flex items-center pt-24 pb-12 overflow-hidden">
      {/* Decorative background remains standard */}
      <div className="blob-bg w-96 h-96 bg-brand-yellow top-10 -left-20"></div>
      <div className="blob-bg w-[500px] h-[500px] bg-brand-pink bottom-0 -right-20"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <span className="inline-block px-4 py-1 bg-brand-yellow/30 text-brand-pink font-bold rounded-full mb-6 text-sm uppercase tracking-widest">
            🌟 Admissions Now Open
          </span>
          <h1 className="text-5xl lg:text-7xl font-heading font-bold text-gray-900 leading-tight mb-6">
            Where <span className="text-brand-pink drop-shadow-sm brightness-110">{SITE_CONFIG.shortName}</span> Hearts Learn Big Dreams
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-lg mx-auto md:mx-0 font-medium">
            {SITE_CONFIG.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button onClick={() => window.location.href='#contact'}>Start Enrollment</Button>
            <Button variant="outline" onClick={() => window.location.href='#about'}>Learn More</Button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-brand-blue rounded-[3rem] rotate-3 transform z-0 transition-transform group-hover:rotate-0"></div>
            <img 
              src="public\images\hero.webp" 
              alt="Premium Play School Environment" 
              className="relative rounded-[3rem] shadow-2xl z-10 -rotate-3 group-hover:rotate-0 transition-transform duration-700 object-cover aspect-square w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
