"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollTextReveal({
  children,
  className = "",
  delay = 0,
  stagger = 0.025,
  start = "top 85%",
  end = "top 35%",
  scrub = true,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const characters = container.querySelectorAll(".reveal-char");

      gsap.fromTo(
        characters,
        {
          x: -7,
          opacity: 0.3,
        },
        {
          x: 0,
          opacity: 1,
          stagger,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start,
            end,
            scrub,
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, [delay, stagger, start, end, scrub]);

  const text = String(children);

  return (
    <span
      ref={containerRef}
      className={className}
      aria-label={text}
    >
      {text.split(" ").map((word, wordIndex) => (
        <span
          key={wordIndex}
          style={{
            display: "inline-block",
            whiteSpace: "nowrap",
          }}
        >
          {word.split("").map((char, charIndex) => (
            <span
              key={charIndex}
              className="reveal-char"
              aria-hidden="true"
              style={{
                display: "inline-block",
              }}
            >
              {char}
            </span>
          ))}

          {wordIndex < text.split(" ").length - 1 && (
            <span aria-hidden="true">&nbsp;</span>
          )}
        </span>
      ))}
    </span>
  );
}
