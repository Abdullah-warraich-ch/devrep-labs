"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";
import ScrollRevealText from "@/components/ui/ScrollRevealText";
import WatermarkHeading from "@/components/ui/WatermarkHeading";
import ScrollRevealCardGroup from "@/components/ui/ScrollRevealCardGroup";

const faqList = [
  {
    question: "What is included in a website project?",
    answer: "Every project includes custom website design, mobile optimization, fast page loading, domain & hosting setup, and step-by-step guidance.",
  },
  {
    question: "How do I get started with my new website?",
    answer: "Simply click 'Chat With Us' or fill out our contact form. We'll discuss your goals and provide a clear proposal and timeline.",
  },
  {
    question: "Will my website work on all mobile phones and computers?",
    answer: "Yes! All of our websites are custom-built to look great and function seamlessly on smartphones, tablets, laptops, and desktop screens.",
  },
  {
    question: "How do you handle website support and updates after launch?",
    answer: "We offer ongoing maintenance and support to ensure your website stays secure, fast, and up to date as your business grows.",
  },
  {
    question: "Can you add custom features or online payment tools?",
    answer: "Yes! We can add custom contact forms, booking systems, payment gateways, online stores, and any specialized feature your business needs.",
  },
  {
    question: "How long does it take to build and launch a website?",
    answer: "Most custom websites are completed and launched within 2 to 4 weeks, depending on the size and features of your project.",
  },
];

