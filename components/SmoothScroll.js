"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SmoothScroll({ children }) {
  // Synchronize Lenis scroll with GSAP ScrollTrigger
  useLenis(() => {
    ScrollTrigger.update();
  });

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 0,
        syncTouch: false,
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
