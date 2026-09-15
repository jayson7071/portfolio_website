"use client";

import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, YoutubeIcon } from "./ui/Icons";
import SectionHeading from "./ui/SectionHeading";
import GlassCard from "./ui/GlassCard";
import { slideInLeft, slideInRight } from "@/lib/animations";

export default function Contact() {
  const SOCIAL_LINKS = [
    { name: "LinkedIn", icon: LinkedinIcon, href: "#" },
    { name: "GitHub", icon: GithubIcon, href: "https://github.com/jayson7071/portfolio_website" },
    { name: "YouTube", icon: YoutubeIcon, href: "#" },
    { name: "Email", icon: Mail, href: "mailto:jayson@example.com" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, integrate with Formspree or a backend
    alert("This is a frontend-only sample. Form submission is simulated.");
  };

  return (
    <section id="contact" className="py-24 relative bg-black/60">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Contact Form */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <SectionHeading 
              title="Get In Touch" 
              subtitle="Whether you have a question or just want to say hi, I'll try my best to get back to you!"
            />

            <form onSubmit={handleSubmit} className="space-y-4 mt-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-sm font-medium text-muted">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-muted/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="text-sm font-medium text-muted">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-muted/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-1">
                <label htmlFor="subject" className="text-sm font-medium text-muted">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-muted/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="Hello!"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-sm font-medium text-muted">Message</label>
                <textarea 
                  id="message" 
                  required
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-muted/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-4 font-semibold transition-all flex items-center justify-center gap-2 group mt-6"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Right: Connect Card */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex justify-center"
          >
            <GlassCard className="p-8 w-full max-w-md" glowOpacity={0.05}>
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              <p className="text-muted mb-8">
                I am always open to discussing new projects, learning opportunities, or chatting about technology and AI.
              </p>
              
              <div className="space-y-4">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-primary/20 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                      <link.icon size={20} />
                    </div>
                    <span className="font-medium">{link.name}</span>
                  </a>
                ))}
              </div>
            </GlassCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
