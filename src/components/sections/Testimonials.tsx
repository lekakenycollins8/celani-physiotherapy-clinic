"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { staggerContainer, fadeInUp } from "@/lib/motion";

const testimonials = [
  {
    quote:
      "After my ACL surgery I was worried I'd never play football again. The CELANI team gave me the most thorough rehabilitation plan — I'm fully back on the pitch six months later.",
    name: "Daniel M.",
    patientType: "Sports Injury Recovery",
  },
  {
    quote:
      "I had suffered from chronic back pain for over two years. After just eight sessions at CELANI, I was pain-free and finally understood what had been causing it. Exceptional care.",
    name: "Sarah K.",
    patientType: "Back Pain Treatment",
  },
  {
    quote:
      "The pelvic floor rehabilitation programme changed my life. The sessions were handled with complete professionalism and sensitivity. I would highly recommend CELANI to anyone.",
    name: "Amina N.",
    patientType: "Pelvic Floor Rehabilitation",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-8 md:py-10 lg:py-12">
      {/* Diagonal mustard background */}
      <div className="absolute inset-0 bg-accent -skew-y-2 scale-110 origin-bottom-left" />
      <div className="relative z-10">
      <Container>
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center text-center gap-4 mb-10 md:mb-12"
        >
          <motion.div variants={fadeInUp}>
            <EyebrowLabel className="text-foreground" lineColor="bg-foreground">Patient Stories</EyebrowLabel>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <SectionHeading as="h2">Trusted by Our Patients</SectionHeading>
          </motion.div>
          <motion.div variants={fadeInUp} className="max-w-lg">
            <p className="text-base md:text-lg text-foreground leading-[1.7]">
              Real experiences from patients who have recovered and returned to
              their active lives through CELANI Physiotherapy.
            </p>
          </motion.div>
        </motion.div>

        {/* Testimonial cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
        >
          {testimonials.map((t) => (
            <TestimonialCard
              key={t.name}
              quote={t.quote}
              name={t.name}
              patientType={t.patientType}
              className="bg-white/50 border-foreground/10"
            />
          ))}
        </motion.div>
      </Container>
      </div>
    </section>
  );
}
