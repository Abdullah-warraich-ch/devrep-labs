"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate lightweight preloading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Slightly increased to let the animation play out
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: -1000 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background pointer-events-auto"
        >
          <div
            className="flex flex-col items-center justify-center"
          >
            <div className="relative w-32 h-32 sm:w-40 sm:h-40">
              <Image src="/svgs/animated-logo.svg" alt="Loading Logo" fill className="object-contain" priority />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
