"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { withBasePath } from "@/lib/basePath";

interface HeaderProps {
  forceScrolled?: boolean;
}

export default function Header({ forceScrolled = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(forceScrolled);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (forceScrolled) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [forceScrolled]);

  // Helper function to get the correct href based on current page
  const getHref = (anchor: string) => {
    return isHomePage ? anchor : `/${anchor}`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-3"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="relative w-20 h-12 sm:w-24 sm:h-14 md:w-28 md:h-16">
                <Image
                  src={isScrolled ? withBasePath("/images/logo-colored.png") : withBasePath("/images/logo.png")}
                  alt="Electro Waves"
                  fill
                  className="object-contain"
                  priority
                  unoptimized
                />
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a
              href={getHref("#home")}
              className={`transition-colors font-medium ${
                isScrolled ? "text-neutral-700 hover:text-primary" : "text-white hover:text-accent-yellow"
              }`}
            >
              Home
            </a>
            <a
              href={getHref("#about")}
              className={`transition-colors font-medium ${
                isScrolled ? "text-neutral-700 hover:text-primary" : "text-white hover:text-accent-yellow"
              }`}
            >
              Our Core Values
            </a>
            <a
              href={getHref("#services")}
              className={`transition-colors font-medium ${
                isScrolled ? "text-neutral-700 hover:text-primary" : "text-white hover:text-accent-yellow"
              }`}
            >
              Services
            </a>
            <a
              href={getHref("#industries")}
              className={`transition-colors font-medium ${
                isScrolled ? "text-neutral-700 hover:text-primary" : "text-white hover:text-accent-yellow"
              }`}
            >
              Industries
            </a>
            <a
              href={getHref("#projects")}
              className={`transition-colors font-medium ${
                isScrolled ? "text-neutral-700 hover:text-primary" : "text-white hover:text-accent-yellow"
              }`}
            >
              Projects
            </a>
            <a
              href={getHref("#market-position")}
              className={`transition-colors font-medium ${
                isScrolled ? "text-neutral-700 hover:text-primary" : "text-white hover:text-accent-yellow"
              }`}
            >
              Market Position
            </a>
            <a
              href={getHref("#ceo")}
              className={`transition-colors font-medium ${
                isScrolled ? "text-neutral-700 hover:text-primary" : "text-white hover:text-accent-yellow"
              }`}
            >
              CEO Message
            </a>
            <a
              href={getHref("#contact")}
              className={`transition-colors font-medium ${
                isScrolled ? "text-neutral-700 hover:text-primary" : "text-white hover:text-accent-yellow"
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <span
                className={`block h-0.5 w-6 transition-all ${
                  isScrolled ? "bg-neutral-900" : "bg-white"
                } ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 transition-all ${
                  isScrolled ? "bg-neutral-900" : "bg-white"
                } ${isMobileMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 transition-all ${
                  isScrolled ? "bg-neutral-900" : "bg-white"
                } ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-neutral-200">
            <nav className="flex flex-col space-y-4 pt-4">
              <a
                href={getHref("#home")}
                className="text-neutral-700 hover:text-primary font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href={getHref("#about")}
                className="text-neutral-700 hover:text-primary font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our Core Values
              </a>
              <a
                href={getHref("#services")}
                className="text-neutral-700 hover:text-primary font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href={getHref("#industries")}
                className="text-neutral-700 hover:text-primary font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Industries
              </a>
              <a
                href={getHref("#projects")}
                className="text-neutral-700 hover:text-primary font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href={getHref("#market-position")}
                className="text-neutral-700 hover:text-primary font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Market Position
              </a>
              <a
                href={getHref("#ceo")}
                className="text-neutral-700 hover:text-primary font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CEO Message
              </a>
              <a
                href={getHref("#contact")}
                className="text-neutral-700 hover:text-primary font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

