"use client";

import Link from "next/link";
import { sendGAEvent } from "@next/third-parties/google";
import React, { useState } from "react";
import InquirySteps, { InquiryChoices, InquirySuccess } from "@/components/InquirySteps";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stepLabels = ["Project", "Meeting time", "Your details"];

export default function BookDemoClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",

    projectType: "",
    preferredTime: "",

  });

  const [status, setStatus] = useState("idle"); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState("");

  const projectTypes = [
    "New Website",
    "Web Application",
    "AI Automation",
    "E-Commerce",
    "Site Redesign",
  ];

  const timeSlots = [
    "Morning (9am - 12pm)",
    "Afternoon (12pm - 4pm)",
    "Evening (4pm - 8pm)",
    "Flexible / Anytime",
  ];

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
        project_type: formData.projectType,
        preferred_time: formData.preferredTime,
        message: `Demo request for ${formData.projectType}. Preferred time: ${formData.preferredTime}.`,
        from_name: "DevRep Labs Demo Booking",
        subject: `[Free Demo Request] from ${formData.name} - DevRep Labs`,
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
          sendGAEvent("event", "generate_lead", { lead_type: "demo_request" });
        }
        setStatus("success");
        setFormData({
          name: "",
          email: "",

          projectType: "",
          preferredTime: "",

        });
      } else {
        setStatus("error");
        setErrorMessage(
          result.message || "Failed to schedule demo. Please try again."
        );
      }
    } catch (err) {
      console.error("Web3Forms demo submission error:", err);
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
          <section className="mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-3xl flex-col py-8 sm:py-12">
            <nav aria-label="Breadcrumb" className="mb-5 text-sm font-poppins-m">
              <ol className="flex items-center gap-2">
                <li><Link href="/" className="text-foreground/65 hover:underline">Home</Link></li>
                <li aria-current="page" className="flex items-center gap-2">
                  <span aria-hidden="true" className="text-foreground/40">/</span>
                  <h1>Book a Free Demo</h1>
                </li>
              </ol>
            </nav>
            {status === "success" ? (
              <InquirySuccess
                labels={stepLabels}
                title="Demo request received!"
                description="We’ll review your request and email you a calendar invite with your Google Meet link."
                action="Request another demo"
                onRestart={() => setStatus("idle")}
              />
            ) : (
              <InquirySteps
                labels={stepLabels}
                titles={["What would you like to see?", "When would you prefer to meet?", "Where can we send your invite?"]}
                onSubmit={handleSubmit}
                busy={status === "submitting"}
                error={errorMessage}
                submitLabel="Request demo"
              >
                <InquiryChoices name="projectType" options={projectTypes} value={formData.projectType} onChange={handleChange} />
                <InquiryChoices name="preferredTime" options={timeSlots} value={formData.preferredTime} onChange={handleChange} />
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="demo-name"
                        className="block text-xs uppercase tracking-wider font-poppins-m text-foreground/80 mb-2"
                      >
                        Your Name *
                      </label>
                      <input
                        id="demo-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-foreground/15 text-foreground placeholder:text-foreground/35 text-sm focus:outline-none focus:border-foreground transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="demo-email"
                        className="block text-xs uppercase tracking-wider font-poppins-m text-foreground/80 mb-2"
                      >
                        Work Email *
                      </label>
                      <input
                        id="demo-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. sarah@company.com"
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

