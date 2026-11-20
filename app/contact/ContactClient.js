"use client";

import { sendGAEvent } from "@next/third-parties/google";
import React, { useState } from "react";
import Link from "next/link";
import InquirySteps, { InquiryChoices, InquirySuccess } from "@/components/InquirySteps";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stepLabels = ["Service", "Budget", "Your details"];

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",

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

  const budgets = ["Under $100", "$100 - $249", "$250 - $499", "$500 - $999", "$1,000+", "Not sure yet"];

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

      const payload = {
        access_key: accessKey,
        name: formData.name,
        email: formData.email,
        service: formData.service,
        budget: formData.budget,
        message: `Project inquiry for ${formData.service}. Budget: ${formData.budget}.`,
        from_name: "DevRep Labs Contact Page",
        subject: `New Project Inquiry from ${formData.name} (Contact Page) - DevRep Labs`,
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

      if (response.ok && result.success) {
        if (process.env.NEXT_PUBLIC_GA_ID) {
          sendGAEvent("event", "generate_lead", { lead_type: "project_inquiry" });
        }
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          service: "",
          budget: "",

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
      setErrorMessage(
        "Network error. Please check your connection and try again."
      );
    }
  };

  return (
    <div
      className="min-h-screen bg-background text-foreground flex flex-col"
      style={{ fontFamily: "'poppins-r', 'Poppins', sans-serif" }}
    >
      <Navbar />

      <main className="w-full flex-1 px-5 pb-16 sm:px-10 lg:px-[6vw]">
        <div>
          <section className="flex min-h-[calc(100svh-5rem)] flex-col py-8 sm:py-12">
            <nav aria-label="Breadcrumb" className="mb-5 text-sm font-poppins-m">
              <ol className="flex items-center gap-2">
                <li><Link href="/" className="text-foreground/65 hover:underline">Home</Link></li>
                <li aria-current="page" className="flex items-center gap-2">
                  <span aria-hidden="true" className="text-foreground/40">/</span>
                  <h1>Contact Us</h1>
                </li>
              </ol>
            </nav>
            {status === "success" ? (
              <InquirySuccess
                labels={stepLabels}
                title="We’ve received your inquiry!"
                description="We’ll review your project and reply to your email within 24 hours."
                action="Go back to home"
                href="/"
              />
            ) : (
              <InquirySteps
                labels={stepLabels}
                titles={["What can we help you with?", "What budget do you have in mind?", "Where can we reach you?"]}
                onSubmit={handleSubmit}
                busy={status === "submitting"}
                error={errorMessage}
                submitLabel="Send inquiry"
              >
                <InquiryChoices name="service" options={services} value={formData.service} onChange={handleChange} />
                <InquiryChoices name="budget" options={budgets} value={formData.budget} onChange={handleChange} />
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs tracking-wider font-poppins-m text-foreground/80 mb-2"
                      >
                        Your name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-foreground/15 text-foreground placeholder:text-foreground/35 text-sm focus:outline-none focus:border-foreground transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs tracking-wider font-poppins-m text-foreground/80 mb-2"
                      >
                        Email address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-foreground/15 text-foreground placeholder:text-foreground/35 text-sm focus:outline-none focus:border-foreground transition-colors duration-200"
                      />
                    </div>
                  </div>
                  <Link href="/privacy" className="text-sm underline">How we use your information</Link>
                </div>
              </InquirySteps>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

