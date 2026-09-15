"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { Download, ChevronRight } from "lucide-react";
import GlassCard from "./ui/GlassCard";

// Particle Background Component
function ParticleSystem(props: any) {
  const ref = useRef<any>(null);
  // Pre-generate random points in a sphere
  const [sphere] = useState(() => random.inSphere(new Float32Array(3000), { radius: 1.5 }));

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#7C3AED"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

// Typing effect helper
const Typewriter = ({ phrases }: { phrases: string[] }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentPhrase = phrases[currentPhraseIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else {
        setCurrentText(
          currentPhrase.substring(0, currentText.length + (isDeleting ? -1 : 1))
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentPhraseIndex, phrases]);

  return (
    <span className="inline-block min-w-[20px] text-primary">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default function Hero() {
  const titles = [
    "1st Year B.Tech Student",
    "Basic-Level Programmer",
    "AI Enthusiast",
    "Tech Content Enthusiast",
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <ParticleSystem />
        </Canvas>
      </div>
      
      {/* Gradient Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 mix-blend-screen opacity-50 animate-blob" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10 mix-blend-screen opacity-50 animate-blob animation-delay-2000" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-xl md:text-2xl font-mono text-muted mb-4">Hi, I'm</h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              J Jayson
            </h1>
            
            <div className="text-2xl md:text-4xl font-semibold mb-6 h-12 flex items-center">
              <Typewriter phrases={titles} />
            </div>
            
            <p className="text-lg md:text-xl text-muted/90 mb-8 border-l-2 border-primary pl-4 py-1 italic">
              "I have built this portfolio website just for a sample ."
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects"
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2 group"
              >
                View Projects
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="/resume.pdf"
                target="_blank"
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full font-medium backdrop-blur-sm transition-colors border border-white/10 flex items-center gap-2"
              >
                <Download size={18} />
                Download Resume
              </a>
              
              <a 
                href="#contact"
                className="text-white hover:text-primary px-6 py-3 font-medium transition-colors flex items-center"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Right Side: Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:flex justify-center relative"
          >
            {/* Floating tech badges — positioned relative to this outer wrapper */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -left-10 z-20 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl"
            >
              <span className="text-primary font-mono font-bold text-sm">{'{ JAVA }'}</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute top-10 -right-12 z-20 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl"
            >
              <span className="text-accent font-mono font-bold text-sm">{'[ PYTHON ]'}</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-16 -left-8 z-20 p-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl"
            >
              <span className="text-secondary font-mono font-bold text-sm">SQL</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -right-10 z-20 p-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl"
            >
              <span className="text-pink-400 font-mono font-bold text-sm">HTML/CSS</span>
            </motion.div>

            {/* Main Profile Card */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <GlassCard className="w-72 p-8 flex flex-col items-center border-white/20" glowOpacity={0.15}>
                <div className="w-24 h-24 mx-auto bg-gradient-to-tr from-primary to-accent rounded-full mb-5 shadow-lg shadow-primary/30 flex items-center justify-center text-3xl font-bold ring-4 ring-white/10">
                  JJ
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 text-center">J Jayson</h3>
                <p className="text-sm font-mono text-accent mb-4 text-center">B.Tech Student</p>
                <div className="w-full border-t border-white/10 pt-4 space-y-2">
                  <p className="text-sm font-mono text-muted text-center">• Programmer</p>
                  <p className="text-sm font-mono text-muted text-center">• AI Enthusiast</p>
                  <p className="text-sm font-mono text-muted text-center">• SRMIST Ramapuram</p>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
