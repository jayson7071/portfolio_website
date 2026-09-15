"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import AnimatedCounter from "./ui/AnimatedCounter";
import { slideInLeft, slideInRight } from "@/lib/animations";

export default function About() {
  const PILLS = [
    "Java Programming",
    "CRUD Application Making",
    "AI Tools",
    "Problem Solving",
    "Programming Fundamentals",
    "Technology Exploration",
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Bio */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <SectionHeading title="About Me" />
            
            <div className="space-y-6 text-muted/90 text-lg leading-relaxed">
              <p>
                Hello! I am <strong className="text-white">Jayson</strong>, a first-year B.Tech Computer Science student at SRM Institute of Science and Technology (SRMIST), Ramapuram. 
              </p>
              <p>
                My journey into technology started with a deep curiosity for how things work. Over the past couple of years, I've been actively learning programming fundamentals, exploring software development, and building small projects to turn concepts into reality.
              </p>
              <p>
                I am particularly enthusiastic about <strong className="text-white text-glow">Artificial Intelligence</strong> and problem-solving. While I am at the beginning of my formal education, I am highly motivated to learn new tools, understand complex systems, and continuously improve my technical skills.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {PILLS.map((pill) => (
                <span 
                  key={pill} 
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white shadow-sm"
                >
                  {pill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-center items-center text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 flex items-baseline">
                <AnimatedCounter value={1} suffix="st" />
              </div>
              <p className="text-sm text-muted font-medium">Year College Student</p>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-center items-center text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2 flex items-baseline">
                <AnimatedCounter value={2} suffix="+" />
              </div>
              <p className="text-sm text-muted font-medium">Years of Learning</p>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-center items-center text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2 flex items-baseline">
                <AnimatedCounter value={3} suffix="+" />
              </div>
              <p className="text-sm text-muted font-medium">Projects Built</p>
            </div>
            
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 rounded-2xl p-6 flex flex-col justify-center items-center text-center">
              <div className="text-xl font-bold text-white mb-2 uppercase tracking-wider">
                Currently Learning
              </div>
              <p className="text-sm text-primary-100 font-medium">Building Experience</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