// Helper sub-component for rendering individual FAQ cards cleanly
function FaqCard({ item, realIndex, isOpen, onToggle }) {
  return (
    <div className="rounded-2xl sm:rounded-3xl bg-white text-copy border border-border/80 shadow-sm overflow-hidden w-full relative">
      {/* Simple Corner Vector Line Art */}
      <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="0" r="40" stroke="#262626" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="100" cy="0" r="70" stroke="#262626" strokeWidth="1" />
        </svg>
      </div>

      <button
        onClick={() => onToggle(realIndex)}
        className="w-full flex items-center justify-between p-6 sm:p-7 text-left focus:outline-none cursor-pointer relative z-10"
      >
        <span className="text-base sm:text-lg font-medium text-copy pr-4 tracking-tight">
          {item.question}
        </span>
        <div
          className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center border transition-all duration-200 ${isOpen
              ? "bg-primary text-primary-content border-primary shadow-sm shadow-primary/30"
              : "bg-primary/10 text-copy border-primary/20"
            }`}
        >
          {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="relative z-10"
          >
            <div className="px-6 sm:px-7 pb-7 pt-2 text-sm sm:text-base text-copy-light leading-relaxed font-normal border-t border-border/50">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Split FAQs into two independent columns for masonry layout
  const col1Faqs = faqList.filter((_, i) => i % 2 === 0);
  const col2Faqs = faqList.filter((_, i) => i % 2 === 1);

  return (
    <section id="faq" className="w-full py-16 my-16 px-4 sm:px-6 lg:px-8 bg-transparent bg-white/50 rounded-3xl text-copy relative z-10">
      <div className="max-w-7xl mx-auto space-y-16 relative z-10 pt-24">
        <WatermarkHeading text="FAQ'S" opacity="opacity-[0.09]" />

        {/* Top Header & Bento Cards Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: 2 Bento Cards with Scroll Reveal */}
          <ScrollRevealCardGroup
            stagger={0.15}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {/* Card 1: Dark Contact Card */}
            <div className="rounded-3xl bg-zinc-950 text-white p-7 flex flex-col justify-between h-[320px] sm:h-[340px] shadow-xl relative overflow-hidden border border-zinc-800">
              {/* Vector Orbital Node Network Art */}
              <div className="absolute inset-0 pointer-events-none opacity-20">
                <svg width="100%" height="100%" viewBox="0 0 300 340" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="240" cy="80" r="60" stroke="#d7ff00" strokeWidth="1" strokeDasharray="4 4" />
                  <circle cx="240" cy="80" r="100" stroke="white" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="240" cy="80" r="6" fill="#d7ff00" />
                  <line x1="240" y1="80" x2="160" y2="180" stroke="white" strokeWidth="1" strokeDasharray="2 2" />
                  <circle cx="160" cy="180" r="4" fill="white" />
                </svg>
              </div>

              {/* Top Tag */}
              <div className="flex items-center justify-between relative z-10">
                <span className="text-xs uppercase tracking-wider text-white font-normal bg-transparent px-3.5 py-1 rounded-full border border-white/20">
                  Contact Us
                </span>
              </div>

              {/* Title */}
              <div className="my-auto relative z-10">
                <h3 className="text-3xl sm:text-4xl font-normal text-white leading-tight tracking-tight">
                  Dedicated<br />
                  <span className="font-normal text-primary">Web Team</span>
                </h3>
              </div>

              {/* Overlapping Avatars */}
              <div className="flex items-center -space-x-3 pt-2 relative z-10">
                <img
                  src="/avatars/avatar1.webp"
                  alt="Team member 1"
                  className="w-13 h-13 rounded-full border-2 border-zinc-950 ring-2 ring-primary/30 object-cover shadow-md"
                />
                <img
                  src="/avatars/avatar2.webp"
                  alt="Team member 2"
                  className="w-13 h-13 rounded-full border-2 border-zinc-950 ring-2 ring-primary/30 object-cover shadow-md"
                />
                <img
                  src="/avatars/avatar3.webp"
                  alt="Team member 3"
                  className="w-13 h-13 rounded-full border-2 border-zinc-950 ring-2 ring-primary/30 object-cover shadow-md"
                />
              </div>
            </div>

            {/* Card 2: White Documentation Card */}
            <div className="rounded-3xl bg-white text-copy border border-border p-7 flex flex-col justify-between h-[320px] sm:h-[340px] shadow-sm relative overflow-hidden">
              {/* Stacked Blueprint Vector Line Art */}
              <div className="absolute top-0 right-0 w-44 h-44 pointer-events-none opacity-15">
                <svg width="100%" height="100%" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="60" y="20" width="80" height="100" rx="8" stroke="#262626" strokeWidth="1.5" />
                  <rect x="40" y="40" width="80" height="100" rx="8" stroke="#262626" strokeWidth="1.5" strokeDasharray="4 4" />
                  <line x1="75" y1="45" x2="115" y2="45" stroke="#262626" strokeWidth="1.5" />
                  <line x1="75" y1="65" x2="125" y2="65" stroke="#262626" strokeWidth="1.5" />
                </svg>
              </div>

              <div className="relative z-10">
                <span className="text-xs uppercase tracking-wider text-copy-light font-normal bg-transparent px-3.5 py-1 rounded-full border border-border">
                  Process
                </span>
                <h3 className="text-2xl sm:text-3xl font-normal text-copy leading-tight mt-4 mb-3 tracking-tight">
                  Transparent<br />
                  <span className="font-normal">Communication</span>
                </h3>
                <p className="text-xs sm:text-sm text-copy-light leading-relaxed font-normal">
                  We guide you through every step of building your website with clear progress updates.
                </p>
              </div>

              {/* Slower Smooth Left-Expanding Fill Button */}
              <div className="relative z-10">
                <a
                  href="#contact"
                  className="relative inline-flex items-center justify-center px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider cursor-pointer overflow-hidden rounded-full border-2 border-primary text-primary-content bg-primary group transition-colors duration-700 ease-in-out hover:text-white hover:border-zinc-950"
                >
                  <span className="relative z-10 flex items-center gap-2.5 transition-colors duration-700">
                    Get in Touch <ArrowRight className="size-4" />
                  </span>
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-zinc-950 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out group-hover:scale-[35] z-0 pointer-events-none" />
                </a>
              </div>
            </div>
          </ScrollRevealCardGroup>

          {/* Right: Headline Block with Scroll Reveal */}
          <div className="lg:col-span-6 lg:pl-8 flex flex-col justify-center space-y-4">

            <ScrollRevealText
              preset="Soft Words"
              colorHidden="rgba(0, 0, 0, 0.25)"
              colorRevealed="#000000"
              offsetStart={70}
              offsetEnd={20}
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-poppins text-copy tracking-tight leading-[1.15]"
            >
              Clear Answers to Your Questions
            </ScrollRevealText>

            <ScrollRevealText
              preset="Soft Words"
              trigger="On Load"
              onLoadDuration={1.8}
              colorHidden="rgba(0, 0, 0, 0.35)"
              colorRevealed="rgba(38, 38, 38, 0.9)"
              className="text-copy-light text-base sm:text-lg max-w-lg leading-relaxed font-normal"
            >
              We are here to guide you through building your ideal website. Have questions about timelines, pricing, or custom features? We are always ready to help.
            </ScrollRevealText>
          </div>
        </div>

        {/* Bottom Block: 2 Independent Columns Grid with ScrollRevealCardGroup */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start pt-2">
          {/* Column 1 */}
          <ScrollRevealCardGroup stagger={0.12} className="flex flex-col gap-5">
            {col1Faqs.map((item, idx) => (
              <FaqCard
                key={idx * 2}
                item={item}
                realIndex={idx * 2}
                isOpen={openIndex === idx * 2}
                onToggle={toggleFaq}
              />
            ))}
          </ScrollRevealCardGroup>

          {/* Column 2 */}
          <ScrollRevealCardGroup stagger={0.12} delayChildren={0.12} className="flex flex-col gap-5">
            {col2Faqs.map((item, idx) => (
              <FaqCard
                key={idx * 2 + 1}
                item={item}
                realIndex={idx * 2 + 1}
                isOpen={openIndex === idx * 2 + 1}
                onToggle={toggleFaq}
              />
            ))}
          </ScrollRevealCardGroup>
        </div>
      </div>
    </section>
  );
}
