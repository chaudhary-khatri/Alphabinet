"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "20+", label: "Projects Completed" },
  { value: "18+", label: "Happy Clients" },
  { value: "2+", label: "Years Experience" },
];

export default function AboutSection() {
  return (
    <section 
      id="about" 
      className="relative py-20 bg-white overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Grid overlay for the entire section */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=20 height=20 xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpattern id=\'a\' width=20 height=20 patternUnits=\'userSpaceOnUse\'%3E%3Cpath d=\'M20 0 L0 0 0 20\' fill=\'none\' stroke=\'%23ccc\' stroke-width=\'1\'/%3E%3C/pattern%3E%3Crect width=100% height=100% fill=\'url(%23a)\'/%3E%3C/svg%3E')]"
        aria-hidden="true"
      />

      {/* Decorative Blobs */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1.5, type: "spring" }}
        className="absolute -top-32 -right-32 w-72 h-72 bg-maroon-300 rounded-full filter blur-3xl mix-blend-multiply"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.25 }}
        transition={{ duration: 1.5, delay: 0.5, type: "spring" }}
        className="absolute -bottom-32 -left-32 w-64 h-64 bg-maroon-500 rounded-full filter blur-2xl mix-blend-multiply"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <motion.span
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-gradient-to-r from-maroon-100 to-maroon-50 text-maroon-700 rounded-full text-sm font-medium shadow-sm"
            >
              About Us
            </motion.span>

            <h2 
              id="about-heading"
              className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight"
            >
              Crafting Digital Excellence with{" "}
              <span className="bg-gradient-to-r from-maroon-600 to-maroon-700 bg-clip-text text-transparent">
                Alphabinet
              </span>
            </h2>

            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Alphabinet is a premier digital solutions agency dedicated to transforming businesses through 
                <strong className="text-maroon-600"> innovative web solutions</strong>. Our team of seasoned designers, 
                developers, and strategists collaborates to create digital experiences that 
                <strong className="text-maroon-600"> drive measurable results</strong>.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                We blend <strong className="text-maroon-600">cutting-edge technology</strong> with 
                <strong className="text-maroon-600"> creative vision</strong> to deliver solutions that excel in both 
                form and function. Our client-centric approach focuses on building long-term partnerships and 
                solving unique business challenges.
              </p>
            </div>

            {/* Stats Grid with internal grid lines */}
            <div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 relative z-10 rounded-2xl p-2 backdrop-blur-sm bg-white/70"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0H0V20' stroke='%23e5e7eb' stroke-width='0.5'/%3E%3C/svg%3E\")",
                backgroundSize: "20px 20px",
                backgroundRepeat: "repeat",
              }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="relative group overflow-hidden bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="absolute inset-0 border-2 border-maroon-100/50 rounded-2xl pointer-events-none" />
                  <div className="relative z-10">
                    <div className="text-4xl font-bold bg-gradient-to-r from-maroon-600 to-maroon-700 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-gray-600">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image & Callout */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-gray-100 relative border-4 border-white shadow-2xl">
              <Image
                src="/Innovate.jpg"
                alt="Alphabinet team collaborating in a modern office environment"
                fill
                className="object-cover saturate-110 hover:saturate-150 transition-all duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -left-6 bg-maroon-600 bg-opacity-30 text-white p-6 rounded-xl shadow-2xl max-w-xs backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <p className="text-lg font-semibold leading-tight">
                  Imagination into digital reality
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
