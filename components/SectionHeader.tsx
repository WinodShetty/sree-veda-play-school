
import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  badge?: string;
  center?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, badge, center = true }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-16 ${center ? 'text-center' : 'text-left'}`}
    >
      {badge && (
        <span className="inline-block px-4 py-1 bg-brand-yellow/20 text-brand-pink font-bold rounded-full mb-4 text-sm tracking-widest uppercase">
          {badge}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
        {title}
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default SectionHeader;
