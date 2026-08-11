"use client";

import RotatingText from "@/components/RotatingText";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export default function Hero() {
  return (
    <div className="relative flex-1 w-full flex flex-col justify-between overflow-hidden">
      {/* Vertically Centered Main Content Container */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center items-center my-auto relative z-10 py-6">
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center justify-between w-full">
          <div className="flex-1 lg:max-w-2xl xl:max-w-3xl">
            <h1 className="text-white -tracking-xl text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15]">
              We build high-impact<br className="hidden sm:block" />
              {" "}software for{" "}
              <RotatingText
                texts={["Start-ups", "Scale-ups", "Enterprises", "Visionaries"]}
                mainClassName="text-primary font-bold inline-flex overflow-hidden align-baseline"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2400}
              />
            </h1>
          </div>

          <div className="lg:max-w-sm xl:max-w-md flex flex-col justify-center shrink-0">
            <h2 className="text-sm font-medium text-neutral-300 sm:text-base lg:text-lg leading-relaxed">
              Full-stack web applications, AI platforms & scalable cloud solutions tailored for ambitious tech brands.
            </h2>

            <div className="mt-6 md:mt-8">
              <InteractiveHoverButton className="text-sm px-6 py-3">
                Chat with Us
              </InteractiveHoverButton>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Watermark Text - Devrep Labs Anchored Directly at the Bottom Edge */}
      <div className="w-full flex justify-center items-end select-none pointer-events-none z-0 relative pb-1 sm:pb-2">
        <p className="bg-gradient-to-r from-white/20 to-white/0 bg-clip-text text-transparent text-center text-[54px] font-bold sm:text-[4.5rem] md:text-[110px] lg:text-[160px] tracking-tight whitespace-nowrap leading-none">
          Devrep Labs
        </p>
      </div>
    </div>
  );
}
