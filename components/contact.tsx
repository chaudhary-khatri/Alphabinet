'use client';

import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa6';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Animated SVG grid background
const GridBackground = () => (
  <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
    <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
      <motion.path
        d="M 8 0 L 0 0 0 8"
        fill="none"
        stroke="white"
        strokeWidth="0.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </pattern>
    <motion.rect 
      width="100%" 
      height="100%" 
      fill="url(#grid)"
      animate={{ x: [-10, 0], y: [-10, 0] }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  </svg>
);

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    } 
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start("visible");
      setHasAnimated(true);
    }
  }, [inView, hasAnimated, controls]);

  const validateField = (name: string, value: string) => {
    const errs: Record<string, string> = { ...errors };

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
    const updatedValue = name === 'phone' ? formatPhone(value) : value;

    setFormData(prev => ({ ...prev, [name]: updatedValue }));
    if (errors[name]) validateField(name, updatedValue);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    validateField(e.target.name, e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const isValid = Object.keys(formData).every(field =>
      validateField(field, formData[field as keyof typeof formData])
    );
    if (!isValid) return;

    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      setErrors(prev => ({ ...prev, form: 'Failed to send message. Please try again.' }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const contacts = [
    { icon: FaPhoneAlt, label: 'Call Us', value: '+91 81253 42924', href: 'tel:+918125342924' },
    { icon: FaEnvelope, label: 'Email Us', value: 'alphabinetglobal@gmail.com', href: 'mailto:alphabinetglobal@gmail.com' },
    { icon: FaWhatsapp, label: 'WhatsApp', value: '+91 81253 42924', href: 'https://wa.me/918125342924' },
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
      className="bg-gradient-to-br from-white to-gray-100 py-20 overflow-hidden relative"
    >
      {/* Floating background elements */}
      <motion.div 
        className="absolute top-20 left-0 w-64 h-64 bg-maroon-100/20 rounded-full blur-[100px]"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          className="text-center mb-16 relative z-10"
        >
          <motion.span
            className="inline-block px-4 py-1 bg-maroon-100 text-maroon-600 rounded-full text-sm font-semibold mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Get in Touch
          </motion.span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-maroon-700 mb-4">
            Let's Shape Your <span className="bg-gradient-to-r from-maroon-600 to-maroon-800 bg-clip-text text-transparent">Digital Future</span>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              visible: {
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="space-y-8"
          >
            <motion.div 
              className="relative bg-maroon-600 p-8 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-lg"
              variants={fadeInUp}
              whileHover={{ translateY: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <GridBackground />
              <h3 className="text-2xl font-semibold text-white mb-6 z-10 relative">Contact Information</h3>
              <ul className="space-y-4 z-10 relative">
                {contacts.map((c, i) => (
                  <motion.li 
                    key={i} 
                    variants={fadeInUp}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ translateX: 5 }}
                  >
                    <a
                      href={c.href}
                      className="flex items-center gap-4 hover:bg-maroon-700/40 transition p-3 rounded-xl group"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={c.label}
                    >
                      <motion.div 
                        className="p-3 bg-maroon-700 rounded-2xl group-hover:bg-maroon-800 transition"
                        whileHover={{ rotate: 10 }}
                      >
                        <c.icon className="text-xl text-white" />
                      </motion.div>
                      <div>
                        <p className="text-sm text-maroon-200">{c.label}</p>
                        <p className="font-medium text-white">{c.value}</p>
                      </div>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              className="relative bg-maroon-600 p-6 rounded-3xl shadow-2xl text-center backdrop-blur-lg"
              variants={fadeInUp}
              whileHover={{ translateY: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <GridBackground />
              <h3 className="text-2xl font-semibold text-white mb-4 z-10 relative">Follow Us</h3>
              <div className="flex justify-center gap-6 z-10 relative">
                {socials.map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Social media"
                    className="text-2xl text-maroon-200 hover:text-white"
                    variants={fadeInUp}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ rotate: 360 }}
                  >
                    <s.icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial="hidden"
            animate={controls}
            variants={fadeInUp}
            onSubmit={handleSubmit}
            className="relative bg-maroon-600 p-8 rounded-3xl shadow-2xl space-y-6 backdrop-blur-lg"
            whileHover={{ translateY: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <GridBackground />
            <h3 className="text-2xl font-semibold text-white relative z-10">Send Us a Message</h3>
            <div className="space-y-4 z-10 relative">
              {['name', 'email', 'phone', 'message'].map((field, i) => (
                <motion.div
                  key={field}
                  variants={fadeInUp}
                  transition={{ delay: i * 0.1 + 0.2 }}
                >
                  {field === 'message' ? (
                    <textarea
                      name={field}
                      rows={4}
                      placeholder="Your Message"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-maroon-200 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  ) : (
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-maroon-200 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
                      value={formData[field as keyof typeof formData]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  )}
                  {errors[field] && (
                    <motion.p 
                      className="text-red-300 text-sm mt-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {errors[field]}
                    </motion.p>
                  )}
                </motion.div>
              ))}
              
              {errors.form && (
                <motion.p 
                  className="text-red-300 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {errors.form}
                </motion.p>
              )}
              
              {success && (
                <motion.p 
                  className="text-green-300 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Message sent successfully!
                </motion.p>
              )}
            </div>

            <motion.button
              type="submit"
              className="w-full px-6 py-3 rounded-xl bg-maroon-800 text-white font-semibold hover:bg-maroon-700 disabled:bg-maroon-500"
              disabled={isSubmitting}
              whileHover={{ backgroundColor: '#7f1d1d' }}
              whileTap={{ backgroundColor: '#991b1b' }}
            >
              {isSubmitting ? (
                <motion.span
                  animate={{ opacity: [0.5, 1] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                >
                  Sending...
                </motion.span>
              ) : (
                'Send Message'
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;