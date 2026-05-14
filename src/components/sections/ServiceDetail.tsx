"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ChevronRight, Calendar, MessageCircle } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { staggerContainer, fadeInUp } from "@/lib/motion";
import { ServiceData, servicesData } from "@/data/services";
import { CLINIC_INFO } from "@/data/navigation";
import {
  Activity,
  Zap,
  Heart,
  Hand,
  Plus,
  ArrowUpDown,
  Crosshair,
  Dumbbell,
  MoveHorizontal,
} from "lucide-react";
import { ReactNode } from "react";

const iconMap: Record<string, ReactNode> = {
  "orthopedic-rehabilitation": <Activity size={20} />,
  "sports-injury-rehabilitation": <Zap size={20} />,
  "pelvic-floor-rehabilitation": <Heart size={20} />,
  "manual-therapy": <Hand size={20} />,
  "post-surgery-rehabilitation": <Plus size={20} />,
  "back-neck-pain-treatment": <ArrowUpDown size={20} />,
  "dry-needling": <Crosshair size={20} />,
  "exercise-therapy": <Dumbbell size={20} />,
  "mobility-strength-recovery": <MoveHorizontal size={20} />,
};

interface ServiceDetailProps {
  service: ServiceData;
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  const relatedServices = servicesData
    .filter((s) => service.relatedSlugs.includes(s.slug))
    .slice(0, 3);

