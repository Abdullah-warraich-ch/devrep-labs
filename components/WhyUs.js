"use client";

import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import HandDrawnUnderline from "@/components/ui/HandDrawnUnderline";
import { useContactModal } from "@/context/ContactModalContext";

export default function WhyUs() {
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
    size: 220 + i * 80,
    delay: i * 0.12,
    opacity: 0.18 - i * 0.02,
  }));

  return (
    <section
      id="about"
      className="relative w-full py-16 sm:py-24 bg-[#FAF7FC] overflow-hidden scroll-mt-14"
    >
      <div id="why-us" className="absolute -top-16" />
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Left Side: Content */}
        <div className="flex flex-col justify-center text-left">
          {/* Heading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[28px] xl:text-[32px] font-semibold text-[#17131F] leading-snug tracking-tight mb-3">
            <span className="relative inline-block pb-1">
              Why Us
              <HandDrawnUnderline color="#AA076B" />
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-[#6F6878] text-xs sm:text-[13px] md:text-sm leading-relaxed mb-8 font-normal max-w-xl">
            We&apos;re not just another agency. Here&apos;s why ambitious brands trust DevRep Labs to bring their digital vision to life.
          </p>

          {/* Reasons Grid */}
          <div className="space-y-5 mb-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
                className="flex items-start gap-3.5"
              >
                {/* Numbered Badge */}
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-r from-[#AA076B] to-[#61045F] flex items-center justify-center text-white text-[11px] font-semibold shadow-sm">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-sm sm:text-[15px] font-semibold text-[#17131F] leading-snug mb-0.5">
                    {reason.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#6F6878] leading-relaxed font-normal">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Action Button */}
          <div>
            <button
              type="button"
              onClick={openContactModal}
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium font-['poppins-m'] text-white bg-gradient-to-r from-[#AA076B] to-[#61045F] hover:opacity-95 shadow-sm hover:shadow-[0_0_20px_rgba(170,7,107,0.35)] transition-all duration-200 cursor-pointer group w-fit"
            >
              <span>Start Your Project</span>
              <IconArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        {/* Right Side: Mockup2 with Concentric Rings */}
        <div className="relative w-full flex items-center justify-center">
          {/* Concentric Rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {rings.map((ring, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.6, opacity: 0 }}
                whileInView={{ scale: 1, opacity: ring.opacity }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: ring.delay,
                  ease: "easeOut",
                }}
                className="absolute rounded-full border-[1.5px] border-[#AA076B]"
                style={{
                  width: `${ring.size}px`,
                  height: `${ring.size}px`,
                }}
              />
            ))}

            {/* Pulsing glow ring */}
            <motion.div
              className="absolute rounded-full border border-[#AA076B]/20"
              style={{ width: "340px", height: "340px" }}
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.12, 0.22, 0.12],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Mockup Image */}
          <div className="relative w-full z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <Image
                src="/images/mockup2.webp"
                alt="DevRep Labs high-performance custom website architecture and user interface design"
                width={2400}
                height={1800}
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
