"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import SkillCard from "./ui/SkillCard";
import { SKILLS } from "@/lib/constants";
import { staggerContainer, fadeIn } from "@/lib/animations";

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Technical Skills" 
          subtitle="My current toolkit and technologies I am actively learning as a student."
          centered
        />

        <div className="space-y-16 mt-16">
          {SKILLS.map((category, idx) => (
            <motion.div 
              key={category.category}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="relative"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 rounded-xl bg-white/10 border border-white/10 text-primary">
                  <category.icon size={24} />
                </div>
                <h3 className="text-2xl font-bold">{category.category}</h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((skill) => (
                  <motion.div key={skill.name} variants={fadeIn}>
                    <SkillCard 
                      name={skill.name} 
                      level={skill.level} 
                      description={skill.description} 
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