  return (
    <>
      {/*
       * ── SECTION 1: BREADCRUMB BANNER ──
       * Sky-blue background with clip-path diagonal bottom cut.
       * Different technique from the skewY absolute-div approach used
       * in WhyChooseUs and Testimonials — adds variety to the background
       * system while maintaining the skyblue / mustard / white palette.
       */}
      <section
        className="relative mt-16 md:mt-20 pt-14 pb-20 md:pt-16 md:pb-24"
        style={{
          background: "#6BB6D9",
          clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)",
        }}
      >
        {/* Subtle warm accent orb — top-right */}
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 65%)",
          }}
        />

        <Container className="relative z-10">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs text-white/65 mb-6 flex-wrap"
          >
            <Link href="/" className="hover:text-white transition-colors duration-200">
              Home
            </Link>
            <ChevronRight size={11} />
            <Link
              href="/services"
              className="hover:text-white transition-colors duration-200"
            >
              Services
            </Link>
            <ChevronRight size={11} />
            <span className="text-white/90">{service.title}</span>
          </motion.nav>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div variants={fadeInUp}>
              <EyebrowLabel className="text-white/80" lineColor="bg-white/50">
                Physiotherapy Service
              </EyebrowLabel>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-heading font-bold text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.05] tracking-tight text-white mt-4 mb-4"
            >
              {service.title}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-base md:text-lg text-white/80 leading-[1.8]"
            >
              {service.tagline}
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/*
       * ── SECTION 2: INTRO + CONDITIONS ──
       * Clean warm-white background. Left: intro paragraph.
       * Right: conditions list. Spacious, editorial, readable.
       */}
      <section
        className="py-8 md:py-10 lg:py-12"
        style={{ background: "linear-gradient(160deg, #FAFAF8 0%, #FFFFFF 100%)" }}
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-start">
            {/* Intro */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col gap-5"
            >
              <motion.div variants={fadeInUp}>
                <EyebrowLabel>About This Service</EyebrowLabel>
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl leading-snug tracking-tight text-foreground"
              >
                What Is{" "}
                <em className="not-italic text-primary">{service.title}</em>?
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-base text-muted-foreground leading-[1.85] max-w-[520px]"
              >
                {service.intro}
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 mt-2"
                >
                  <Calendar size={14} />
                  Book a Consultation
                </Link>
              </motion.div>
            </motion.div>

            {/* Conditions list */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col gap-5"
            >
              <motion.div variants={fadeInUp}>
                <EyebrowLabel>Conditions Treated</EyebrowLabel>
              </motion.div>
              <motion.h3
                variants={fadeInUp}
                className="font-heading font-bold text-xl md:text-2xl leading-snug tracking-tight text-foreground"
              >
                What We Can Help With
              </motion.h3>
              <motion.ul variants={staggerContainer} className="flex flex-col gap-3 mt-1">
                {service.conditions.map((condition) => (
                  <motion.li
                    key={condition}
                    variants={fadeInUp}
                    className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                  >
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/12 flex items-center justify-center mt-0.5">
                      <Check size={10} className="text-primary" />
                    </span>
                    {condition}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </Container>
      </section>

      {/*
       * ── SECTION 3: TREATMENT APPROACH ──
       * Warm mustard-tinted background with a `skewY(-3deg) origin-bottom-right`
       * absolute panel. Steeper angle, different origin vs existing sections.
       * Creates a distinctly different diagonal rhythm — complements but
       * doesn't repeat WhyChooseUs or Testimonials.
       */}
      <section className="relative overflow-hidden py-16 md:py-20 lg:py-24">
        <div
          className="absolute inset-0 scale-110"
          style={{
            background: "#D4A64A",
            transform: "skewY(-3deg)",
            transformOrigin: "bottom right",
            opacity: 0.12,
          }}
        />
        {/* Solid warm background underneath */}
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "#FBF6EC" }}
        />

        <Container className="relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center text-center gap-4 mb-14"
          >
            <motion.div variants={fadeInUp}>
              <EyebrowLabel lineColor="bg-accent">Our Approach</EyebrowLabel>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="font-heading font-bold text-3xl md:text-4xl lg:text-[2.8rem] leading-tight tracking-tight text-foreground"
            >
              How We Treat You
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-base md:text-lg text-muted-foreground leading-[1.8] max-w-xl"
            >
              A structured, evidence-based treatment pathway — tailored from
              your first assessment to your last session.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          >
            {service.treatmentApproach.map((item, index) => (
              <motion.div
                key={item.step}
                variants={fadeInUp}
                className="flex flex-col gap-4 p-7 rounded-2xl bg-white border border-border hover:border-accent/30 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: "#D4A64A" }}
                  >
                    {index + 1}
                  </span>
                  <h3 className="font-heading font-semibold text-base text-foreground leading-snug">
                    {item.step}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/*
       * ── SECTION 4: BENEFITS ──
       * Clean white background with a 2x3 benefits grid.
       * Sky-blue accents for check icons — clinical trust palette.
       */}
      <section
        className="py-16 md:py-20 lg:py-24"
        style={{ background: "#FFFFFF" }}
      >
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center text-center gap-4 mb-14"
          >
            <motion.div variants={fadeInUp}>
              <EyebrowLabel>Recovery Outcomes</EyebrowLabel>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="font-heading font-bold text-3xl md:text-4xl lg:text-[2.8rem] leading-tight tracking-tight text-foreground"
            >
              What You Can Expect
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-4xl mx-auto"
          >
            {service.benefits.map((benefit) => (
              <motion.div
                key={benefit}
                variants={fadeInUp}
                className="flex items-start gap-4 p-6 rounded-2xl bg-muted/40 border border-border/50"
              >
                <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-primary/12 flex items-center justify-center">
                  <Check size={16} className="text-primary" />
                </span>
                <p className="text-sm font-medium text-foreground leading-snug pt-1.5">
                  {benefit}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/*
       * ── SECTION 5: RELATED SERVICES ──
       * Warm `#FAFAF8` background. 3-col service cards using
       * the existing ServiceCard component — visual continuity with homepage.
       */}
      <section
        className="py-16 md:py-20 lg:py-24"
        style={{ background: "#FAFAF8" }}
      >
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center text-center gap-4 mb-12"
          >
            <motion.div variants={fadeInUp}>
              <EyebrowLabel>Related Services</EyebrowLabel>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="font-heading font-bold text-3xl md:text-4xl leading-tight tracking-tight text-foreground"
            >
              You May Also Need
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          >
            {relatedServices.map((related) => (
              <ServiceCard
                key={related.slug}
                icon={iconMap[related.slug] ?? <Activity size={20} />}
                title={related.title}
                description={related.description}
                href={`/services/${related.slug}`}
              />
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center mt-10"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-200"
            >
              View all services
              <ChevronRight size={15} />
            </Link>
          </motion.div>
        </Container>
      </section>

      {/*
       * ── SECTION 6: CTA ──
       * Navy background, `skewY(2deg) origin-top-left` — positive angle
       * from top-left origin. Fourth distinct skew variation in the site,
       * each section uses a different angle + origin combination.
       */}
      <section className="relative overflow-hidden py-20 md:py-24">
        <div
          className="absolute inset-0 bg-foreground scale-110"
          style={{ transform: "skewY(2deg)", transformOrigin: "top left" }}
        />
        {/* Sky-blue accent orb — bottom-right */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(107, 182, 217, 0.12) 0%, transparent 65%)",
          }}
        />

        <Container className="relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto"
          >
            <motion.div variants={fadeInUp}>
              <EyebrowLabel className="text-white/70" lineColor="bg-primary/60">
                Start Your Recovery
              </EyebrowLabel>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-white"
            >
              Book Your{" "}
              <em className="not-italic text-primary">{service.title}</em>{" "}
              Consultation
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-base md:text-lg text-white/70 leading-[1.8]"
            >
              Take the first step toward recovery. Our specialist team in
              Nairobi is ready to assess your condition and build a
              personalised treatment plan tailored to you.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-semibold text-base hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
              >
                <Calendar size={18} />
                Book Appointment
              </Link>
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/30 text-white font-semibold text-base hover:bg-white/10 transition-all duration-300"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
