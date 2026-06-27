import { siteConfig } from "@/data";
import { Mail } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-zinc-950 pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          <div className="space-y-4">
            <a href="#home" aria-label="Home" className="inline-block hover:opacity-80 transition-opacity">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/branding/logo-wordmark.svg?v=6" 
                alt="Devansh." 
                className="h-8 w-auto" 
                style={{ background: 'transparent' }}
              />
            </a>
            <p className="text-sm text-zinc-500 max-w-xs">
              Full Stack Developer | AIML Student passionate about building real-world applications and continuously learning modern technologies.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-zinc-300">Quick Links</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#learning" className="hover:text-white transition-colors">Learning</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-zinc-300">Connect</h4>
            <div className="flex space-x-4">
              <a href={siteConfig.links.github} aria-label="GitHub Profile" className="text-zinc-500 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href={siteConfig.links.linkedin} aria-label="LinkedIn Profile" className="text-zinc-500 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${siteConfig.email}`} aria-label="Email Contact" className="text-zinc-500 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
