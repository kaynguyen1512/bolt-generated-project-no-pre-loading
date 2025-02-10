import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

function Hero() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.62/build/spline-viewer.js';
    document.body.appendChild(script);
  }, []);

  return (
    <section className="h-screen flex items-center justify-center px-6 relative">
      <div className="text-center z-10">
        <motion.h1 
          className="text-5xl lg:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Traditional Business? 
          <motion.span 
            className="gradient-text block"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            You're Losing Leads!
          </motion.span>
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          AI is the Future, and We’re Here to Help.
        </motion.p>
        <motion.a 
          href="https://calendly.com/kaynguyen1512/30min" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="button-primary"
          initial={{ opacity: 0, y: 20 }} // Added initial state for fade-in
          animate={{ opacity: 1, y: 0 }} // Added animate state for fade-in
          transition={{ delay: 0.6, duration: 0.6 }} // Added transition for fade-in
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book a Demo
        </motion.a>
      </div>
      <spline-viewer url="https://prod.spline.design/qr4UegYkwiex2zGH/scene.splinecode" className="absolute inset-0 z-0"></spline-viewer>
    </section>
  );
}

export default Hero;
