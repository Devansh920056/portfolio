"use client";

import { Section } from "@/components/ui/Section";
import { certificationsData, currentFocusData } from "@/data";
import { motion } from "framer-motion";
import { BookOpen, Award, ExternalLink, Clock } from "lucide-react";

export function ContinuousLearning() {
  const completed = certificationsData.filter(c => c.status === "completed");
  const inProgress = certificationsData.filter(c => c.status === "in-progress");

  return (
    <Section id="learning" title="Continuous Learning" subtitle="What I'm actively exploring and the credentials I'm pursuing.">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        
        {/* Left Side: Current Focus */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold flex items-center space-x-2 border-b border-zinc-800 pb-4">
            <BookOpen className="text-primary" size={20} />
            <span>Current Technical Focus</span>
          </h3>
          <div className="space-y-4">
            {currentFocusData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-5 rounded-xl border border-white/5 bg-zinc-900/50 hover:bg-zinc-900/80 hover:border-primary/20 transition-all"
              >
                <h4 className="font-bold text-sm text-zinc-200 mb-2">{item.title}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Courses & Certifications */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold flex items-center space-x-2 border-b border-zinc-800 pb-4">
            <Award className="text-yellow-500" size={20} />
            <span>Courses & Certifications</span>
          </h3>
          
          <div className="space-y-4">
            {inProgress.map((cert, index) => (
              <CertCard key={cert.id} cert={cert} index={index} icon={<Clock size={16} className="text-yellow-500" />} />
            ))}
            {completed.map((cert, index) => (
              <CertCard key={cert.id} cert={cert} index={index} icon={<Award size={16} className="text-primary" />} />
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
}

function CertCard({ cert, index, icon }: { cert: { id: number, name: string, issuer: string, date: string, link: string, status: string }, index: number, icon: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="p-5 rounded-xl border border-white/5 bg-zinc-900/50 hover:bg-zinc-900/80 hover:border-primary/20 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
    >
      <div>
        <div className="flex items-center space-x-2 mb-1">
          {icon}
          <h4 className="font-bold text-sm text-zinc-200">{cert.name}</h4>
        </div>
        <p className="text-xs text-zinc-400 ml-6">{cert.issuer}</p>
      </div>
      
      <div className="flex items-center space-x-3 shrink-0 ml-6 sm:ml-0">
        <span className="text-[10px] uppercase tracking-wider font-mono text-zinc-500 bg-zinc-950 px-2 py-1 rounded border border-zinc-800">
          {cert.date}
        </span>
        {cert.link && cert.link !== "#" && (
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View credential for ${cert.name}`}
            className="text-primary hover:text-primary/80 transition-colors p-1"
          >
            <ExternalLink size={14} />
          </a>
        )}
      </div>
    </motion.div>
  );
}
