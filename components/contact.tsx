'use client';

import React, { useState, useEffect } from 'react';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// ─── Decorative Top Wave ──────────────────────────────────────────────────────
const TopWave = () => (
  <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none z-0">
    <svg
      className="relative block w-full h-16 text-white"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      viewBox="0 0 1200 120"
    >
      <path d="M0,0 C300,60 900,60 1200,0 L1200,120 L0,120 Z" fill="currentColor" />
    </svg>
  </div>
);

// ─── Static Grid SVG Background ────────────────────────────────────────────────
const GridBackground = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-5 pointer-events-none z-0"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
  >
    <defs>
      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
        <path d="M10 0 L0 0 0 10" fill="none" stroke="white" strokeWidth="0.3" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
  </svg>
);

// ─── Small Animated Blob ───────────────────────────────────────────────────────
const SmallBlob = () => (
  <motion.div
    className="absolute w-32 h-32 bg-maroon-500 rounded-full opacity-20 z-0"
    initial={{ x: 0, y: 0 }}
    animate={{ x: [-10, 10, -10], y: [-10, 10, -10] }}
    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
  />
);

// ─── Floating Particle ─────────────────────────────────────────────────────────
const Particle = () => (
  <motion.div
    className="absolute w-2 h-2 bg-maroon-400 rounded-full opacity-50 z-0"
    initial={{
      x: Math.random() * 100 + '%',
      y: Math.random() * 100 + '%',
      scale: 0,
    }}
    animate={{
      opacity: [0, 0.5, 0],
      scale: [0, 1, 0],
      x: ['+=0', '+=10', '-=10'],
      y: ['+=0', '-=10', '+=10'],
    }}
    transition={{
      delay: Math.random() * 2,
      duration: Math.random() * 4 + 4,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
);

// ─── Animation Variants ────────────────────────────────────────────────────────
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

// ─── Main Contact Component ────────────────────────────────────────────────────
export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Intersection + animation controls
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [hasAnimated, setHasAnimated] = useState(false);
  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start('visible');
      setHasAnimated(true);
    }
  }, [inView, hasAnimated, controls]);

  // Validation logic
  const validateField = (name: string, value: string) => {
    const errs = { ...errors };
    switch (name) {
      case 'name':
        !value.trim() ? (errs.name = 'Name required') : delete errs.name;
        break;
      case 'email':
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? (errs.email = 'Valid email required') : delete errs.email;
        break;
      case 'phone':
        !/^\+?[0-9\s-]{7,15}$/.test(value) ? (errs.phone = 'Valid phone required') : delete errs.phone;
        break;
      case 'message':
        !value.trim() ? (errs.message = 'Message required') : delete errs.message;
        break;
    }
    setErrors(errs);
    return !errs[name];
  };

  const formatPhone = (value: string) =>
    value.replace(/\D/g, '').replace(/^(\d{2})(\d{5})(\d{5})$/, '+$1 $2 $3');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updated = name === 'phone' ? formatPhone(value) : value;
    setFormData(prev => ({ ...prev, [name]: updated }));
    if (errors[name]) validateField(name, updated);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    validateField(e.target.name, e.target.value);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    const valid = Object.keys(formData).every(field =>
      validateField(field, formData[field as keyof typeof formData])
    );
    if (!valid) return;

    setIsSubmitting(true);
    try {
      await new Promise(r => setTimeout(r, 1000));
      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSuccess(false), 3000);
    } catch {
      setErrors(prev => ({ ...prev, form: 'Submission failed. Try again.' }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const contacts = [
    { icon: FaPhoneAlt, label: 'Call Us', value: '+91 8273873950', href: 'tel:+918273873950' },
    { icon: FaEnvelope, label: 'Email Us', value: 'alphabinetglobal@gmail.com', href: 'mailto:alphabinetglobal@gmail.com' },
    { icon: FaWhatsapp, label: 'WhatsApp', value: '+91 8273873950', href: 'https://wa.me/918273873950' },
    { icon: FaInstagram, label: 'Instagram', value: '@alphabinetglobal', href: 'https://instagram.com/alphabinetglobal' },
    { icon: FaMapMarkerAlt, label: 'Visit Us', value: 'Ghaziabad, Uttar Pradesh, India', href: 'https://maps.app.goo.gl/' },
  ];

  const socials = [
    { icon: FaFacebook, href: 'https://facebook.com' },
    { icon: FaInstagram, href: 'https://instagram.com' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/jayant-chaudhary-970397250' },
    { icon: FaGithub, href: 'https://github.com/chaudhary-khatri' },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative bg-gradient-to-br from-white to-gray-100 pt-16 pb-24 overflow-hidden"
    >
      <TopWave />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <Particle key={i} />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-maroon-100 text-maroon-600 rounded-full text-sm font-semibold mb-2">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-maroon-700 mb-4">
            Let's Shape Your{' '}
            <span className="bg-gradient-to-r from-maroon-600 to-maroon-800 bg-clip-text text-transparent">
              Digital Future
            </span>
          </h2>
          <motion.p
            className="text-lg text-maroon-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Reach out and let's discuss how we can bring your digital aspirations to life.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info Card */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="relative bg-maroon-600 p-8 rounded-3xl shadow-2xl overflow-hidden"
          >
            <GridBackground />
            <SmallBlob />
            <h3 className="text-2xl font-semibold text-white mb-6 relative z-10">
              Contact Information
            </h3>
            <ul className="space-y-4 relative z-10">
              {contacts.map((c, i) => (
                <li key={i}>
                  <a
                    href={c.href}
                    className="flex items-center gap-3 p-3 rounded-xl bg-red-400 bg-opacity-50  hover:bg-maroon-500 transition"
                  >
                    <div className="p-3 bg-maroon-700 rounded-xl">
                      <c.icon className="text-xl text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-maroon-300">{c.label}</p>
                      <p className="text-base text-white">{c.value}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Message Form Card */}
          <motion.form
            initial="hidden"
            animate={controls}
            variants={fadeInUp}
            onSubmit={handleSubmit}
            className="relative bg-maroon-600 p-8 rounded-3xl shadow-2xl overflow-hidden"
          >
            <GridBackground />
            <SmallBlob />
            <h3 className="text-2xl font-semibold text-white mb-6 relative z-10">
              Send Us a Message
            </h3>
            <div className="space-y-6 relative z-10">
              {(['name', 'email', 'phone', 'message'] as const).map((field, idx) => (
                <div key={idx}>
                  {field === 'message' ? (
                    <textarea
                      name={field}
                      rows={4}
                      placeholder="Your Message"
                      className="w-full px-4 py-3 rounded-xl bg-maroon-800 text-white placeholder-maroon-100 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  ) : (
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                      className="w-full px-4 py-3 rounded-xl bg-maroon-800 text-white placeholder-maroon-100 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
                      value={formData[field]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  )}
                  {errors[field] && <p className="text-red-300 text-sm mt-1">{errors[field]}</p>}
                </div>
              ))}
              {errors.form && <p className="text-red-300 text-sm">{errors.form}</p>}
              {success && <p className="text-green-300 text-sm">Message sent successfully!</p>}
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-xl bg-maroon-800 text-white font-semibold hover:bg-maroon-700 disabled:bg-maroon-500 mt-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </button>
            </div>
          </motion.form>
        </div>

        {/* Follow Us Card (Optional) */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          className="relative bg-maroon-600 p-8 rounded-3xl shadow-2xl overflow-hidden mt-12"
        >
          <GridBackground />
          <SmallBlob />
          <h3 className="text-2xl font-semibold text-white mb-6 relative z-10 text-center">Follow Us</h3>
          <div className="flex justify-center gap-6 relative z-10">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-maroon-200 hover:text-white transition"
              >
                <s.icon />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
