"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  const onLinkClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative py-20 md:py-28 lg:py-20 bg-gradient-to-br from-maroon-900 to-maroon-700 text-white overflow-hidden"
    >
      {/* SVG Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
            <path
              d="M 8 0 L 0 0 0 8"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* Animated Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-maroon-500 rounded-full opacity-20 animate-blob" />
        <div className="absolute top-1/2 -left-32 w-96 h-96 bg-maroon-600 rounded-full opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 right-1/4 w-80 h-80 bg-maroon-400 rounded-full opacity-10 animate-blob animation-delay-4000" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Digital Solutions for the Modern Business
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              We craft exceptional digital experiences that elevate your brand and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onLinkClick("contact")}
                className="bg-white text-maroon-800 hover:bg-gray-100 px-6 py-3 text-base rounded-md"
              >
                Get in Touch
              </button>
              <button
                onClick={() => onLinkClick("portfolio")}
                className="border border-white bg-maroon-800/10 px-6 py-3 text-base rounded-md text-white"
              >
                View Our Work
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <Image
              src="/herosection.jpg"
              alt="Digital Solutions"
              width={600}
              height={600}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <button onClick={() => onLinkClick("contact")}>
          <motion.div
            className="flex flex-col items-center text-white cursor-pointer animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
            <span className="text-sm mt-1">Scroll</span>
          </motion.div>
        </button>
      </div>
    </section>
  );
}