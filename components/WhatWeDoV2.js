"use client";

import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import HandDrawnUnderline from "@/components/ui/HandDrawnUnderline";
import { useContactModal } from "@/context/ContactModalContext";

export default function WhatWeDoV2() {
  const { openContactModal } = useContactModal();

  const capabilities = [
    { title: "Bespoke Web Design", desc: "Engaging, user-centric interfaces.", icon: "web" },
    { title: "Custom Web Apps", desc: "Scalable frontend & backend software.", icon: "code" },
    { title: "SEO & Conversion", desc: "Fast page speeds and optimized funnels.", icon: "trending_up" },
    { title: "Cloud Infrastructure", desc: "Seamless API integrations.", icon: "cloud" },
  ];

  return (
    <section
      id="services"
      className="dark-theme relative w-full py-20 sm:py-32 bg-[var(--background-even)] overflow-hidden scroll-mt-14"
      style={{ fontFamily: "'poppins-r', 'Poppins', sans-serif" }}
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Side: Mockup Image */}
        <div className="relative w-full flex items-center justify-center order-1 lg:order-1">
          <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full"></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full max-w-lg sm:max-w-xl lg:max-w-2xl scale-105 sm:scale-110 lg:scale-115 transform-gpu"
          >
            <Image
              src="/images/Mockup.webp"
              alt="DevRep Labs showcase mockup"
              width={1600}
              height={1200}
              priority
              className="w-full h-auto object-contain drop-shadow-[0_20px_40px_color-mix(in_srgb,var(--foreground)_15%,transparent)] rounded-xl"
            />
          </motion.div>
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col justify-center text-left order-2 lg:order-2 z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins-m text-foreground tracking-tight leading-tight mb-4">
            <span className="relative inline-block pb-2">
              What We Do
              <HandDrawnUnderline />
            </span>
          </h2>

          <p className="text-foreground/60 text-sm sm:text-base leading-relaxed mb-8 font-normal max-w-lg">
            We partner with ambitious founders and growing brands to design, build, and launch exceptional digital experiences that elevate your online presence and turn visitors into loyal customers.
          </p>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 mb-10">
            {capabilities.map((cap, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                className={`p-6 transition-colors border-foreground/10 ${
                  index < 2 ? "border-b" : ""
                } ${
                  index % 2 === 0 ? "sm:border-r" : ""
                }`}
              >
                <div className="flex items-center mb-6">
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: '48px' }}>{cap.icon}</span>
                </div>
                <h3 className="text-[15px] font-poppins-sb text-foreground mb-1">
                  {cap.title}
                </h3>
                <p className="text-[13px] text-foreground/60 leading-snug">
                  {cap.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div>
            <button
              type="button"
              onClick={openContactModal}
              className="relative overflow-hidden group cursor-pointer border-none rounded-none bg-foreground text-background text-[14px] px-8 py-3.5 shadow-[0_4px_14px_color-mix(in_srgb,var(--foreground)_10%,transparent)] hover:shadow-[0_6px_20px_color-mix(in_srgb,var(--foreground)_20%,transparent)] transition-all duration-300 inline-flex items-center gap-2 font-poppins-m"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Get in Touch</span>
              <IconArrowRight size={16} className="relative z-10 transition-transform group-hover:translate-x-1 group-hover:text-white" />
              <span className="absolute inset-0 h-full w-full bg-primary transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
