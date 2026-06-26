"use client";

import { Section } from "@/components/ui/Section";
import { projectsData } from "@/data";
import { motion } from "framer-motion";
import { ExternalLink, Layers, Server, Database as DbIcon, Cloud, CheckCircle2, AlertTriangle, Lightbulb } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";

export function Projects() {
  return (
    <Section id="projects" title="Featured Projects" subtitle="Deep dive into the architecture, challenges, and solutions of my key projects.">
      <div className="flex flex-col space-y-32 mt-8">
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-12 relative"
          >
            {/* Visual Header - Large Browser Window */}
            <div className="w-full relative aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden glass-card group">
              <div className="absolute inset-0 bg-zinc-900 flex flex-col">
                <div className="h-10 bg-zinc-950 flex items-center px-4 space-x-2 border-b border-zinc-800/80">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <div className="ml-4 flex-1 h-6 bg-zinc-900 rounded-md border border-zinc-800 flex items-center px-3">
                    <span className="text-[10px] font-mono text-zinc-500 font-medium">localhost:3000/{project.id}</span>
                  </div>
                </div>
                <div className="flex-1 p-8 flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-zinc-900 to-zinc-950">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
                  <span className="text-white font-bold text-3xl md:text-5xl tracking-wider px-8 py-4 rounded-xl bg-zinc-900/90 border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.05)] flex items-center space-x-4 relative z-10">
                    <span className="w-3 h-3 rounded-full bg-white animate-pulse shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
                    <span>{project.title}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Project Deep Dive Content */}
            <div className="w-full">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
                <div>
                  <div className="flex flex-col gap-3 mb-4">
                    <h3 className="text-4xl font-bold">{project.title}</h3>
                    <div className="flex flex-wrap items-center gap-2">
                      {project.status && (
                        <span className="px-3 py-1 bg-white/10 text-white border border-white/20 rounded-full text-xs font-bold tracking-wide uppercase">
                          {project.status}
                        </span>
                      )}
                      {project.metadata && project.metadata.map((meta: string) => (
                        <span key={meta} className="px-3 py-1 bg-zinc-800/80 text-zinc-300 border border-zinc-700 rounded-full text-xs font-medium">
                          {meta}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-xl text-zinc-300 max-w-3xl leading-relaxed">{project.description}</p>
                </div>
                <div className="flex items-center space-x-4 shrink-0">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-zinc-400 hover:text-white bg-zinc-900/50 border border-zinc-800 px-4 py-2 rounded-lg transition-colors">
                      <Github size={20} />
                      <span className="font-medium">Source</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white hover:text-black bg-white/5 hover:bg-white border border-white/10 px-4 py-2 rounded-lg transition-colors">
                      <ExternalLink size={20} />
                      <span className="font-medium">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Problem Solved */}
              {project.problemSolved && (
                <div className="mb-12 glass-card p-6 border-l-4 border-l-zinc-300 rounded-r-xl">
                  <h4 className="text-lg font-bold text-white mb-2">The Problem & Solution</h4>
                  <p className="text-zinc-400">{project.problemSolved}</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                {/* Features */}
                <div>
                  <h4 className="text-xl font-bold mb-6 flex items-center space-x-2 border-b border-zinc-800 pb-2">
                    <CheckCircle2 className="text-white" size={20} />
                    <span>Key Features</span>
                  </h4>
                  <ul className="space-y-3">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-zinc-300">
                        <span className="text-zinc-500 mr-3 mt-1 text-xs">▹</span>
                        <span className="text-sm md:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Tech Stack */}
                <div>
                  <h4 className="text-xl font-bold mb-6 flex items-center space-x-2 border-b border-zinc-800 pb-2">
                    <Layers className="text-white" size={20} />
                    <span>Core Technologies</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="font-mono text-sm text-zinc-300 bg-white/5 px-3 py-1.5 rounded-md border border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Architecture Breakdown */}
              {project.architecture && (
                <div className="mb-12">
                  <h4 className="text-xl font-bold mb-6 border-b border-zinc-800 pb-2">Architecture Breakdown</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <ArchitectureCard icon={Layers} title="Frontend" techs={project.architecture.frontend} />
                    <ArchitectureCard icon={Server} title="Backend" techs={project.architecture.backend} />
                    <ArchitectureCard icon={DbIcon} title="Database" techs={project.architecture.database} />
                    <ArchitectureCard icon={Cloud} title="Infrastructure" techs={project.architecture.infrastructure} />
                  </div>
                </div>
              )}

              {/* Challenges & Learnings */}
              {(project.challenges || project.learnings) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.challenges && (
                    <div className="glass-card p-6 rounded-xl border border-zinc-800">
                      <h4 className="text-lg font-bold mb-4 flex items-center space-x-2 text-white">
                        <AlertTriangle size={18} />
                        <span>Challenges</span>
                      </h4>
                      <ul className="space-y-2">
                        {project.challenges.map((c, i) => (
                          <li key={i} className="text-sm text-zinc-400 flex items-start">
                            <span className="mr-2 mt-0.5">•</span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {project.learnings && (
                    <div className="glass-card p-6 rounded-xl border border-zinc-800">
                      <h4 className="text-lg font-bold mb-4 flex items-center space-x-2 text-white">
                        <Lightbulb size={18} />
                        <span>Learnings</span>
                      </h4>
                      <ul className="space-y-2">
                        {project.learnings.map((l, i) => (
                          <li key={i} className="text-sm text-zinc-400 flex items-start">
                            <span className="mr-2 mt-0.5">•</span>
                            {l}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
              
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function ArchitectureCard({ icon: Icon, title, techs }: { icon: React.ElementType; title: string; techs: string[] }) {
  return (
    <div className="bg-zinc-900/50 border border-white/5 rounded-xl p-5 hover:border-white/10 transition-colors">
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-2 bg-white/5 rounded-lg text-zinc-300">
          <Icon size={18} />
        </div>
        <h5 className="font-bold text-zinc-200">{title}</h5>
      </div>
      <ul className="space-y-1.5">
        {techs.map((t: string) => (
          <li key={t} className="text-sm font-mono text-zinc-400">{t}</li>
        ))}
      </ul>
    </div>
  );
}
