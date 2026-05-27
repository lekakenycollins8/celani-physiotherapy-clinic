"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Award, Users, Heart, Check, Calendar, MessageCircle } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { SectionHeading } from "@/components/SectionHeading";
import { SectionDescription } from "@/components/ui/SectionDescription";
import { staggerContainer, fadeInUp } from "@/lib/motion";
import { CLINIC_INFO } from "@/data/navigation";

const team = [
  {
    initials: "AC",
    name: "Dr. Ann Celani",
    role: "Lead Physiotherapist",
    badge: "15+ Years Experience",
    bio: "With over 15 years of experience, Dr. Celani specialises in sports injuries and rehabilitation. She leads our team with expertise and compassion.",
    accentBg: "bg-primary/15",
    accentText: "text-primary",
  },
  {
    initials: "FM",
    name: "Dr. Faith Mwanzale",
    role: "Senior Physiotherapist",
    badge: "4 Years Experience",
    bio: "Specialised in orthopedic physiotherapy and manual therapy, Dr. Mwanzale brings 4 years of experience in treating complex musculoskeletal conditions.",
    accentBg: "bg-accent/20",
    accentText: "text-accent",
  },
  {
    initials: "DN",
    name: "Dr. Ndunge",
    role: "Pelvic Health Specialist",
    badge: "Pelvic Floor Specialist",
    bio: "Dr. Ndunge is our expert in pelvic floor rehabilitation, helping patients regain confidence and improve their quality of life.",
    accentBg: "bg-primary/15",
    accentText: "text-primary",
  },
];

const values = [
  {
    icon: <Award size={20} />,
    title: "Evidence-Based Care",
    description:
      "Every treatment is grounded in current clinical research and best-practice rehabilitation guidelines.",
  },
  {
    icon: <Users size={20} />,
    title: "One-on-One Attention",
    description:
      "Dedicated individual sessions with your physiotherapist — full clinical attention every appointment.",
  },
  {
    icon: <Heart size={20} />,
    title: "Patient-Centred Approach",
    description:
      "We listen first. Your goals, your timeline, your recovery — everything is built around you.",
  },
];

