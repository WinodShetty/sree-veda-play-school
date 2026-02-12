
import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  bg?: 'white' | 'gray' | 'brand';
}

export const Section: React.FC<SectionProps> = ({ id, className = "", children, bg = 'white' }) => {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    brand: 'bg-brand-yellow/5'
  };

  return (
    <section 
      id={id} 
      className={`py-20 md:py-28 overflow-hidden relative ${bgColors[bg]} ${className}`}
    >
      <div className="container mx-auto px-6">
        {children}
      </div>
    </section>
  );
};
