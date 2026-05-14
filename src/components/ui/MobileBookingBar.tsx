"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import { CLINIC_INFO } from "@/data/navigation";

export function MobileBookingBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const whatsappHref = `https://wa.me/${CLINIC_INFO.whatsapp}?text=Hello%20CELANI%20Physiotherapy%2C%20I%27d%20like%20to%20book%20an%20appointment.`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
          style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
          role="complementary"
          aria-label="Quick booking actions"
        >
          <div className="bg-white border-t border-border/60 shadow-[0_-4px_24px_rgba(0,0,0,0.08)] px-4 py-3 grid grid-cols-3 gap-2">
            {/* Call */}
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              aria-label={`Call ${CLINIC_INFO.phone}`}
              className="flex flex-col items-center gap-1 py-2 px-3 rounded-xl bg-muted/60 hover:bg-muted transition-colors duration-200"
            >
              <Phone size={18} className="text-foreground" />
              <span className="text-[11px] font-semibold text-foreground leading-none">
                Call
              </span>
            </a>

            {/* Book via WhatsApp — primary */}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book appointment via WhatsApp"
              className="flex flex-col items-center gap-1 py-2 px-3 rounded-xl bg-[#25D366] hover:bg-[#1fba5a] transition-colors duration-200"
            >
              <MessageCircle size={18} className="text-white" />
              <span className="text-[11px] font-semibold text-white leading-none">
                WhatsApp
              </span>
            </a>

            {/* Book appointment */}
            <a
              href="/contact"
              aria-label="Book appointment"
              className="flex flex-col items-center gap-1 py-2 px-3 rounded-xl bg-primary hover:bg-primary/90 transition-colors duration-200"
            >
              <Calendar size={18} className="text-white" />
              <span className="text-[11px] font-semibold text-white leading-none">
                Book
              </span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
