"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";
import GlassCard from "./GlassCard";

interface ProjectCardProps {
  title: string;
  description: string;
  technology: string;
  badge: string;
  github: string | null;
  live: string | null;
}

export default function ProjectCard({ title, description, technology, badge, github, live }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, rotateX: 2, rotateY: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ perspective: 1000 }}
    >
      <GlassCard className="p-6 h-full flex flex-col glowOpacity={0.1}">
        <div className="flex justify-between items-start mb-4">
          <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-secondary/20 text-secondary-100 border border-secondary/30">
            {badge}
          </span>
          <span className="text-xs font-mono text-muted">{technology}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-muted text-sm flex-grow mb-6">{description}</p>
        
        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/10">
          {github ? (
            <a 
              href={github} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Source</span>
            </a>
          ) : (
            <div className="flex items-center gap-2 text-sm text-muted/50 cursor-not-allowed">
              <GithubIcon className="w-4 h-4" />
              <span>Source Coming Soon</span>
            </div>
          )}

          
          {live && (
            <a 
              href={live} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 text-sm hover:text-accent transition-colors ml-auto"
            >
              <ExternalLink size={16} />
              <span>Demo</span>
            </a>
          )}
        </div>
      </GlassCard>
    </motion.div>
  );
}
