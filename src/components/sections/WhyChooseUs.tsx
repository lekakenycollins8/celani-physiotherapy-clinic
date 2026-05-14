"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, Calendar } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { SectionHeading } from "@/components/SectionHeading";
import { SectionDescription } from "@/components/ui/SectionDescription";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/motion";

const features = [
  {
    title: "Personalised Treatment Plans",
    description:
      "Every patient receives a fully tailored rehabilitation program designed around their specific condition and recovery goals.",
  },
  {
    title: "Evidence-Based Methods",
    description:
      "We apply modern, clinically-proven physiotherapy techniques to ensure the most effective treatment outcomes.",
  },
  {
    title: "Sports Injury Specialists",
    description:
      "Deep expertise in athletic rehabilitation — helping you recover fully and return to peak performance safely.",
  },
  {
    title: "One-on-One Patient Care",
    description:
      "Dedicated individual sessions with your physiotherapist. Full attention, every single appointment.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-8 md:py-10 lg:py-12">
      {/* Diagonal sky-blue background */}
      <div className="absolute inset-0 bg-primary -skew-y-2 scale-110 origin-top-right" />
      <div className="relative z-10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 xl:gap-20 items-center">

          {/* ── Left: Image ── */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-8 -left-8 w-64 h-64 rounded-full bg-foreground/5 blur-3xl -z-10 pointer-events-none" />
            <div className="relative h-[440px] md:h-[540px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80"
                alt="Physiotherapy session at CELANI clinic Nairobi"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 via-transparent to-primary/8" />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="absolute -right-5 top-1/2 -translate-y-1/2 bg-background border border-border/60 rounded-2xl px-5 py-5 shadow-lg hidden lg:flex flex-col gap-0.5"
            >
              <span className="font-heading font-bold text-3xl text-foreground leading-none">
                10+
              </span>
              <span className="text-xs text-muted-foreground mt-1">
                Years of clinical
              </span>
              <span className="text-xs text-muted-foreground">
                expertise
              </span>
            </motion.div>
          </motion.div>

          {/* ── Right: Content ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-5">
              <motion.div variants={fadeInUp}>
                <EyebrowLabel className="text-foreground" lineColor="bg-foreground/40">Why Choose Us</EyebrowLabel>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <SectionHeading as="h2">
                  Rehabilitation Care{" "}
                  <span className="block">You Can Trust</span>
                </SectionHeading>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <SectionDescription>
                  CELANI Physiotherapy combines clinical expertise with
                  personalised attention to deliver recovery outcomes that last.
                  We treat you as an individual, not a condition.
                </SectionDescription>
              </motion.div>
            </div>

            {/* Feature list */}
            <div className="flex flex-col gap-5">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  variants={fadeInUp}
                  custom={i}
                  className="flex gap-4"
                >
                  <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-foreground/15 shrink-0 mt-0.5">
                    <Check size={14} className="text-foreground" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-foreground text-sm md:text-base leading-snug">
                      {feature.title}
                    </span>
                    <span className="text-sm text-muted-foreground leading-[1.7]">
                      {feature.description}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-foreground text-white font-semibold text-sm hover:bg-foreground/85 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
              >
                <Calendar size={16} />
                Book Your Assessment
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </Container>
      </div>
    </section>
  );
}
