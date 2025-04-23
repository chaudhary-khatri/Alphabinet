'use client';

import { motion, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, ease: [0.16, 1, 0.3, 1], duration: 0.6 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }
};

export default function TestimonialsSection() {
  const testimonials = [
    { quote: 'Alphabinet transformed our outdated website into a modern, user-friendly platform that significantly boosted our conversions.', author: 'Hasan Ali', position: 'Managing Director', company: 'Ali Enterprises' },
    { quote: 'Their bespoke dashboard gave us insights we never had before – a game changer for decision making.', author: 'Karan Kapoor', position: 'CTO', company: 'FinEdge Analytics' },
    { quote: 'Sales jumped 40% within two months thanks to Alphabinet’s digital strategy.', author: 'Jatin Sherawat', position: 'CEO', company: 'Retail Solutions' },
    { quote: 'Onboarding was seamless. The team guided us every step of the way.', author: 'Neha Gupta', position: 'Operations Manager', company: 'HealthConnect' },
    { quote: 'Our bounce rate dropped 25% after their responsive redesign.', author: 'Rahul Menon', position: 'Head of Product', company: 'EduSmart Innovations' },
    { quote: 'We reached Google page 1 for our top keywords in just three months.', author: 'Anjali Rao', position: 'Digital Marketing Lead', company: 'GreenLeaf Organics' },
    { quote: 'Alphabinet helped us migrate our legacy system to a modern JAMstack architecture, improving page load speed by 60%.', author: 'Sunita Verma', position: 'CTO', company: 'TechNova Solutions' },
    { quote: 'Their multilingual support improved our reach across India and boosted regional engagement significantly.', author: 'Vikram Rao', position: 'Head of International Sales', company: 'GlobalMart' },
    { quote: 'The intuitive CMS they built saves us hours every week managing content.', author: 'Rahul Deshmukh', position: 'Content Manager', company: 'EduLearn' },
    { quote: 'Their cost-effective solutions gave us enterprise-grade features on a startup budget.', author: 'Anita Sharma', position: 'Founder', company: 'GreenStart' },
    { quote: 'Excellent after-sales support – they’re always a message away!', author: 'Mohit Gupta', position: 'Operations Head', company: 'UrbanKart' }
  ];

  const getInitialCount = () => {
    const w = window.innerWidth;
    if (w < 640) return 3;     // mobile
    if (w < 1024) return 4;    // tablet / medium
    return 6;                  // desktop
  };

  const [count, setCount] = useState(0);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (!showAll) {
        setCount(getInitialCount());
      }
    };
    setCount(getInitialCount());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [showAll]);

  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, count);

  return (
    <LazyMotion features={domAnimation}>
      <section id="testimonials" className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-maroon-100 text-maroon-600 rounded-full text-sm font-semibold mb-3">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-base sm:text-lg">
              Real feedback from businesses across India.
            </p>
          </motion.div>

          <motion.div
            role="list"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence>
              {visibleTestimonials.map((t, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  exit={{ opacity: 0 }}
                  className="group relative overflow-hidden rounded-xl backdrop-blur-md bg-white/80 border border-maroon-100 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
                  role="listitem"
                >
                  <svg
                    className="absolute inset-0 w-full h-full text-maroon-200 opacity-10 pointer-events-none"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <pattern id={`grid${i}`} width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill={`url(#grid${i})`} />
                  </svg>

                  <div className="relative z-10 p-6 flex-grow">
                    <FaQuoteLeft className="text-maroon-400 text-3xl mb-4 opacity-30" />
                    <p className="text-gray-800 text-base mb-6">{t.quote}</p>
                  </div>
                  <div className="relative z-10 px-6 py-4 border-t border-gray-100 bg-white">
                    <p className="text-gray-900 font-semibold">{t.author}</p>
                    <p className="text-gray-500 text-sm">{t.position}, {t.company}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {(testimonials.length > count || showAll) && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAll(prev => !prev)}
                className="inline-flex items-center px-6 py-3 bg-maroon-600 text-white rounded-full hover:bg-maroon-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-maroon-500 focus:ring-offset-2"
              >
                {showAll ? 'Show Less' : 'Show All'}
              </button>
            </div>
          )}
        </div>
      </section>
    </LazyMotion>
  );
}
