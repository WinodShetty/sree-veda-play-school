
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import SectionHeader from './SectionHeader';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-brand-yellow/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeader 
          badge="Parent's Voice"
          title="Hear From Our Family"
          subtitle="Don't just take our word for it—read what parents have to say about their children's progress."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[3rem] shadow-sm relative group hover:shadow-xl transition-shadow border border-brand-yellow/10"
            >
              <div className="absolute top-6 right-10 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={80} className="text-brand-pink" />
              </div>
              <p className="text-gray-600 italic mb-8 leading-relaxed relative z-10">
                "{t.comment}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-2xl object-cover" />
                <div>
                  <h5 className="font-bold text-gray-900">{t.name}</h5>
                  <p className="text-xs text-brand-pink font-semibold uppercase tracking-wider">Parent of {t.parentOf}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
