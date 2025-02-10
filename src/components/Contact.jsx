import React from 'react';
    import { motion } from 'framer-motion';
    import FadeInSection from './FadeInSection';

    function Contact() {
      return (
        <section id="contact" className="py-16 px-6 bg-black"> {/* Added id="contact" */}
          <div className="container mx-auto">
            <FadeInSection>
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold mb-4 text-white">Still have questions?</h2>
                <p className="text-xl text-gray-400 mb-8">
                  Click the chat icon in the bottom right corner to chat with our AI agent for instant answers.
                </p>
              </motion.div>
            </FadeInSection>
            <div style={{ height: '100px' }} /> {/* Added vertical space of 100px */}
            <FadeInSection>
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold mb-4 text-white">Book a Meeting</h2>
                <p className="text-xl text-gray-400 mb-8">
                  Ready to discuss how AI can transform your business? <br />
                  Book a 30-minute meeting with me via Calendly.
                </p>
                <motion.a
                  href="https://calendly.com/kaynguyen1512/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-primary inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book via Calendly
                </motion.a>
              </motion.div>
            </FadeInSection>
            <div style={{ height: '100px' }} /> {/* Added vertical space of 100px before FAQ section */}
          </div>
        </section>
      );
    }

    export default Contact;
