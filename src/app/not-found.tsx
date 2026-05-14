import type { Metadata } from "next";
import Link from "next/link";
import { Home, ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { CLINIC_INFO } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Page Not Found | CELANI Physiotherapy",
};

export default function NotFound() {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center mt-16 md:mt-20">
      <Container>
        <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-8 py-20">
          {/* 404 display */}
          <div className="relative">
            <span
              className="font-heading font-bold text-[10rem] md:text-[12rem] leading-none select-none"
              style={{ color: "#6BB6D9", opacity: 0.15 }}
              aria-hidden="true"
            >
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center gap-2">
                <span className="w-12 h-[3px] bg-accent rounded-full" />
                <span className="font-heading font-bold text-xl md:text-2xl text-foreground tracking-tight">
                  Page Not Found
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 max-w-sm">
            <p className="text-base text-muted-foreground leading-[1.8]">
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved. Let&apos;s get you back on track.
            </p>
          </div>

          {/* Navigation links */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
            >
              <Home size={15} />
              Back to Home
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-border text-foreground font-semibold text-sm hover:border-primary/30 hover:bg-muted/40 transition-all duration-300"
            >
              View Services
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Quick contact */}
          <div className="flex flex-col items-center gap-2 pt-2 border-t border-border/50 w-full">
            <p className="text-xs text-muted-foreground">
              Need help? Call us directly
            </p>
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors duration-200"
            >
              <Phone size={14} />
              {CLINIC_INFO.phone}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
