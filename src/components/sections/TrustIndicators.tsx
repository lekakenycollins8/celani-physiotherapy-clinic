"use client";

import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, Zap, MapPin } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { staggerContainer, fadeInUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

const items = [
  {
    icon: ShieldCheck,
    title: "Evidence-Based Rehabilitation",
    description: "Clinically-proven methods and modern physiotherapy standards",
  },
  {
    icon: UserCheck,
    title: "Personalised Recovery Plans",
    description: "Tailored treatment programs designed for your specific condition",
  },
  {
    icon: Zap,
    title: "Sports Injury Expertise",
    description: "Specialist care for athletes and active lifestyle rehabilitation",
  },
  {
    icon: MapPin,
    title: "Nairobi-Based Care",
    description: "Princess Park Apartments, Ground Floor Room 10, Kibera Rd Off Kabarnet Rd, Nairobi",
  },
];

export function TrustIndicators() {
  return (
    <section className="py-8 md:py-10 lg:py-12 bg-accent">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5"
        >
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className={cn(
                  "flex gap-4 p-5 rounded-2xl",
                  "bg-white/60 border border-foreground/20",
                  "hover:bg-white/80 hover:border-foreground/40 transition-all duration-300"
                )}
              >
                <div className="w-10 h-10 rounded-xl bg-foreground/20 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-foreground" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-sm text-foreground leading-snug">
                    {item.title}
                  </span>
                  <span className="text-xs text-foreground leading-relaxed">
                    {item.description}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
