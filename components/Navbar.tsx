
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, SCHOOL_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled ? 'glass shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-yellow rounded-full flex items-center justify-center border-2 border-white shadow-lg transform group-hover:rotate-12 transition-transform">
            <span className="text-xl md:text-2xl">🏫</span>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-xl md:text-5xl text-brand-pink leading-tight">SREE VEDA</span>
            <span className="text-[10px] md:text-2xl font-bold text-yellow-600 uppercase tracking-widest">Play School & Day Care</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="font-semibold text-gray-700 hover:text-brand-pink transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-1 after:bg-brand-yellow after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact"
            className="bg-brand-pink text-white px-6 py-2 rounded-full font-bold shadow-lg hover:bg-brand-blue transition-all transform hover:scale-105 active:scale-95"
          >
            Admissions Open
          </a>
        </div>

        {/* Mobile Toggle */}
       <button 
  className="lg:hidden text-gray-900 z-[110] relative"
  onClick={() => setIsOpen(!isOpen)}
  aria-label="Toggle Menu"
>
  {isOpen ? <X size={30} strokeWidth={2.5} /> : <Menu size={30} strokeWidth={2.5} />}
</button>

      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-0 bg-white z-[90] flex flex-col items-center justify-center gap-8 transition-transform duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {NAV_ITEMS.map((item) => (
          <a 
            key={item.label}
            href={item.href}
            className="text-2xl font-heading font-bold text-gray-800"
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a 
          href="#contact"
          className="bg-brand-yellow text-gray-800 px-8 py-3 rounded-full font-bold text-lg"
          onClick={() => setIsOpen(false)}
        >
          Enroll Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
