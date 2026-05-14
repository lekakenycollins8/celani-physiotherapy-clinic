import type { Metadata } from "next";
import { ServicesHub } from "@/components/sections/ServicesHub";

export const metadata: Metadata = {
  title:
    "Physiotherapy Services in Nairobi | CELANI Physiotherapy & Sports Injuries Clinic",
  description:
    "Expert physiotherapy services in Nairobi — orthopedic rehabilitation, sports injury recovery, pelvic floor rehab, manual therapy and more. Book at CELANI today.",
  openGraph: {
    title:
      "Physiotherapy Services in Nairobi | CELANI Physiotherapy & Sports Injuries Clinic",
    description:
      "Expert physiotherapy services in Nairobi — orthopedic rehabilitation, sports injury recovery, pelvic floor rehab, manual therapy and more.",
    type: "website",
  },
};

export default function ServicesPage() {
  return <ServicesHub />;
}
