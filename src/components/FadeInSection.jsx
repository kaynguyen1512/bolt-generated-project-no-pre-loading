import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function FadeInSection({ children, delay = 0, duration = 0.6 }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: duration, delay }}
    >
      {children}
    </motion.div>
  );
}

export default FadeInSection;
