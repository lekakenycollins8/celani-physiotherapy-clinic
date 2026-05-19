"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, Phone, MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SERVICES, CLINIC_INFO } from "@/data/navigation";
import { fadeInUp } from "@/lib/motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-background/95 backdrop-blur-sm border-b border-border/50 shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12 xl:px-14">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 shrink-0"
              aria-label="CELANI Physiotherapy home"
            >
              <Image
                src="/images/logo.svg"
                alt="CELANI Physiotherapy logo"
                width={400}
                height={287}
                priority
                loading="eager"
                className={cn(
                  "h-[80px] md:h-[90px] lg:h-[150px] w-auto object-contain drop-shadow-sm",
                  scrolled
                    ? "drop-shadow-sm"
                    : "max-lg:brightness-0 max-lg:invert drop-shadow-[0_2px_8px_rgba(0,0,0,0.18)]"
                )}
              />
              <div className="flex flex-col leading-tight gap-0.5">
                <span
                  className={cn(
                    "font-heading font-bold text-2xl md:text-3xl tracking-tight leading-none transition-colors duration-200",
                    scrolled ? "text-foreground" : "text-white lg:text-black"
                  )}
                >
                  CELANI
                </span>
                <span
                  className={cn(
                    "text-[0.6rem] md:text-[0.65rem] font-semibold uppercase tracking-[0.22em] transition-colors duration-200",
                    scrolled ? "text-muted-foreground" : "text-white/70 lg:text-black/70"
                  )}
                >
                  Physiotherapy &amp; Sports Injuries
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
              {NAV_LINKS.map((link) =>
                link.hasDropdown ? (
                  <div key={link.label} ref={dropdownRef} className="relative">
                    <button
                      onClick={() => setDropdownOpen((v) => !v)}
                      onMouseEnter={() => setDropdownOpen(true)}
                      className={cn(
                        "flex items-center gap-1 px-4 py-2.5 rounded-xl",
                        "text-sm font-medium transition-all duration-200",
                        pathname.startsWith("/services")
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                      )}
                      aria-expanded={dropdownOpen}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown
                        size={13}
                        className={cn(
                          "transition-transform duration-300",
                          dropdownOpen ? "rotate-180" : ""
                        )}
                      />
                    </button>
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
                          onMouseLeave={() => setDropdownOpen(false)}
                          className={cn(
                            "absolute top-full left-1/2 -translate-x-1/2 mt-3",
                            "w-[660px] p-6 rounded-2xl",
                            "bg-background border border-border shadow-lg",
                            "grid grid-cols-3 gap-1.5"
                          )}
                          role="menu"
                        >
                          {SERVICES.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              onClick={() => setDropdownOpen(false)}
                              role="menuitem"
                              className={cn(
                                "group flex flex-col gap-1 p-3.5 rounded-xl",
                                "hover:bg-muted/50 transition-all duration-200"
                              )}
                            >
                              <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                                {service.title}
                              </span>
                              <span className="text-xs text-muted-foreground leading-relaxed">
                                {service.description}
                              </span>
                            </Link>
                          ))}
                          <div className="col-span-3 mt-3 pt-4 border-t border-border/60 flex items-center justify-between">
                            <Link
                              href="/services"
                              onClick={() => setDropdownOpen(false)}
                              className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors duration-200 flex items-center gap-1"
                            >
                              View all services
                              <span aria-hidden="true">→</span>
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "px-4 py-2.5 rounded-xl",
                      "text-sm font-medium transition-all duration-200",
                      pathname === link.href
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                    )}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              {/* Phone — subtle text link */}
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label={`Call ${CLINIC_INFO.phone}`}
              >
                <Phone size={13} />
                <span className="hidden xl:inline">{CLINIC_INFO.phone}</span>
              </a>

              <span className="h-4 w-px bg-border" aria-hidden="true" />

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center gap-2 px-4 py-2.5 rounded-xl",
                  "text-sm font-medium text-foreground",
                  "border border-border hover:border-accent/50 hover:bg-muted/40",
                  "transition-all duration-200"
                )}
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>

              {/* Book Appointment */}
              <a
                href="/contact"
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 rounded-xl",
                  "text-sm font-semibold text-primary-foreground bg-primary",
                  "hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-md",
                  "transition-all duration-200"
                )}
              >
                Book Appointment
              </a>
            </div>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileOpen(true)}
              className={cn(
                "lg:hidden flex items-center justify-center w-10 h-10 rounded-xl transition-colors duration-200",
                scrolled ? "hover:bg-muted/50" : "hover:bg-white/15"
              )}
              aria-label="Open navigation menu"
            >
              <Menu size={20} className={cn("transition-colors duration-200", scrolled ? "text-foreground" : "text-white")} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <MobileMenu onClose={() => setMobileOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      {/* Dimmed backdrop — click to close */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed inset-0 z-[60] bg-foreground/60 backdrop-blur-[2px]"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in diagonal panel */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
        className="fixed inset-y-0 left-0 z-[61] w-[84vw] max-w-[380px] bg-[#1D2939] flex flex-col"
        style={{ clipPath: "polygon(0 0, 100% 0, 78% 100%, 0 100%)" }}
      >
        {/* Close button — top left per inspo */}
        <div className="px-7 pt-8 pb-1 shrink-0">
          <button
            onClick={onClose}
            className="flex items-center justify-center w-9 h-9 rounded-lg hover:bg-white/10 transition-colors duration-200"
            aria-label="Close navigation menu"
          >
            <X size={18} className="text-white" />
          </button>
        </div>

        {/* Nav links */}
        <motion.nav
          className="flex-1 overflow-y-auto px-7 pt-5 pb-4 flex flex-col"
          style={{ paddingRight: "32%" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.07, delayChildren: 0.22 },
            },
          }}
          initial="hidden"
          animate="visible"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) =>
            link.hasDropdown ? (
              <div key={link.label}>
                <motion.div variants={fadeInUp}>
                  <button
                    onClick={() => setServicesOpen((v) => !v)}
                    className="w-full flex items-center justify-between py-4 border-b border-white/10"
                  >
                    <span className="font-heading font-bold text-xl text-white uppercase tracking-widest">
                      {link.label}
                    </span>
                    <ChevronDown
                      size={14}
                      className={cn(
                        "text-white/40 transition-transform duration-300 shrink-0",
                        servicesOpen ? "rotate-180" : ""
                      )}
                    />
                  </button>
                </motion.div>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 border-l-2 border-accent/50 flex flex-col py-3 mb-1">
                        {SERVICES.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            onClick={onClose}
                            className="py-2.5 text-sm font-medium text-white/55 hover:text-white transition-colors duration-200 block"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <motion.div key={link.label} variants={fadeInUp}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="block py-4 border-b border-white/10 font-heading font-bold text-xl text-white hover:text-primary uppercase tracking-widest transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </motion.div>
            )
          )}
        </motion.nav>

        {/* Bottom CTAs — iOS safe area */}
        <div
          className="px-7 pt-5 flex flex-col gap-2.5 shrink-0"
          style={{
            paddingRight: "32%",
            paddingBottom: "calc(2rem + env(safe-area-inset-bottom, 0px))",
          }}
        >
          <a
            href="/contact"
            onClick={onClose}
            className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-all duration-200"
          >
            Book Appointment
          </a>
          <a
            href={`https://wa.me/${CLINIC_INFO.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 rounded-xl border border-white/20 text-white/70 hover:text-white hover:border-white/40 font-medium text-sm transition-all duration-200"
          >
            <MessageCircle size={14} />
            WhatsApp
          </a>
          <a
            href={`tel:${CLINIC_INFO.phone}`}
            className="flex items-center justify-center gap-1.5 text-xs text-white/40 hover:text-white/70 transition-colors duration-200 py-1"
          >
            <Phone size={11} />
            {CLINIC_INFO.phone}
          </a>
        </div>
      </motion.div>
    </>
  );
}
