"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export default function TermsAndConditions() {
  const sections = [
    {
      title: "1. Introduction",
      body: `<p>Welcome to Alphabinet (“Company”, “we”, “our”, “us”). These Terms & Conditions (“Terms”) govern your access to and use of our website, products, and services, including web development, UI/UX design, e-commerce solutions, mobile applications, and digital marketing (collectively, “Services”).</p>
             <p>By accessing or using our Services, you confirm that you are at least 18 years old and have the legal capacity to enter into these Terms. If you do not agree with any part of these Terms, you must cease all use of our Services immediately.</p>`,
    },
    {
      title: "2. Definitions",
      body: `<p><strong>“Client”</strong> means any individual or entity that engages Alphabinet for Services.</p>
             <p><strong>“Deliverables”</strong> means the final work products (website, designs, code, marketing materials) delivered to the Client under a project agreement.</p>
             <p><strong>“Confidential Information”</strong> means any non-public information shared in connection with Services, including designs, strategies, pricing, and technical details.</p>`,
    },
    {
      title: "3. Services & Deliverables",
      body: `<p>We agree to provide the Services and Deliverables described in your project proposal or service agreement. Each engagement will specify:</p>
             <ul>
               <li>Scope of work, milestones, and delivery schedule.</li>
               <li>Roles and responsibilities for both Alphabinet and the Client.</li>
               <li>Approval and review process for each milestone.</li>
             </ul>
             <p>Any additional work beyond the agreed scope will require a written change order and may incur extra fees.</p>`,
    },
    {
      title: "4. Client Responsibilities",
      body: `<p>The Client shall:</p>
             <ul>
               <li>Provide timely access to content, credentials, and feedback.</li>
               <li>Ensure all materials supplied do not infringe third-party rights.</li>
               <li>Review and approve Deliverables within 7 business days of submission.</li>
             </ul>
             <p>Failure to meet these responsibilities may result in project delays for which Alphabinet is not liable.</p>`,
    },
    {
      title: "5. Intellectual Property & License",
      body: `<p>Upon full payment, Alphabinet grants the Client a worldwide, non-exclusive, perpetual license to use the final Deliverables for their intended purpose.</p>
             <p>Alphabinet retains ownership of all source files, code libraries, and pre-existing materials. Any use beyond the scope of the license requires our prior written consent.</p>`,
    },
    {
      title: "6. Payment Terms",
      body: `<p>Fees, payment schedule, and milestones are defined in your service agreement. Standard terms are:</p>
             <ul>
               <li>50% deposit due before project start.</li>
               <li>40% upon approval of design or development milestone.</li>
               <li>10% upon final delivery.</li>
             </ul>
             <p>Late payments incur a 1.5% monthly interest. All fees exclude applicable taxes, which will be added where required.</p>`,
    },
    {
      title: "7. Confidentiality",
      body: `<p>Both parties agree to keep Confidential Information strictly confidential and to use it solely for the performance of these Terms. Confidentiality obligations survive termination for three (3) years.</p>`,
    },
    {
      title: "8. Warranties & Disclaimers",
      body: `<p>Alphabinet warrants that Services will be performed in a professional manner consistent with industry standards.</p>
             <p>Except as expressly stated, all other warranties (implied or statutory) are disclaimed, including merchantability or fitness for a particular purpose. We do not guarantee specific search rankings, sales, or business outcomes.</p>`,
    },
    {
      title: "9. Limitation of Liability",
      body: `<p>To the maximum extent permitted by law, Alphabinet’s total liability under or related to these Terms shall not exceed the total fees paid by the Client for the specific project giving rise to the claim.</p>
             <p>In no event shall Alphabinet be liable for indirect, incidental, special, or consequential damages, including lost profits or data.</p>`,
    },
    {
      title: "10. Revisions & Scope Changes",
      body: `<p>Each project includes up to two rounds of minor revisions. Significant scope changes (new features, major redesigns) require a change order with additional fees and adjusted timelines.</p>`,
    },
    {
      title: "11. Termination",
      body: `<p>Either party may terminate the agreement for material breach if the breach remains uncured 14 days after written notice. Upon termination, the Client pays for work performed up to the termination date and receives deliverables completed to that point.</p>`,
    },
    {
      title: "12. Governing Law & Dispute Resolution",
      body: `<p>These Terms shall be governed by the laws of [Your State/Country]. Any dispute shall first be attempted to resolve through good-faith mediation. If unresolved, disputes will be submitted to binding arbitration in [Your City].</p>`,
    },
    {
      title: "13. Changes to Terms",
      body: `<p>Alphabinet may update these Terms at any time by posting a revised version on this page. Changes take effect immediately. Your continued use constitutes acceptance of the updated Terms.</p>`,
    },
    {
      title: "14. Contact Us",
      body: `<p>If you have questions about these Terms, please <a href="#contact" class="text-maroon-600 hover:underline">contact our team</a> or email us at <a href="mailto:hello@alphabinet.com" class="text-maroon-600 hover:underline">hello@alphabinet.com</a>.</p>`,
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
            Terms &amp; Conditions
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl">
            Please read these terms carefully before engaging with any Alphabinet services.
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
