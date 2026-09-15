"use client";

import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

interface SkillCardProps {
  name: string;
  level: number;
  description: string;
}

export default function SkillCard({ name, level, description }: SkillCardProps) {
  return (
    <GlassCard className="p-5 group hover:-translate-y-1 transition-transform duration-300">
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-semibold text-lg">{name}</h4>
        <span className="text-sm font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">Learning</span>
      </div>
      
      <p className="text-sm text-muted mb-4 h-10">{description}</p>
      
      <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="bg-gradient-to-r from-primary to-accent h-full rounded-full relative"
        >
          <div className="absolute inset-0 bg-white/30 mix-blend-overlay" />
        </motion.div>
      </div>
    </GlassCard>
  );
}
