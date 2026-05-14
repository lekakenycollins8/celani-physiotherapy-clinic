import type { Metadata } from "next";
import { AboutPage } from "@/components/sections/AboutPage";

export const metadata: Metadata = {
  title: "About Us | CELANI Physiotherapy & Sports Injuries Clinic Nairobi",
  description:
    "Meet the specialist team at CELANI Physiotherapy in Nairobi. Led by Dr. Ann Celani, we deliver expert, evidence-based physiotherapy and rehabilitation care.",
  openGraph: {
    title: "About CELANI Physiotherapy | Specialist Physiotherapy in Nairobi",
    description:
      "Meet the specialist team at CELANI Physiotherapy in Nairobi. Led by Dr. Ann Celani, we deliver expert, evidence-based physiotherapy and rehabilitation care.",
    type: "website",
  },
};

export default function About() {
  return <AboutPage />;
}
