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
  className?: string;
}

export function ServiceCard({ icon, title, description, href, className }: ServiceCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className={cn(
        "group flex flex-col gap-5 p-7 md:p-8 rounded-2xl",
        "bg-card border border-border",
        "transition-all duration-300",
        "hover:border-primary/30 hover:shadow-md hover:-translate-y-1",
        className
      )}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
        {icon}
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="font-heading font-semibold text-lg text-foreground leading-snug">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
      <Link
        href={href}
        className="flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all duration-200"
      >
        Learn more
        <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
}
