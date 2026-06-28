"use client";

import { Section } from "@/components/ui/Section";
import { skillsData, currentFocusData, certificationsData } from "@/data";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Code2, Target, BookOpen, Layers, Wrench, ChevronRight, Box, Terminal, Database, Globe } from "lucide-react";
import { FaGithub, FaFigma } from "react-icons/fa";

const coreToolsGroups = [
  {
    category: "Development",
    tools: [
      { name: "VS Code", icon: Terminal },
      { name: "Prisma", icon: Database },
      { name: "Vercel", icon: Layers },
      { name: "Postman", icon: Globe }
    ]
  },
  {
    category: "Collaboration",
    tools: [
      { name: "Git", icon: Box },
      { name: "GitHub", icon: FaGithub }
    ]
  },
  {
    category: "Design",
    tools: [
      { name: "Figma", icon: FaFigma }
    ]
  }
];

const currentlyExploring = [
  "Backend Development",
  "Real-Time Systems",
  "Machine Learning",
  "System Design",
  "Web Performance"
];

export function BentoSkills() {
  const [leetcodeStats, setLeetcodeStats] = useState({ solved: 0, easy: 0, medium: 0, hard: 0 });
  const [showLeetCode, setShowLeetCode] = useState(false);

  useEffect(() => {
    fetch("/api/leetcode")
      .then(res => res.json())
      .then(data => {
        if (data.solvedProblem !== undefined) {
          const solved = parseInt(data.solvedProblem);
          setLeetcodeStats({ 
            solved: solved, 
            easy: data.easySolved,
            medium: data.mediumSolved,
            hard: data.hardSolved
          });
          if (solved >= 75) {
            setShowLeetCode(true);
          }
        }
      })
      .catch(console.error);
  }, []);


  return (
    <Section id="skills" title="Expertise" subtitle="My technical toolkit and current learning focus.">
      <div className={cn(
        "grid gap-4 md:gap-6 mt-8",
        showLeetCode ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-6" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
      )}>
        
        {/* Card 1: Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={cn(
            "glass-card rounded-3xl p-6 md:p-8 flex flex-col",
            showLeetCode ? "lg:col-span-4 lg:row-span-2" : "lg:col-span-2 lg:row-span-2"
          )}
        >
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-2.5 bg-white/5 rounded-xl text-accent">
              <Code2 size={22} />
            </div>
            <h3 className="text-xl font-bold tracking-tight">Technical Skills</h3>
          </div>

          <div className={cn(
            "grid gap-6",
            showLeetCode ? "md:grid-cols-2" : "grid-cols-1"
          )}>
            {skillsData.filter(c => c.category !== "Tools & Technologies").map((category) => (
              <div key={category.category} className="space-y-3">
                <h4 className="text-sm font-semibold text-zinc-400 flex items-center gap-2">
                  <category.icon size={14} />
                  {category.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span
                      key={skill.name}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-zinc-900/50 border border-zinc-800/50 text-zinc-300 transition-colors hover:text-white hover:bg-zinc-800/80"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Card 2: Current Focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card rounded-3xl p-6 md:p-8 flex flex-col lg:col-span-2"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2.5 bg-white/5 rounded-xl text-accent">
              <Target size={22} />
            </div>
            <h3 className="text-xl font-bold tracking-tight">Current Focus Areas</h3>
          </div>
          <div className="space-y-4">
            {currentFocusData.map((item) => (
              <div key={item.id} className="flex flex-col space-y-1">
                <h4 className="text-sm font-semibold text-zinc-200">{item.title}</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Card 3: Currently Exploring */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={cn(
            "glass-card rounded-3xl p-6 md:p-8 flex flex-col",
            showLeetCode ? "lg:col-span-2" : "lg:col-span-1"
          )}
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2.5 bg-white/5 rounded-xl text-accent">
              <BookOpen size={22} />
            </div>
            <h3 className="text-xl font-bold tracking-tight">Currently Exploring</h3>
          </div>
          <div className="space-y-3 mt-auto">
            {currentlyExploring.map((topic, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-zinc-900/30 border border-zinc-800/30">
                <ChevronRight size={16} className="text-zinc-500 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-zinc-300">{topic}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Card 4: Core Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={cn(
            "glass-card rounded-3xl p-6 md:p-8 flex flex-col",
            showLeetCode ? "lg:col-span-3" : "lg:col-span-1"
          )}
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2.5 bg-white/5 rounded-xl text-accent">
              <Wrench size={22} />
            </div>
            <h3 className="text-xl font-bold tracking-tight">Core Tools</h3>
          </div>
          <div className="flex flex-col gap-5 mt-2">
            {coreToolsGroups.map((group) => (
              <div key={group.category} className="space-y-2">
                <h4 className="text-[10px] uppercase text-zinc-500 font-semibold tracking-wider">{group.category}</h4>
                <div className="flex flex-wrap gap-2.5">
                  {group.tools.map(tool => (
                    <div key={tool.name} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-900/50 border border-zinc-800/50 hover:bg-zinc-800/50 transition-colors">
                      <tool.icon size={13} className="text-zinc-400 shrink-0" />
                      <span className="text-[11px] font-semibold text-zinc-300">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Card 5: LeetCode (Conditional) */}
        {showLeetCode && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-card rounded-3xl p-6 md:p-8 flex flex-col lg:col-span-3"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2.5 bg-white/5 rounded-xl text-accent">
                <Layers size={22} />
              </div>
              <h3 className="text-xl font-bold tracking-tight">Problem Solving</h3>
            </div>
            
            <div className="flex items-end justify-between mb-6">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">{leetcodeStats.solved}</span>
                <span className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Problems Solved</span>
              </div>
            </div>

            <div className="space-y-3 mt-auto">
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="font-medium text-zinc-400">Easy</span>
                  <span className="text-zinc-500">{leetcodeStats.easy}</span>
                </div>
                <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden">
                  <div className="h-full bg-zinc-400 rounded-full" style={{ width: leetcodeStats.easy > 0 ? '100%' : '0%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="font-medium text-zinc-400">Medium</span>
                  <span className="text-zinc-500">{leetcodeStats.medium}</span>
                </div>
                <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden">
                  <div className="h-full bg-zinc-600 rounded-full" style={{ width: leetcodeStats.medium > 0 ? '100%' : '0%' }} />
                </div>
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </Section>
  );
}
