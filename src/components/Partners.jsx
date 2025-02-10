import React from 'react';
import { motion } from 'framer-motion';
import FadeInSection from './FadeInSection'; // Import FadeInSection

function Partners() {
  const partners = [
    { name: 'TechLab', logo: '/techlab.svg' },
    { name: 'Strifex', logo: '/strifex.svg' },
    { name: 'Sassway', logo: '/sassway.svg' },
    { name: 'Strifex', logo: '/strifex.svg' },
    { name: 'Signpass', logo: '/signpass.svg' }
  ];

  return (
    <section className="py-12 px-6">
      <FadeInSection duration={1}> {/* Increased duration to 1 second */}
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.7, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
                className="w-32 h-12 flex items-center justify-center"
              >
                <span className="text-xl font-semibold text-gray-400">{partner.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}

export default Partners;
