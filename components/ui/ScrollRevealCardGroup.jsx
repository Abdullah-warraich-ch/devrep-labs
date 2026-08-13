"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * ScrollRevealCardGroup
 * Industry-standard Framer Motion scroll-reveal component for card grids/lists.
 * Uses GPU-accelerated transforms (opacity, y, scale) with zero layout shift.
 */

export default function ScrollRevealCardGroup({
  children,
  className = "",
  stagger = 0.14,
  delayChildren = 0,
  yOffset = 45,
  scaleFrom = 0.94,
  duration = 0.65,
  once = false,
  margin = "0px 0px -160px 0px",
  amount = 0.15,
}) {
  const flattenedChildren = React.Children.toArray(children);

  return (
    <div className={className}>
      {flattenedChildren.map((child, idx) => {
        if (!React.isValidElement(child)) return child;

        return (
          <motion.div
            key={child.key || idx}
            initial={{ opacity: 0, y: yOffset, scale: scaleFrom }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once, margin, amount }}
            transition={{
              duration: duration,
              delay: delayChildren + idx * stagger,
              ease: [0.215, 0.61, 0.355, 1], // Fluid cubic-bezier curve
            }}
            className="w-full"
          >
            {child}
          </motion.div>
        );
      })}
    </div>
  );
}

