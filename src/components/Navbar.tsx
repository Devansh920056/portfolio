"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Learning", href: "#learning" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let currentActive = "";

      for (const link of navLinks) {
        const sectionId = link.name.toLowerCase();
        const element = document.getElementById(sectionId);
        if (element && element.offsetTop <= scrollPosition) {
          currentActive = sectionId;
        }
      }

      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled ? "py-4 bg-zinc-950/80 backdrop-blur-md border-white/10 shadow-sm" : "py-6 bg-transparent border-transparent"
      )}
    >
      <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
        <a 
          href="#home" 
          aria-label="Home"
          onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}
          className="hover:opacity-80 transition-opacity flex items-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/branding/logo-wordmark.svg?v=6" 
            alt="Devansh." 
            className="h-8 w-auto" 
            style={{ background: 'transparent' }}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(link.href);
              }}
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground relative py-1",
                activeSection === link.name.toLowerCase()
                  ? "text-primary"
                  : "text-zinc-400"
              )}
            >
              {link.name}
              {activeSection === link.name.toLowerCase() && (
                <motion.div
                  layoutId="activeNavbarIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-zinc-300 to-zinc-500 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
            className="px-5 py-2 rounded-full bg-white/5 text-white hover:bg-white/10 hover:-translate-y-0.5 transition-all text-sm font-medium border border-white/10 hover:border-white/30 hover:shadow-[0_4px_15px_rgba(255,255,255,0.05)]"
          >
            Let&apos;s Connect
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          aria-label="Toggle Mobile Menu"
          aria-expanded={isMobileMenuOpen}
          className="md:hidden p-2 text-zinc-400 hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary rounded"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-b border-white/5 overflow-hidden"
          >
            <nav className="flex flex-col py-4 px-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className={cn(
                    "text-lg font-medium transition-colors",
                    activeSection === link.name.toLowerCase()
                      ? "text-primary"
                      : "text-zinc-400 hover:text-foreground"
                  )}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
