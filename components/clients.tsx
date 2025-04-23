// src/components/clients.tsx

import Image from "next/image";

export default function ClientsSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-maroon-600 font-medium">Trusted by innovative companies worldwide</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="w-24 md:w-32 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={`/placeholder-logo.svg`}
                width={130}
                height={40}
                alt={`Client ${i}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
