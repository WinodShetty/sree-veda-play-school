
import React from 'react';
import { SCHOOL_INFO, NAV_ITEMS } from '../constants';
import { Facebook, Instagram, Youtube, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 overflow-hidden relative">
      {/* Decorative Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 transform">
        <svg className="relative block w-full h-12" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="white"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-1">
          <a href="#home" className="flex items-center gap-2 mb-8 group">
            <div className="w-10 h-10 bg-brand-yellow rounded-full flex items-center justify-center text-xl shadow-lg transform group-hover:rotate-12 transition-transform">
              🏫
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl text-brand-yellow leading-tight">SREE VEDA</span>
              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">Play School & Day Care</span>
            </div>
          </a>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            Nurturing young minds with a blend of modern smart learning and traditional values. The best preschool in Ramanthapur for your child's early education.
          </p>
          <div className="flex gap-4">
            <a href={SCHOOL_INFO.social.facebook} className="bg-white/10 p-3 rounded-xl hover:bg-brand-blue transition-colors">
              <Facebook size={20} />
            </a>
            <a href={SCHOOL_INFO.social.instagram} className="bg-white/10 p-3 rounded-xl hover:bg-brand-pink transition-colors">
              <Instagram size={20} />
            </a>
            <a href={SCHOOL_INFO.social.youtube} className="bg-white/10 p-3 rounded-xl hover:bg-red-600 transition-colors">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-bold text-lg mb-8 text-brand-pink">Quick Links</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full"></span> {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-lg mb-8 text-brand-blue">Programs</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><a href="#programs" className="hover:text-white transition-colors">Play Group (1.5 - 2.5y)</a></li>
            <li><a href="#programs" className="hover:text-white transition-colors">Nursery (2.5 - 3.5y)</a></li>
            <li><a href="#programs" className="hover:text-white transition-colors">LKG (3.5 - 4.5y)</a></li>
            <li><a href="#programs" className="hover:text-white transition-colors">UKG (4.5 - 5.5y)</a></li>
            <li><a href="#programs" className="hover:text-white transition-colors">Day Care & Tuitions</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-lg mb-8 text-brand-green">Our Location</h4>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            {SCHOOL_INFO.address}
          </p>
          <p className="text-gray-400 text-sm mb-4">
            <span className="font-bold text-white">Ph:</span> {SCHOOL_INFO.phone}
          </p>
          <p className="text-gray-400 text-sm">
            <span className="font-bold text-white">Email:</span> {SCHOOL_INFO.email}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-500 text-xs">
          © 2026 SREE VEDA Play School & Day Care. All rights reserved.
        </p>
        <div className="flex items-center gap-1 text-gray-500 text-xs">
          Made with <Heart size={12} className="text-brand-pink fill-brand-pink" /> for the bright futures of Ramanthapur
        </div>
        <div className="flex gap-6 text-gray-500 text-xs">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
        <div className="text-gray-500 text-xs text-center">
    Developed by <span className="text-sky-400 font-semibold">engineervk</span>
  </div>
      </div>
    </footer>
  );
};

export default Footer;
