import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCpu, FiBarChart2, FiLayers, FiShield } from 'react-icons/fi';
import FadeInSection from './FadeInSection'; // Import FadeInSection

function Features() {
  const features = [
    {
      icon: <FiCpu className="w-6 h-6" />,
      title: 'Advanced AI Processing',
      description: 'Leverage cutting-edge AI algorithms for intelligent automation and decision making.'
    },
    {
      icon: <FiBarChart2 className="w-6 h-6" />,
      title: 'Real-time Analytics',
      description: 'Get instant insights with our powerful real-time analytics dashboard.'
    },
    {
      icon: <FiLayers className="w-6 h-6" />,
      title: 'Scalable Infrastructure',
      description: 'Built on a robust, scalable infrastructure that grows with your business.'
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: 'Enterprise Security',
      description: 'Bank-grade security measures to protect your sensitive data.'
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } } // Increased duration here
  };

  return (
    <section className="py-16 px-6 relative overflow-hidden h-screen flex items-center justify-center" ref={ref}> {/* Added flex items-center justify-center to section */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#21295c] via-[#161c3f] to-[#0b0e21] opacity-50 z-0 filter blur-2xl">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-30 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#0b0e21] mix-blend-soft-light pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(74,85,163,0.5)_0%,_transparent_70%)] z-10"></div>
      </div>
      <div className="container mx-auto z-10 relative">
        <FadeInSection duration={1}>
          <motion.div
            className="text-center mb-24" // Increased mb to mb-24
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-4xl font-bold mb-4 hover:gradient-text transition-colors duration-500 cursor-pointer" // Added hover effect and cursor-pointer
              whileHover={{ scale: 1.05, transition: { duration: 0.5 } }} // Added whileHover for scale effect
            >
              Powerful Features
            </motion.h2>
            <p className="text-xl text-gray-400">
              Transform your business with our cutting-edge AI solutions
            </p>
          </motion.div>
        </FadeInSection>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-16" // Increased gap to gap-16
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(99, 102, 241, 0.3)",
              }}
              className="p-8 rounded-lg bg-dark-lighter hover:bg-primary/10 transition-colors cursor-pointer" // Increased padding to p-8
            >
              <motion.div
                className="w-16 h-16 rounded-lg bg-primary/20 flex items-center justify-center mb-6" // Increased w, h, mb
                whileHover={{
                  rotate: 360,
                  transition: { duration: 0.6 }
                }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3> {/* Increased text-xl to text-2xl */}
              <p className="text-lg text-gray-400">{feature.description}</p> {/* Increased text-base to text-lg */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Features;
