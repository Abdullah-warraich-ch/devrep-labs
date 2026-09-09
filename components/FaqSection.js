"use client";

import FaqSections from "@/components/ui/faq-sections";
import HandDrawnUnderline from "@/components/ui/HandDrawnUnderline";

const faqs = [
  {
    question: "What is included in a website project?",
    answer:
      "Every project includes custom website design, mobile optimization, fast page loading, domain & hosting setup, and step-by-step guidance.",
  },
  {
    question: "How do I get started with my new website?",
    answer:
      "Simply click 'Chat With Us' or fill out our contact form. We'll discuss your goals and provide a clear proposal and timeline.",
  },
  {
    question: "Will my website work on all mobile phones and computers?",
    answer:
      "Yes! All of our websites are custom-built to look great and function seamlessly on smartphones, tablets, laptops, and desktop screens.",
  },
  {
    question: "How do you handle website support and updates after launch?",
    answer:
      "We offer ongoing maintenance and support to ensure your website stays secure, fast, and up to date as your business grows.",
  },
  {
    question: "Can you add custom features or online payment tools?",
    answer:
      "Yes! We can add custom contact forms, booking systems, payment gateways, online stores, and any specialized feature your business needs.",
  },
  {
    question: "How long does it take to build and launch a website?",
    answer:
      "Most custom websites are completed and launched within 2 to 4 weeks, depending on the size and features of your project.",
  },
];

export default function FaqSection() {
  return (
    <section
      id="faq"
      className="relative w-full py-16 sm:py-24 bg-[#F8F5FF] overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-14">
        <FaqSections
          faqs={faqs}
          title="Frequently Asked Questions"
          subtitle="Clear answers to common questions about our process, timelines, and what it's like working with DevRep Labs."
          label=""
          labelColor="text-[#8364E8]"
          variant="center"
        />

        <p className="text-center text-sm text-[#6F6878] mt-10">
          Still have questions?{" "}
          <a
            href="#contact"
            className="text-[#8364E8] font-medium hover:underline transition-colors"
          >
            Talk to us
          </a>
        </p>
      </div>
    </section>
  );
}
