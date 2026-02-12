
import React, { useEffect, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/features/Hero';

// Lazy load non-critical sections for performance
const About = React.lazy(() => import('./components/About'));
const Programs = React.lazy(() => import('./components/Programs'));
const Facilities = React.lazy(() => import('./components/Facilities'));
const Gallery = React.lazy(() => import('./components/Gallery'));
const Testimonials = React.lazy(() => import('./components/Testimonials'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));

const App: React.FC = () => {
  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
       <div className="fixed inset-0 -z-20 bg-gradient-to-br from-[#0B1D3A] via-[#0F2A52] to-[#050F22]" />
       
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-40 flex items-center justify-center">Loading Joy...</div>}>
          <About />
          <Programs />
          <Facilities />
          <Gallery />
          <Testimonials />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      
      {/* Dynamic CTA */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 md:hidden">
        <a href="tel:+919347710324" className="bg-brand-blue text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
        </a>
      </div>
    </div>
  );
};

export default App;
