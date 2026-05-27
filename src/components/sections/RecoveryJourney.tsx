"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { SectionHeading } from "@/components/SectionHeading";
import { SectionDescription } from "@/components/ui/SectionDescription";
import { staggerContainer, fadeInUp } from "@/lib/motion";

const steps = [
  {
    number: "01",
    title: "Assessment",
    description:
      "Comprehensive evaluation of your condition, history and movement patterns to understand your needs.",
  },
  {
    number: "02",
    title: "Diagnosis",
    description:
      "Clear clinical diagnosis identifying the root cause of your pain or functional limitation.",
  },
  {
    number: "03",
    title: "Treatment Plan",
    description:
      "A personalised rehabilitation program designed specifically around your recovery goals and timeline.",
  },
  {
    number: "04",
    title: "Rehabilitation",
    description:
      "Structured treatment sessions with expert physiotherapy guidance, monitoring and progressive care.",
  },
  {
    number: "05",
    title: "Recovery",
    description:
      "Return to full function, movement and your active lifestyle — with the confidence to stay there.",
  },
];

export function RecoveryJourney() {
  return (
    <SectionWrapper>
      <Container>
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center text-center gap-4 mb-14 md:mb-16"
        >
          <motion.div variants={fadeInUp}>
            <EyebrowLabel>How It Works</EyebrowLabel>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <SectionHeading as="h2">Your Recovery Journey</SectionHeading>
          </motion.div>
          <motion.div variants={fadeInUp} className="max-w-lg">
            <SectionDescription>
              A clear, structured path from your first assessment through to
              full recovery. We guide you every step of the way.
            </SectionDescription>
          </motion.div>
        </motion.div>

        {/* Steps grid */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div
            className="absolute top-[2.25rem] left-[calc(10%+1.5rem)] right-[calc(10%+1.5rem)] h-px bg-border hidden lg:block"
            aria-hidden="true"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-4"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={fadeInUp}
                custom={index}
                className="relative flex flex-col gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-sm transition-all duration-300 group"
              >
                {/* Step number with dot on connecting line */}
                <div className="relative flex items-center gap-3 lg:flex-col lg:items-start lg:gap-0">
                  <span className="font-heading font-bold text-3xl text-accent leading-none transition-colors duration-300">
                    {step.number}
                  </span>
                  {/* Dot on the connecting line */}
                  <div className="absolute -top-[1.85rem] left-3 w-3 h-3 rounded-full bg-primary border-2 border-background shadow-sm hidden lg:block" />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-heading font-semibold text-base text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-[1.7]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
