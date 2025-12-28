"use client";

import { motion } from "framer-motion";

export default function MissionVisionSection() {
  return (
    <section
      id="mission-vision"
      className="py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-16 text-center leading-tight"
          >
            Mission & Vision
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-dark/50 via-primary/30 to-primary-dark/50 p-8 md:p-12 rounded-3xl border-2 border-white/30 shadow-xl hover:shadow-2xl hover:bg-white transition-all duration-300 h-full group">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-50" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent-cyan/20 to-transparent rounded-tr-full opacity-50" />

                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 200 }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-3xl mb-6 shadow-lg"
                  >
                    🎯
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-3xl md:text-4xl font-bold text-white group-hover:text-primary mb-6 transition-colors duration-300"
                  >
                    Mission
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="text-lg md:text-xl text-neutral-200 group-hover:text-primary leading-relaxed transition-colors duration-300"
                  >
                    We design and deliver advanced electrical panel systems that optimize power distribution, 
                    enhance safety, and support industrial growth.
                  </motion.p>

                  {/* Animated progress bar */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                    className="h-1 bg-gradient-to-r from-primary to-primary-dark rounded-full mt-8"
                  />
                </div>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-dark/50 via-primary/30 to-primary-dark/50 p-8 md:p-12 rounded-3xl border-2 border-white/30 shadow-xl hover:shadow-2xl hover:bg-white transition-all duration-300 h-full group">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-50" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent-cyan/20 to-transparent rounded-tr-full opacity-50" />

                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 200 }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-3xl mb-6 shadow-lg"
                  >
                    👁️
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="text-3xl md:text-4xl font-bold text-white group-hover:text-primary mb-6 transition-colors duration-300"
                  >
                    Vision
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-lg md:text-xl text-neutral-200 group-hover:text-primary leading-relaxed transition-colors duration-300"
                  >
                    To become Egypt's most trusted provider of smart electrical panel solutions, empowering industries 
                    with safety, innovation, and reliability.
                  </motion.p>

                  {/* Animated progress bar */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.9, ease: "easeOut" }}
                    className="h-1 bg-gradient-to-r from-primary to-primary-dark rounded-full mt-8"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

