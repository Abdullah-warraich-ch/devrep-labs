"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { TextReveal } from "@/components/ui/text-reveal";
import WatermarkHeading from "@/components/ui/WatermarkHeading";

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
    <section className="w-full py-20 my-12 px-4 sm:px-6 lg:px-8 bg-transparent text-copy relative z-10">
      <div className="max-w-7xl mx-auto space-y-16 relative z-10 pt-24">
        {/* Background Watermark Heading anchored at top-0 left-0 */}
        <WatermarkHeading text="ABOUT US" opacity="opacity-[0.03]" />

        {/* Section Badge Heading & Top Title Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border/40 relative z-10">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-copy tracking-tight leading-[1.08]">
              <TextReveal>A structured process built for real–world impact</TextReveal>
            </h2>
          </div>

          <div className="flex-shrink-0">
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 text-white font-medium text-sm hover:bg-zinc-800 transition-colors shadow-md group cursor-pointer">
              <span>Get A Free Quote</span>
              <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-white group-hover:bg-primary group-hover:text-black transition-colors">
                <ArrowUpRight className="size-4" />
              </div>
            </button>
          </div>
        </div>

        {/* 4 Column Process Steps with Vertical Grid Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative min-h-[480px]">
          {/* Background Vertical Grid Lines */}
          <div className="hidden lg:grid grid-cols-4 absolute inset-0 pointer-events-none -z-10">
            <div className="border-r border-border/40 h-full" />
            <div className="border-r border-border/40 h-full" />
            <div className="border-r border-border/40 h-full" />
            <div className="h-full" />
          </div>

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
