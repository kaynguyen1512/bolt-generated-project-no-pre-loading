import React from 'react';
    import { motion } from 'framer-motion';
    import { FiUsers, FiMessageSquare, FiTrendingUp, FiClock, FiTarget, FiMail, FiCheckCircle, FiVolume2, FiLayout, FiMonitor } from 'react-icons/fi'; // Ensure all icons are imported
    import LightDot from '../assets/light-dot.svg'; // Import the glowing dot
    import FadeInSection from './FadeInSection';

    const ServiceItem = ({ imageSrc, imageAlt, title, features }) => (
      <div className="grid md:grid-cols-2 gap-8" style={{ marginBottom: '50px' }}>
        <FadeInSection>
          <motion.div className="flex items-center justify-center">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </FadeInSection>

        <FadeInSection>
          <motion.div className="p-8 transition-transform duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden flex items-center justify-center text-center">
            <div className="absolute rounded-full bg-primary/20 blur-2xl opacity-90 w-44 h-44">
              <img src={LightDot} alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full" />
            </div>
            <div className="relative p-8">
              <h3 className="text-3xl font-semibold mb-6 text-white leading-tight relative text-center">{title}</h3>
              <div className="text-gray-400 space-y-3 relative text-left">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    {feature.icon}
                    <p className="text-lg">{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </FadeInSection>
      </div>
    );

    function Services() {
      const serviceData = [
        {
          title: "Jordan Belfort AI Chat Agent",
          imageSrc: "https://aunoa.ai/wp-content/uploads/2024/05/tipos-de-chatbots.webp",
          imageAlt: "Jordan Belfort AI Chat Agent",
          features: [
            { icon: <FiMessageSquare className="text-primary w-5 h-5 flex-shrink-0" />, text: "Engage leads 24/7 with human-like interactions." },
            { icon: <FiTrendingUp className="text-primary w-5 h-5 flex-shrink-0" />, text: "Provides instant answers, books appointments, and qualifies leads automatically." },
            { icon: <FiClock className="text-primary w-5 h-5 flex-shrink-0" />, text: "30% cost reduction and 10+ hours saved weekly versus hiring human staff." },
          ]
        },
        {
          title: "AI Voice Agent",
          imageSrc: "https://imageio.forbes.com/specials-images/imageserve/64175a98fd43cd008f7ffb6e/AI-speaks-letters--text-to-speech-or-TTS--text-to-voice--speech-synthesis/960x0.jpg?format=jpg&width=960",
          imageAlt: "AI Voice Agent Service",
          features: [
            { icon: <FiVolume2 className="text-primary w-5 h-5 flex-shrink-0" />, text: "Automate customer service with intelligent voice interactions." },
            { icon: <FiTrendingUp className="text-primary w-5 h-5 flex-shrink-0" />, text: "Handle high call volumes and improve customer satisfaction." },
            { icon: <FiClock className="text-primary w-5 h-5 flex-shrink-0" />, text: "Reduce wait times and operational costs." },
          ]
        },
        {
          title: "The 7 Figure AI Outreach System",
          imageSrc: "https://associationsnow.com/wp-content/uploads/2023/09/AI-and-email.jpg",
          imageAlt: "7 Figure AI Email Outreach System",
          features: [
            { icon: <FiMail className="text-primary w-5 h-5 flex-shrink-0" />, text: "Capable of sending ~2,000 cold emails/day (~60,000 emails/month)." },
            { icon: <FiTarget className="text-primary w-5 h-5 flex-shrink-0" />, text: "90% accuracy in targeting your Ideal Client Profile (ICP)." },
            { icon: <FiCheckCircle className="text-primary w-5 h-5 flex-shrink-0" />, text: "Achieve open rates of 25%+ with personalized emails." },
          ]
        },
        {
          title: "High Converting Website Design",
          imageSrc: "https://cdn.shopify.com/s/files/1/0070/7032/files/homepage-shopify-theme.png?v=1703001307",
          imageAlt: "High Converting Website Design",
          features: [
            { icon: <FiMonitor className="text-primary w-5 h-5 flex-shrink-0" />, text: "A visually stunning website designed to capture attention and build trust." },
            { icon: <FiTrendingUp className="text-primary w-5 h-5 flex-shrink-0" />, text: "Enhanced user experience with high-tech 3D animations to boost conversions." },
            { icon: <FiUsers className="text-primary w-5 h-5 flex-shrink-0" />, text: "Seamless integration with AI tools for added functionality and performance optimization." },
          ]
        }
      ];

      return (
        <section id="services" className="py-16 px-6 bg-black"> {/* Added id="services" */}
          <div className="container mx-auto">
            <FadeInSection>
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
                  Our Services
                </motion.h2>
                <p className="text-xl text-gray-400">
                  Discover how our AI solutions can transform your business.
                </p>
              </motion.div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="flex flex-col gap-[50px]" style={{ gap: '50px' }}>
                {serviceData.map((service, index) => (
                  <ServiceItem
                    key={index}
                    imageSrc={service.imageSrc}
                    imageAlt={service.imageAlt}
                    title={service.title}
                    features={service.features}
                  />
                ))}
              </div>
            </FadeInSection>
          </div>
        </section>
      );
    }

    export default Services;
