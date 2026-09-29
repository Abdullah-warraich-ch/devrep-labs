"use client";

import { useState } from "react";
import { IconPlus, IconMinus, IconArrowRight } from "@tabler/icons-react";
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
      className="dark-theme relative w-full py-24 sm:py-32 bg-background overflow-clip scroll-mt-14"
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

      <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left Column: Title & CTA */}
          <div className="w-full lg:w-[40%] shrink-0 relative flex flex-col">
            <div className="lg:sticky lg:top-32">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins-sb text-foreground tracking-tight leading-tight">
                Frequently Asked{" "}
                <span className="relative inline-block text-primary pb-2">
                  Questions
                  <HandDrawnUnderline />
                </span>
              </h2>
            </div>

            <div className="flex flex-col gap-3 mt-12 lg:mt-0 lg:absolute lg:bottom-0 lg:left-0 lg:pb-6">
              <span className="text-sm sm:text-[15px] text-foreground/80 font-poppins-m">
                Still have questions or special requirements?
              </span>
              <button
                type="button"
                onClick={openContactModal}
                className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors cursor-pointer group font-poppins-sb w-fit"
              >
                <span className="underline underline-offset-4 decoration-foreground/30 group-hover:decoration-primary/50 transition-colors">Talk to us</span>
                <IconArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Relaxed FAQs */}
          <div className="w-full lg:w-[60%] flex flex-col pt-2 lg:pt-0">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="border-b border-foreground/10 last:border-b-0"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full py-6 sm:py-7 flex items-start justify-between text-left gap-6 cursor-pointer focus:outline-none group"
                    aria-expanded={isOpen}
                  >
                    <span className={`text-[16px] sm:text-[18px] transition-colors duration-200 leading-snug ${
                      isOpen ? "text-foreground font-poppins-sb" : "text-foreground/80 font-poppins-m group-hover:text-foreground"
                    }`}>
                      {faq.question}
                    </span>

                    <span
                      className={`shrink-0 flex items-center justify-center mt-0.5 transition-transform duration-300 ${
                        isOpen ? "text-primary rotate-180" : "text-foreground/40 group-hover:text-foreground/70"
                      }`}
                    >
                      {isOpen ? (
                        <IconMinus size={22} strokeWidth={2} />
                      ) : (
                        <IconPlus size={22} strokeWidth={2} />
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
                        <div className="pb-8 pr-12 text-sm sm:text-[15px] text-foreground/60 leading-relaxed font-normal">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
