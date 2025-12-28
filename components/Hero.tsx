"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import { companyInfo, brandMessage, marketPosition } from "@/lib/content";
import { withBasePath } from "@/lib/basePath";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary-dark/95 z-10" />
        <Image
          src={withBasePath("/images/pdf/page_25_img_1.jpeg")}
          alt="Electro Waves"
          fill
          className="object-cover"
          priority
          quality={90}
          unoptimized
        />
      </div>

      {/* Circular Image Banner (Top) - Hidden on mobile */}
      <div className="absolute top-20 left-0 right-0 z-20 overflow-hidden hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-3 overflow-x-auto pb-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: item * 0.1, duration: 0.5 }}
                className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 overflow-hidden"
              >
                <div className="w-full h-full bg-gradient-to-br from-accent-yellow to-primary" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 pb-12 md:pb-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <Badge variant="yellow" className="mb-4">
              {companyInfo.tagline}
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              {brandMessage.message}
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-white/90 leading-relaxed">
              {companyInfo.description}
            </p>
            <Button variant="secondary" className="flex items-center gap-2">
              <span>Read More</span>
              <span className="w-2 h-2 rounded-full bg-neutral-900" />
            </Button>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={withBasePath("/images/logo.png")}
                alt={companyInfo.name}
                width={600}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Quote Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 md:mt-16 text-center px-4"
        >
          <blockquote className="text-lg sm:text-xl md:text-2xl text-white/90 italic max-w-3xl mx-auto">
            "{marketPosition.description.split('.')[0]}."
          </blockquote>
          <p className="mt-4 text-white/70">— {companyInfo.name}</p>
        </motion.div>
      </div>
    </section>
  );
}

