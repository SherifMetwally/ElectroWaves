"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { marketPosition, strategicExpansion } from "@/lib/content";
import { imageMap } from "@/lib/images";

export default function MarketPositionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]);

  return (
    <section 
      ref={sectionRef}
      id="market-position" 
      className="relative pt-32 pb-24 bg-gradient-to-b from-white/95 via-neutral-50/95 to-white/95 overflow-hidden"
    >
      {/* Electric Waves Pattern */}
      <div className="absolute inset-0 opacity-10 z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="electricWave-market" x="0" y="0" width="300" height="200" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#electricWave-market)" />
        </svg>
      </div>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(40,94,115,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-16"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6 w-full text-center"
            >
              <span className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent-cyan/10 text-primary font-semibold rounded-full border border-primary/20">
                {marketPosition.title}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-12 text-center leading-tight"
            >
              <span className="bg-gradient-to-r from-primary via-primary-dark to-primary bg-clip-text text-transparent">
                {marketPosition.title}
              </span>
            </motion.h2>

            {/* Hero Image with Parallax */}
            {imageMap.marketPosition && (
              <motion.div
                style={{ y: imageY, scale: imageScale }}
                className="relative w-full max-w-4xl mx-auto h-80 rounded-3xl overflow-hidden mb-12 shadow-2xl"
              >
                <Image
                  src={imageMap.marketPosition}
                  alt="Market Position"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  loading="lazy"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/30 to-transparent" />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute inset-0 flex items-end justify-center pb-8"
                >
                  <div className="text-white text-center px-6">
                    <p className="text-xl md:text-2xl font-semibold">Leading the Future of Electrical Solutions</p>
                  </div>
                </motion.div>
              </motion.div>
            )}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-neutral-600 leading-relaxed text-center max-w-3xl mx-auto"
            >
              {marketPosition.description}
            </motion.p>
          </motion.div>

          {/* Strategic Expansion Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary/10 via-white to-accent-cyan/5 p-8 md:p-12 rounded-3xl border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-50" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent-cyan/20 to-transparent rounded-tr-full opacity-50" />

              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 relative z-10"
              >
                <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                  {strategicExpansion.title}
                </span>
              </motion.h3>

              <ul className="space-y-4 relative z-10">
                {strategicExpansion.items.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.5 + index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      x: 10,
                      transition: { duration: 0.3 }
                    }}
                    className="flex items-start gap-4 group"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.6 + index * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ 
                        scale: 1.3,
                        rotate: 360,
                        transition: { duration: 0.4 }
                      }}
                      className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center flex-shrink-0 mt-1 shadow-lg group-hover:shadow-xl transition-shadow"
                    >
                      <span className="text-white text-xs font-bold">✓</span>
                    </motion.div>
                    <motion.span
                      className="text-neutral-700 text-base md:text-lg leading-relaxed group-hover:text-primary transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {item}
                    </motion.span>
                  </motion.li>
                ))}
              </ul>

              {/* Animated progress bar */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                className="h-1 bg-gradient-to-r from-primary via-primary-dark to-accent-cyan rounded-full mt-8"
              />
            </div>
          </motion.div>

          {/* Bottom decorative element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 to-accent-cyan/10 rounded-full border border-primary/20">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.7, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-3 h-3 rounded-full bg-primary"
              />
              <span className="text-primary font-semibold">Expanding Across Egypt</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

