"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Motion-enabled Button for hover animations
const MotionButton = motion(Button);

type NavLink = {
  id: string;
  label: string;
  href: string;
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const sectionIds = ["hero", "services", "portfolio", "about", "contact"];
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Smooth scroll to section
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Toggle background on scroll
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    const scrollHandler = () => window.requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [handleScroll]);

  // Observe section in viewport to update active link
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );

    const observer = observerRef.current;
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const links: NavLink[] = [
    { id: "hero", label: "Home", href: "#hero" },
    { id: "services", label: "Services", href: "#services" },
    { id: "portfolio", label: "Portfolio", href: "#portfolio" },
    { id: "about", label: "About", href: "#about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full overflow-hidden">
      {/* Wave background */}
      <div className="absolute inset-0">
        <svg
          viewBox="0 0 1440 140"
          className="absolute bottom-0 w-full h-auto text-maroon-50"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,64L80,80C160,96,320,128,480,128C640,128,800,96,960,85.3C1120,75,1280,85,1360,90.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
        </svg>

        {/* Wave pattern overlay */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10 text-maroon-200"
          viewBox="0 0 40 20"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="nav-wave"
              x="0"
              y="0"
              width="40"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 10 Q10 0 20 10 T40 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#nav-wave)" />
        </svg>
      </div>

      {/* Navbar content */}
      <motion.div
        className={`relative backdrop-blur-md transition-all duration-300 ${scrolled ? "bg-white/70 shadow-lg" : "bg-transparent"
          }`}
        animate={{ height: scrolled ? 70 : 90 }}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20 md:gap-x-6">
            <LogoSection />
            <DesktopNav
              links={links}
              active={active}
              onLinkClick={scrollToSection}
            />
            <MobileMenu
              links={links}
              active={active}
              onLinkClick={(id: string) => {
                scrollToSection(id);
              }}
            />
          </div>
        </div>
      </motion.div>
    </header>
  );
}

function LogoSection() {
  return (
    <Link href="/" className="flex items-center space-x-3" aria-label="Home">
      <motion.div
        className="h-10 w-10 md:h-12 md:w-12 rounded-full flex items-center justify-center overflow-hidden"
        whileHover={{ scale: 1.05 }}
      >
        <img
          src="/mainlogo2.svg"
          alt="Company Logo"
          className="md:h-10 md:w-10 object-contain"
        />
      </motion.div>
      <span className="text-xl md:text-2xl tracking-wide">
        <span className="text-maroon-600 font-extrabold">Alpha</span>
        <span className="text-maroon-700 font-bold">binet</span>
      </span>
    </Link>
  );
}

interface DesktopNavProps {
  links: NavLink[];
  active: string;
  onLinkClick: (id: string) => void;
}

function DesktopNav({ links, active, onLinkClick }: DesktopNavProps) {
  return (
    <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
      {links.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => onLinkClick(id)}
          className={`relative uppercase tracking-wide font-medium group focus:outline-none ${active === id ? "text-maroon-700" : "text-gray-700 hover:text-maroon-600"
            }`}
          aria-current={active === id ? "page" : undefined}
        >
          <motion.span whileHover={{ y: -2 }} className="block px-2 py-1">
            {label}
          </motion.span>
          {active === id && (
            <motion.span
              className="absolute left-0 bottom-0 h-0.5 w-full bg-maroon-500"
              layoutId="activeNav"
            />
          )}
        </button>
      ))}
      <button
        onClick={() => onLinkClick("contact")}
        className="ml-2 bg-maroon-600 hover:bg-maroon-700 text-white text-sm md:text-base px-4 md:px-5 py-1.5 md:py-2 rounded-md focus:outline-none whitespace-nowrap min-w-fit"
      >
        <motion.span whileHover={{ y: -2 }}>Contact Us</motion.span>
      </button>

    </nav>
  );
}

interface MobileMenuProps {
  links: NavLink[];
  active: string;
  onLinkClick: (id: string) => void;
}

function MobileMenu({ links, active, onLinkClick }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close on scroll
  useEffect(() => {
    const handleScroll = () => setOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.button
        ref={buttonRef}
        onClick={() => setOpen(!open)}
        className="md:hidden p-2 rounded-lg text-maroon-600 hover:bg-maroon-50 focus:outline-none focus:ring-2 focus:ring-maroon-400"
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </motion.button>

      {open && (
        <motion.div
          ref={menuRef}
          id="mobile-menu"
          className="md:hidden fixed top-16 left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {links.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => {
                  onLinkClick(id);
                  setOpen(false);
                }}
                className={`block w-full text-left py-2 px-3 rounded-md font-medium transition-colors ${active === id
                    ? "bg-maroon-50 text-maroon-700"
                    : "text-gray-700 hover:bg-maroon-50 hover:text-maroon-600"
                  }`}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => {
                onLinkClick("contact");
                setOpen(false);
              }}
              className="w-full bg-maroon-600 hover:bg-maroon-700 text-white py-2 rounded-md focus:outline-none"
            >
              <motion.span whileHover={{ y: -2 }}>Contact Us</motion.span>
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}