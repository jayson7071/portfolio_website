"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({ title, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <motion.div 
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`mb-12 ${centered ? "text-center" : "text-left"}`}
    >
      <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-50 to-muted mb-4 inline-block pb-1">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted text-lg max-w-2xl mx-auto md:mx-0">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
