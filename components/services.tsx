"use client";

import { motion } from "framer-motion";
import { ChevronRight, Globe, Palette, ShoppingCart, Code, Smartphone, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

// Animated GridLines SVG background
const GridLines = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-30 text-maroon-400 will-change-transform"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
  >
    <pattern id="service-grid" width="10" height="10" patternUnits="userSpaceOnUse">
      <motion.path
        d="M 10 0 L 0 0 0 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </pattern>
    <motion.rect
      width="100%"
      height="100%"
      fill="url(#service-grid)"
      animate={{ x: [-20, 0], y: [-20, 0] }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  </svg>
);

// ServiceCard Component
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => (
  <motion.div
    className="relative bg-white/90 backdrop-blur-md border border-maroon-200 rounded-2xl p-6 overflow-hidden shadow-md hover:shadow-xl group"
    whileHover={{ y: -8, rotate: -0.5 }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: "spring", stiffness: 150, damping: 15 }}
  >
    <GridLines />

    {/* Animated gradient overlay */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-maroon-500/10 to-transparent opacity-0 group-hover:opacity-100"
      transition={{ duration: 0.3 }}
    />

    <div className="relative z-10 text-maroon-800 text-3xl mb-4">
      <motion.div
        whileHover={{ scale: 1.2, rotate: 5 }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
        className="inline-block"
      >
        {icon}
      </motion.div>
    </div>

    <h3 className="relative z-10 text-xl font-bold text-maroon-700 mb-2">
      {title}
    </h3>

    <p className="relative z-10 text-gray-600 mb-4">
      {description}
    </p>

    <Link
      href="#contact"
      className="relative z-10 inline-flex items-center text-maroon-500 group-hover:text-maroon-600 font-medium transition"
    >
      <motion.span
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
        className="flex items-center"
      >
        Learn more
        <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
      </motion.span>
    </Link>
  </motion.div>
);

// ServicesSection Component
export default function ServicesSection() {
  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Development",
      description:
        "Custom websites built with the latest technologies to deliver exceptional user experiences.",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Intuitive and engaging user interfaces designed to convert visitors into customers.",
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "E-Commerce Solutions",
      description: "Scalable online stores that drive sales and provide seamless shopping experiences.",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom Web Applications",
      description:
        "Tailored web applications that streamline your business processes and boost productivity.",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that engage users on any device.",
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Digital Marketing",
      description:
        "Strategic marketing campaigns that increase your online visibility and drive qualified leads.",
    },
  ];

  // Floating animation variants
  const floatVariants = {
    float: {
      y: [0, -15, 0],
      x: [0, 10, 0],
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-maroon-100/20 rounded-full blur-[100px] will-change-transform"
        variants={floatVariants}
        animate="float"
      />
      <motion.div
        className="absolute bottom-0 right-0 w-64 h-64 bg-blue-100/20 rounded-full blur-[100px] will-change-transform"
        variants={floatVariants}
        animate="float"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative z-10"
        >
          <motion.span
            className="inline-block px-4 py-1 bg-maroon-100 text-maroon-600 rounded-full text-sm font-semibold mb-3"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2, stiffness: 120, damping: 12 }}
          >
            Our Services
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Comprehensive Digital Solutions
          </h2>
          <motion.p
            className="max-w-2xl mx-auto text-gray-600 text-base sm:text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We offer a wide range of tailored digital services to help your business thrive in a fast-paced digital world.
          </motion.p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
