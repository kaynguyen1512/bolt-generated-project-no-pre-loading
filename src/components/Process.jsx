import React from 'react';
    import { motion } from 'framer-motion';
    import FadeInSection from './FadeInSection';
    import LightDot from '../assets/light-dot.svg'; // Import the glowing dot

    function Process() {
      return (
        <FadeInSection duration={2}>
          <section id="process" className="py-16 px-6 bg-black h-screen flex items-center justify-center"> {/* Added id="process" */}
            <div className="container mx-auto">
              <motion.div
                className="text-center mb-16 relative" // Added relative for positioning
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute rounded-full bg-primary/20 blur-3xl opacity-100 w-40 h-40 left-1/2 top-[75%] transform -translate-x-1/2 -translate-y-1/2 z-0 filter"> {/* Glowing dot */}
                  <img src={LightDot} alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full" />
                </div>
                <motion.h2
                  className="text-4xl font-bold mb-4 text-white hover:gradient-text transition-colors duration-500 cursor-pointer" // Added hover effect and cursor-pointer
                  whileHover={{ scale: 1.05, transition: { duration: 0.5 } }} // Added whileHover for scale effect
                >
                  Our Process
                </motion.h2>
                <p className="text-xl text-gray-400">
                  Follow these simple steps to work with us.
                </p>
              </motion.div>

              <div className="flex flex-row justify-center gap-8"> {/* Centering the steps */}
                {/* Flip Card 1 */}
                <div className="card relative">
                  <div className="card-glow-border"></div>
                  <div className="card-inner">
                    <div className="card-front">
                      Step 1: Analyze
                    </div>
                    <div className="card-back" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                      Analyze your business
                    </div>
                  </div>
                </div>

                {/* Flip Card 2 */}
                <div className="card relative">
                  <div className="card-glow-border"></div>
                  <div className="card-inner">
                    <div className="card-front">
                      Step 2: Build
                    </div>
                    <div className="card-back" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                      Build tailored AI system
                    </div>
                  </div>
                </div>

                {/* Flip Card 3 */}
                <div className="card relative">
                  <div className="card-glow-border"></div>
                  <div className="card-inner">
                    <div className="card-front">
                      Step 3: Deploy
                    </div>
                    <div className="card-back" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                      Maintain & Enhance
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
      );
    }

    export default Process;
