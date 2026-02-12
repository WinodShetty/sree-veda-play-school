
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const images = [
  { url: "assets/yoga.webp", title: "Yoga & Meditation" },
  { url: "assets/dance.webp", title: "Cultural Day Celebration" },
  { url: "assets/staff.webp", title: "Our Dedicated Team" },
  { url: "assets/interactive.webp", title: "Interactive Learning" },
  { url: "assets/classroom.webp", title: "Classroom Fun" },
  { url: "assets/Hero.webp", title: "Main Entrance" }
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionHeader 
          badge="Moments"
          title="Life at SREE VEDA"
          subtitle="Glimpses of our vibrant activities, events, and the joyful moments we share every day."
        />

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative overflow-hidden rounded-[2rem] shadow-lg group cursor-pointer"
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full object-cover group-hover:scale-110 transition-transform duration-700 aspect-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <p className="text-white font-bold">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="bg-brand-blue text-white px-10 py-4 rounded-full font-bold shadow-lg hover:shadow-2xl transition-all">
            Follow Our Instagram
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
