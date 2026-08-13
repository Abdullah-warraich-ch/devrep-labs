"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Mail, MapPin, Clock, Sparkles } from "lucide-react";
import WatermarkHeading from "@/components/ui/WatermarkHeading";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Full-Stack Development",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const apiKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: apiKey,
          from_name: "DevRep Labs Website",
          subject: `New Inquiry from ${formData.name} (${formData.service})`,
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
        }),
      });

      const result = await res.json();

      if (result.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          service: "Full-Stack Development",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Something went wrong. Please check your network and try again.");
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-black text-white rounded-3xl p-6 sm:p-10 lg:p-14 overflow-hidden border border-zinc-800 shadow-2xl z-10 my-6 flex flex-col justify-center"
    >
      {/* Background Watermark */}
      <WatermarkHeading
        text="CONTACT"
        opacity="opacity-[0.03]"
        color="text-white"
        position="top-6 left-1/2 -translate-x-1/2"
      />

      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#d7ff00]/5 blur-[160px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full relative z-10 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-[#d7ff00] tracking-wide">
            <Sparkles className="size-3.5" />
            <span>LET'S BUILD SOMETHING GREAT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Start Your Project With Us
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Have an idea or need a high-impact digital product? Send us a message and our team will get back to you within 24 hours.
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Info Panel */}
          <div className="lg:col-span-5 bg-zinc-900/60 rounded-2xl p-6 sm:p-8 border border-zinc-800 space-y-8 backdrop-blur-sm">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-white tracking-tight">Contact Details</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Whether you're looking for AI engineering, modern web apps, or cloud architecture, we're ready to partner with you.
              </p>
            </div>

            <div className="space-y-6 pt-2">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-black border border-zinc-800 text-[#d7ff00] shrink-0">
                  <Mail className="size-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-zinc-500 tracking-wider">Direct Email</h4>
                  <a href="mailto:abdullahnasar333@gmail.com" className="text-sm font-semibold text-white hover:text-[#d7ff00] transition-colors mt-0.5 block">
                    abdullahnasar333@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-black border border-zinc-800 text-[#d7ff00] shrink-0">
                  <Clock className="size-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-zinc-500 tracking-wider">Response Time</h4>
                  <p className="text-sm font-semibold text-white mt-0.5">Within 24 Hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-black border border-zinc-800 text-[#d7ff00] shrink-0">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-zinc-500 tracking-wider">Location</h4>
                  <p className="text-sm font-semibold text-white mt-0.5">Global / Remote First</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-zinc-800/80 space-y-1.5">
              <span className="text-xs font-bold text-[#d7ff00] uppercase tracking-wider block">✦ Availability</span>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Now accepting new projects for Q3 & Q4. Book a strategy session today.
              </p>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="lg:col-span-7 bg-zinc-900/60 rounded-2xl p-6 sm:p-8 border border-zinc-800 backdrop-blur-sm relative">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center justify-center text-center space-y-4"
              >
                <div className="p-4 rounded-full bg-[#d7ff00]/10 text-[#d7ff00] border border-[#d7ff00]/20">
                  <CheckCircle2 className="size-12" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                <p className="text-zinc-400 max-w-md text-sm leading-relaxed">
                  Thank you for reaching out. We have received your message and will respond to your email shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-4 px-6 py-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-xs tracking-wider transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider block">
                      Your Name <span className="text-[#d7ff00]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3.5 rounded-xl bg-black border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-[#d7ff00] text-sm transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider block">
                      Your Email <span className="text-[#d7ff00]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-black border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-[#d7ff00] text-sm transition-colors"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider block">
                    Services Needed
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl bg-black border border-zinc-800 text-white focus:outline-none focus:border-[#d7ff00] text-sm transition-colors cursor-pointer"
                  >
                    <option value="Full-Stack Development">Full-Stack Development</option>
                    <option value="AI Platform & Telemetry">AI Platform & Telemetry</option>
                    <option value="SaaS Cloud Orchestration">SaaS Cloud Orchestration</option>
                    <option value="E-Commerce & Headless">E-Commerce & Headless</option>
                    <option value="Other / General Inquiry">Other / General Inquiry</option>
                  </select>
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider block">
                    Project Overview / Message <span className="text-[#d7ff00]">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project requirements, timeline, and goals..."
                    className="w-full px-4 py-3.5 rounded-xl bg-black border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-[#d7ff00] text-sm transition-colors resize-none"
                  />
                </div>

                {/* Error Banner */}
                {status === "error" && (
                  <div className="p-3.5 rounded-xl bg-red-950/50 border border-red-800/80 text-red-300 text-xs flex items-center gap-2">
                    <AlertCircle className="size-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 rounded-xl bg-[#d7ff00] hover:bg-[#c4ea00] text-black font-extrabold text-sm tracking-wide transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {status === "loading" ? (
                    <div className="inline-block size-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
