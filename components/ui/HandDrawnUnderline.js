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
    <svg
      className={`absolute left-0 -bottom-1 sm:-bottom-1.5 w-full h-2.5 sm:h-3 overflow-visible pointer-events-none ${className}`}
      viewBox="0 0 260 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M 2 8 C 65 2, 175 2, 258 7"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration, delay, ease: "easeOut" }}
      />
    </svg>
  );
}
