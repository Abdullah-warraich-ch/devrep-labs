"use client";

import { motion } from "framer-motion";

/**
 * HandDrawnUnderline — A reusable animated hand-drawn underline SVG.
 *
 * @param {string}  color       - Stroke color (default: "#FFE566")
 * @param {number}  strokeWidth - Stroke width (default: 2.5)
 * @param {number}  duration    - Animation duration in seconds (default: 0.9)
 * @param {number}  delay       - Animation delay in seconds (default: 0.25)
 * @param {string}  className   - Additional CSS classes for the outer <svg> wrapper
 */
export default function HandDrawnUnderline({
  color = "#FFE566",
  strokeWidth = 2.5,
  duration = 0.9,
  delay = 0.25,
  className = "",
}) {
  return (
    <span className={`absolute left-0 bottom-0 h-[3px] bg-foreground/10 rounded-full w-full overflow-hidden ${className}`}>
      <motion.span
        initial={{ left: "-100%" }}
        whileInView={{ left: "100%" }}
        viewport={{ once: false, margin: "-40px" }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
          ease: "easeInOut",
        }}
        className="absolute top-0 h-full w-full bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
      />
    </span>
  );
}
