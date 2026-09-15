"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

/**
 * FaqSections — Accordion FAQ component with optional side image.
 *
 * @param {Array}   faqs          - Array of { question, answer } objects
 * @param {string}  title         - Section title (default: "Looking for answer?")
 * @param {string}  subtitle      - Section subtitle text
 * @param {string}  label         - Small label above the title (default: "FAQ's")
 * @param {string}  imageSrc      - Optional image URL for side-by-side layout
 * @param {string}  imageAlt      - Alt text for the image
 * @param {string}  labelColor    - Tailwind text color class for label (default: "text-indigo-600")
 * @param {string}  variant       - "side" (image + FAQ side-by-side) or "center" (centered, no image)
 * @param {string}  className     - Additional classes for the wrapper
 */
export default function FaqSections({
  faqs = [],
  title = "Looking for answer?",
  subtitle = "Ship Beautiful Frontends Without the Overhead — Customizable, Scalable and Developer-Friendly UI Components.",
  label = "FAQ's",
  imageSrc = "",
  imageAlt = "FAQ illustration",
  labelColor = "text-indigo-600",
  variant = "side",
  className = "",
}) {
  const [openIndex, setOpenIndex] = useState(null);

  const faqContent = (
    <div className={cn(variant === "center" && "w-full")}>
      <p className={cn("text-sm font-medium", labelColor, variant === "center" && "text-center")}>
        {label}
      </p>
      <h2
        className={cn(
          "text-3xl font-semibold font-['poppins-sb']",
          variant === "center" && "text-center"
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "text-sm text-slate-500 mt-2 pb-4",
          variant === "center" && "text-center pb-8"
        )}
      >
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
  );

  if (variant === "center") {
    return (
      <div className={cn("max-w-xl mx-auto flex flex-col items-center justify-center px-4 md:px-0", className)}>
        {faqContent}
      </div>
    );
  }

  // Default: side-by-side layout
  return (
    <div
      className={cn(
        "max-w-4xl mx-auto flex flex-col md:flex-row items-start justify-center gap-8 px-4 md:px-0",
        className
      )}
    >
      {imageSrc && (
        <Image
          className="max-w-sm w-full rounded-xl h-auto"
          src={imageSrc}
          alt={imageAlt || "FAQ Section Image"}
          width={400}
          height={300}
        />
      )}
      {faqContent}
    </div>
  );
}
