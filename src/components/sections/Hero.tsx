"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MessageCircle, MapPin, Check } from "lucide-react";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { SectionHeading } from "@/components/SectionHeading";
import { Container } from "@/components/layout/Container";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";

const trustBadges = [
  "Orthopedic Rehab",
  "Sports Injuries",
  "Pelvic Floor",
  "Evidence-Based",
];

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-20 md:pt-24 pb-16 overflow-hidden">
      {/* Soft right-side background accent */}
      <div className="absolute top-0 right-0 w-[55%] h-full bg-muted/25 rounded-l-[80px] -z-0 hidden lg:block" />
      <div className="absolute top-24 right-0 w-96 h-96 rounded-full bg-primary/6 blur-[80px] -z-0" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 xl:gap-20 items-center">

          {/* ── Left: Content ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 lg:gap-7"
          >
            {/* Location badge */}
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground bg-muted/60 px-3 py-1.5 rounded-full border border-border/50">
                <MapPin size={11} className="text-primary shrink-0" />
                Princess Park Apartments, Kibera Rd · Nairobi
              </span>
            </motion.div>

            {/* Eyebrow */}
            <motion.div variants={fadeInUp}>
              <EyebrowLabel>Professional Physiotherapy</EyebrowLabel>
            </motion.div>

            {/* H1 — large editorial heading */}
            <motion.div variants={fadeInUp}>
              <SectionHeading as="h1" className="max-w-[520px]">
                Specialised{" "}
                <span className="text-primary">Physiotherapy</span>{" "}
                Care
              </SectionHeading>
            </motion.div>

            {/* Supporting copy */}
            <motion.p
              variants={fadeInUp}
              className="text-base md:text-lg text-muted-foreground leading-[1.7] max-w-[480px]"
            >
              At CELANI Physiotherapy, we specialise in Orthopedic, Sports and
              Pelvic Floor rehabilitation. We help you recover, rebuild strength
              and return to your active lifestyle.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-3 pt-1"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-primary text-white font-semibold text-base hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
              >
                <Calendar size={18} />
                Book Appointment
              </Link>
              <a
                href="https://wa.me/254791484940"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl border border-border text-foreground font-semibold text-base hover:border-accent/50 hover:bg-muted/40 transition-all duration-300"
              >
                <MessageCircle size={18} />
                WhatsApp Consultation
              </a>
            </motion.div>

            {/* Trust micro-badges */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-x-5 gap-y-2 pt-1"
            >
              {trustBadges.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-1.5 text-xs text-muted-foreground"
                >
                  <Check size={11} className="text-primary shrink-0" />
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Image ── */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="relative order-first lg:order-last"
          >
            {/* Decorative blobs */}
            <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-primary/8 blur-3xl -z-10 pointer-events-none" />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-full bg-accent/6 blur-2xl -z-10 pointer-events-none" />

            {/* Main image */}
            <div className="relative h-[380px] sm:h-[460px] md:h-[520px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80"
                alt="Professional physiotherapy treatment at CELANI Physiotherapy clinic in Nairobi"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 52vw"
                priority
              />
              {/* Subtle warmth overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/15 via-transparent to-transparent" />
            </div>

            {/* Floating credential card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute -bottom-5 -left-4 md:-left-8 bg-background border border-border/60 rounded-2xl px-5 py-4 shadow-lg hidden sm:flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Check size={16} className="text-primary" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-semibold text-foreground leading-tight">
                  Evidence-Based
                </span>
                <span className="text-xs text-muted-foreground">
                  Rehabilitation Care
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
