import Link from "next/link";
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp } from "@/lib/motion";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
  conditions?: string[];
  className?: string;
}

export function ServiceCard({
  icon,
  title,
  description,
  href,
  conditions,
  className,
}: ServiceCardProps) {
  return (
    <motion.div variants={fadeInUp} className={cn("h-full", className)}>
      <Link
        href={href}
        className={cn(
          "group flex flex-col h-full gap-5 p-7 rounded-2xl",
          "bg-white border border-border",
          "transition-all duration-300",
          "hover:border-primary/30 hover:shadow-lg hover:-translate-y-1.5"
        )}
      >
        {/* Icon — fills with primary on hover */}
        <div
          className={cn(
            "flex items-center justify-center w-12 h-12 rounded-2xl",
            "bg-primary/10 text-primary",
            "group-hover:bg-primary group-hover:text-white",
            "transition-all duration-300"
          )}
        >
          {icon}
        </div>

        {/* Title + description */}
        <div className="flex flex-col gap-2 flex-1">
          <h3
            className={cn(
              "font-heading font-bold text-[1.05rem] leading-snug",
              "text-foreground group-hover:text-primary",
              "transition-colors duration-200"
            )}
          >
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Conditions — shown only when passed */}
        {conditions && conditions.length > 0 && (
          <div className="flex flex-col gap-1.5 pt-1">
            {conditions.slice(0, 3).map((c) => (
              <span key={c} className="flex items-center gap-2 text-xs text-muted-foreground/80">
                <span className="w-1 h-1 rounded-full bg-primary/50 flex-shrink-0" />
                {c}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="flex items-center gap-1.5 text-sm font-semibold text-primary mt-auto pt-1">
          Explore service
          <ArrowRight
            size={14}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </div>
      </Link>
    </motion.div>
  );
}
