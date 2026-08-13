"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import {
  SiNextdotjs,
  SiReact,
  SiGsap,
  SiFramer,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

export default function TechStackBeam() {
  const containerRef = useRef(null);
  const centerRef = useRef(null);

  // Left Column refs (Frontend & Animation Stack)
  const nextRef = useRef(null);
  const reactRef = useRef(null);
  const gsapRef = useRef(null);
  const framerRef = useRef(null);

  // Right Column refs (Backend & AI Stack)
  const nodeRef = useRef(null);
  const mongoRef = useRef(null);
  const expressRef = useRef(null);
  const openaiRef = useRef(null);

  return (
    <div className="w-full py-8 px-2 sm:px-4 my-4 relative">
      {/* Beam Diagram Only */}
      <div
        ref={containerRef}
        className="relative flex w-full max-w-4xl mx-auto items-center justify-between p-6 sm:p-14 rounded-3xl min-h-[400px] overflow-hidden"
      >
        {/* Left Column: Next.js, React, GSAP, Framer Motion */}
        <div className="flex flex-col justify-between gap-6 z-20">
          <TechCircle ref={nextRef}>
            <SiNextdotjs className="size-6 text-black" />
          </TechCircle>

          <TechCircle ref={reactRef}>
            <SiReact className="size-6 text-[#61dafb]" />
          </TechCircle>

          <TechCircle ref={gsapRef}>
            <SiGsap className="size-6 text-[#88ce02]" />
          </TechCircle>

          <TechCircle ref={framerRef}>
            <SiFramer className="size-6 text-[#0055ff]" />
          </TechCircle>
        </div>

        {/* Center Hub: DevRep Labs Logo Badge */}
        <div className="z-20 flex flex-col items-center justify-center">
          <div
            ref={centerRef}
            className="relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-3xl bg-black p-3 border-2 border-black shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-transform duration-500 hover:scale-105"
          >
            <Image
              src="/logo-white.webp"
              alt="DevRep Labs"
              width={80}
              height={80}
              priority
              className="h-12 w-auto object-contain"
            />
          </div>
        </div>

        {/* Right Column: Node.js, MongoDB, Express, OpenAI */}
        <div className="flex flex-col justify-between gap-6 z-20">
          <TechCircle ref={nodeRef}>
            <SiNodedotjs className="size-6 text-[#5fa04e]" />
          </TechCircle>

          <TechCircle ref={mongoRef}>
            <SiMongodb className="size-6 text-[#47a248]" />
          </TechCircle>

          <TechCircle ref={expressRef}>
            <SiExpress className="size-6 text-black" />
          </TechCircle>

          <TechCircle ref={openaiRef}>
            <OpenAIIcon />
          </TechCircle>
        </div>

        {/* Animated Beams: Left Column -> DevRep Core */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={nextRef}
          toRef={centerRef}
          curvature={-30}
          pathColor="#e4e4e7"
          pathWidth={2}
          pathOpacity={0.8}
          gradientStartColor="#000000"
          gradientStopColor="#18181b"
          duration={4}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={reactRef}
          toRef={centerRef}
          curvature={-10}
          pathColor="#e4e4e7"
          pathWidth={2}
          pathOpacity={0.8}
          gradientStartColor="#61dafb"
          gradientStopColor="#18181b"
          duration={4.5}
          delay={0.5}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={gsapRef}
          toRef={centerRef}
          curvature={10}
          pathColor="#e4e4e7"
          pathWidth={2}
          pathOpacity={0.8}
          gradientStartColor="#88ce02"
          gradientStopColor="#18181b"
          duration={4.2}
          delay={1}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={framerRef}
          toRef={centerRef}
          curvature={30}
          pathColor="#e4e4e7"
          pathWidth={2}
          pathOpacity={0.8}
          gradientStartColor="#0055ff"
          gradientStopColor="#18181b"
          duration={5}
          delay={1.5}
        />

        {/* Animated Beams: DevRep Core -> Right Column */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={centerRef}
          toRef={nodeRef}
          curvature={-30}
          pathColor="#e4e4e7"
          pathWidth={2}
          pathOpacity={0.8}
          gradientStartColor="#18181b"
          gradientStopColor="#5fa04e"
          duration={4}
          delay={0.2}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={centerRef}
          toRef={mongoRef}
          curvature={-10}
          pathColor="#e4e4e7"
          pathWidth={2}
          pathOpacity={0.8}
          gradientStartColor="#18181b"
          gradientStopColor="#47a248"
          duration={4.8}
          delay={0.7}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={centerRef}
          toRef={expressRef}
          curvature={10}
          pathColor="#e4e4e7"
          pathWidth={2}
          pathOpacity={0.8}
          gradientStartColor="#18181b"
          gradientStopColor="#000000"
          duration={4.3}
          delay={1.2}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={centerRef}
          toRef={openaiRef}
          curvature={30}
          pathColor="#e4e4e7"
          pathWidth={2}
          pathOpacity={0.8}
          gradientStartColor="#18181b"
          gradientStopColor="#10a37f"
          duration={5}
          delay={1.8}
        />
      </div>
    </div>
  );
}

const TechCircle = React.forwardRef(({ children }, ref) => {
  return (
    <div
      ref={ref}
      className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-white border border-zinc-200 p-2.5 shadow-md hover:border-black hover:scale-110 transition-all duration-300 z-20 cursor-pointer"
    >
      {children}
    </div>
  );
});
TechCircle.displayName = "TechCircle";

function OpenAIIcon() {
  return (
    <svg className="size-6 text-[#10a37f]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0813 4.7792-2.7582a.7938.7938 0 0 0 .3927-.6813v-6.7369l2.0228 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4982 4.4957z" />
    </svg>
  );
}
