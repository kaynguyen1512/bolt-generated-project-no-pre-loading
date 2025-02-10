import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FlickeringLights from './FlickeringLights'; // Import FlickeringLights

function Stats() {
  const stats = [
    { number: '10,000+', label: 'AI Interactions Daily' },
    { number: '500+', label: 'Global Enterprise Clients' },
    { number: '99.99%', label: 'System Uptime' },
    { number: '24/7', label: 'Dedicated Support' },
    { number: '40%', label: 'Increase in Lead Conversion' },
    { number: '20+', label: 'AI Solutions Deployed' },
    { number: '95%', label: 'Customer Satisfaction' },
    { number: '3X', label: 'Growth in ROI for Clients' },
  ];

  const [ref, inView] = useInView({
    threshold: 0.2
  });

  const containerVariants = {
    hidden: { x: 0 },
    visible: {
      x: '-50%', // Adjusted to -50% for potentially better loop, can be fine-tuned
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30, // Adjust duration for speed
          ease: "linear"
        }
      }
    }
  };

  return (
    <section className="py-20 px-6 bg-[#0E1428] overflow-hidden relative" ref={ref}>
      <FlickeringLights count={50} /> {/* Add FlickeringLights component here */}
      <motion.div
        className="stats-container flex whitespace-nowrap w-max relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="stat-item text-center mx-8 md:mx-16"
            whileHover={{
              scale: 1.05,
            }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-4xl font-bold mb-2 gradient-text">
              {stat.number}
            </div>
            <div className="text-gray-400">
              {stat.label}
            </div>
          </motion.div>
        ))}
         {stats.map((stat, index) => (
          <motion.div
            key={`duplicate-${index}`}
            className="stat-item text-center mx-8 md:mx-16"
             whileHover={{
              scale: 1.05,
            }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-4xl font-bold mb-2 gradient-text">
              {stat.number}
            </div>
            <div className="text-gray-400">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Stats;
