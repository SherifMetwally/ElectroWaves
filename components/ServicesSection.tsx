"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Card from "./ui/Card";
import { services, whatWeDo } from "@/lib/content";
import { imageMap } from "@/lib/images";

// Map services to images
const serviceImageMap: { [key: string]: string } = {
  "Main Distribution Panel (MDP)": imageMap.services.mdp,
  "Synchronization Panel": imageMap.services.synchronization,
  "Water Pump Control Panels": imageMap.services.waterPump,
  "Power Factor Correction (PFC) Panel": imageMap.services.pfc,
  "Outdoor Distribution Panels": imageMap.services.outdoor,
  "Star–Delta Motor Control Panels & Soft Starters": imageMap.services.starDelta,
  "Withdrawable-Type ATS Panel": imageMap.services.ats,
  "Sub-Distribution Panels": imageMap.services.subDistribution,
  "Motor Control Panels (Automatic Transfer Switch)": imageMap.services.motorControl,
  "Industrial Service Distribution Panels": imageMap.services.industrial,
  "Explosion-Proof Control Panels": imageMap.services.explosionProof,
  "Multi-Purpose Electrical Enclosures": imageMap.services.multiPurpose,
  "Medium-voltage RMU": imageMap.services.rmu,
};

// Icon components for benefits
const BenefitIcon = ({ index }: { index: number }) => {
  const icons = [
    "⚡", "🛡️", "🔋", "⚙️"
  ];
  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        type: "spring",
        stiffness: 200
      }}
      className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-dark group-hover:bg-primary flex items-center justify-center text-2xl shadow-lg transition-colors duration-300"
    >
      {icons[index] || "✓"}
    </motion.div>
  );
};

export default function ServicesSection() {
  return (
    <section 
      id="services" 
      className="relative py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            {whatWeDo.title}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-neutral-200 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            {whatWeDo.context}
          </motion.p>

          {/* Benefits Grid with Enhanced Design */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12"
          >
            {whatWeDo.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.6 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-primary-dark/50 via-primary/30 to-primary-dark/50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 hover:border-white/40 hover:bg-white h-full">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <BenefitIcon index={index} />
                    <h3 className="text-base font-semibold text-white group-hover:text-primary transition-colors duration-300">
                      {benefit}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Us Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span>Contact Us for More</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Services Grid with Enhanced Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -12,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <Card className="overflow-hidden h-full flex flex-col bg-gradient-to-br from-primary-dark/50 via-primary/30 to-primary-dark/50 border-2 border-white/20 hover:border-white/40 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-2xl group">
                {/* Service Image with Hover Effect */}
                {serviceImageMap[service.title] && (
                  <motion.div 
                    className="relative h-56 overflow-hidden"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={serviceImageMap[service.title]}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                      unoptimized
                    />
                  </motion.div>
                )}
                <div className="p-6 flex-grow flex flex-col">
                  <motion.h3 
                    className="text-xl font-bold text-white group-hover:text-primary mb-3 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {service.title}
                  </motion.h3>
                  <p className="text-neutral-200 group-hover:text-primary leading-relaxed text-sm flex-grow transition-colors duration-300">
                    {service.description}
                  </p>
                  {/* Decorative line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="h-1 bg-gradient-to-r from-primary to-accent-cyan rounded-full mt-4"
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

