
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  BookOpen, 
  Music, 
  Palette, 
  Sun, 
  Heart 
} from 'lucide-react';
import { FACILITIES } from '../constants';
import SectionHeader from './SectionHeader';

const iconMap: any = {
  ShieldCheck: <ShieldCheck size={32} className="text-brand-pink" />,
  BookOpen: <BookOpen size={32} className="text-brand-blue" />,
  Music: <Music size={32} className="text-brand-purple" />,
  Palette: <Palette size={32} className="text-brand-pink" />,
  Sun: <Sun size={32} className="text-brand-yellow" />,
  Heart: <Heart size={32} className="text-brand-green" />,
};

const Facilities: React.FC = () => {
  return (
    <section id="facilities" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <SectionHeader 
          badge="Why Choose Us"
          title="World-Class Facilities"
          subtitle="We provide everything your child needs for a comfortable and productive learning journey."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {FACILITIES.map((facility, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-gray-50 p-10 rounded-[3rem] hover:bg-brand-yellow/10 transition-colors group border-2 border-transparent hover:border-brand-yellow"
            >
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg mb-8 group-hover:rotate-12 transition-transform">
                {iconMap[facility.icon]}
              </div>
              <h4 className="text-2xl font-heading font-bold text-gray-900 mb-4">{facility.title}</h4>
              <p className="text-gray-500 leading-relaxed">
                {facility.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
