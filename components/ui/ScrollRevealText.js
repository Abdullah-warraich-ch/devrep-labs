"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ScrollRevealText({ text, className = "", as: Tag = "h2", delay = 0, duration = 1.0 }) {
  const containerRef = useRef(null);
  const [lines, setLines] = useState([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsReady(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isReady) return;
    if (!containerRef.current) return;
    
    const splitTextToLines = () => {
      const container = containerRef.current;
      if (!container) return;

      const words = Array.from(container.querySelectorAll(".measure-word"));
      if (words.length === 0) return;
      
      let currentLineY = -1;
      let currentLine = [];
      const newLines = [];
      
      words.forEach((word) => {
        const y = Math.round(word.getBoundingClientRect().top);
        if (currentLineY === -1) {
            currentLineY = y;
        }
        
        // Threshold of 5px to account for slight subpixel rendering differences
        if (Math.abs(y - currentLineY) > 5) {
          if (currentLine.length > 0) {
            newLines.push(currentLine.join(" "));
          }
          currentLine = [];
          currentLineY = y;
        }
        currentLine.push(word.innerText);
      });
      if (currentLine.length > 0) {
        newLines.push(currentLine.join(" "));
      }
      
      setLines(newLines);
      setIsReady(true);
    };

    const timeout = setTimeout(splitTextToLines, 50);
    
    return () => clearTimeout(timeout);
  }, [text, isReady]);

  if (!isReady) {
    return (
      <Tag ref={containerRef} className={`${className} opacity-0`} style={{ display: "flex", flexWrap: "wrap", gap: "0.25em" }}>
        {text.split(" ").map((word, i) => (
          <span key={i} className="measure-word inline-block">{word}</span>
        ))}
      </Tag>
    );
  }

  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className="overflow-hidden block pb-2 -mb-2" style={{ display: "block" }}>
          <motion.span
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
              duration: duration,
              delay: delay + i * 0.2, // Slower stagger to make it easy to see line by line
              ease: [0.16, 1, 0.3, 1],
            }}
            className="block transform-gpu"
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
