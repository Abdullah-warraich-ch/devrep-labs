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
            className="relative w-full max-w-md my-auto rounded-3xl bg-white border border-[#EAE5F0] shadow-[0_25px_70px_rgba(23,19,31,0.25)] text-[#17131F] z-10 font-poppins overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="offer-modal-title"
          >
            {/* Top Accent Gradient Line */}
            <div className="h-1.5 bg-gradient-to-r from-[#AA076B] to-[#61045F]" />

            {/* Ambient Background Aura */}
            <div className="absolute -top-16 -right-16 w-56 h-56 bg-[#AA076B]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-[#00F5D4]/15 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close offer modal"
              className="absolute top-4 right-4 p-2 rounded-full text-[#6F6878] hover:text-[#17131F] bg-[#FAF8FF] hover:bg-[#FAF7FC] border border-[#EAE5F0] transition-all duration-200 cursor-pointer group z-20"
            >
              <IconX className="size-4.5 transition-transform duration-200 group-hover:rotate-90" />
            </button>

            {/* Content Container */}
            <div className="p-6 sm:p-8 pt-6 relative z-10 text-center flex flex-col items-center">
              
              {/* Standalone Filled Tag Icon (No Background) */}
              <IconTagFilled className="size-11 sm:size-12 text-[#AA076B] mb-4 shrink-0 drop-shadow-sm" />

              {/* Direct, Straightforward Title */}
              <h2
                id="offer-modal-title"
                className="text-xl sm:text-2xl md:text-[26px] font-bold tracking-tight text-[#17131F] leading-snug font-['poppins-sb'] mb-7 max-w-sm"
              >
                We Will Provide a{" "}
                <span className="relative inline-block text-[#AA076B]">
                  Free Demo
                  <HandDrawnUnderline color="#AA076B" />
                </span>{" "}
                for Your Business Website
              </h2>

              {/* Action Buttons */}
              <div className="w-full space-y-3">
                <button
                  type="button"
                  onClick={onClaimOffer}
                  className="w-full h-11 sm:h-12 rounded-full text-sm font-semibold text-[#090814] bg-[#00F5D4] hover:bg-[#00E5FF] shadow-lg hover:shadow-[0_8px_25px_rgba(0,245,212,0.45)] transition-colors duration-200 cursor-pointer flex items-center justify-center gap-2 group font-['poppins-sb']"
                >
                  <span>Book a Free Demo</span>
                  <IconArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="text-xs text-[#6F6878] hover:text-[#17131F] py-1 cursor-pointer transition-colors"
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
