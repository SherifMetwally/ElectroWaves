"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { industries } from "@/lib/content";
import { imageMap } from "@/lib/images";

// Industry icons mapping
const industryIcons: { [key: string]: string } = {
  "Heavy industries": "🏭",
  "Light manufacturing": "🏗️",
  "Production plants": "⚙️",
  "Office towers": "🏢",
  "Hotels": "🏨",
  "Retail complexes": "🛍️",
  "Logistics hubs": "📦",
  "Public infrastructure": "🏛️",
};

const getIndustryIcon = (industry: string): string => {
  const lower = industry.toLowerCase();
  if (lower.includes("heavy") || lower.includes("steel") || lower.includes("cement")) return "🏭";
  if (lower.includes("light") || lower.includes("manufacturing") || lower.includes("textile")) return "🏗️";
  if (lower.includes("production") || lower.includes("plant")) return "⚙️";
  if (lower.includes("office") || lower.includes("tower") || lower.includes("business")) return "🏢";
  if (lower.includes("hotel") || lower.includes("resort") || lower.includes("entertainment")) return "🏨";
  if (lower.includes("retail") || lower.includes("shopping") || lower.includes("mall")) return "🛍️";
  if (lower.includes("logistics") || lower.includes("warehouse")) return "📦";
  if (lower.includes("public") || lower.includes("infrastructure") || lower.includes("municipal")) return "🏛️";
  return "⚡";
};

export default function IndustriesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  return (
    <section 
      ref={sectionRef}
      id="industries" 
      className="relative py-24 bg-gradient-to-b from-neutral-50/95 via-white/95 to-neutral-50/95 overflow-hidden"
    >
      {/* Electric Waves Pattern */}
      <div className="absolute inset-0 opacity-10 z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="electricWave-industries" x="0" y="0" width="300" height="200" patternUnits="userSpaceOnUse">
              <path
                d="M0,100 Q75,50 150,100 T300,100"
                fill="none"
                stroke="rgba(40, 94, 115, 0.3)"
                strokeWidth="3"
              />
              <path
                d="M0,150 Q75,100 150,150 T300,150"
                fill="none"
                stroke="rgba(40, 94, 115, 0.25)"
                strokeWidth="2.5"
              />
              <animateTransform
                attributeName="patternTransform"
                type="translate"
                values="0,0; 300,0; 0,0"
                dur="20s"
                repeatCount="indefinite"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#electricWave-industries)" />
        </svg>
      </div>
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(40,94,115,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent-cyan/10 text-primary font-semibold rounded-full border border-primary/20">
              {industries.title}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-12 leading-tight"
          >
            <span className="bg-gradient-to-r from-primary via-primary-dark to-primary bg-clip-text text-transparent">
              {industries.title}
            </span>
          </motion.h2>

          {/* Hero Image with Parallax Effect */}
          {imageMap.industries && (
            <motion.div
              style={{ y: imageY, opacity: imageOpacity }}
              className="relative w-full max-w-5xl mx-auto h-80 rounded-3xl overflow-hidden mb-16 shadow-2xl"
            >
              <Image
                src={imageMap.industries}
                alt="Industries We Serve"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                loading="lazy"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-white text-center px-6"
                >
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">Powering Industries Across Egypt</h3>
                  <p className="text-lg md:text-xl opacity-90">From heavy manufacturing to modern infrastructure</p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Industries Grid with Enhanced Design */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.list.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.08,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-neutral-100 hover:border-primary/40 h-full overflow-hidden">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                  {/* Icon with animation */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.4 + index * 0.08,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.2,
                      transition: { duration: 0.5 }
                    }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-3xl shadow-lg group-hover:shadow-xl transition-shadow"
                  >
                    {getIndustryIcon(industry)}
                  </motion.div>
                  
                  {/* Industry name */}
                  <motion.h3
                    className="text-base font-semibold text-neutral-800 group-hover:text-primary transition-colors leading-relaxed"
                    whileHover={{ x: 3 }}
                  >
                    {industry}
                  </motion.h3>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-accent-cyan/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow">
            <motion.span
              animate={{ 
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              className="block"
            >
              Trusted by Leading Industries Nationwide
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

