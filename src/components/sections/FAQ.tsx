"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { SectionHeading } from "@/components/SectionHeading";
import { SectionDescription } from "@/components/ui/SectionDescription";
import { staggerContainer, fadeInUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Do I need an appointment to visit CELANI Physiotherapy?",
    answer:
      "Yes, appointments are recommended to ensure you have dedicated, uninterrupted time with your physiotherapist. You can book online, call us directly, or send a message via WhatsApp. Walk-ins are welcome subject to availability.",
  },
  {
    question: "What conditions do you treat?",
    answer:
      "We treat a comprehensive range of conditions including sports injuries, orthopedic problems, back and neck pain, pelvic floor disorders, post-surgical rehabilitation, mobility limitations and general musculoskeletal issues affecting movement and quality of life.",
  },
  {
    question: "Do you specialise in sports injuries?",
    answer:
      "Yes, sports injury rehabilitation is one of our core specialisations. We work with athletes across all levels — from recreational to competitive — providing expert diagnosis, structured rehabilitation and return-to-sport programs.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "This depends on your specific condition, its severity and your individual recovery progress. During your initial assessment your physiotherapist will discuss a personalised treatment plan and provide a recommended session timeline.",
  },
  {
    question: "Where is CELANI Physiotherapy located?",
    answer:
      "We are located at Princess Park Apartments, Ground Floor Room 10, Kibera Road Off Kabarnet Road, along Ngong Road, Nairobi. Please contact us via phone or WhatsApp for specific directions or to confirm your appointment details.",
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "border-b border-border/50 py-6 group cursor-pointer",
        open && "border-border/70"
      )}
    >
      <button
        className="w-full flex items-start justify-between gap-5 text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span
          className={cn(
            "font-heading font-semibold text-base md:text-lg leading-snug transition-colors duration-200",
            open
              ? "text-primary"
              : "text-foreground group-hover:text-primary"
          )}
        >
          {question}
        </span>
        <span
          className={cn(
            "flex items-center justify-center w-7 h-7 rounded-lg border shrink-0 mt-0.5 transition-all duration-200",
            open
              ? "border-primary/30 bg-primary/8 text-primary"
              : "border-border text-muted-foreground group-hover:border-primary/30"
          )}
        >
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-sm md:text-base text-muted-foreground leading-[1.7] max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <SectionWrapper>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.55fr] gap-12 lg:gap-16">

          {/* Left: sticky section header */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-5 lg:sticky lg:top-28 lg:self-start"
          >
            <motion.div variants={fadeInUp}>
              <EyebrowLabel>FAQ</EyebrowLabel>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <SectionHeading as="h2">Common Questions</SectionHeading>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <SectionDescription>
                Everything you need to know before your first visit or
                appointment at CELANI Physiotherapy.
              </SectionDescription>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <p className="text-sm text-muted-foreground">
                Have more questions?{" "}
                <Link
                  href="/contact"
                  className="text-primary font-medium hover:underline underline-offset-2 transition-all duration-200"
                >
                  Contact us directly →
                </Link>
              </p>
            </motion.div>
          </motion.div>

          {/* Right: accordion */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {faqs.map((faq) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </motion.div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
