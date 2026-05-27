"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Clock, Calendar, ExternalLink } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { SectionHeading } from "@/components/SectionHeading";
import { staggerContainer, fadeInUp } from "@/lib/motion";
import { CLINIC_INFO } from "@/data/navigation";

const OPENING_HOURS = [
  { day: "Monday – Friday", hours: "8:00 AM – 6:00 PM", open: true },
  { day: "Saturday", hours: "9:00 AM – 4:00 PM", open: true },
  { day: "Sunday", hours: "By appointment", open: false },
];

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/Princess+Park+Apartments+Ground+Floor+Room+10+Kibera+Road+Off+Kabarnet+Road+Nairobi";

export function ContactPage() {
  return (
    <>
      {/*
       * ── BANNER ──
       * Navy background with `clip-path: polygon(0 0, 100% 0, 100% 88%, 0 100%)`.
       * Same clip-path technique as ServiceDetail banner but NAVY instead
       * of sky-blue — creates colour variety while keeping the geometric
       * language consistent across the site.
       */}
      <section
        className="relative mt-16 md:mt-20 pt-14 pb-20 md:pt-16 md:pb-24"
        style={{
          background: "#1D2939",
          clipPath: "polygon(0 0, 100% 0, 100% 88%, 0 100%)",
        }}
      >
        {/* Sky-blue accent orb — top-right */}
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(107,182,217,0.10) 0%, transparent 65%)",
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
              <EyebrowLabel className="text-white/60" lineColor="bg-primary/60">
                Get in Touch
              </EyebrowLabel>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="font-heading font-bold text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.05] tracking-tight text-white mt-4 mb-5"
            >
              Contact{" "}
              <em className="not-italic text-primary">CELANI</em>
              <span className="block">Physiotherapy</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-base md:text-lg text-white/70 leading-[1.8] max-w-[480px]"
            >
              Book an appointment, ask a question or find us in Nairobi. Our
              team is ready to help you start your recovery journey.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/*
       * ── CONTACT DETAILS + CTA ──
       * White background. 2-col: left = contact info cards, right = booking card.
       */}
      <section
        className="py-16 md:py-20 lg:py-24"
        style={{ background: "#FFFFFF" }}
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 items-start">

            {/* Left: Contact info */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col gap-5"
            >
              <motion.div variants={fadeInUp}>
                <EyebrowLabel>Contact Information</EyebrowLabel>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <SectionHeading as="h2" className="text-2xl md:text-3xl">
                  How to Reach Us
                </SectionHeading>
              </motion.div>

              {/* Phone */}
              <motion.a
                href={`tel:${CLINIC_INFO.phone}`}
                variants={fadeInUp}
                className="flex items-start gap-4 p-6 rounded-2xl bg-muted/40 border border-border/50 hover:border-primary/30 hover:shadow-sm transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/12 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-200">
                  <Phone size={18} className="text-primary" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Phone
                  </span>
                  <span className="font-heading font-bold text-lg text-foreground">
                    {CLINIC_INFO.phone}
                  </span>
                  <span className="text-sm text-muted-foreground">Tap to call directly</span>
                </div>
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                href={`https://wa.me/${CLINIC_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                className="flex items-start gap-4 p-6 rounded-2xl bg-muted/40 border border-border/50 hover:border-accent/40 hover:shadow-sm transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/25 transition-colors duration-200">
                  <MessageCircle size={18} className="text-accent" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    WhatsApp
                  </span>
                  <span className="font-heading font-bold text-lg text-foreground">
                    +{CLINIC_INFO.whatsapp}
                  </span>
                  <span className="text-sm text-muted-foreground">Message us anytime</span>
                </div>
              </motion.a>

              {/* Address */}
              <motion.a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                className="flex items-start gap-4 p-6 rounded-2xl bg-muted/40 border border-border/50 hover:border-primary/30 hover:shadow-sm transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/12 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-200">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Location
                  </span>
                  <span className="font-heading font-bold text-base text-foreground leading-snug">
                    {CLINIC_INFO.address}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {CLINIC_INFO.city} – {CLINIC_INFO.landmark}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-primary font-medium mt-1">
                    Open in Maps <ExternalLink size={11} />
                  </span>
                </div>
              </motion.a>
            </motion.div>

            {/* Right: Booking card */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col gap-5"
            >
              <motion.div variants={fadeInUp}>
                <EyebrowLabel>Book an Appointment</EyebrowLabel>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <SectionHeading as="h2" className="text-2xl md:text-3xl">
                  Ready to Start{" "}
                  <em className="not-italic text-primary">Recovery?</em>
                </SectionHeading>
              </motion.div>
              <motion.p
                variants={fadeInUp}
                className="text-base text-muted-foreground leading-[1.85]"
              >
                Book directly via WhatsApp for the fastest response, or call
                us during clinic hours. Our team will confirm your appointment
                and answer any questions you have.
              </motion.p>

              {/* Primary CTA card */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col gap-4 p-8 rounded-2xl border border-border bg-muted/30"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="font-heading font-bold text-lg text-foreground">
                    Fastest Way to Book
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Send us a WhatsApp message with your name, the service you
                    need and your preferred time. We'll confirm within hours.
                  </p>
                </div>
                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hello%20CELANI%20Physiotherapy%2C%20I%27d%20like%20to%20book%20an%20appointment.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-accent text-white font-semibold text-sm hover:bg-accent/90 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
                >
                  <MessageCircle size={16} />
                  Book via WhatsApp
                </a>
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
                >
                  <Phone size={16} />
                  Call {CLINIC_INFO.phone}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/*
       * ── OPENING HOURS + LOCATION ──
       * Warm `#FAFAF8` background. Simple, readable hours grid + map link.
       * Sky-blue skewed accent panel — `skewY(3deg) scale-110 origin-bottom-left`.
       * Positive, ascending angle — new combination completing the site system.
       */}
      <section className="relative overflow-hidden py-16 md:py-20 lg:py-24">
        <div
          className="absolute inset-0 scale-110"
          style={{
            background: "#6BB6D9",
            opacity: 0.07,
            transform: "skewY(3deg)",
            transformOrigin: "bottom left",
          }}
        />
        <div className="absolute inset-0 -z-10" style={{ background: "#FAFAF8" }} />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

            {/* Opening hours */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col gap-6"
            >
              <motion.div variants={fadeInUp}>
                <EyebrowLabel>Clinic Hours</EyebrowLabel>
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="font-heading font-bold text-2xl md:text-3xl leading-snug tracking-tight text-foreground"
              >
                When We&apos;re Open
              </motion.h2>

              <motion.div variants={staggerContainer} className="flex flex-col divide-y divide-border/60">
                {OPENING_HOURS.map((item) => (
                  <motion.div
                    key={item.day}
                    variants={fadeInUp}
                    className="flex items-center justify-between py-4"
                  >
                    <div className="flex items-center gap-3">
                      <Clock size={14} className="text-primary flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">
                        {item.day}
                      </span>
                    </div>
                    <span
                      className={`text-sm font-semibold ${
                        item.open ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {item.hours}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.p
                variants={fadeInUp}
                className="text-sm text-muted-foreground leading-relaxed"
              >
                For urgent appointments outside clinic hours, please message
                us on WhatsApp and we will do our best to accommodate you.
              </motion.p>
            </motion.div>

            {/* Location + map link */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col gap-6"
            >
              <motion.div variants={fadeInUp}>
                <EyebrowLabel>Find Us</EyebrowLabel>
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="font-heading font-bold text-2xl md:text-3xl leading-snug tracking-tight text-foreground"
              >
                Our Location
              </motion.h2>

              {/* Map placeholder — links to Google Maps */}
              <motion.a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                className="group relative h-52 rounded-2xl overflow-hidden border border-border bg-muted/50 flex items-center justify-center hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col items-center gap-3 text-center px-6">
                  <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors duration-200">
                    <MapPin size={22} className="text-primary" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-heading font-semibold text-sm text-foreground">
                      {CLINIC_INFO.address}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {CLINIC_INFO.city} – {CLINIC_INFO.landmark}
                    </span>
                    <span className="inline-flex items-center justify-center gap-1 text-xs text-primary font-medium mt-1 group-hover:gap-1.5 transition-all duration-200">
                      Open in Google Maps <ExternalLink size={11} />
                    </span>
                  </div>
                </div>
              </motion.a>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col gap-2 p-5 rounded-xl bg-white border border-border/50"
              >
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Getting Here
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We are located at Princess Park Apartments, Ground Floor Room 10, Kibera Road Off Kabarnet Road, along Ngong Road, Nairobi. Street parking is available outside the complex.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
