"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "../_data/siteConfig";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1.03, y: -8 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] bg-[#0c1310] flex flex-col items-center justify-center font-sans select-none pointer-events-none"
        >
          <div className="flex flex-col items-center text-center space-y-3">
            {/* White Logo */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20">
              <Image
                src={siteConfig.assets.logoWhite}
                alt={siteConfig.name}
                fill
                priority
                unoptimized
                className="object-contain"
              />
            </div>

            {/* Brand Name */}
            <div className="flex flex-col items-center">
              <span className="font-bold text-lg sm:text-xl text-white tracking-[0.2em] uppercase">
                {siteConfig.name}
              </span>
              <span className="text-[9px] sm:text-[10px] text-stone-400 font-semibold tracking-[0.25em] uppercase mt-1">
                {siteConfig.tagline} RESIDENCES
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
