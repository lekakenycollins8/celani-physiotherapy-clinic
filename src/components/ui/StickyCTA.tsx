"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { CLINIC_INFO } from "@/data/navigation";

export function StickyCTA() {
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
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed right-5 z-40 hidden md:flex flex-col gap-3"
          style={{ bottom: "calc(2rem + env(safe-area-inset-bottom, 0px))" }}
          role="complementary"
          aria-label="Quick contact"
        >
          {/* Call button */}
          <div className="group relative flex items-center justify-end">
            <span className="absolute right-14 mr-2 px-2.5 py-1 rounded-lg bg-foreground text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
              {CLINIC_INFO.phone}
            </span>
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              aria-label={`Call ${CLINIC_INFO.phone}`}
              className={cn(
                "flex items-center justify-center w-12 h-12 rounded-full",
                "bg-foreground text-white",
                "shadow-md hover:shadow-lg hover:-translate-y-0.5",
                "transition-all duration-300"
              )}
            >
              <Phone size={18} />
            </a>
          </div>

          {/* WhatsApp button */}
          <div className="group relative flex items-center justify-end">
            <span className="absolute right-16 mr-2 px-2.5 py-1 rounded-lg bg-[#25D366] text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
              WhatsApp us
            </span>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book via WhatsApp"
              className={cn(
                "flex items-center justify-center w-14 h-14 rounded-full",
                "bg-[#25D366] text-white",
                "shadow-md hover:shadow-lg hover:-translate-y-0.5",
                "transition-all duration-300"
              )}
            >
              <MessageCircle size={22} />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
