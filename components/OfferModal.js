"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";
import { IconX, IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";

const storageKey = "devreplabs_offer_popup_shown";
const cooldown = 24 * 60 * 60 * 1000;

export default function OfferModal() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState(null);
  const shown = useRef(false);
  const isOpen = openPath !== null && openPath === pathname;
  const onClose = useCallback(() => setOpenPath(null), []);

  useEffect(() => {
    if (shown.current || !(pathname === "/" || /^\/(services|projects)(\/|$)/.test(pathname))) return;
    const timer = window.setTimeout(() => {
      try {
        if (Date.now() - Number(localStorage.getItem(storageKey)) < cooldown) return;
        localStorage.setItem(storageKey, String(Date.now()));
      } catch {
        // The in-memory flag handles browsers with storage disabled.
      }
      shown.current = true;
      setOpenPath(pathname);
    }, 4500);
    return () => window.clearTimeout(timer);
  }, [pathname]);

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
            className="relative w-full max-w-[31rem] my-auto rounded-3xl bg-white shadow-2xl text-neutral-950 z-10 font-poppins overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="offer-modal-title"
          >
            <div className="relative h-28 sm:h-36">
              <div
                aria-hidden="true"
                className="absolute inset-0 overflow-hidden bg-[radial-gradient(ellipse_at_bottom,var(--primary),#1a0808_90%)]"
              >
                <svg
                  viewBox="-100 -100 200 200"
                  className="absolute bottom-0 left-1/2 w-[60%] -translate-x-1/2 translate-y-1/2 text-primary opacity-25"
                  fill="none"
                  focusable="false"
                >
                  <g transform="rotate(5)" stroke="currentColor" strokeWidth="38">
                    <path d="M0 -98V98 M-98 0H98 M-69 -69L69 69 M-69 69L69 -69" />
                  </g>
                </svg>
              </div>
              <Image
                src="/3d-percentage.png"
                alt=""
                width={1448}
                height={1086}
                sizes="(min-width: 640px) 240px, 200px"
                className="absolute bottom-0 left-1/2 w-[200px] -translate-x-1/2 translate-y-1/4 sm:w-[240px]"
              />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close offer modal"
                className="absolute top-2 right-2 grid size-11 cursor-pointer place-items-center rounded-md text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-white"
              >
                <IconX aria-hidden="true" stroke={1.5} className="size-[18px]" />
              </button>
            </div>

            <div className="px-6 pt-14 pb-7 text-center sm:px-10 sm:pt-16 sm:pb-9">
              <span className="inline-block rounded-lg bg-neutral-950 px-3 py-1 text-xs font-medium text-white">
                Free website demo
              </span>
              <h2
                id="offer-modal-title"
                className="mx-auto mt-4 max-w-sm text-balance text-3xl leading-tight tracking-tight sm:text-[40px]"
              >
                See your business website in action
              </h2>
              <p className="mx-auto mt-4 max-w-sm text-pretty text-sm leading-relaxed text-neutral-600 sm:text-base">
                Tell us about your business and see what your website could look like.
              </p>
              <Link
                href="/book-a-demo"
                onClick={onClose}
                className="mt-7 flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary px-4 font-poppins-sb text-sm text-white transition-colors hover:bg-primary/90"
              >
                Book a Free Demo
                <IconArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
