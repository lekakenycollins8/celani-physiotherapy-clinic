"use client";

import { motion } from "framer-motion";
import { MessageCircle, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { CLINIC_INFO } from "@/data/navigation";

interface CTASectionProps {
  heading?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "default" | "muted";
  className?: string;
}

export function CTASection({
  heading = "Start Your Recovery Journey Today",
  description = "Book a consultation with our specialist team and take the first step towards full recovery.",
  primaryLabel = "Book Appointment",
  primaryHref = "/contact",
  secondaryLabel = "WhatsApp Consultation",
  secondaryHref,
  variant = "default",
  className,
}: CTASectionProps) {
  const whatsappHref = secondaryHref ?? `https://wa.me/${CLINIC_INFO.whatsapp}`;

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={cn(
        "rounded-3xl p-10 md:p-14 lg:p-16 text-center flex flex-col items-center gap-8",
        variant === "default" && "bg-primary text-primary-foreground",
        variant === "muted" && "bg-muted/50 border border-border",
        className
      )}
    >
      <div className="flex flex-col items-center gap-4 max-w-2xl">
        <motion.h2
          variants={fadeInUp}
          className={cn(
            "font-heading font-bold text-3xl md:text-4xl lg:text-5xl leading-tight",
            variant === "default" ? "text-primary-foreground" : "text-foreground"
          )}
        >
          {heading}
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className={cn(
            "text-base md:text-lg leading-relaxed",
            variant === "default" ? "text-primary-foreground/80" : "text-muted-foreground"
          )}
        >
          {description}
        </motion.p>
      </div>
      <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-3">
        <a
          href={primaryHref}
          className={cn(
            "flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base",
            "transition-all duration-300 hover:-translate-y-0.5",
            variant === "default"
              ? "bg-white text-primary hover:bg-white/90 hover:shadow-md"
              : "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-md"
          )}
        >
          <Calendar size={18} />
          {primaryLabel}
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base",
            "transition-all duration-300 hover:-translate-y-0.5",
            variant === "default"
              ? "border border-white/40 text-white hover:bg-white/10"
              : "border border-border text-foreground hover:bg-muted/50"
          )}
        >
          <MessageCircle size={18} />
          {secondaryLabel}
        </a>
      </motion.div>
    </motion.div>
  );
}
