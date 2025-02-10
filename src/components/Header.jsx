import React, { useState, useEffect } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';

    function Header() {
      const [isScrolled, setIsScrolled] = useState(false);

      useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      return (
        <AnimatePresence>
          <motion.header
            className={`fixed w-full z-50 transition-all duration-300 ${
              isScrolled ? 'bg-black bg-opacity-50 backdrop-blur-lg' : 'bg-transparent'
            }`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="container mx-auto px-6 py-2">
              <nav className="flex items-center justify-between h-16">
                <motion.div
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <a href="/" className="text-2xl font-bold gradient-text">
                    KayAI
                  </a>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-8"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <motion.a
                    href="#services" // Link to Services section
                    className="text-gray-300 hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    Services
                  </motion.a>
                  <motion.a
                    href="#process" // Link to Process section
                    className="text-gray-300 hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    Process
                  </motion.a>
                  <motion.a
                    href="#contact" // Updated to link to the Contact section
                    className="text-gray-300 hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    Contact
                  </motion.a>
                </motion.div>
              </nav>
            </div>
          </motion.header>
        </AnimatePresence>
      );
    }

    export default Header;
