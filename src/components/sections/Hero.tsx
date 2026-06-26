"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowRight, Download } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import { siteConfig } from "@/data";
import Image from "next/image";

const roleTexts = [
  "Building Scalable Web Applications",
  "Solving Real-World Problems",
  "Learning Modern Technologies",
  "Exploring Full Stack & AI"
];

export function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roleTexts.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 w-fit mx-auto lg:mx-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-medium uppercase tracking-wider">Available for Opportunities</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Hi, I&apos;m <span className="text-gradient">{siteConfig.name}</span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-zinc-300 font-medium">
              {siteConfig.role}
            </h2>

            <div className="h-16 relative w-full max-w-xl mx-auto lg:mx-0">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentRoleIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="text-lg text-zinc-400 leading-relaxed absolute inset-0 text-center lg:text-left"
                >
                  {roleTexts[currentRoleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="group relative px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium flex items-center space-x-2 overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
              >
                <span className="relative z-10">View Projects</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                className="group px-6 py-3 rounded-full glass border-zinc-700 hover:bg-zinc-800 text-foreground font-medium flex items-center space-x-2 transition-all"
              >
                <span>Download Resume</span>
                <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Qualitative Badges Strip */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-8 mt-4 border-t border-white/5 max-w-xl mx-auto lg:mx-0 w-full">
              {siteConfig.stats?.map((stat, i) => (
                <div key={i} className="px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs md:text-sm font-medium text-zinc-300 shadow-sm whitespace-nowrap">
                  {stat.value}
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-5 pt-6 justify-center lg:justify-start">
              <SocialLink href={siteConfig.links.github} icon={<Github />} ariaLabel="GitHub Profile" />
              <SocialLink href={siteConfig.links.linkedin} icon={<Linkedin />} ariaLabel="LinkedIn Profile" />
              <SocialLink href={`mailto:${siteConfig.email}`} icon={<Mail />} ariaLabel="Email Contact" />
            </div>
          </motion.div>

          {/* Visual/Image Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end order-first lg:order-last mb-12 lg:mb-0 lg:-translate-y-10 lg:translate-x-8"
          >
            <div className="relative w-full aspect-square max-w-md flex items-center justify-center lg:justify-end">
              {/* Subtle ambient glow */}
              <div className="absolute right-0 rounded-full bg-gradient-to-tr from-primary/20 to-teal-500/20 blur-[80px] w-full h-full" />
              
              {/* Central Neural/Tech Node Design */}
              <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                {/* Outer rotating ring */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-zinc-800/80 border-t-primary/50"
                />
                
                {/* Middle rotating ring (reverse) */}
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 lg:inset-6 rounded-full border border-zinc-800/80 border-b-teal-500/50"
                />

                {/* Photo Container Ring */}
                <div className="absolute inset-10 lg:inset-12 rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-md shadow-[inset_0_0_30px_rgba(16,185,129,0.1)] p-2 transition-all">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-primary/30 shadow-[0_0_40px_rgba(16,185,129,0.3)] bg-zinc-950 flex items-center justify-center group">
                    
                    {/* Fallback Placeholder (shows if profile.jpg is missing) */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-zinc-800 to-zinc-900 flex flex-col items-center justify-center z-0">
                      <span className="text-4xl mb-2 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">📸</span>
                      <span className="text-[10px] font-mono text-zinc-500 text-center px-6 leading-tight">Place &apos;profile.jpg&apos; in public folder</span>
                    </div>
                    
                    {/* Actual Image */}
                    <Image
                      src="/profile.jpg"
                      alt="Devansh Zode"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center z-10 transition-opacity duration-500"
                      onError={(e) => { 
                        (e.target as HTMLImageElement).style.opacity = '0';
                        (e.target as HTMLImageElement).style.pointerEvents = 'none';
                      }}
                    />
                  </div>
                </div>

                {/* Floating Tech Nodes */}
                <motion.div 
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 -right-4 lg:top-12 lg:-right-6 w-12 h-12 lg:w-16 lg:h-16 rounded-xl glass-card border border-white/10 flex items-center justify-center backdrop-blur-xl shadow-xl"
                >
                  <span className="text-teal-400 font-mono text-xs lg:text-sm font-bold">AI</span>
                </motion.div>

                <motion.div 
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-12 -left-6 lg:bottom-16 lg:-left-8 w-14 h-14 lg:w-20 lg:h-20 rounded-xl glass-card border border-white/10 flex items-center justify-center backdrop-blur-xl shadow-xl"
                >
                  <span className="text-primary font-mono text-xs lg:text-sm font-bold">WEB</span>
                </motion.div>

                <motion.div 
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute -top-6 left-16 lg:-top-8 lg:left-24 w-10 h-10 lg:w-14 lg:h-14 rounded-xl glass-card border border-white/10 flex items-center justify-center backdrop-blur-xl shadow-xl"
                >
                  <span className="text-zinc-400 font-mono text-xs lg:text-sm font-bold">{'</>'}</span>
                </motion.div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, ariaLabel }: { href: string; icon: React.ReactNode; ariaLabel: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="p-3 rounded-full bg-zinc-900 border border-zinc-800 hover:border-primary/50 hover:text-primary transition-all hover:shadow-[0_0_15px_rgba(16,185,129,0.2)]"
    >
      {icon}
    </a>
  );
}
