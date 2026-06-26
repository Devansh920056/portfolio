"use client";

import { Section } from "@/components/ui/Section";
import { skillsData } from "@/data";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Skills() {
  return (
    <Section id="skills" title="Technical Skills" subtitle="Technologies and tools I work with.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {skillsData.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card rounded-2xl p-6 border border-zinc-800/50 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <category.icon size={20} />
              </div>
              <h3 className="text-lg font-bold">{category.category}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className={cn(
                    "px-3 py-1.5 text-sm rounded-lg border flex items-center space-x-1.5 transition-colors",
                    skill.learning 
                      ? "bg-teal-500/10 border-teal-500/20 text-teal-300" 
                      : "bg-zinc-800/50 border-zinc-700/50 text-zinc-300 hover:text-white"
                  )}
                >
                  <span>{skill.name}</span>
                  {skill.learning && (
                    <span className="flex h-2 w-2 relative ml-1">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                    </span>
                  )}
                </span>
              ))}
            </div>
            
            {/* Legend for currently learning */}
            {category.skills.some(s => s.learning) && (
              <div className="mt-4 pt-4 border-t border-zinc-800/50 flex items-center space-x-2 text-xs text-zinc-500">
                <span className="flex h-2 w-2 relative">
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                </span>
                <span>Currently Learning</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
