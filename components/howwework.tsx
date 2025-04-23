"use client";

import { motion } from "framer-motion";
import { FaSearch, FaPencilRuler, FaCode, FaBug, FaRocket } from "react-icons/fa";

const icons = [FaSearch, FaPencilRuler, FaCode, FaBug, FaRocket];

export default function HowWeWork() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We start by understanding your business, goals, and target audience to create a strategic plan.",
    },
    {
      number: "02",
      title: "Design",
      description:
        "Our designers create intuitive, engaging interfaces that align with your brand and business objectives.",
    },
    {
      number: "03",
      title: "Development",
      description:
        "Our developers bring the designs to life using the latest technologies and best practices.",
    },
    {
      number: "04",
      title: "Testing",
      description:
        "We rigorously test all aspects of your project to ensure everything works flawlessly.",
    },
    {
      number: "05",
      title: "Launch",
      description:
        "We deploy your project and provide ongoing support to ensure continued success.",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-maroon-50 to-maroon-100 overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-72 h-72 bg-maroon-300 opacity-20 rounded-full blur-[120px] top-12 left-1/4"></div>
        <div className="absolute w-96 h-96 bg-maroon-200 opacity-10 rounded-full blur-[150px] bottom-12 right-1/4"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-maroon-100 text-maroon-600 rounded-full text-sm font-medium mb-4">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How We Work
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Our proven process ensures we deliver exceptional results for every project.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-maroon-200 transform -translate-x-1/2" />

          <div className="space-y-16 md:space-y-0" role="list">
            {steps.map((step, index) => {
              const Icon = icons[index];

              return (
                <motion.div
                  key={index}
                  role="listitem"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.15 }}
                  className="relative md:flex md:justify-between md:even:flex-row-reverse mb-16"
                >
                  {/* Step Circle Icon */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 top-0 w-12 h-12 rounded-full bg-maroon-600 text-white flex items-center justify-center z-10 shadow-lg">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Card Content */}
                  <div className="md:w-[45%] mt-12 md:mt-0">
                    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="text-4xl font-bold text-maroon-200 mb-2">
                        {step.number}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
