"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { SectionDescription } from "@/components/ui/SectionDescription";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { staggerContainer, fadeInUp } from "@/lib/motion";
import { servicesData } from "@/data/services";
import { SERVICE_ICONS } from "@/data/serviceIcons";

const services = servicesData.slice(0, 6);

export function ServicesPreview() {
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
            <EyebrowLabel>What We Treat</EyebrowLabel>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <SectionHeading as="h2">Our Specialisations</SectionHeading>
          </motion.div>
          <motion.div variants={fadeInUp} className="max-w-xl">
            <SectionDescription>
              Comprehensive physiotherapy services tailored to your recovery
              goals. From sports injuries to post-surgical care — we provide
              the clinical expertise you need.
            </SectionDescription>
          </motion.div>
        </motion.div>

        {/* Service cards grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {services.map((service) => (
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

        {/* View all services link */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center mt-10 md:mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-200"
          >
            View all services
            <ArrowRight size={15} />
          </Link>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}
