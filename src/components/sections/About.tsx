"use client";

import { Section } from "@/components/ui/Section";
import { aboutMe } from "@/data";
import { GraduationCap, Award, Calendar } from "lucide-react";

export function About() {
  return (
    <Section id="about" title="About Me" subtitle="A brief introduction about who I am and what I do.">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mt-8">
        
        <div className="lg:col-span-2 space-y-6">
          {aboutMe.description.map((paragraph, index) => (
            <p 
              key={index} 
              className="text-lg text-zinc-300 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="glass-card rounded-2xl p-6 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <h3 className="text-xl font-bold mb-6 flex items-center space-x-2">
              <GraduationCap className="text-accent" />
              <span>Education</span>
            </h3>

            <div className="space-y-6 relative z-10">
              <div className="flex flex-col space-y-2">
                <span className="text-sm text-zinc-400 flex items-center space-x-2">
                  <Award size={16} />
                  <span>Degree</span>
                </span>
                <span className="font-medium">{aboutMe.degree}</span>
              </div>

              <div className="flex flex-col space-y-2">
                <span className="text-sm text-zinc-400 flex items-center space-x-2">
                  <Calendar size={16} />
                  <span>Expected Graduation</span>
                </span>
                <span className="font-medium">{aboutMe.graduation}</span>
              </div>

              <div className="flex flex-col space-y-2">
                <span className="text-sm text-zinc-400 flex items-center space-x-2">
                  <Award size={16} />
                  <span>CGPA</span>
                </span>
                <span className="font-medium text-white text-xl">{aboutMe.cgpa}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
}
