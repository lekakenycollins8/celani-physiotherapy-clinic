"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Calendar,
  MessageCircle,
  MapPin,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { SectionHeading } from "@/components/SectionHeading";
import { SectionDescription } from "@/components/ui/SectionDescription";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { staggerContainer, fadeInUp } from "@/lib/motion";
import { CLINIC_INFO } from "@/data/navigation";
import { servicesData } from "@/data/services";
import { SERVICE_ICONS } from "@/data/serviceIcons";

export function ServicesHub() {
  return (
    <>
      {/*
       * ── BANNER ──
       * Navy background, skewY(+1deg) origin-top-left — a positive angle
       * from the top-left, creating a downward-left-to-right diagonal.
       * Distinct from WhyChooseUs (-skewY-2 / origin-top-right) and
       * Testimonials (-skewY-2 / origin-bottom-left).
       */}
      <section className="relative overflow-hidden mt-16 md:mt-20 pt-8 pb-8 md:pt-8 md:pb-8">
        <div
          className="absolute inset-0 bg-foreground scale-110"
          style={{ transform: "skewY(1deg) scaleX(1.05)", transformOrigin: "top left" }}
        />
        {/* Soft sky-blue accent shape — top-right corner, barely visible */}
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(107, 182, 217, 0.12) 0%, transparent 65%)",
          }}
        />
        {/* Mustard accent line — left edge architectural detail */}
        <div
          aria-hidden="true"
          className="absolute left-0 top-[20%] bottom-[20%] w-[3px] bg-accent/60 hidden lg:block"
        />

        <Container className="relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/60 bg-white/10 px-3 py-1.5 rounded-full border border-white/15 mb-5">
                <MapPin size={11} className="text-white/60 shrink-0" />
                Princess Park, Kibera Rd · Nairobi
              </span>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <EyebrowLabel className="text-white/80" lineColor="bg-accent">
                Our Specialisations
              </EyebrowLabel>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-heading font-bold text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.05] tracking-tight text-white mt-4 mb-5"
            >
              Physiotherapy{" "}
              <em className="not-italic text-primary">Services</em>
              <span className="block">in Nairobi</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-base md:text-lg text-white/70 leading-[1.8] max-w-[520px]"
            >
              Expert rehabilitation for orthopedic, sports and pelvic floor
              conditions. Every treatment plan is personalised, evidence-based
              and delivered with individual attention.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-8 flex gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
              >
                <Calendar size={15} />
                Book Appointment
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/*
       * ── SERVICES GRID ──
       * Clean white background. 3-col on desktop, 2-col tablet, 1-col mobile.
       * Uses existing ServiceCard component for visual continuity.
       */}
      <section
        className="py-8 md:py-8 lg:py-8"
        style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #FAFAF8 100%)" }}
      >
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col items-center text-center gap-4 mb-14"
          >
            <motion.div variants={fadeInUp}>
              <EyebrowLabel>All Services</EyebrowLabel>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <SectionHeading as="h2">What We Treat</SectionHeading>
            </motion.div>
            <motion.div variants={fadeInUp} className="max-w-xl">
              <SectionDescription>
                Nine specialist physiotherapy services — all delivered with
                one-on-one clinical attention and personalised care from your
                first appointment.
              </SectionDescription>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          >
            {servicesData.map((service) => (
              <ServiceCard
                key={service.slug}
                icon={SERVICE_ICONS[service.slug]}
                title={service.title}
                description={service.description}
                href={`/services/${service.slug}`}
                conditions={service.conditions}
              />
            ))}
          </motion.div>
        </Container>
      </section>

      {/*
       * ── CTA BAND ──
       * Sky-blue skewed band — `skewY(-2deg) origin-bottom-right`.
       * Mirrors the WhyChooseUs angle but from a different origin axis,
       * creating a complementary diagonal rhythm across the site.
       */}
      <section className="relative overflow-hidden py-8 md:py-8 lg:py-8">
        <div
          className="absolute inset-0 bg-primary scale-110"
          style={{ transform: "skewY(-2deg)", transformOrigin: "bottom right" }}
        />
        <Container className="relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-white"
            >
              Ready to Start Your Recovery?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-base md:text-lg text-white/75 leading-[1.8]">
              Book a consultation at our Nairobi clinic. Our specialist team
              will assess your condition and build your personalised recovery
              plan from day one.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-primary font-semibold text-base hover:bg-white/90 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
              >
                <Calendar size={18} />
                Book Appointment
              </Link>
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/40 text-white font-semibold text-base hover:bg-white/10 transition-all duration-300"
              >
                <MessageCircle size={18} />
                WhatsApp Consultation
              </a>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
