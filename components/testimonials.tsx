'use client';

import { motion, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      ease: [0.16, 1, 0.3, 1],
      duration: 0.6,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    }
  },
  hover: {
    y: -8,
    transition: { duration: 0.3, ease: "easeOut" }
  }
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
    if (w < 640) return 3;
    if (w < 1024) return 4;
    return 6;
  };

  const [count, setCount] = useState(0);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const handleResize = () => !showAll && setCount(getInitialCount());
    setCount(getInitialCount());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [showAll]);

  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, count);

  return (
    <LazyMotion features={domAnimation}>
      <section id="testimonials" className="py-24 bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10 dark:opacity-[3%] pointer-events-none">
          <div className="absolute inset-0 bg-[url('/svg/grid-pattern.svg')] bg-[size:120px_120px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              className="inline-block px-6 py-2 bg-maroon-100/80 dark:bg-maroon-900/50 text-maroon-600 dark:text-maroon-300 rounded-full text-sm font-medium mb-4 border border-maroon-200/30 dark:border-maroon-800/50"
            >
              Client Voices
            </motion.span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              Success <span className="text-maroon-600 dark:text-maroon-400">Stories</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Discover why businesses across India trust us with their digital transformation journeys.
            </p>
          </motion.div>

          <motion.div
            role="list"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            <AnimatePresence mode='popLayout'>
              {visibleTestimonials.map((t, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover="hover"
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group relative overflow-hidden rounded-2xl backdrop-blur-md bg-white/80 dark:bg-gray-900/70 border border-maroon-100/30 dark:border-gray-800/50 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
                  role="listitem"
                >
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute -inset-8 bg-gradient-to-r from-maroon-500/10 to-transparent opacity-30 animate-gradient-rotate" />
                  </div>

                  {/* Dynamic grid background */}
                  <svg
                    className="absolute inset-0 w-full h-full text-maroon-200/20 dark:text-gray-800/50 pointer-events-none"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <pattern id={`diagonal-grid-${i}`} width="15" height="15" patternUnits="userSpaceOnUse">
                      <path d="M 0 0 L 15 0 15 15" fill="none" stroke="currentColor" strokeWidth="0.8" />
                    </pattern>
                    <rect width="100%" height="100%" fill={`url(#diagonal-grid-${i})`} />
                  </svg>

                  <div className="relative z-10 p-8 flex-grow">
                    <FaQuoteLeft className="text-maroon-400/60 dark:text-maroon-500/40 text-4xl mb-6" />
                    <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed mb-8">
                      {t.quote}
                    </p>
                    <FaQuoteRight className="text-maroon-400/60 dark:text-maroon-500/40 text-4xl ml-auto" />
                  </div>

                  <div className="relative z-10 px-8 py-6 border-t border-gray-100/50 dark:border-gray-800/50 bg-white/50 dark:bg-gray-900/70">
                    <p className="text-gray-900 dark:text-gray-100 font-semibold">{t.author}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                      {t.position} <span className="mx-2">•</span> {t.company}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {testimonials.length > count && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mt-16"
            >
              <button
                onClick={() => setShowAll(prev => !prev)}
                className="inline-flex items-center px-8 py-4 bg-maroon-600 hover:bg-maroon-700 dark:bg-maroon-700 dark:hover:bg-maroon-800 text-white rounded-full text-base font-medium shadow-lg hover:shadow-maroon-400/20 transition-all duration-300 group"
              >
                <span className="mr-3">{showAll ? 'Show Less' : 'Show All'}</span>
                <motion.span
                  animate={{ x: showAll ? 0 : 4 }}
                  transition={{ repeat: Infinity, repeatType: "mirror", duration: 1.2 }}
                  className="inline-block group-hover:translate-x-1 transition-transform"
                >
                  {showAll ? '↑' : '↓'}
                </motion.span>
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </LazyMotion>
  );
}