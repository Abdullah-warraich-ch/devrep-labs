"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";
import { IconX, IconTagFilled, IconArrowRight } from "@tabler/icons-react";
import HandDrawnUnderline from "@/components/ui/HandDrawnUnderline";

export default function OfferModal({ isOpen, onClose, onClaimOffer }) {
  const lenis = useLenis();

  // Scroll locking (HTML, Body, & Lenis) + Escape key listener
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    if (lenis) {
      lenis.stop();
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;

      if (lenis) {
        lenis.start();
      }
    };
  }, [isOpen, onClose, lenis]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto"
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Offer Modal Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="dark-theme relative w-full max-w-md my-auto rounded-3xl bg-[#080808] border border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.85)] text-white z-10 font-poppins overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="offer-modal-title"
          >
            {/* Top Accent Line */}
            <div className="h-1 bg-primary" />

            {/* Ambient Background Aura */}
            <div className="absolute -top-16 -right-16 w-56 h-56 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close offer modal"
              className="absolute top-4 right-4 p-2 rounded-full text-white/70 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200 cursor-pointer group z-20"
            >
              <IconX className="size-4.5 transition-transform duration-200 group-hover:rotate-90" />
            </button>

            {/* Content Container */}
            <div className="p-6 sm:p-8 pt-6 relative z-10 text-center flex flex-col items-center">
              
              {/* Standalone Filled Tag Icon */}
              <IconTagFilled className="size-11 sm:size-12 text-primary mb-4 shrink-0 drop-shadow-sm" />

              {/* Direct, Straightforward Title */}
              <h2
                id="offer-modal-title"
                className="text-xl sm:text-2xl md:text-[26px] font-bold tracking-tight text-white leading-snug font-poppins-sb mb-7 max-w-sm"
              >
                We Will Provide a{" "}
                <span className="relative inline-block text-primary pb-1">
                  Free Demo
                  <HandDrawnUnderline />
                </span>{" "}
                for Your Business Website
              </h2>

              {/* Action Buttons */}
              <div className="w-full space-y-3">
                <button
                  type="button"
                  onClick={onClaimOffer}
                  className="w-full h-11 sm:h-12 rounded-full text-sm font-semibold text-white bg-primary hover:bg-primary/90 shadow-lg hover:shadow-[0_8px_25px_var(--primary)] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 group font-poppins-sb"
                >
                  <span>Book a Free Demo</span>
                  <IconArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="text-xs text-white/60 hover:text-white py-1 cursor-pointer transition-colors"
                >
                  Maybe later, I&apos;ll explore first
                </button>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
