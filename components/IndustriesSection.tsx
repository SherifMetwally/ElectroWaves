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
      className="relative py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 leading-tight"
          >
            {industries.title}
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
              <div className="relative bg-gradient-to-br from-primary-dark/50 via-primary/30 to-primary-dark/50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-white/20 hover:border-white/40 hover:bg-white h-full overflow-hidden group">
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
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-dark group-hover:bg-primary flex items-center justify-center text-3xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                  >
                    {getIndustryIcon(industry)}
                  </motion.div>
                  
                  {/* Industry name */}
                  <motion.h3
                    className="text-base font-semibold text-white group-hover:text-primary transition-colors duration-300 leading-relaxed"
                    whileHover={{ x: 3 }}
                  >
                    {industry}
                  </motion.h3>
                </div>
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

