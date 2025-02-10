import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LightDot from '../assets/light-dot.svg'; // Import LightDot

function Testimonials() {
  const testimonials = [
    {
      quote: "The AI automation solutions have transformed how we handle our operations. Incredible results!",
      author: "Sarah Johnson",
      role: "CTO, TechCorp",
      image: "https://i.pravatar.cc/100?img=1"
    },
    {
      quote: "Outstanding platform that delivered beyond our expectations. The ROI has been phenomenal.",
      author: "Michael Chen",
      role: "CEO, InnovateX",
      image: "https://i.pravatar.cc/100?img=2"
    },
    {
      quote: "The best decision we made was implementing this AI solution. Our productivity has soared.",
      author: "Emma Davis",
      role: "Operations Director, FutureScale",
      image: "https://i.pravatar.cc/100?img=3"
    },
    {
      quote: "Incredible AI tools! My team is more efficient and our customer engagement is through the roof.",
      author: "John Smith",
      role: "Marketing Manager, SalesForce Inc.",
      image: "https://i.pravatar.cc/100?img=4"
    },
    {
      quote: "The AI chat agent is a game-changer. It handles customer queries efficiently, freeing up our human agents for complex issues.",
      author: "Ashley Williams",
      role: "Customer Service Lead, GlobalTech",
      image: "https://i.pravatar.cc/100?img=5"
    },
    {
      quote: "Our website conversion rates have significantly increased since implementing the AI-driven design. Highly recommend!",
      author: "Kevin Brown",
      role: "E-commerce Director, RetailCorp",
      image: "https://i.pravatar.cc/100?img=6"
    },
    {
      quote: "The AI email outreach system is phenomenal. We're reaching more potential clients than ever before with personalized and effective campaigns.",
      author: "Jessica Rodriguez",
      role: "Business Development Manager, InnovaSolutions",
      image: "https://i.pravatar.cc/100?img=7"
    },
    {
      quote: "AIAgency has truly exceeded our expectations. Their AI solutions are innovative and incredibly effective. We've seen tangible improvements across our key metrics.",
      author: "Robert Garcia",
      role: "Technology Strategist, FutureForward Co.",
      image: "https://i.pravatar.cc/100?img=9"
    }
  ];

  const [ref, inView] = useInView({
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { x: 0 },
    visible: {
      x: '-100%', // Match Stats x value
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 86, // Increased duration to slow down speed even more from 120 to 86 (1.4x faster)
          ease: "linear"
        }
      }
    }
  };

  const itemVariants = { // Keep itemVariants for fade-in if needed, though sliding is main focus
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 px-6 overflow-hidden" ref={ref}> {/* Adjusted padding, overflow-hidden on section */}
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16 relative overflow-visible" // Removed overflow-hidden, changed to overflow-visible
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute rounded-full bg-primary/20 blur-3xl opacity-100 w-40 h-40 left-1/2 top-[75%] transform -translate-x-1/2 -translate-y-1/2 z-0 filter blur-2xl"> {/* Changed opacity-90 to opacity-100 */}
             <img src={LightDot} alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full" />
          </div>
          <h2 className="text-4xl font-bold mb-4 relative z-10">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-400 relative z-10">
            Don't just take our word for it
          </p>
        </motion.div>

        <motion.div
          className="testimonial-container flex whitespace-nowrap w-max" // Changed class name, added w-max and whitespace-nowrap
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`testimonial-item inline-block mx-8 md:mx-16 ${index % 2 === 0 ? 'bg-dark-lighter' : 'bg-primary/20'} rounded-lg`} // Apply alternating background colors
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 25px rgba(99, 102, 241, 0.2)"
              }}
            >
              <div className="p-4 rounded-lg cursor-pointer"> {/* Reduced padding */}
                <div className="mb-6"> {/* Reduced mb */}
                  <motion.img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full mx-auto mb-2" // Reduced w, h, mb
                    whileHover={{ scale: 1.1 }}
                  />
                  <motion.p
                    className="text-gray-300 italic mb-4 text-sm" // Reduced mb, text-sm
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    "{testimonial.quote}"
                  </motion.p>
                  <div className="text-center">
                    <p className="font-semibold text-sm">{testimonial.author}</p> {/* text-sm */}
                    <p className="text-gray-400 text-sm">{testimonial.role}</p> {/* text-sm */}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
