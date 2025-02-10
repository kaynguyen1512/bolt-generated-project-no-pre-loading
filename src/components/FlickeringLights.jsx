import React from 'react';
import { motion } from 'framer-motion';
import { getRandomInt } from '../utils/random';

const FlickeringLight = ({ position }) => {
  const flickerAnimation = {
    initial: { opacity: 0.7, boxShadow: '0 0 0 rgba(99, 102, 241, 0)' },
    animate: {
      opacity: [0.7, 1.0, 0.7],
      boxShadow: [
        '0 0 0 rgba(99, 102, 241, 0)',
        '0 0 10px rgba(99, 102, 241, 0.8)',
        '0 0 0 rgba(99, 102, 241, 0)'
      ],
      transition: {
        duration: getRandomInt(1, 3), // Faster duration for each light
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear"
      }
    }
  };

  return (
    <motion.div
      className="absolute rounded-full bg-primary"
      style={{
        top: `${position.y}%`,
        left: `${position.x}%`,
        width: '2px', // Slightly bigger size
        height: '2px', // Slightly bigger size
      }}
      variants={flickerAnimation}
      initial="initial"
      animate="animate"
    />
  );
};

const FlickeringLights = ({ count }) => {
  const lights = Array.from({ length: count }, (_, index) => {
    return {
      id: index,
      position: { x: getRandomInt(5, 95), y: getRandomInt(5, 95) }, // Random position within bounds
    };
  });

  return (
    <>
      {lights.map(light => (
        <FlickeringLight key={light.id} position={light.position} />
      ))}
    </>
  );
};

export default FlickeringLights;
