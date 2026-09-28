"use client";

import { useState } from "react";
import { IconPlus, IconMinus, IconArrowRight, IconHelpCircle } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import HandDrawnUnderline from "@/components/ui/HandDrawnUnderline";
import { useContactModal } from "@/context/ContactModalContext";

const faqs = [
  {
    question: "What is included in a website project?",
    answer: "Every project includes custom website design, mobile optimization, fast page loading, domain & hosting setup, and step-by-step guidance from start to launch.",
  },
  {
    question: "How do I get started with my new website?",
    answer: "Simply click 'Get in Touch' or open our contact form. We'll discuss your goals and provide a clear proposal, scope, and timeline within 24 hours.",
  },
  {
    question: "Will my website work on all mobile phones and computers?",
    answer: "Yes! All of our websites are custom-built and rigorously tested to look stunning and function seamlessly across smartphones, tablets, laptops, and 4K desktop screens.",
  },
  {
    question: "How do you handle website support and updates after launch?",
    answer: "We offer ongoing maintenance and dedicated support to ensure your website stays fast, secure, and up to date as your business scales.",
  },
  {
    question: "Can you add custom features or online payment tools?",
    answer: "Absolutely. We specialize in custom web applications: booking systems, payment gateways (Stripe/PayPal), portals, CMS integrations, and tailored APIs.",
  },
  {
    question: "How long does it take to build and launch a website?",
    answer: "Most custom websites are completed and launched within 2 to 4 weeks, depending on the scale and custom feature requirements of your project.",
  },
];

export default function FaqSectionV2() {
  const [openIndex, setOpenIndex] = useState(0);
  const { openContactModal } = useContactModal();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      id="faq"
      className="dark-theme relative w-full py-24 sm:py-32 bg-background overflow-hidden scroll-mt-14"
      style={{ fontFamily: "'poppins-r', 'Poppins', sans-serif" }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-primary/10 blur-[140px] rounded-full pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="w-full max-w-4xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-foreground/15 bg-foreground/5 text-foreground text-xs font-poppins-m mb-4 tracking-wide uppercase">
            <IconHelpCircle size={14} className="text-primary" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins-sb text-foreground tracking-tight leading-tight">
            Frequently Asked{" "}
            <span className="relative inline-block text-primary pb-2">
              Questions
              <HandDrawnUnderline />
            </span>
          </h2>
          
          <p className="text-foreground/70 text-sm sm:text-base mt-4 leading-relaxed font-normal">
            Everything you need to know about our workflow, deliverables, and how we collaborate to bring your vision to life.
          </p>
        </div>

        {/* Custom Modern Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? "bg-foreground/[0.06] border-foreground/20 shadow-[0_8px_30px_color-mix(in_srgb,var(--foreground)_5%,transparent)]"
                    : "bg-foreground/[0.02] border-foreground/10 hover:border-foreground/20 hover:bg-foreground/[0.04]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 sm:px-7 py-5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`text-[15px] sm:text-base font-poppins-m transition-colors duration-200 ${
                    isOpen ? "text-foreground font-poppins-sb" : "text-foreground/90"
                  }`}>
                    {faq.question}
                  </span>

                  <span
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-primary text-white rotate-180 shadow-[0_2px_10px_color-mix(in_srgb,var(--primary)_40%,transparent)]"
                        : "bg-foreground/10 text-foreground/80 group-hover:bg-foreground/20"
                    }`}
                  >
                    {isOpen ? (
                      <IconMinus size={16} strokeWidth={2.5} />
                    ) : (
                      <IconPlus size={16} strokeWidth={2.5} />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-7 pb-6 pt-1 text-sm sm:text-[15px] text-foreground/70 leading-relaxed font-normal border-t border-foreground/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA prompt */}
        <div className="text-center mt-12 pt-4">
          <p className="inline-flex flex-wrap items-center justify-center gap-2 text-sm text-foreground/70 font-poppins-m">
            <span>Still have questions or special requirements?</span>
            <button
              type="button"
              onClick={openContactModal}
              className="inline-flex items-center gap-1.5 text-foreground hover:text-primary transition-colors cursor-pointer group underline underline-offset-4 font-poppins-sb"
            >
              <span>Talk to us</span>
              <IconArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </p>
        </div>

      </div>
    </section>
  );
}
