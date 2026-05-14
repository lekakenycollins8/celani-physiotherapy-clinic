"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { CLINIC_INFO } from "@/data/navigation";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed right-5 z-40 flex flex-col gap-3"
          style={{ bottom: "calc(1.5rem + env(safe-area-inset-bottom, 0px))" }}
          role="complementary"
          aria-label="Quick contact"
        >
          {/* Call button */}
          <a
            href={`tel:${CLINIC_INFO.phone}`}
            aria-label={`Call ${CLINIC_INFO.phone}`}
            className={cn(
              "group flex items-center justify-center w-12 h-12 rounded-full",
              "bg-foreground text-white",
              "shadow-md hover:shadow-lg hover:-translate-y-0.5",
              "transition-all duration-300"
            )}
          >
            <Phone size={18} />
          </a>

          {/* WhatsApp button */}
          <a
            href={`https://wa.me/${CLINIC_INFO.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className={cn(
              "group flex items-center justify-center w-14 h-14 rounded-full",
              "bg-[#25D366] text-white",
              "shadow-md hover:shadow-lg hover:-translate-y-0.5",
              "transition-all duration-300"
            )}
          >
            <MessageCircle size={22} />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
