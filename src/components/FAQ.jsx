import React, { useState } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';

    const FAQItem = ({ question, answer }) => {
      const [isOpen, setIsOpen] = useState(false);

      return (
        <div className="mb-4">
          <motion.div
            className="cursor-pointer p-4 bg-gray-800 rounded-lg shadow-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            <h4 className="text-lg font-semibold text-white">{question}</h4>
          </motion.div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="p-4 bg-gray-700 rounded-lg mt-2"
                initial={{ height: 0 }} // Initial state
                animate={{ height: 'auto' }} // Animate to full height
                exit={{ height: 0 }} // Exit state
                transition={{ duration: 0.4, ease: "easeInOut" }} // Adjusted duration and easing
              >
                <p className="text-gray-300">{answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    };

    function FAQ() {
      const faqs = [
        {
          question: "What is AI automation, and how can it help my business?",
          answer: "AI automation leverages artificial intelligence to streamline business processes such as lead engagement, email marketing, and website optimization. By automating these tasks, you save time, reduce errors, and improve conversions."
        },
        {
          question: "Can AI chat agents integrate with my existing CRM and tools?",
          answer: "Yes! Our AI chat agents are designed to integrate seamlessly with your CRM, marketing tools, and customer databases for smooth operations and data synchronization."
        },
        {
          question: "Do you offer a demo before I commit to your services?",
          answer: "Yes, we provide a free consultation and demo to show you how our AI solutions can enhance your business."
        },
        {
          question: "Do I need technical expertise to use your AI tools?",
          answer: "No, our tools are user-friendly and designed for business owners with no technical background. We also provide full training and ongoing support to ensure you can easily manage your AI systems."
        },
        {
          question: "Can your AI system automate lead nurturing and follow-ups?",
          answer: "Yes, our AI solutions are designed to automate lead nurturing, ensuring consistent follow-ups and maximizing the potential for conversions."
        }
      ];

      return (
        <section className="py-16 px-6 bg-black">
          <div className="container mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-400">
                Here are some common questions we receive.
              </p>
            </motion.div>

            <div className="flex flex-col">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>
      );
    }

    export default FAQ;
