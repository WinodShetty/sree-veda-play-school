
import React from 'react';
import { motion } from 'framer-motion';
import { PROGRAMS } from '../constants';
import SectionHeader from './SectionHeader';

const Programs: React.FC = () => {
  return (
    <section id="programs" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader 
          badge="Curriculum"
          title="Our Academic Programs"
          subtitle="Tailored learning experiences designed for different developmental stages of childhood."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS.map((program, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className={`bg-white rounded-[2.5rem] shadow-xl overflow-hidden group border-2 border-transparent hover:border-brand-yellow transition-all flex flex-col`}
            >
              <div className="h-48 w-full overflow-hidden">
                <img src={program.image} alt={program.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-10 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-heading font-bold text-gray-900">{program.title}</h3>
                  <div className="text-3xl">{program.icon}</div>
                </div>
                <p className="font-bold text-brand-pink mb-4 inline-block text-sm uppercase tracking-wider">
                  Age: {program.age}
                </p>
                <p className="text-gray-600 leading-relaxed mb-8 flex-1">
                  {program.description}
                </p>
                <button className={`${program.color} text-white py-3 px-6 rounded-2xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-colors`}>
                  Sree Veda 
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Dots */}
      <div className="absolute top-20 right-10 w-40 h-40 opacity-20 pointer-events-none">
        <div className="grid grid-cols-5 gap-2">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-brand-pink rounded-full"></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
