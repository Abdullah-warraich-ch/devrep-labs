"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Timeout set precisely to the 2.5s animation duration of animated-logo.svg
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: -1000 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background pointer-events-auto"
        >
          <div
            className="flex flex-col items-center justify-center"
          >
            <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }} className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
              <Image src="/svgs/animated-logo.svg" alt="Loading Logo" fill className="object-contain" priority />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
