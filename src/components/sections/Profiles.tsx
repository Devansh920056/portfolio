/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/data";
import { motion } from "framer-motion";
import { ExternalLink, Code2, Activity, Target, BookOpen, Layers } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";

export function Profiles() {
  const [githubStats, setGithubStats] = useState({ repos: "..." });

  useEffect(() => {
    // Fetch GitHub Stats from our internal API route
    fetch("/api/github")
      .then(res => res.json())
      .then(data => {
        if (data.public_repos !== undefined) {
          setGithubStats({ repos: data.public_repos.toString() });
        }
      })
      .catch(console.error);


  }, []);

  return (
    <Section id="profiles" title="Open Source & GitHub" subtitle="Consistently building, learning, and experimenting with modern technologies.">
      <div className="max-w-3xl mx-auto mt-8">
        
        {/* GitHub Stats Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-6 md:p-8 rounded-2xl flex flex-col relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
            <Github size={120} />
          </div>

          <div className="flex items-center justify-between mb-8 relative z-10">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800">
                <Github className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold">GitHub</h3>
            </div>
            <a 
              href={siteConfig.links.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2 text-white"
            >
              <span>View Profile</span>
              <ExternalLink size={14} />
            </a>
          </div>

          <div className="mb-6 relative z-10">
            <StatBox icon={Activity} label="Public Repositories" value={githubStats.repos} color="text-white" />
          </div>

          <div className="mt-auto relative z-10 space-y-4">
            <div>
              <h4 className="text-sm font-medium text-zinc-400 mb-2">Most Used Languages</h4>
              <div className="w-full bg-zinc-900/50 rounded-xl border border-zinc-800/50 p-2 flex items-center justify-center">
                <img 
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=Devansh920056&layout=compact&theme=transparent&hide_border=true&text_color=A1A1AA&title_color=FFFFFF" 
                  alt="Top Languages" 
                  className="w-full h-auto max-w-[300px]"
                />
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-zinc-400 mb-2">Recent Contributions</h4>
              <div className="w-full bg-zinc-900/50 rounded-xl border border-zinc-800/50 p-4 flex items-center justify-center overflow-x-auto overflow-y-hidden">
                <img 
                  src="https://ghchart.rshah.org/A1A1AA/Devansh920056" 
                  alt="Devansh's GitHub Contributions" 
                  className="w-full h-auto min-w-[300px] opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function StatBox({ icon: Icon, label, value, color }: { icon: React.ElementType, label: string, value: string, color: string }) {
  return (
    <div className="bg-zinc-900/50 rounded-xl border border-zinc-800 p-4 flex flex-col">
      <div className="flex items-center space-x-2 mb-2">
        <Icon className={color} size={16} />
        <span className="text-xs text-zinc-400 font-medium uppercase tracking-wider">{label}</span>
      </div>
      <span className="text-2xl font-bold text-white">{value}</span>
    </div>
  );
}
