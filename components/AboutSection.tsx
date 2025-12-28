"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about-us"
      className="relative py-24 overflow-hidden bg-primary"
    >
      
      <div className="relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-12 text-center leading-tight"
          >
            Who We Are
          </motion.h2>

          {/* Content Container */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-dark/50 via-primary/30 to-primary-dark/50 p-8 md:p-12 rounded-3xl border-2 border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-50" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent-cyan/20 to-transparent rounded-tr-full opacity-50" />

              <div className="space-y-6 relative z-10">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg md:text-xl text-neutral-200 leading-relaxed"
                >
                  Electro Waves for Integrated Industries is a specialized engineering and manufacturing 
                  company established in 2021 in New Borg El Arab, Alexandria, Egypt. The company 
                  focuses on designing and producing advanced, tailor-made electrical 
                  distribution and control panels that ensure operational safety, stable power 
                  performance, and long-term reliability for industrial and commercial clients.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-lg md:text-xl text-neutral-200 leading-relaxed"
                >
                  By combining deep technical expertise, real-world industrial understanding, and 
                  high-level business insight, Electro Waves delivers solutions that outperform 
                  standard market offerings and rival expensive imported alternatives. The 
                  company's approach focuses on risk anticipation, component lifecycle analysis, 
                  and load/heat simulations—ensuring that every system performs reliably under 
                  Egypt's demanding industrial conditions.
                </motion.p>
              </div>

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
        </motion.div>
        </div>
      </div>
    </section>
  );
}

