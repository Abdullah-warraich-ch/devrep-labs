"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ScrollRevealText from "@/components/ui/ScrollRevealText";
import ScrollRevealCardGroup from "@/components/ui/ScrollRevealCardGroup";

const steps = [
  {
    number: "01",
    title: "Discover & Diagnose",
    desc: "We analyze your market, audience, data, and existing performance to uncover real growth opportunities.",
    image: "/process/step1.png",
    offset: "lg:mt-16",
  },
  {
    number: "02",
    title: "Design & Architect",
    desc: "We design intelligent systems and scalable architectures that align technology with your long-term vision.",
    image: "/process/step2.png",
    offset: "lg:mt-32",
  },
  {
    number: "03",
    title: "Build & Integrate",
    desc: "Our team develops, integrates, and tests solutions across platforms, data pipelines, and infrastructures.",
    image: "/process/step3.png",
    offset: "lg:mt-48",
  },
  {
    number: "04",
    title: "Launch & Optimize",
    desc: "After launch, we monitor performance, iterate continuously, and optimize systems as your business evolves.",
    image: "/process/step4.png",
    offset: "lg:mt-64",
  },
];

export default function AboutUs() {
  return (
    <section className="w-full py-10 sm:py-14 my-4 sm:my-6 px-4 sm:px-6 lg:px-8 bg-transparent text-copy relative z-10">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 relative z-10 pt-0">
        {/* Top 2-Column Section: Left Beautified Heading + Right Text Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
          {/* Left Column: Small About Heading */}
          <div className="lg:col-span-4">
            <h2 className="text-base sm:text-lg font-medium text-black/80 tracking-tight">
              About
            </h2>
          </div>

          {/* Right Column: Multi-Line Word-by-Word Scroll Text Reveal */}
          <div className="lg:col-span-8">
            <ScrollRevealText
              preset="Soft Words"
              colorHidden="rgba(0, 0, 0, 0.50)"
              colorRevealed="#000000"
              offsetStart={70}
              offsetEnd={20}
              className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-normal text-black tracking-tight leading-[1.25] text-justify"
            >
              At DevRep Labs, we believe software development isn't just about writing code—it's about building impact. We're a full-service software & digital product agency built to help brands grow with purpose and data-driven precision. From crafting compelling user experiences to executing scalable architectures, we blend strategy to turn vision into action.
            </ScrollRevealText>
          </div>
        </div>

        {/* 4 Column Process Steps Section with Absolute Positioned CTA Button */}
        <div className="relative">
          {/* Absolute Positioned Button Parallel to Discover & Diagnose at Far Right */}
          <div className="absolute top-0 lg:top-16 right-0 z-30">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-zinc-900 text-white font-medium text-xs sm:text-sm hover:bg-zinc-800 transition-colors shadow-md group cursor-pointer"
            >
              <span>Get A Free Quote</span>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-zinc-800 flex items-center justify-center text-white group-hover:bg-primary group-hover:text-black transition-colors">
                <ArrowUpRight className="size-3.5 sm:size-4" />
              </div>
            </a>
          </div>

          {/* Grid Container for Process Steps using ScrollRevealCardGroup */}
          <ScrollRevealCardGroup
            stagger={0.16}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative min-h-[480px]"
          >
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`flex flex-col sm:flex-row lg:flex-row gap-5 items-start ${step.offset}`}
              >
                {/* Vertical Capsule Pill Image */}
                <div className="relative flex-shrink-0 w-24 h-56 rounded-[50px] overflow-hidden shadow-xl border border-black/10 group">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />

                  {/* White Step Number Circle Badge */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-copy font-semibold text-sm flex items-center justify-center shadow-lg z-10 border border-border/30">
                    {step.number}
                  </div>
                </div>

                {/* Step Content (Standard Static Text) */}
                <div className="space-y-2 pt-2 max-w-xs">
                  <h3 className="text-xl sm:text-2xl font-bold text-copy tracking-tight leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-copy-light leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </ScrollRevealCardGroup>
        </div>
      </div>
    </section>
  );
}
