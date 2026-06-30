"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock } from "lucide-react";
import { SERVICES, CLINIC_INFO, NAV_LINKS } from "@/data/navigation";
import { cn } from "@/lib/utils";

const QUICK_LINKS = NAV_LINKS.filter((l) => !l.hasDropdown);

const OPENING_HOURS = [
  { day: "Monday – Friday", hours: "8:00 AM – 6:00 PM" },
  { day: "Saturday", hours: "9:00 AM – 4:00 PM" },
  { day: "Sunday", hours: "By appointment" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main footer */}
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12 xl:px-14 pt-16 md:pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">

          {/* Brand column */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <Image
                src="/images/logo.svg"
                alt="CELANI Physiotherapy logo"
                width={400}
                height={287}
                className="h-[70px] md:h-[82px] lg:h-[90px] w-auto object-contain drop-shadow-sm"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <div className="flex flex-col leading-tight gap-0.5">
                <span className="font-heading font-bold text-2xl md:text-3xl tracking-tight leading-none text-white">
                  CELANI
                </span>
                <span className="text-[0.6rem] uppercase tracking-[0.22em] text-primary-foreground font-semibold">
                  Physiotherapy &amp; Sports Injuries
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground max-w-xs">
              Professional physiotherapy and rehabilitation care in Nairobi. We help you recover, rebuild strength and return to your active lifestyle.
            </p>
            <div className="flex flex-col gap-3 mt-2">
              <div className="flex items-start gap-3 text-sm">
                <MapPin size={15} className="text-primary mt-0.5 shrink-0" />
                <span className="text-primary-foreground leading-relaxed">
                  {CLINIC_INFO.address},<br />
                  {CLINIC_INFO.city} – {CLINIC_INFO.landmark}
                </span>
              </div>
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="flex items-center gap-3 text-sm text-primary-foreground hover:text-primary transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  if (typeof window !== 'undefined' && window.gtag_report_conversion) {
                    window.gtag_report_conversion(`tel:${CLINIC_INFO.phone}`);
                  } else {
                    window.location.href = `tel:${CLINIC_INFO.phone}`;
                  }
                }}
              >
                <Phone size={15} className="text-primary shrink-0" />
                {CLINIC_INFO.phone}
              </a>
            </div>
          </div>

          {/* Services column */}
          <div className="flex flex-col gap-5">
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {SERVICES.slice(0, 7).map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-primary-foreground hover:text-primary transition-colors duration-200"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sm text-primary hover:text-primary/80 transition-colors duration-200 mt-1 block"
                >
                  All services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick links column */}
          <div className="flex flex-col gap-5">
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sm text-primary-foreground hover:text-primary transition-colors duration-200"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours + CTA column */}
          <div className="flex flex-col gap-5">
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest">
              Opening Hours
            </h4>
            <ul className="flex flex-col gap-3">
              {OPENING_HOURS.map((item) => (
                <li key={item.day} className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-primary-foreground uppercase tracking-wide">
                    {item.day}
                  </span>
                  <span className="text-sm text-primary-foreground flex items-center gap-1.5">
                    <Clock size={12} className="text-primary shrink-0" />
                    {item.hours}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href={`https://wa.me/${CLINIC_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-xl",
                "text-sm font-semibold text-foreground bg-primary",
                "hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-md",
                "transition-all duration-300"
              )}
            >
              Book via WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12 xl:px-14 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-primary-foreground">
            © {new Date().getFullYear()} CELANI Physiotherapy & Sports Injuries Clinic. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground">
            Nairobi, Kenya
          </p>
        </div>
      </div>
    </footer>
  );
}
