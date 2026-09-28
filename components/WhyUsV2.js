"use client";

import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useContactModal } from "@/context/ContactModalContext";

export default function WhyUsV2() {
  const { openContactModal } = useContactModal();

  const reasons = [
    {
      title: "Pixel-Perfect Execution",
      description:
        "Every design we deliver is meticulously crafted down to the last pixel, ensuring a polished and professional result.",
    },
    {
      title: "Built for Performance",
      description:
        "Lightning-fast load times and optimized code so your site ranks higher and converts better.",
    },
    {
      title: "Transparent Communication",
      description:
        "No jargon, no surprises. You stay in the loop at every stage with clear updates and honest timelines.",
    },
    {
      title: "Ongoing Support & Growth",
      description:
        "We don't disappear after launch. Our team provides continuous support to help your business scale.",
    },
  ];

  // Generate concentric rings
  const rings = Array.from({ length: 6 }, (_, i) => ({
    size: 260 + i * 95,
    delay: i * 0.12,
    opacity: 0.18 - i * 0.02,
  }));

  return (
    <section
      id="about"
      className="dark-theme relative w-full py-20 sm:py-32 bg-background overflow-hidden scroll-mt-14"
      style={{ fontFamily: "'poppins-r', 'Poppins', sans-serif" }}
    >
      <div id="why-us" className="absolute -top-16" />
      
      {/* Background Glows (matches HeroV2 style) */}
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[50%] rounded-full bg-primary/10 blur-[130px] opacity-50 pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[40%] rounded-full bg-primary/5 blur-[120px] opacity-40 pointer-events-none mix-blend-screen"></div>
      
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Side: Content */}
        <div className="flex flex-col justify-center text-left relative z-10">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins-m text-foreground tracking-tight leading-tight mb-4">
            <span className="relative inline-block pb-2">
              Why Us
              {/* Sleek Animated Underline (like HeroV2) */}
              <span className="absolute left-0 bottom-0 h-[3px] bg-foreground/10 rounded-full w-full overflow-hidden">
                <motion.span
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.5,
                    ease: "easeInOut",
                  }}
                  className="absolute top-0 h-full w-full bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
                />
              </span>
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-foreground/60 text-sm sm:text-base leading-relaxed mb-10 font-normal max-w-lg">
            We&apos;re not just another agency. Here&apos;s why ambitious brands trust DevRep Labs to bring their digital vision to life.
          </p>

          {/* Reasons Grid */}
          <div className="space-y-6 mb-10">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className="flex items-start gap-4 group"
              >
                {/* Numbered Badge (Premium Monochromatic) */}
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center text-foreground text-[12px] font-poppins-sb transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-content group-hover:border-primary">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-poppins-sb text-foreground leading-snug mb-1">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-foreground/60 leading-relaxed font-normal">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Action Button (Matches HeroV2) */}
          <div>
            <button
              type="button"
              onClick={openContactModal}
              className="relative overflow-hidden group cursor-pointer border-none rounded-none bg-foreground text-background text-[14px] px-8 py-3.5 shadow-[0_4px_14px_color-mix(in_srgb,var(--foreground)_10%,transparent)] hover:shadow-[0_6px_20px_color-mix(in_srgb,var(--foreground)_20%,transparent)] transition-all duration-300 inline-flex items-center gap-2 font-poppins-m"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Start Your Project</span>
              <IconArrowRight size={16} className="relative z-10 transition-transform group-hover:translate-x-1 group-hover:text-white" />
              <span className="absolute inset-0 h-full w-full bg-primary transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
            </button>
          </div>
        </div>

        {/* Right Side: Mockup with Concentric Rings */}
        <div className="relative w-full flex items-center justify-center min-h-[400px]">
          {/* Concentric Rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {rings.map((ring, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.6, opacity: 0 }}
                whileInView={{ scale: 1, opacity: ring.opacity }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.8,
                  delay: ring.delay,
                  ease: "easeOut",
                }}
                className="absolute rounded-full border-[1px]"
                style={{
                  borderColor: "color-mix(in srgb, var(--primary) 40%, transparent)",
                  width: `${ring.size}px`,
                  height: `${ring.size}px`,
                }}
              />
            ))}

            {/* Pulsing glow ring */}
            <motion.div
              className="absolute rounded-full border"
              style={{ 
                width: "340px", 
                height: "340px",
                borderColor: "color-mix(in srgb, var(--primary) 30%, transparent)"
              }}
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.12, 0.3, 0.12],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Mockup Image */}
          <div className="relative w-full z-10 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-[580px] sm:max-w-[620px] scale-105 sm:scale-110 lg:scale-115 transform-gpu"
            >
              <Image
                src="/images/mockup2.webp"
                alt="DevRep Labs high-performance custom website architecture"
                width={1200}
                height={900}
                className="w-full h-auto object-contain drop-shadow-[0_20px_40px_color-mix(in_srgb,var(--foreground)_15%,transparent)] rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
