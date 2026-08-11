"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export function TextReveal({ children, className }) {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.92", "start 0.4"],
  });

  if (typeof children !== "string") {
    return children;
  }

  const words = children.split(" ");

  return (
    <span ref={targetRef} className={cn("inline-block", className)}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </span>
  );
}

function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className="relative mr-[0.25em] inline-block whitespace-nowrap">
      <span className="absolute opacity-15 select-none">{children}</span>
      <motion.span style={{ opacity }} className="relative z-10">
        {children}
      </motion.span>
    </span>
  );
}
