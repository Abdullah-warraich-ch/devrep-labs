"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

/**
 * FaqSections — Accordion FAQ component (centered layout).
 *
 * @param {Array}   faqs          - Array of { question, answer } objects
 * @param {string}  title         - Section title
 * @param {string}  subtitle      - Section subtitle text
 * @param {string}  label         - Small label above the title
 * @param {string}  labelColor    - Tailwind text color class for label
 * @param {string}  className     - Additional classes for the wrapper
 */
export default function FaqSections({
  faqs = [],
  title = "Looking for answer?",
  subtitle = "",
  label = "FAQ's",
  labelColor = "text-indigo-600",
  className = "",
}) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className={cn("max-w-xl mx-auto flex flex-col items-center justify-center px-4 md:px-0", className)}>
      <div className="w-full">
        <p className={cn("text-sm font-medium text-center", labelColor)}>
          {label}
        </p>
        <h2 className="text-3xl font-semibold font-['poppins-sb'] text-center">
          {title}
        </h2>
        <p className="text-sm text-slate-500 mt-2 pb-8 text-center">
          {subtitle}
        </p>

        {faqs.map((faq, index) => (
          <div
            className="border-b border-slate-200 py-4 cursor-pointer"
            key={index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-base font-medium font-['poppins-m']">
                {faq.question}
              </h3>
              <ChevronDown
                size={18}
                strokeWidth={1.5}
                className={cn(
                  "shrink-0 ml-2 transition-transform duration-500 ease-in-out text-[#1D293D]",
                  openIndex === index && "rotate-180"
                )}
              />
            </div>
            <p
              className={cn(
                "text-sm text-slate-500 transition-all duration-500 ease-in-out max-w-md overflow-hidden",
                openIndex === index
                  ? "opacity-100 max-h-[300px] translate-y-0 pt-4"
                  : "opacity-0 max-h-0 -translate-y-2"
              )}
            >
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
