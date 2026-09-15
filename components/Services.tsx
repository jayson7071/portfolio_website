"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import GlassCard from "./ui/GlassCard";
import { EXPLORING_AREAS } from "@/lib/constants";
import { staggerContainer, fadeIn } from "@/lib/animations";

export default function Services() {
  return (
    <section id="exploring" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Areas I'm Exploring" 
          subtitle="Topics and fields I am currently studying and want to learn more about."
          centered
        />

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
        >
          {EXPLORING_AREAS.map((area, idx) => (
            <motion.div key={idx} variants={fadeIn}>
              <GlassCard className="p-6 h-full flex flex-col hover:border-primary/50 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  <area.icon size={24} />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{area.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
