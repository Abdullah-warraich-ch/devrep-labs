"use client";

import { useEffect } from "react";
import { X, Frown, Sparkles, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function UnderDevelopmentModal({ isOpen, onClose, featureName }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60"
          />

          {/* Compact Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 320 }}
            className="bg-white w-full max-w-xs sm:max-w-sm rounded-3xl p-6 shadow-2xl relative z-10 text-center border border-stone-100 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center transition-colors cursor-pointer active:scale-95"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Icon Badge with Sad Face */}
            <div className="w-14 h-14 rounded-full bg-amber-50 border border-amber-200/80 text-amber-600 flex items-center justify-center mx-auto shadow-xs">
              <Frown className="w-7 h-7 text-amber-600" />
            </div>

            {/* Content Text */}
            <div className="space-y-1.5 pt-1">
              <h3 className="text-base sm:text-lg font-bold text-stone-900">
                Under Development
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed px-2">
                Sorry, {featureName ? `the ${featureName}` : "this feature"} is currently under development and will be available soon.
              </p>
            </div>

            {/* Action Button */}
            <button
              onClick={onClose}
              className="w-full bg-brand hover:bg-brand-hover active:scale-[0.99] text-white font-medium py-3 rounded-2xl text-xs sm:text-sm transition-all cursor-pointer shadow-md shadow-brand/20"
            >
              Got It
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
