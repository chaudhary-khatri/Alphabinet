"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { useInView } from "framer-motion";

const PortfolioItem: React.FC<{ image: string; title: string; category: string }> = ({
  image,
  title,
  category,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="group relative overflow-hidden rounded-2xl backdrop-blur-md bg-white/80 border border-maroon-100/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-maroon-200 dark:bg-gray-900/70 dark:border-maroon-900/80 dark:hover:border-maroon-800"
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true">
        <div className="absolute -inset-8 bg-gradient-to-r from-maroon-500/10 to-transparent opacity-30 animate-gradient-rotate" />
      </div>

      {/* Dynamic grid background */}
      <svg
        className="absolute inset-0 w-full h-full text-maroon-200/30 dark:text-maroon-900/30 pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <pattern id="diagonal-grid" width="15" height="15" patternUnits="userSpaceOnUse">
          <path d="M 0 0 L 15 0 15 15" fill="none" stroke="currentColor" strokeWidth="0.8" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#diagonal-grid)" />
      </svg>

      {/* Optimized Image */}
      <div className="aspect-video overflow-hidden relative rounded-t-2xl">
        <Image
          src={image}
          alt={title}
          width={800}
          height={600}
          quality={75} // Compress without losing too much quality
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy" // lazy load for below-the-fold items
          placeholder="blur" // Optional: Add blur placeholder if available
          blurDataURL="/placeholder.png" // Optional: Use a low-quality placeholder
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
      </div>

      <div className="relative z-10 p-6 space-y-3">
        <div className="inline-flex items-center px-3 py-1 bg-maroon-100/80 dark:bg-maroon-900/50 text-maroon-600 dark:text-maroon-300 rounded-full text-xs font-medium tracking-wide border border-maroon-200/30 dark:border-maroon-800/50">
          {category}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-maroon-700 dark:group-hover:text-maroon-400 transition-colors duration-300">
          {title}
        </h3>
        <motion.div whileHover={{ x: 4 }} className="inline-block">
          <Link
            href="#"
            aria-label={`View case study for ${title}`} // Better accessibility for screen readers
            className="inline-flex items-center text-maroon-600 hover:text-maroon-700 dark:text-maroon-300 dark:hover:text-maroon-400 font-medium text-sm transition-colors"
          >
            View Case Study
            <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function Portfolio() {

  const projects = [
    { image: '/portfolio/web1.webp', title: 'Corporate Website Rebuild', category: 'Web Development' },
    { image: '/portfolio/webdesign.webp', title: 'Freelancer Portfolio Site', category: 'Web Development' },
    { image: '/portfolio/dashboard.webp', title: 'Analytics Dashboard UI', category: 'UI/UX Design' },
    { image: '/portfolio/wireframe.webp', title: 'Mobile App Wireframes', category: 'UI/UX Design' },
    { image: '/portfolio/ecommerce.webp', title: 'Fashion E-Commerce Store', category: 'E-Commerce Solutions' },
    { image: '/portfolio/dilevery.webp', title: 'Grocery Delivery Platform', category: 'E-Commerce Solutions' },
    { image: '/portfolio/crm.webp', title: 'CRM System', category: 'Custom Web Applications' },
    { image: '/portfolio/inventory.webp', title: 'Inventory Management App', category: 'Custom Web Applications' },
    { image: '/portfolio/fitness.webp', title: 'Fitness Tracker App', category: 'Mobile App Development' },
    { image: '/portfolio/payment.webp', title: 'UPI Payment Wallet', category: 'Mobile App Development' },
    { image: '/portfolio/ads.webp', title: 'Social Media Campaign', category: 'Digital Marketing' },
    { image: '/portfolio/seo.webp', title: 'SEO Optimization Case Study', category: 'Digital Marketing' },
  ];

  return (
    <section id="portfolio" className="py-24 bg-gray-50/50 dark:bg-gray-950 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[url('/svg/grid-pattern.svg')] bg-[size:120px_120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
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
            Our Work
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-5">
            Crafting Digital <span className="text-maroon-600 dark:text-maroon-400">Excellence</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Discover how we transform ideas into impactful digital experiences through innovation and technical expertise.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <PortfolioItem key={i} {...project} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mt-20"
        >
          <Link href="#contact" aria-label="Start your journey by contacting us">
            <Button
              className="relative overflow-hidden px-8 py-6 text-lg bg-maroon-600 hover:bg-maroon-700 dark:bg-maroon-700 dark:hover:bg-maroon-800 text-white shadow-xl hover:shadow-maroon-400/30 transition-all group"
              size="lg"
            >
              <span className="relative z-10">Start Your Journey</span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute -inset-8 bg-gradient-to-r from-maroon-500/20 to-transparent animate-gradient-rotate" />
              </div>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
