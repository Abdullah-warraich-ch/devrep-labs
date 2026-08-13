"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * ScrollRevealCardGroup
 * Industry-standard Framer Motion parent-child stagger orchestration component.
 * GPU-accelerated (opacity, y, scale) with zero layout shift.
 */

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: (custom = {}) => ({
    opacity: 1,
    transition: {
      staggerChildren: custom.stagger ?? 0.12,
      delayChildren: custom.delayChildren ?? 0.05,
    },
  }),
};

export const cardItemVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.215, 0.61, 0.355, 1], // Smooth cubic-bezier spring-like curve
    },
  },
};

export default function ScrollRevealCardGroup({
  children,
  className = "",
  stagger = 0.12,
  delayChildren = 0.05,
  amount = 0.15,
}) {
  return (
    <motion.div
      variants={containerVariants}
      custom={{ stagger, delayChildren }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      className={className}
    >
      {React.Children.map(children, (child, idx) => {
        if (!React.isValidElement(child)) return child;
        return (
          <motion.div key={child.key || idx} variants={cardItemVariants} className="h-full">
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
