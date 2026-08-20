"use client";

import { motion } from "framer-motion";
import RotatingText from "@/components/RotatingText";
import LiquidMorphButton from "@/components/ui/LiquidMorphButton";
import ModernButton from "@/components/ui/ModernButton";
import CircleExpandGrid from "@/components/ui/CircleExpandGrid";
import ParticleText from "@/components/ui/ParticleText";

export default function Hero() {
  return (
    <div className="relative flex-1 w-full flex flex-col justify-center items-center overflow-hidden bg-black rounded-b-2xl sm:rounded-b-3xl">
      {/* Dense Primary Color Glow from Bottom Left Corner (Soft/Low when cards are hidden below 1150px) */}
      <div className="absolute -bottom-16 -left-16 w-[220px] h-[220px] min-[1150px]:w-[450px] min-[1150px]:h-[450px] bg-[#d7ff00]/15 min-[1150px]:bg-[#d7ff00]/55 blur-[75px] rounded-full pointer-events-none z-0" />
      <div className="absolute -bottom-28 -left-28 w-[320px] h-[320px] min-[1150px]:w-[750px] min-[1150px]:h-[750px] bg-[#d7ff00]/10 min-[1150px]:bg-[#d7ff00]/30 blur-[130px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[280px] min-[1150px]:w-[700px] min-[1150px]:h-[550px] bg-[radial-gradient(ellipse_at_bottom_left,_rgba(215,255,0,0.15)_0%,_rgba(215,255,0,0.03)_40%,_transparent_75%)] min-[1150px]:bg-[radial-gradient(ellipse_at_bottom_left,_rgba(215,255,0,0.45)_0%,_rgba(215,255,0,0.15)_40%,_transparent_75%)] pointer-events-none z-0" />

      {/* Subtle Dimmed Glow from Bottom Right Corner */}
      <div className="absolute -bottom-24 -right-24 w-[280px] h-[280px] min-[1150px]:w-[500px] min-[1150px]:h-[500px] bg-[#d7ff00]/10 min-[1150px]:bg-[#d7ff00]/15 blur-[140px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[220px] min-[1150px]:w-[500px] min-[1150px]:h-[380px] bg-[radial-gradient(ellipse_at_bottom_right,_rgba(215,255,0,0.08)_0%,_transparent_70%)] min-[1150px]:bg-[radial-gradient(ellipse_at_bottom_right,_rgba(215,255,0,0.12)_0%,_transparent_70%)] pointer-events-none z-0" />

      {/* Soft Dim White Light at Bottom Center */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[400px] h-[250px] min-[1150px]:w-[700px] min-[1150px]:h-[400px] bg-white/5 min-[1150px]:bg-white/10 blur-[130px] rounded-full pointer-events-none z-0" />

      {/* Static Tech Stack SVGL Logos (Next.js, Framer Motion, MERN) - Placed before and after content, randomly rotated, no animation, no hover */}
      {/* 1. Next.js Logo (Top Left - Before Content) */}
      <div className="absolute top-[8%] left-[2%] sm:left-[6%] rotate-[-15deg] opacity-65 sm:opacity-80 pointer-events-none select-none z-0">
        <svg className="w-9 h-9 sm:w-13 sm:h-13 md:w-15 md:h-15" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="nextjs_mask" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
            <circle cx="90" cy="90" r="90" fill="black"/>
          </mask>
          <g mask="url(#nextjs_mask)">
            <circle cx="90" cy="90" r="90" fill="#000000" stroke="#333333" strokeWidth="6"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M149.508 157.52L69.142 54H54V125.97H66.8136V69.865L137.663 161.42C141.879 160.327 145.852 159.011 149.508 157.52Z" fill="white"/>
            <rect x="115" y="54" width="12.8" height="71.97" fill="white"/>
          </g>
        </svg>
      </div>

      {/* 2. React Logo (Top Right - Before Content) */}
      <div className="absolute top-[10%] right-[3%] sm:right-[7%] rotate-[22deg] opacity-65 sm:opacity-80 pointer-events-none select-none z-0">
        <svg className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16" viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      </div>

      {/* 3. Tailwind CSS Logo (Mid-Left - Beside Headline) */}
      <div className="absolute top-[30%] left-[2%] sm:left-[5%] rotate-[18deg] opacity-65 sm:opacity-80 pointer-events-none select-none z-0">
        <svg className="w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 text-cyan-400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
        </svg>
      </div>

      {/* 4. TypeScript Logo (Mid-Right - Beside Headline) */}
      <div className="absolute top-[34%] right-[2%] sm:right-[6%] rotate-[-25deg] opacity-65 sm:opacity-80 pointer-events-none select-none z-0">
        <svg className="w-8 h-8 sm:w-11 sm:h-11 md:w-13 md:h-13" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#3178C6"/>
          <path fill="#FFF" d="M13.7 17.5c.6.4 1.4.6 2.3.6 1.4 0 2.2-.7 2.2-1.7 0-1-.6-1.5-2.2-2.1-1.9-.7-3.1-1.6-3.1-3.4 0-2 1.6-3.4 4.1-3.4 1.2 0 2.1.3 2.7.6l-.6 1.6c-.5-.3-1.2-.5-2.1-.5-1.4 0-2.1.6-2.1 1.5 0 .9.6 1.3 2.2 1.9 2.1.8 3.1 1.8 3.1 3.6 0 2.1-1.6 3.6-4.4 3.6-1.3 0-2.5-.3-3.2-.8l.5-1.5zM11.6 9.1H9v8.9H7.1V9.1H4.5V7.5h7.1v1.6z"/>
        </svg>
      </div>

      {/* 5. Framer Motion Logo (Lower Mid-Left - After Content / Beside Vector) */}
      <div className="absolute top-[62%] left-[2%] sm:left-[6%] rotate-[-28deg] opacity-65 sm:opacity-80 pointer-events-none select-none z-0">
        <svg className="w-8 h-8 sm:w-11 sm:h-11 md:w-13 md:h-13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill="#0055FF"/>
        </svg>
      </div>

      {/* 6. MongoDB Logo (Lower Mid-Right - After Content / Beside Vector) */}
      <div className="absolute top-[65%] right-[2%] sm:right-[6%] rotate-[25deg] opacity-65 sm:opacity-80 pointer-events-none select-none z-0">
        <svg className="w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C12 2 4.5 8.5 4.5 14C4.5 18.1 7.9 21.5 12 22C16.1 21.5 19.5 18.1 19.5 14C19.5 8.5 12 2 12 2Z" fill="#13AA52"/>
          <path d="M12 4.5V20.5C12.1 20.5 12.2 20.5 12.3 20.5C14.8 20 17 17.5 17 14C17 9.5 12 4.5 12 4.5Z" fill="#47A248"/>
        </svg>
      </div>

      {/* 7. Node.js Logo (Bottom Left - After Content / Below CTA) */}
      <div className="absolute bottom-[6%] left-[6%] sm:left-[12%] rotate-[18deg] opacity-60 sm:opacity-75 pointer-events-none select-none z-0 hidden sm:block">
        <svg className="w-10 h-10 sm:w-13 sm:h-13" viewBox="0 0 256 289" xmlns="http://www.w3.org/2000/svg">
          <path fill="#5FA04E" d="M128 0L0 73.9v141.2L128 289l128-73.9V73.9L128 0zm0 30.6l98.8 57.1v114.2L128 258.4 29.2 201.9V87.7L128 30.6z"/>
          <path fill="#5FA04E" d="M128 70.8L59.6 110.3v79L128 228.8l68.4-39.5v-79L128 70.8z"/>
        </svg>
      </div>

      {/* 8. Express.js Logo (Bottom Right - After Content / Below CTA) */}
      <div className="absolute bottom-[8%] right-[6%] sm:right-[13%] rotate-[-20deg] opacity-60 sm:opacity-75 pointer-events-none select-none z-0 hidden sm:block">
        <div className="w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl border border-white/20 bg-white/5 flex items-center justify-center backdrop-blur-xs">
          <span className="text-white font-extrabold text-xs sm:text-sm md:text-base tracking-tighter">ex</span>
        </div>
      </div>

      {/* Vertically & Horizontally Centered Content Container */}
      <div className="w-full max-w-full px-4 sm:px-6 md:px-8 mx-auto flex-1 flex flex-col justify-center items-center text-center relative z-10 py-10 sm:py-14 min-[1150px]:pt-20 min-[1150px]:pb-4 space-y-4 sm:space-y-6">
        {/* Animated Computer Vector (Visible only on screens < 1150px where cards are hidden) */}
        <div className="min-[1150px]:hidden flex items-center justify-center -mb-4 sm:-mb-6 w-full px-2 overflow-visible">
          <img
            src="/Programming Computer.svg"
            alt="Programming Computer Illustration"
            className="w-full max-w-[950px] h-auto scale-105 sm:scale-110 drop-shadow-[0_30px_70px_rgba(215,255,0,0.35)] pointer-events-none"
          />
        </div>

        {/* 1. Main Headline */}
        <div className="space-y-2 max-w-4xl">
          <h1 className="text-white tracking-tight text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.18]">
            We design & build{" "}
            <span className="relative inline-block text-secondary font-extrabold pb-2">
              websites
              <svg
                className="absolute left-0 -bottom-1 w-full h-3 sm:h-4 overflow-visible pointer-events-none"
                viewBox="0 0 200 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M 5 12 Q 50 2, 100 10 T 195 8"
                  stroke="var(--primary, #d7ff00)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    duration: 1.2,
                    delay: 0.5,
                    ease: "easeInOut",
                  }}
                />
              </svg>
            </span>
          </h1>

          <div className="inline-flex items-baseline justify-center gap-2 sm:gap-3 text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            <span className="text-white font-extrabold leading-none">for</span>
            <span className="inline-flex items-baseline text-primary font-extrabold leading-none w-[150px] sm:w-[240px] md:w-[300px] text-left">
              <RotatingText
                texts={["Brands", "Startups", "Scaleups", "Visionaries"]}
                mainClassName="text-primary font-extrabold inline-flex overflow-hidden justify-start text-left"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2400}
                layout={false}
              />
            </span>
          </div>
        </div>

        {/* 2. Subheading */}
        <h2 className="text-sm sm:text-base md:text-lg text-center font-normal text-neutral-300 max-w-2xl leading-relaxed">
          Custom web development, interactive digital platforms <br /> & high-performance UI/UX tailored for ambitious brands.
        </h2>

        {/* 3. CTA Buttons Row (Matching Height & Scale on All Screens) */}
        <div className="pt-2 flex flex-row items-center justify-center gap-2 sm:gap-3.5 flex-nowrap max-w-full">
          <LiquidMorphButton
            label="Chat With Us"
            link="#contact"
            padding={null}
            className="h-[38px] sm:h-[50px] md:h-[60px] px-3.5 sm:px-6 md:px-8 text-xs sm:text-sm md:text-base font-extrabold shrink-0"
          />
          <ModernButton
            title="Request a Free Demo"
            href="#contact"
            className="h-[38px] sm:h-[50px] md:h-[60px] shrink-0"
          />
        </div>

        {/* 4. ParticleText Component from React Bits (Visible ONLY on small screens < 1150px below hero content) */}
        <div className="w-full max-w-xl mx-auto min-[1150px]:hidden pt-4 pb-2 z-10 px-4 h-[180px] sm:h-[220px]">
          <ParticleText
            text="DevRep Labs"
            particleSize={2}
            density={3.5}
            color="#ffffff"
            highlightColor="#d7ff00"
            scatter={160}
            gatherDuration={1500}
            stagger={380}
            pointerRepel={40}
            repelRadius={120}
            idleDrift={0.6}
            trigger="mount"
            fontSize="clamp(2.5rem, 8vw, 4.5rem)"
            fontWeight={800}
            fontFamily="inherit"
            glow
          />
        </div>
      </div>

      {/* 5. Framer CircleExpandCards Grid (Visible only on screens 1150px and above) */}
      <div className="pb-6 pt-2 w-full z-10 hidden min-[1150px]:flex items-center justify-center">
        <CircleExpandGrid />
      </div>
    </div>
  );
}
