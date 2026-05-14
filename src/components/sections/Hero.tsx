"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MessageCircle, MapPin, Check } from "lucide-react";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { Container } from "@/components/layout/Container";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const trustItems = [
  "Orthopedic Rehab",
  "Sports Injuries",
  "Pelvic Floor",
  "Evidence-Based Care",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen lg:min-h-0 pt-24 pb-14 lg:pt-28 lg:pb-16">

      {/* ── MOBILE: Full-bleed background image ── */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src="/images/celani-hero.png"
          alt="Professional physiotherapy treatment at CELANI clinic Nairobi"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark gradient overlay — ensures text legibility over the image */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/65 via-foreground/50 to-foreground/60" />
      </div>

      {/* ── DESKTOP: Warm editorial background ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden lg:block -z-10"
        style={{ background: "linear-gradient(160deg, #FAFAF8 0%, #FFFFFF 100%)" }}
      />
      {/* Subtle ambient glow top-right (desktop only) */}
      <div
        aria-hidden="true"
        className="absolute -top-40 right-0 w-[700px] h-[700px] rounded-full pointer-events-none hidden lg:block"
        style={{
          background:
            "radial-gradient(circle, rgba(107, 182, 217, 0.07) 0%, transparent 65%)",
        }}
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-14 lg:gap-16 items-center">

          {/* ── LEFT: Editorial content column ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-5"
          >
            {/* Location pill */}
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/80 lg:text-muted-foreground bg-white/15 lg:bg-muted/60 px-3 py-1.5 rounded-full border border-white/25 lg:border-border/50">
                <MapPin size={11} className="text-white/80 lg:text-primary shrink-0" />
                Princess Park, Kibera Rd · Nairobi
              </span>
            </motion.div>

            {/* Eyebrow */}
            <motion.div variants={fadeInUp}>
              <EyebrowLabel
                className="text-white/90 lg:text-primary"
                lineColor="bg-accent"
              >
                CELANI Physiotherapy Clinic
              </EyebrowLabel>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={fadeInUp}
              className="font-heading font-bold text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.05] tracking-tight text-white lg:text-foreground max-w-[520px]"
            >
              Specialised{" "}
              <em className="not-italic text-accent lg:text-primary">Physiotherapy</em>
              <span className="block">Care.</span>
            </motion.h1>

            {/* Body copy */}
            <motion.p
              variants={fadeInUp}
              className="text-[0.95rem] md:text-base text-white/80 lg:text-muted-foreground leading-[1.85] max-w-[430px]"
            >
              At CELANI Physiotherapy, we specialise in Orthopedic, Sports and
              Pelvic Floor rehabilitation. We help you recover, rebuild strength
              and return to your Active lifestyle.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
              >
                <Calendar size={15} />
                Book Appointment
              </Link>
              <a
                href="https://wa.me/254791484940"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl
                  bg-white/15 border border-white/30 text-white
                  lg:bg-transparent lg:border-border lg:text-foreground
                  hover:bg-white/25 lg:hover:bg-muted/25 lg:hover:border-primary/40
                  font-semibold text-sm transition-all duration-300"
              >
                <MessageCircle size={15} />
                WhatsApp Us
              </a>
            </motion.div>

            {/* Trust micro-badges */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-x-5 gap-y-1.5">
              {trustItems.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-1.5 text-xs text-white/75 lg:text-muted-foreground"
                >
                  <Check size={11} className="text-accent lg:text-primary shrink-0" />
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Layered frame system — desktop only ── */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative hidden lg:block"
            style={{ padding: "14px" }}
          >
            {/* LAYER 1 — Shadow plate */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "20px",
                background: "rgba(107, 182, 217, 0.09)",
                transform: "rotate(1.5deg) translate(14px, 12px)",
                zIndex: 0,
              }}
            />

            {/* LAYER 2 — Floating solid frame */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: "-4px",
                borderRadius: "20px",
                background: "linear-gradient(180deg, #FAFAF8 0%, #FFFFFF 100%)",
                border: "1px solid rgba(107, 182, 217, 0.28)",
                boxShadow:
                  "0 10px 30px rgba(29, 41, 57, 0.08), 0 2px 8px rgba(29, 41, 57, 0.05)",
                transform: "rotate(-1.5deg)",
                zIndex: 1,
              }}
            >
              {/* Mustard accent line on left edge of frame */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: "19%",
                  bottom: "19%",
                  width: "2px",
                  background: "#D4A64A",
                  borderRadius: "2px",
                }}
              />
            </div>

            {/* LAYER 3 — Image card, clean and straight */}
            <div
              className="relative overflow-hidden rounded-[16px]"
              style={{
                zIndex: 2,
                boxShadow: "0 4px 24px rgba(29, 41, 57, 0.10)",
              }}
            >
              <div className="relative h-[440px] xl:h-[480px]">
                <Image
                  src="/images/celani-hero.png"
                  alt="Professional physiotherapy treatment at CELANI clinic Nairobi"
                  fill
                  className="object-cover object-center"
                  sizes="52vw"
                  priority
                />
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
