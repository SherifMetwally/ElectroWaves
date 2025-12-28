"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { companyInfo } from "@/lib/content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "Home", href: "#home" },
      { name: "Our Core Values", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Industries", href: "#industries" },
    ],
    explore: [
      { name: "Projects", href: "#projects" },
      { name: "Market Position", href: "#market-position" },
      { name: "CEO Message", href: "#ceo" },
      { name: "Contact Us", href: "#contact" },
    ],
  };

  return (
    <footer className="relative bg-gradient-to-b from-primary-dark to-primary text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <div className="relative w-32 h-20 mb-4">
                <Image
                  src="/images/logo.png"
                  alt={companyInfo.name}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-bold mb-3">{companyInfo.name}</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {companyInfo.tagline}
              </p>
            </div>
          </motion.div>

          {/* Quick Links - Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-white transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links - Explore */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-white transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">📍</span>
                <span>{companyInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-white">📞</span>
                <div className="flex flex-col">
                  {companyInfo.phone.map((phone, index) => (
                    <a
                      key={index}
                      href={`tel:${phone}`}
                      className="hover:text-white transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-white">✉️</span>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-white">🌐</span>
                <a
                  href={companyInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {companyInfo.website.replace(/^https?:\/\//, "")}
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8" />

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pb-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70"
        >
          <p>
            © {currentYear} {companyInfo.fullName}. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <span className="text-white/60">
              {companyInfo.established}
            </span>
            <span className="text-white/60">|</span>
            <span className="text-white/60">
              Developed by{" "}
              <a
                href="https://www.linkedin.com/in/sherifmetwally"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent-yellow transition-colors font-medium"
              >
                Sherif Metwally
              </a>
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

