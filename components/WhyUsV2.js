"use client";

import Image from "next/image";
import { useContactModal } from "@/context/ContactModalContext";
import { motion } from "framer-motion";
import { ScrollRevealText } from "@/components/ui/ScrollRevealText";

export default function WhyUsV2() {
  const { openContactModal } = useContactModal();

  return (
    <section
      id="about"
      className="dark-theme relative w-full py-20 sm:py-32 bg-background overflow-hidden scroll-mt-14"
      style={{ fontFamily: "'poppins-r', 'Poppins', sans-serif" }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-foreground/5 rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 border border-foreground/10 shadow-2xl">
          
          {/* Left Side: Content */}
          <div className="flex-1 text-left relative z-10 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm sm:text-base font-poppins-m text-foreground mb-3 flex items-center gap-2">
                Why DevRep Labs
              </p>
              
              <ScrollRevealText
                as="h2"
                text="Build Software That Drives Results"
                className="text-3xl sm:text-4xl font-poppins-sb text-foreground tracking-tight leading-[1.15] mb-5"
                duration={1.2}
              />

              <ScrollRevealText
                as="p"
                text="We build fast, secure, and easy-to-use web and mobile apps that help your business grow."
                className="text-foreground/70 text-base sm:text-lg leading-relaxed mb-8 max-w-md"
                duration={1.2}
                delay={0.2}
              />

              <button
                type="button"
                onClick={openContactModal}
                className="bg-foreground text-background rounded-full px-8 py-4 font-poppins-m text-[15px] hover:bg-foreground/90 transition-colors duration-300 shadow-lg"
              >
                Get a Free Consultation
              </button>

              <div className="mt-10 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#3B82F6] flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[15px] text-foreground/90 font-poppins-m">Expert team of developers and designers</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#3B82F6] flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[15px] text-foreground/90 font-poppins-m">Commitment to quality and timely delivery</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[400px] lg:max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-foreground/10">
              <Image
                src="/images/Why-us-section.png"
                alt="Why choose DevRep Labs"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
