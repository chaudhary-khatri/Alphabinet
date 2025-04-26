"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "1. Introduction",
      body: `<p>Alphabinet (“we”, “us”, “our”) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our digital services.</p>`,
    },
    {
      title: "2. Information We Collect",
      body: `<ul>
        <li><strong>Personal Data:</strong> Name, email, phone number when you contact us or sign up for newsletters.</li>
        <li><strong>Usage Data:</strong> Pages visited, time spent, IP address, browser type via cookies and analytics.</li>
        <li><strong>Cookies & Tracking:</strong> We use cookies and similar technologies to enhance your experience. You can manage cookie preferences in your browser settings.</li>
      </ul>`,
    },
    {
      title: "3. How We Use Your Data",
      body: `<ul>
        <li>To provide, operate, and maintain our services.</li>
        <li>To improve, personalize, and expand our offerings.</li>
        <li>To communicate updates, marketing, and promotional materials.</li>
        <li>To detect and prevent fraud or unauthorized activity.</li>
      </ul>`,
    },
    {
      title: "4. Data Sharing & Disclosure",
      body: `<p>We do not sell your personal data. We may share your information with:</p>
        <ul>
          <li><strong>Service Providers:</strong> Third-party vendors helping us deliver services (hosting, analytics, email).</li>
          <li><strong>Legal Requirements:</strong> When required by law or to protect our rights.</li>
        </ul>`,
    },
    {
      title: "5. Third-Party Links",
      body: `<p>Our site may contain links to third-party websites. Alphabinet is not responsible for their privacy practices. Please review their policies separately.</p>`,
    },
    {
      title: "6. Data Retention",
      body: `<p>We retain personal data only as long as necessary for the purposes outlined here, or as required by law. After that, data is securely deleted or anonymized.</p>`,
    },
    {
      title: "7. Your Rights",
      body: `<ul>
        <li><strong>Access:</strong> You can request a copy of your personal data.</li>
        <li><strong>Correction:</strong> You can ask to update incomplete or inaccurate information.</li>
        <li><strong>Deletion:</strong> You can request deletion, subject to legal obligations.</li>
        <li><strong>Opt-Out:</strong> You may unsubscribe from marketing communications at any time.</li>
      </ul>`,
    },
    {
      title: "8. Security Measures",
      body: `<p>We implement industry-standard technical and organizational measures to protect your data from unauthorized access, alteration, and disclosure.</p>`,
    },
    {
      title: "9. International Transfers",
      body: `<p>Your data may be transferred to and processed in countries outside your residence. We ensure appropriate safeguards are in place.</p>`,
    },
    {
      title: "10. Children’s Privacy",
      body: `<p>Our services are not directed to anyone under 18. We do not knowingly collect data from minors. If we learn we have, we will delete it.</p>`,
    },
    {
      title: "11. Updates to This Policy",
      body: `<p>We may update this policy periodically. The “Last updated” date at the top will reflect changes. Your continued use constitutes acceptance of any updates.</p>`,
    },
    {
      title: "12. Contact Us",
      body: `<p>For questions or to exercise your rights, please <a href="www.alphabinet.com/#contact" class="text-maroon-600 hover:underline">contact our team</a> or email <a href="mailto:alphabinetglobal@gmail.com" class="text-maroon-600 hover:underline">alphabinetglobal@gmail.com</a>.</p>`,
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950 overflow-hidden">
      {/* Decorative Blobs */}
      <motion.div
        className="absolute -top-20 -left-20 w-72 h-72 bg-maroon-300 rounded-full filter blur-3xl opacity-20"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-80 h-80 bg-maroon-600 rounded-full filter blur-2xl opacity-15"
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Back to Home */}
        <div className="mb-8">
          <Link href="/" passHref>
            <Button variant="outline" size="sm" className="inline-flex items-center">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-maroon-600 to-maroon-800 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl">
            Your privacy is important to us. This policy explains how Alphabinet handles your personal data.
          </p>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-12 text-gray-700 dark:text-gray-300 prose prose-lg dark:prose-invert">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                {section.title}
              </h2>
              <div dangerouslySetInnerHTML={{ __html: section.body }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
