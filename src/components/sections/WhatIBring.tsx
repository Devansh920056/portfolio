"use client";

import { Section } from "@/components/ui/Section";
import { whatIBringData } from "@/data";
import { motion } from "framer-motion";
import { Zap, BookOpen, Users } from "lucide-react";

const icons = [Zap, BookOpen, Users];

export function WhatIBring() {
  return (
    <Section id="what-i-bring" title="What I Bring" subtitle="My core strengths as a developer and team member.">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {whatIBringData.map((item, index) => {
          const Icon = icons[index % icons.length];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
