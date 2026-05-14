import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp } from "@/lib/motion";

interface TrustCardProps {
  icon: ReactNode;
  title: string;
  description?: string;
  className?: string;
}

export function TrustCard({ icon, title, description, className }: TrustCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className={cn(
        "flex flex-col items-center text-center gap-4 p-6 md:p-8 rounded-2xl",
        "bg-muted/40 border border-border/50",
        className
      )}
    >
      <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary">
        {icon}
      </div>
      <div className="flex flex-col gap-1.5">
        <h4 className="font-heading font-semibold text-base text-foreground">
          {title}
        </h4>
        {description && (
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
}
