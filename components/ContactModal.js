"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";
import {
  IconX,
  IconSend,
  IconCheck,
  IconAlertCircle,
  IconLoader2,
  IconChevronDown,
} from "@tabler/icons-react";

export default function ContactModal({ isOpen, onClose, config = {} }) {
  const lenis = useLenis();
  const isDemo = config?.mode === "demo";
  const isOfferClaimed = Boolean(config?.offerClaimed);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Web Development",
    budget: "$2k - $5k",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState("");

  const services = [
    "Web Development",
    "UI/UX Design",
    "AI Solutions",
    "E-Commerce",
    "Custom Software",
    "Other",
  ];

  const budgets = ["< $2k", "$2k - $5k", "$5k - $10k", "$10k+"];

  // Complete Scroll Lock (HTML, Body, & Lenis) + Escape key listener
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Save previous scroll states
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    // Apply strict scroll locks
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    // Pause Lenis smooth scrolling
    if (lenis) {
      lenis.stop();
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;

      // Resume Lenis smooth scrolling
      if (lenis) {
        lenis.start();
      }
    };
  }, [isOpen, onClose, lenis]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const accessKey =
        process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
        "8d23d4b1-cdb1-49b8-a7b9-2fc9a473e18d";

      const emailSubject = isDemo
        ? (isOfferClaimed
            ? `[Free Demo Offer] Demo Request from ${formData.name} - DevRep Labs`
            : `Free Demo Request from ${formData.name} - DevRep Labs`)
        : `New Project Inquiry from ${formData.name} - DevRep Labs`;

      const payload = {
        access_key: accessKey,
        name: formData.name,
        email: formData.email,
        service: formData.service,
        budget: formData.budget,
        message: isOfferClaimed
          ? `[Special Free Demo Offer Claimed]\n${formData.message}`
          : formData.message,
        from_name: isDemo
          ? "DevRep Labs Demo Booking"
          : "DevRep Labs Contact Form",
        subject: emailSubject,
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          service: "Web Development",
          budget: "$2k - $5k",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(
          result.message || "Failed to send message. Please try again."
        );
      }
    } catch (err) {
      console.error("Web3Forms submission error:", err);
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  const resetAndClose = () => {
    onClose();
    setTimeout(() => {
      setStatus("idle");
      setErrorMessage("");
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto"
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
        >
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={resetAndClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Container — Light Theme (#FFFFFF with elegant shadows) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ type: "spring", damping: 26, stiffness: 320 }}
            className="relative w-full max-w-xl my-auto max-h-[92vh] overflow-y-auto rounded-2xl sm:rounded-3xl bg-white border border-[#EAE5F0] shadow-[0_25px_70px_rgba(23,19,31,0.22)] text-[#17131F] z-10 font-poppins"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
          >
            {/* Top Glowing Ambient Accent Bar */}
            <div className="sticky top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#AA076B] to-[#61045F] z-20" />
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-36 bg-[#AA076B]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Modal Header */}
            <div className="relative px-6 sm:px-8 pt-6 sm:pt-7 pb-3 flex items-center justify-between">
              <div>
                {isOfferClaimed && (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FAF7FC] border border-[#AA076B]/30 text-[11px] font-semibold text-[#AA076B] mb-1.5 shadow-xs">
                    <span>🏷️ Free Demo Offer Applied</span>
                  </div>
                )}
                <h2
                  id="contact-modal-title"
                  className="text-xl sm:text-2xl font-bold tracking-tight text-[#17131F] leading-tight font-['poppins-sb']"
                >
                  {isDemo ? (
                    <>
                      Book your <span className="text-[#AA076B]">free demo</span>.
                    </>
                  ) : (
                    <>
                      Let&apos;s build something{" "}
                      <span className="text-[#AA076B]">exceptional</span>.
                    </>
                  )}
                </h2>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={resetAndClose}
                aria-label="Close dialog"
                className="p-2 rounded-full text-[#6F6878] hover:text-[#17131F] bg-[#FAF8FF] hover:bg-[#FAF7FC] border border-[#EAE5F0] transition-all duration-200 cursor-pointer group shrink-0 ml-3"
              >
                <IconX className="size-4.5 transition-transform duration-200 group-hover:rotate-90" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="relative px-6 sm:px-8 pb-6 sm:pb-8 pt-2">
              {status === "success" ? (
                /* Success State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center flex flex-col items-center justify-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#00F5D4]/15 border-2 border-[#00F5D4] flex items-center justify-center text-[#059669] shadow-[0_0_25px_rgba(0,245,212,0.3)]">
                    <IconCheck className="size-8 stroke-[2.5]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#17131F] font-['poppins-sb']">
                    {isDemo
                      ? "Demo Request Received!"
                      : "Message Sent Successfully!"}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6F6878] max-w-sm leading-relaxed">
                    {isDemo
                      ? "Thank you for requesting a demo with DevRep Labs. Our team will contact you shortly to schedule your preferred time."
                      : "Thank you for reaching out to DevRep Labs. Our team will review your inquiry and contact you shortly."}
                  </p>
                  <button
                    type="button"
                    onClick={resetAndClose}
                    className="mt-4 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-primary-gradient hover:opacity-95 shadow-md shadow-[#AA076B]/25 transition-all cursor-pointer"
                  >
                    Done
                  </button>
                </motion.div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot Spam Protection */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-medium text-[#2E2838] mb-1.5">
                        Your Name <span className="text-[#AA076B]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full h-10 px-3.5 rounded-xl bg-[#FAF9FD] border border-[#E4DFEB] text-xs sm:text-[13px] text-[#17131F] placeholder-[#9E97A6] focus:border-[#AA076B] focus:bg-white focus:ring-2 focus:ring-[#AA076B]/20 transition-all outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#2E2838] mb-1.5">
                        Email Address <span className="text-[#AA076B]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full h-10 px-3.5 rounded-xl bg-[#FAF9FD] border border-[#E4DFEB] text-xs sm:text-[13px] text-[#17131F] placeholder-[#9E97A6] focus:border-[#AA076B] focus:bg-white focus:ring-2 focus:ring-[#AA076B]/20 transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Project Type / Service & Estimated Budget (Side-by-Side Dropdowns) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-medium text-[#2E2838] mb-1.5">
                        Project Type / Service
                      </label>
                      <div className="relative">
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full h-10 pl-3.5 pr-9 rounded-xl bg-[#FAF9FD] border border-[#E4DFEB] text-xs sm:text-[13px] text-[#17131F] focus:border-[#AA076B] focus:bg-white focus:ring-2 focus:ring-[#AA076B]/20 transition-all outline-none appearance-none cursor-pointer"
                        >
                          {services.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                        <IconChevronDown className="size-4 text-[#6F6878] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none stroke-[1.8]" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#2E2838] mb-1.5">
                        Estimated Budget
                      </label>
                      <div className="relative">
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full h-10 pl-3.5 pr-9 rounded-xl bg-[#FAF9FD] border border-[#E4DFEB] text-xs sm:text-[13px] text-[#17131F] focus:border-[#AA076B] focus:bg-white focus:ring-2 focus:ring-[#AA076B]/20 transition-all outline-none appearance-none cursor-pointer"
                        >
                          {budgets.map((b) => (
                            <option key={b} value={b}>
                              {b}
                            </option>
                          ))}
                        </select>
                        <IconChevronDown className="size-4 text-[#6F6878] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none stroke-[1.8]" />
                      </div>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-medium text-[#2E2838] mb-1.5">
                      {isDemo ? "Demo goals or questions" : "Project details"}{" "}
                      <span className="text-[#AA076B]">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={
                        isDemo
                          ? "Tell us about your brand, current website, or what you'd like to see in the demo walkthrough..."
                          : "Tell us about what you want to build, timelines, or any specific goals..."
                      }
                      className="w-full p-3.5 rounded-xl bg-[#FAF9FD] border border-[#E4DFEB] text-xs sm:text-[13px] text-[#17131F] placeholder-[#9E97A6] focus:border-[#AA076B] focus:bg-white focus:ring-2 focus:ring-[#AA076B]/20 transition-all outline-none resize-none"
                    />
                  </div>

                  {/* Error Notification */}
                  {status === "error" && (
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs">
                      <IconAlertCircle className="size-4 shrink-0 text-red-500" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full h-11 rounded-full text-xs sm:text-sm font-semibold text-white bg-primary-gradient hover:opacity-95 shadow-lg hover:shadow-[0_10px_30px_rgba(131,100,232,0.35)] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                    >
                      {status === "submitting" ? (
                        <>
                          <IconLoader2 className="size-4 animate-spin" />
                          <span>
                            {isDemo ? "Booking Demo..." : "Sending Inquiry..."}
                          </span>
                        </>
                      ) : (
                        <>
                          <span>
                            {isDemo ? "Book My Free Demo" : "Submit Inquiry"}
                          </span>
                          <IconSend className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
