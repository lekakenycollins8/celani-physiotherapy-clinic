import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp } from "@/lib/motion";

interface TestimonialCardProps {
  quote: string;
  name: string;
  patientType?: string;
  className?: string;
}

export function TestimonialCard({ quote, name, patientType, className }: TestimonialCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className={cn(
        "flex flex-col gap-6 p-7 md:p-8 rounded-2xl",
        "bg-card border border-border",
        className
      )}
    >
      <div className="text-primary/60 text-4xl font-heading leading-none select-none" aria-hidden="true">
        &ldquo;
      </div>
      <p className="text-base md:text-lg text-foreground leading-relaxed -mt-4">
        {quote}
      </p>
      <div className="flex flex-col gap-0.5 mt-auto pt-4 border-t border-border/50">
        <span className="text-sm font-semibold text-foreground">{name}</span>
        {patientType && (
          <span className="text-xs text-muted-foreground">{patientType}</span>
        )}
      </div>
    </motion.div>
  );
}
