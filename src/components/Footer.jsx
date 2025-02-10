import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiTwitter } from 'react-icons/fi'; // Re-import FiTwitter

function Footer() {
  return (
    <footer className="bg-dark-lighter py-12 px-6">
      <div className="container mx-auto">
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">KayAI</h3>
            <p className="text-gray-400 mb-4">
              Transforming businesses through intelligent automation and cutting-edge AI solutions.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://x.com/Kay03014886"
                className="text-gray-400 hover:text-white"
                whileHover={{ scale: 1.1 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiTwitter className="w-6 h-6" /> {/* Re-added Twitter Icon */}
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/kay-nguyen-a44751197/"
                className="text-gray-400 hover:text-white"
                whileHover={{ scale: 1.1 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiLinkedin className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>

          {/* Middle Section - Contact Me with Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact Me</h4>
            <p className="text-gray-400">
              Email: ledai6502@gmail.com
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Stay updated with our latest news and updates.</p>
            <motion.form
              className="flex"
              whileHover={{ scale: 1.02 }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-lg bg-dark border border-primary/30 focus:outline-none focus:border-primary"
              />
              <motion.button
                className="px-4 py-2 bg-primary rounded-r-lg hover:bg-primary-dark transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-gray-800 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p>&copy; {new Date().getFullYear()} KayAI. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
