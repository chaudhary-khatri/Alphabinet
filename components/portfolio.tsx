"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PortfolioItem: React.FC<{ image: string; title: string; category: string }> = ({
  image,
  title,
  category,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-xl backdrop-blur-md bg-white/80 border border-maroon-100 shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Maroon grid line background */}
      <svg
        className="absolute inset-0 w-full h-full text-maroon-200 opacity-20 pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="aspect-video overflow-hidden relative">
        <Image
          src={image}
          alt={title}
          width={800}
          height={600}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="relative z-10 p-6">
        <div className="text-xs uppercase tracking-wider text-maroon-500 mb-2 font-semibold">
          {category}
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-maroon-700 transition-colors duration-300">
          {title}
        </h3>
        <Link
          href="#"
          className="inline-flex items-center text-maroon-600 hover:text-maroon-700 font-medium text-sm transition"
        >
          View Project
          <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default function Portfolio() {
  const projects = [
    { image: "/portfolio/web1.jpg", title: "E‑Commerce Platform", category: "Web Development" },
    { image: "/portfolio/Thequestionpaperslogo3.svg?height=600&width=800", title: "TheQuestionPapers Website", category: "Web Development" },
    { image: "/placeholder.svg?height=600&width=800", title: "Mobile Banking App", category: "Mobile Development" },
    { image: "/placeholder.svg?height=600&width=800", title: "Healthcare Dashboard", category: "Web Application" },
    { image: "/placeholder.svg?height=600&width=800", title: "Restaurant Booking System", category: "Full‑Stack Development" },
    { image: "/placeholder.svg?height=600&width=800", title: "Real Estate Platform", category: "Web Development" },
  ];

  return (
    <section id="portfolio" className="py-24 bg-gray-50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-maroon-100 text-maroon-600 rounded-full text-sm font-semibold mb-3">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-base sm:text-lg">
            Explore our recent projects and see how we've helped businesses achieve their digital goals.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <PortfolioItem {...project} />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Link href="#contact">
            <Button className="bg-maroon-600 hover:bg-maroon-700 text-white px-6 py-3 text-base shadow-lg hover:shadow-maroon-400 transition">
              Start Your Project
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
