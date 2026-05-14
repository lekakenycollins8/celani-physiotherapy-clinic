import type { Metadata } from "next";
import { ContactPage } from "@/components/sections/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us | CELANI Physiotherapy & Sports Injuries Clinic Nairobi",
  description:
    "Book an appointment at CELANI Physiotherapy in Nairobi. Call us, message on WhatsApp or visit us at Princess Park, Kibera Road. Mon–Fri 8AM–6PM.",
  openGraph: {
    title: "Contact CELANI Physiotherapy | Book Your Appointment in Nairobi",
    description:
      "Book an appointment at CELANI Physiotherapy in Nairobi. Call us, message on WhatsApp or visit us at Princess Park, Kibera Road.",
    type: "website",
  },
};

export default function Contact() {
  return <ContactPage />;
}
