"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { annotate } from "rough-notation";

export function Highlighter({
  children,
  action = "underline",
  color = "#d7ff00",
  strokeWidth = 3.5,
  animationDuration = 700,
  iterations = 2,
  padding = 2,
  multiline = true,
}) {
  const elementRef = useRef(null);

  // Framer Motion useInView with once: true so it triggers when near center and stays permanently
  const isInView = useInView(elementRef, {
    once: true,
    margin: "-35% 0px -35% 0px",
  });

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let annotation = null;
    let resizeObserver = null;

    if (isInView) {
      const annotationConfig = {
        type: action,
        color,
        strokeWidth,
        animationDuration,
        iterations,
        padding,
        multiline,
      };

      annotation = annotate(element, annotationConfig);
      annotation.show();

      resizeObserver = new ResizeObserver(() => {
        annotation?.hide();
        annotation?.show();
      });

      resizeObserver.observe(element);
      resizeObserver.observe(document.body);
    }

    // Keep annotation visible once drawn
  }, [
    isInView,
    action,
    color,
    strokeWidth,
    animationDuration,
    iterations,
    padding,
    multiline,
  ]);

  return (
    <span ref={elementRef} className="relative inline-block bg-transparent">
      {children}
    </span>
  );
}
