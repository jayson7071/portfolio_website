import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowOpacity?: number;
}

export default function GlassCard({ children, className, glowOpacity = 0, ...props }: GlassCardProps) {
  return (
    <div 
      className={cn(
        "relative rounded-2xl glass-card overflow-hidden",
        className
      )}
      {...props}
    >
      {/* Subtle top reflection */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      {/* Optional Glow */}
      {glowOpacity > 0 && (
        <div 
          className="absolute inset-0 bg-primary/20 blur-3xl pointer-events-none transition-opacity duration-500" 
          style={{ opacity: glowOpacity }}
        />
      )}
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
