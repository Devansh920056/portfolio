"use client";

import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/data";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, FileText, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for actual form submission logic
    setIsSubmitting(true);
    setTimeout(() => {
      alert("Message sent successfully! (Demo)");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <Section id="contact" title="Get In Touch" subtitle="Have a question or want to work together?">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        
        {/* Contact Info & Resume CTA */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-4">Let&apos;s Connect</h3>
            <p className="text-zinc-400 mb-8">
              I am actively seeking Software Engineering Internships. Whether you have an opportunity or just want to chat about tech, my inbox is always open.
            </p>
            
            <div className="flex flex-col space-y-3">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center space-x-3 p-3 bg-zinc-900/50 rounded-xl border border-zinc-800 hover:border-primary/50 group transition-all">
                <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Mail size={18} />
                </div>
                <span className="font-medium text-zinc-300 group-hover:text-white transition-colors">Email Me</span>
              </a>
              <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-3 bg-zinc-900/50 rounded-xl border border-zinc-800 hover:border-blue-500/50 group transition-all">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <FaLinkedin size={18} />
                </div>
                <span className="font-medium text-zinc-300 group-hover:text-white transition-colors">LinkedIn</span>
              </a>
              <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-3 bg-zinc-900/50 rounded-xl border border-zinc-800 hover:border-white/50 group transition-all">
                <div className="p-2 bg-zinc-800 rounded-lg text-white group-hover:bg-white group-hover:text-black transition-all">
                  <FaGithub size={18} />
                </div>
                <span className="font-medium text-zinc-300 group-hover:text-white transition-colors">GitHub</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass p-8 rounded-2xl border-l-4 border-l-primary bg-primary/5"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <FileText className="mr-2 text-primary" size={20} />
                  Resume
                </h3>
                <p className="text-zinc-400 text-sm mb-4">
                  Download my full resume to see my detailed academic background, skills, and project experience.
                </p>
              </div>
            </div>
            <a 
              href="/resume.pdf" 
              target="_blank"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-black hover:bg-zinc-200 transition-colors rounded-full font-medium text-sm"
            >
              <span>Download PDF</span>
              <Download size={16} />
            </a>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6">
            <div className="flex items-center space-x-2 mb-6">
              <MessageSquare className="text-primary" />
              <h3 className="text-xl font-bold">Send a Message</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-zinc-400">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-white placeholder:text-zinc-600"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-zinc-400">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-white placeholder:text-zinc-600"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-zinc-400">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-white placeholder:text-zinc-600"
                placeholder="How can I help you?"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-zinc-400">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-white placeholder:text-zinc-600 resize-none"
                placeholder="Your message here..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-medium flex items-center justify-center space-x-2 hover:bg-primary/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              {!isSubmitting && <Send size={18} />}
            </button>
          </form>
        </motion.div>

      </div>
    </Section>
  );
}
