"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import ProjectCard from "./ui/ProjectCard";
import { PROJECTS } from "@/lib/constants";
import { staggerContainer, fadeIn } from "@/lib/animations";

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-black/40">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Beginner Projects" 
          subtitle="A collection of small projects I have built while learning programming fundamentals."
        />

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-8 mt-16"
        >
          {PROJECTS.map((project, idx) => (
            <motion.div key={idx} variants={fadeIn}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
