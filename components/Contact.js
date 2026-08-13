"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, AlertCircle, ChevronDown, Check } from "lucide-react";
import WatermarkHeading from "@/components/ui/WatermarkHeading";
import ModernButton from "@/components/ui/ModernButton";

const SERVICE_OPTIONS = [
  "Full-Stack Development",
  "AI Platform & Telemetry",
  "SaaS Cloud Orchestration",
  "E-Commerce & Headless",
  "Other / General Inquiry",
];

/* ── Custom Animated Dropdown ── */
function CustomSelect({ value, onChange, options }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`w-full px-4 py-3 rounded-xl bg-white border ${
          isOpen ? "border-copy ring-1 ring-copy" : "border-border"
        } text-copy text-sm transition-all flex items-center justify-between cursor-pointer text-left`}
      >
        <span className={value ? "text-copy font-medium" : "text-copy-lighter"}>
          {value || "Select Service *"}
        </span>
        <ChevronDown
          className={`size-4 text-copy-light transition-transform duration-200 shrink-0 ${
            isOpen ? "rotate-180 text-copy" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 4, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute left-0 right-0 top-full z-50 rounded-xl bg-white border border-border shadow-2xl overflow-hidden py-1"
          >
            {options.map((opt) => {
              const isSelected = value === opt;
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => {
                    onChange(opt);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-2.5 text-xs sm:text-sm text-left flex items-center justify-between transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-zinc-100 font-bold text-copy"
                      : "text-copy hover:bg-zinc-50"
                  }`}
                >
                  <span>{opt}</span>
                  {isSelected && <Check className="size-3.5 text-secondary shrink-0" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Spinning circular badge (top-right) ── */
function SpinBadge() {
  const text = "HIRE US • HIRE US • HIRE US • ";

  return (
    <div className="relative w-20 h-20 sm:w-24 sm:h-24">
      {/* Spinning text ring */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <path id="textCircle" d="M 50,50 m -32,0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0" />
          </defs>
          <circle cx="50" cy="50" r="45" fill="var(--secondary)" />
          <text className="text-[8px] font-bold" fill="white" style={{ fontSize: "8px", fontWeight: 700, letterSpacing: "2px" }}>
            <textPath href="#textCircle">{text}</textPath>
          </text>
        </svg>
      </motion.div>
      {/* Center arrow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
          <ArrowRight className="size-3.5 text-secondary -rotate-45" />
        </div>
      </div>
    </div>
  );
}

/* ── Social icon circle ── */
function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href || "#"}
      aria-label={label}
      className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center cursor-pointer shrink-0"
    >
      {children}
    </a>
  );
}

/* ── SVG icons ── */
const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);
const TwitterIcon = () => (
  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
);
const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path fill="var(--secondary)" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="var(--secondary)" strokeWidth="2" /></svg>
);
const LinkedInIcon = () => (
  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
);
const YoutubeIcon = () => (
  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon fill="var(--secondary)" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /></svg>
);
const WhatsAppIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

const fieldClass =
  "w-full px-4 py-3 rounded-xl bg-white border border-border text-copy placeholder-copy-lighter focus:outline-none focus:border-copy text-sm transition-colors";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    service: "Full-Stack Development",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          from_name: "DevRep Labs Website",
          subject: `New Inquiry from ${formData.name} ${formData.lastname} (${formData.service})`,
          ...formData,
        }),
      });
      const result = await res.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", lastname: "", email: "", service: "Full-Stack Development", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Failed to send. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Check your network and try again.");
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex flex-col justify-center bg-transparent px-4 sm:px-6 lg:px-8 py-10 lg:py-12 z-10 scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative w-full">
        {/* Watermark */}
        <WatermarkHeading text="CONTACT" opacity="opacity-[0.09]" />

        <div className="relative z-10">
          {/* Top row: spin badge */}
          <div className="flex items-start justify-end mb-4">
            <SpinBadge />
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-copy leading-[1.1] mb-6">
            Let’s Build Your Next<br />
            <span className="text-secondary italic">High-Impact Website</span>
          </h2>

          {/* Main grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

            {/* Left: Form */}
            <div className="lg:col-span-7 flex flex-col">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-start gap-4 py-8"
                  >
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                      <CheckCircle2 className="size-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-copy">Message Sent!</h3>
                    <p className="text-copy-light text-sm max-w-sm leading-relaxed">
                      Thanks for reaching out. We'll respond within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-2 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-copy text-white text-xs font-bold uppercase tracking-wider hover:bg-zinc-700 transition-colors cursor-pointer"
                    >
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="space-y-3 flex-1 flex flex-col justify-between"
                  >
                    <div className="space-y-3 sm:space-y-4">
                      {/* Row 1: Name + Last Name */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="First Name *"
                          className={fieldClass}
                        />
                        <input
                          type="text"
                          name="lastname"
                          placeholder="Last Name *"
                          value={formData.lastname}
                          onChange={handleChange}
                          className={fieldClass}
                        />
                      </div>

                      {/* Row 2: Email + Custom Animated Dropdown */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email *"
                          className={fieldClass}
                        />
                        <CustomSelect
                          value={formData.service}
                          onChange={(selectedService) =>
                            setFormData((prev) => ({ ...prev, service: selectedService }))
                          }
                          options={SERVICE_OPTIONS}
                        />
                      </div>

                      {/* Row 3: Message */}
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message *"
                        className={fieldClass + " resize-none"}
                      />
                    </div>

                    {status === "error" && (
                      <div className="flex items-center gap-2 text-red-500 text-xs p-3 rounded-xl bg-red-50 border border-red-200">
                        <AlertCircle className="size-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Submit button — ModernButton */}
                    <div className="pt-1">
                      <ModernButton
                        type="submit"
                        disabled={status === "loading"}
                        title={status === "loading" ? "Sending..." : "Send Message"}
                        iconBackground="var(--secondary)"
                        iconColor="#ffffff"
                        hoverIconBackground="#ffffff"
                        hoverIconColor="var(--secondary)"
                        backgroundFill="#000000"
                        textColor="#ffffff"
                        hoverColor="var(--secondary)"
                        hoverTextColor="#ffffff"
                      />
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* Right: Info card in sleek black matching form height */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="rounded-3xl bg-black p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5 text-white border border-zinc-800 shadow-xl">

                {/* Contact */}
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-white">Contact</h4>
                  <p className="text-xs sm:text-sm text-zinc-400">
                    Email : <a href="mailto:abdullahnasar333@gmail.com" className="hover:text-white underline underline-offset-2 transition-colors">abdullahnasar333@gmail.com</a>
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-400">Response within 24 hours</p>
                </div>

                <div className="border-t border-zinc-800" />

                {/* Social */}
                <div className="space-y-2.5">
                  <h4 className="text-base font-bold text-white">Stay Connected</h4>
                  <div className="flex items-center gap-2.5">
                    <SocialIcon label="Facebook"><FacebookIcon /></SocialIcon>
                    <SocialIcon label="Twitter"><TwitterIcon /></SocialIcon>
                    <SocialIcon label="Instagram"><InstagramIcon /></SocialIcon>
                    <SocialIcon label="LinkedIn"><LinkedInIcon /></SocialIcon>
                    <SocialIcon label="YouTube"><YoutubeIcon /></SocialIcon>
                  </div>
                </div>

                <div className="border-t border-zinc-800" />

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-6 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-sm flex items-center justify-center gap-2.5 transition-all cursor-pointer shadow-lg group"
                >
                  <WhatsAppIcon />
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="size-4 text-black group-hover:translate-x-1 transition-transform" />
                </a>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
