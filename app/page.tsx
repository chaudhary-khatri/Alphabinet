"use client";

import { motion } from "framer-motion"; // Add this import
import Link from "next/link"; // Import Link from next/link
import Navbar from "@/components/navbar/Navbar"; // Import Navbar component
import HeroSection from "@/components/hero";
import ClientsSection from "@/components/clients";
import ServicesSection from "@/components/services";
import HowWeWork from "@/components/howwework";
import Portfolio from "@/components/portfolio";
import AboutSection from "@/components/about";
import TestimonialsSection from "@/components/testimonials";
import Contact from "@/components/contact";
import { Button } from "@/components/ui/button"; // Make sure Button is imported

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 scroll-smooth">
      <Navbar /> {/* Use Navbar here */}

      {/* Main Content */}
      <main>
        <HeroSection />
        <ClientsSection />
        <ServicesSection />
        <HowWeWork />
        <Portfolio />
        <AboutSection />
        <TestimonialsSection />

        {/* CTA Banner */}
        <section className="relative py-16 bg-gradient-to-r from-maroon-700 to-maroon-900 text-white overflow-hidden">
          {/* Grid background overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px]" />

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center justify-between gap-8"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  Ready to transform your digital presence?
                </h2>
                <p className="text-gray-200">
                  Let's create something amazing together.
                </p>
              </div>
              <Link href="#contact">
                <Button className="bg-white text-maroon-700 hover:bg-gray-100 px-6 py-3 text-base">
                  Get Started Today
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>


        {/* Contact Section */}
        <Contact />
      </main>
    </div>
  );
}
