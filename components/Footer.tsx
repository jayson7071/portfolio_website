"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-white/10 pt-16 pb-8 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-bold tracking-tighter inline-block mb-2">
              Jayson<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted">
              B.Tech Student • Programmer • AI Enthusiast
            </p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 text-white transition-all group"
            aria-label="Back to Top"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
        
        <div className="text-center border-t border-white/10 pt-8">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} J Jayson. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
