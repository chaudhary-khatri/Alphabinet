import Image from "next/image";
import { motion } from "framer-motion";

const clients = [
  { name: "Ali Enterprises", logo: "/trustedby/alienterprises.svg" },
  { name: "The Question Papers", logo: "/trustedby/thequestionpapers.svg" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Animated blob component
const AnimatedBlob = () => (
  <motion.svg
    viewBox="0 0 200 200"
    className="absolute w-[600px] h-[600px] opacity-10 dark:opacity-5 text-maroon-400"
    initial={{ scale: 0, rotate: 0 }}
    animate={{
      rotate: [0, 360],
      scale: [1, 1.2, 1],
      x: ["-5%", "5%", "-5%"],
      y: ["-10%", "10%", "-10%"],
    }}
    transition={{
      duration: 20,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
    }}
  >
    <path
      fill="currentColor"
      d="M52.1,-63.5C65.3,-54.3,72.8,-32.9,72.5,-13.8C72.1,5.4,63.9,21.7,52.5,35.3C41.1,49,26.5,59.9,9.4,63.2C-7.7,66.5,-25.3,62.1,-36.6,51.6C-47.9,41,-52.9,24.2,-55.1,7.6C-57.3,-9.1,-56.8,-25.4,-48.3,-35.6C-39.8,-45.8,-23.2,-49.9,-6.3,-51.3C10.7,-52.6,21.4,-51.2,52.1,-63.5Z"
      transform="translate(100 100)"
    />
  </motion.svg>
);

export default function ClientsSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#fbeff1] dark:bg-maroon-950">
      {/* 🌟 Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Floating Blobs */}
        <AnimatedBlob/>

        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[url('/svg/grid-pattern.svg')] opacity-10 dark:opacity-5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="text-center mb-16"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-maroon-700 dark:text-maroon-300 tracking-tight">
            Trusted by Innovative Teams Worldwide
          </h2>
          <motion.div
            className="mt-4 h-1 w-16 bg-maroon-500 dark:bg-maroon-400 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 md:gap-12 justify-items-center"
        >
          {clients.map((client) => (
            <motion.div
              key={client.name}
              variants={itemVariants}
              className="group relative flex flex-col items-center w-full max-w-[160px] transition-transform hover:scale-105"
            >
              <div className="relative w-full aspect-square mb-4">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain shadow-lg rounded-xl transition-all duration-300 opacity-80 hover:opacity-100"
                  sizes="(max-width: 640px) 80px, 120px"
                  quality={100}
                />
              </div>
              <p className="text-sm md:text-base font-bold text-gray-400 dark:text-gray-300 text-center opacity-80 hover:opacity-100 hover:text-gray-400 hover:cursor-pointer transition-opacity">
                {client.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <span className="inline-block px-4 py-2 text-sm text-maroon-700 dark:text-maroon-300 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-full shadow-sm border border-maroon-100 dark:border-maroon-900">
            And many more happy partners
          </span>
        </motion.div>
      </div>
    </section>
  );
}