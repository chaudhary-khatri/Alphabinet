"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { id: "hero", label: "Home" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "about", label: "About" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );

    const sectionIds = [...links.map((link) => link.id), "contact"];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
          <Image src="/Mainlogo.svg" alt="Logo" width={40} height={40} className="object-contain" />
          <span className="text-2xl font-bold text-maroon-700">Alphabinet</span>
        </Link>

        <div className="hidden md:flex space-x-4 items-center">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-md font-medium px-3 py-1 transition-colors duration-200 ${
                active === link.id
                  ? "text-maroon-700 border-b-2 border-maroon-700"
                  : "text-gray-700 hover:text-maroon-600"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-maroon-600 text-white text-sm px-4 py-1.5 rounded-md hover:bg-maroon-700"
          >
            Contact
          </button>
        </div>

        <button
          className="md:hidden text-maroon-700"
          onClick={() => setMenuOpen(true)}
          aria-label="Open Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 p-5 flex flex-col"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Background SVG Decoration */}
              <div className="absolute inset-0 opacity-5">
                <svg width="100%" height="100%">
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M20 0 L0 0 0 20" fill="none" stroke="maroon" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              <div className="flex justify-between items-center mb-6 relative z-10">
                <div className="flex items-center space-x-2">
                  <Image src="/mainlogo.svg" alt="Logo" width={30} height={30} />
                  <span className="font-semibold text-maroon-700 text-lg">Alphabinet</span>
                </div>
                <button onClick={() => setMenuOpen(false)} aria-label="Close Menu">
                  <svg className="w-6 h-6 text-maroon-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-3 relative z-10">
                {links.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`w-full text-left py-2 px-3 rounded-md text-sm font-medium transition ${
                      active === link.id
                        ? "bg-maroon-100 text-maroon-700"
                        : "text-gray-800 hover:bg-maroon-50 hover:text-maroon-600"
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-maroon-600 text-white py-2 rounded-md text-sm font-medium hover:bg-maroon-700"
                >
                  Contact
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
