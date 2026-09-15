"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Target } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import GlassCard from "./ui/GlassCard";
import { fadeIn, slideInLeft } from "@/lib/animations";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Learning Journey" 
          subtitle="My academic path and current educational focus as a B.Tech student."
        />

        <div className="mt-16 max-w-4xl mx-auto">
          {/* Timeline Item 1 */}
          <div className="relative pl-8 md:pl-0">
            {/* Desktop Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary/50 to-transparent -translate-x-1/2" />
            
            {/* Mobile Line */}
            <div className="md:hidden absolute left-[15px] top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary/50 to-transparent" />

            <div className="relative mb-16 md:mb-24">
              <div className="md:flex items-center justify-between w-full">
                
                {/* Left Side */}
                <div className="md:w-[45%] mb-8 md:mb-0 md:text-right pr-0 md:pr-12">
                  <motion.div
                    variants={slideInLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-2">1st Year B.Tech Student</h3>
                    <p className="text-primary font-medium mb-1">SRM Institute of Science and Technology</p>
                    <p className="text-muted text-sm mb-4">Ramapuram Campus • Present</p>
                    <span className="inline-block px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-xs font-mono text-primary-100">
                      Current Stage: 1st Year
                    </span>
                  </motion.div>
                </div>
                
                {/* Center Icon */}
                <div className="absolute left-[-16px] md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-background border-4 border-primary flex items-center justify-center z-10">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                
                {/* Right Side */}
                <div className="md:w-[45%] pl-0 md:pl-12">
                  <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <GlassCard className="p-6">
                      <h4 className="flex items-center gap-2 font-semibold text-lg mb-4 text-white">
                        <BookOpen size={18} className="text-accent" />
                        Learning Focus
                      </h4>
                      <ul className="space-y-2 text-sm text-muted">
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent/50" /> Java Programming & Python Basics</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent/50" /> MySQL & Database Fundamentals</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent/50" /> CRUD Applications</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent/50" /> Basic Software Development Concepts</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent/50" /> Exploring AI Tools & Technology</li>
                      </ul>
                    </GlassCard>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative">
              <div className="md:flex items-center justify-between w-full flex-row-reverse">
                
                {/* Right Side (Content for mobile, left side on desktop) */}
                <div className="md:w-[45%] mb-8 md:mb-0 pl-0 md:pl-12 text-left">
                  <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-2">Future Aspirations</h3>
                    <p className="text-secondary font-medium mb-4">Continuous Learning</p>
                  </motion.div>
                </div>
                
                {/* Center Icon */}
                <div className="absolute left-[-16px] md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-background border-4 border-secondary flex items-center justify-center z-10">
                  <Target size={12} className="text-white" />
                </div>
                
                {/* Left Side (Goals) */}
                <div className="md:w-[45%] pr-0 md:pr-12 md:text-right">
                  <motion.div
                    variants={slideInLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <GlassCard className="p-6 text-left md:text-right">
                      <h4 className="flex items-center md:justify-end gap-2 font-semibold text-lg mb-4 text-white">
                        Current Goals
                        <GraduationCap size={18} className="text-secondary hidden md:block" />
                      </h4>
                      <ul className="space-y-2 text-sm text-muted">
                        <li>Strengthen programming fundamentals</li>
                        <li>Build more diverse projects</li>
                        <li>Learn advanced development concepts</li>
                        <li>Improve problem-solving skills</li>
                        <li>Gain practical development experience</li>
                      </ul>
                    </GlassCard>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