export function AboutPage() {
  return (
    <>
      {/*
       * ── BANNER ──
       * Mustard (accent) background, `skewY(-2deg) scale-110 origin-top-left`.
       * Warm and welcoming — mustard colour suits an "about / who we are" page.
       * Different origin (top-left) from Testimonials (bottom-left) and
       * WhyChooseUs (top-right) while sharing the same diagonal rhythm.
       */}
      <section className="relative overflow-hidden mt-16 md:mt-20 pt-8 pb-8 md:pt-8 md:pb-8">
        <div
          className="absolute inset-0 bg-accent scale-110"
          style={{ transformOrigin: "top left", transform: "skewY(-2deg)" }}
        />
        {/* Soft white accent orb — bottom-right */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.10) 0%, transparent 65%)",
          }}
        />

        <Container className="relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div variants={fadeInUp}>
              <EyebrowLabel className="text-foreground" lineColor="bg-foreground">
                Nairobi's Specialist Physiotherapy Clinic
              </EyebrowLabel>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-heading font-bold text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.05] tracking-tight text-foreground mt-4 mb-5"
            >
              About{" "}
              <em className="not-italic text-white">CELANI</em>{" "}
              Physiotherapy
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-base md:text-lg text-foreground leading-[1.8] max-w-[520px]"
            >
              A specialist physiotherapy and sports injuries clinic committed
              to expert, evidence-based rehabilitation — helping people across
              Nairobi recover, rebuild strength and return to active life.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/*
       * ── MISSION SECTION ──
       * Clean white editorial layout. 2-col on desktop: copy left, values right.
       */}
      <section
        className="py-8 md:py-8 lg:py-8"
        style={{ background: "#FFFFFF" }}
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start">
            {/* Left: Mission copy */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col gap-6"
            >
              <motion.div variants={fadeInUp}>
                <EyebrowLabel>Our Mission</EyebrowLabel>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <SectionHeading as="h2" className="max-w-md">
                  Professional Care{" "}
                  <em className="not-italic text-primary">You Can Trust</em>
                </SectionHeading>
              </motion.div>
              <motion.p
                variants={fadeInUp}
                className="text-base text-muted-foreground leading-[1.85] max-w-[480px]"
              >
                CELANI Physiotherapy and Sports Injuries Clinic was founded
                with a clear purpose — to bring world-class physiotherapy to
                Nairobi. We believe every patient deserves thorough clinical
                assessment, a personalised recovery plan, and dedicated
                one-on-one care from first appointment to discharge.
              </motion.p>
              <motion.p
                variants={fadeInUp}
                className="text-base text-muted-foreground leading-[1.85] max-w-[480px]"
              >
                Located at Princess Park Apartments, Ground Floor Room 10, Kibera Road Off Kabarnet Road, our clinic specialises
                in orthopedic rehabilitation, sports injury recovery, pelvic
                floor health and a comprehensive range of musculoskeletal
                conditions — all treated using evidence-based methods.
              </motion.p>
              <motion.ul variants={staggerContainer} className="flex flex-col gap-3 mt-2">
                {[
                  "Specialist physiotherapy expertise",
                  "Personalised, evidence-based treatment",
                  "One-on-one care every session",
                  "Trusted by patients across Nairobi",
                ].map((point) => (
                  <motion.li
                    key={point}
                    variants={fadeInUp}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <span className="w-5 h-5 rounded-full bg-primary/12 flex items-center justify-center flex-shrink-0">
                      <Check size={10} className="text-primary" />
                    </span>
                    {point}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Right: Values cards */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col gap-5"
            >
              {values.map((value) => (
                <motion.div
                  key={value.title}
                  variants={fadeInUp}
                  className="flex gap-5 p-6 rounded-2xl bg-muted/40 border border-border/50 hover:border-primary/25 hover:shadow-sm transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/12 flex items-center justify-center text-primary">
                    {value.icon}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-heading font-semibold text-base text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/*
       * ── TEAM SECTION ──
       * Warm `#FAFAF8` background. 3-col team cards.
       * Styled avatar circles with initials — no photography needed.
       */}
      <section
        className="py-8 md:py-8 lg:py-8"
        style={{ background: "linear-gradient(160deg, #FAFAF8 0%, #FFFFFF 100%)" }}
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
              <EyebrowLabel>Our Specialists</EyebrowLabel>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <SectionHeading as="h2">Meet the Team</SectionHeading>
            </motion.div>
            <motion.div variants={fadeInUp} className="max-w-xl">
              <SectionDescription>
                Our specialist physiotherapists bring deep clinical expertise,
                genuine care and a commitment to your recovery.
              </SectionDescription>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7"
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeInUp}
                className="flex flex-col gap-5 p-8 rounded-2xl bg-white border border-border hover:border-primary/25 hover:shadow-md transition-all duration-300"
              >
                {/* Avatar */}
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-2xl ${member.accentBg} flex items-center justify-center flex-shrink-0`}
                  >
                    <span
                      className={`font-heading font-bold text-lg ${member.accentText}`}
                    >
                      {member.initials}
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <h3 className="font-heading font-bold text-base text-foreground leading-snug">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Badge */}
                <span
                  className={`self-start text-xs font-medium px-3 py-1 rounded-full ${member.accentBg} ${member.accentText}`}
                >
                  {member.badge}
                </span>

                {/* Bio */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/*
       * ── CTA BAND ──
       * Navy background, `skewY(2deg) scale-110 origin-top-right`.
       * Positive angle from top-right — a new combination not yet used
       * on any other page, continuing the varied diagonal system.
       */}
      <section className="relative overflow-hidden py-8 md:py-8">
        <div
          className="absolute inset-0 bg-foreground scale-110"
          style={{ transform: "skewY(2deg)", transformOrigin: "top right" }}
        />
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(107,182,217,0.10) 0%, transparent 65%)",
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
              <EyebrowLabel className="text-white/60" lineColor="bg-primary/50">
                Start Your Recovery
              </EyebrowLabel>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-white"
            >
              Book Your First{" "}
              <em className="not-italic text-primary">Consultation</em>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-base md:text-lg text-white/70 leading-[1.8]"
            >
              Meet our specialist team and take the first step towards full
              recovery. We're here to listen, assess and guide you.
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
