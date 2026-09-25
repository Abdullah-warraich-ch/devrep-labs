"use client";

import Link from "next/link";
import {
  IconArrowLeft,
  IconArrowRight,
  IconCode,
  IconDeviceDesktop,
  IconBrain,
  IconShoppingCart,
  IconPalette,
  IconShieldCheck,
  IconBolt,
  IconHeartHandshake,
  IconSparkles,
  IconLock,
  IconDevices,
  IconSearch,
  IconCreditCard,
} from "@tabler/icons-react";
import Header from "@/components/Header";
import PreFooterCta from "@/components/PreFooterCta";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import HandDrawnUnderline from "@/components/ui/HandDrawnUnderline";
import { useContactModal } from "@/context/ContactModalContext";

export default function ServicesClient() {
  const { openContactModal } = useContactModal();

  const services = [
    {
      id: "web-apps",
      title: "Custom Web Software",
      icon: IconCode,
      description:
        "Custom online portals, client dashboards, and tools built specifically around how your company operates.",
    },
    {
      id: "modern-websites",
      title: "Modern Business Websites",
      icon: IconDeviceDesktop,
      description:
        "Fast, beautiful, and easy-to-use websites designed to build instant trust and turn visitors into paying clients.",
    },
    {
      id: "ai-solutions",
      title: "Smart AI & Time-Saving Tools",
      icon: IconBrain,
      description:
        "Helpful AI assistants, automated chat support, and smart tools that handle repetitive daily tasks for you.",
    },
    {
      id: "ecommerce",
      title: "Online Stores & Payments",
      icon: IconShoppingCart,
      description:
        "Smooth online shops with easy checkout and card payments so your customers can buy without hassle.",
    },
    {
      id: "ui-ux",
      title: "Website & App Design",
      icon: IconPalette,
      description:
        "Clean, easy-to-navigate designs and visual previews so you can see and test everything before we build it.",
    },
    {
      id: "optimization",
      title: "Speed, Security & Care",
      icon: IconShieldCheck,
      description:
        "We keep your website super fast, protected from cyber threats, and running smoothly 24/7 without crashes.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Understanding Your Vision",
      description:
        "We take the time to learn about your business goals and what you need, then put together a clear, straightforward plan.",
      details: ["Clear project goals", "Simple roadmap", "No confusing tech jargon"],
    },
    {
      step: "02",
      title: "Design & Visual Preview",
      description:
        "We design how your site or app will look, giving you an interactive preview to click through and approve before we build.",
      details: ["Clickable preview", "Designed for phones & computers", "Your feedback & changes"],
    },
    {
      step: "03",
      title: "Building & Polishing",
      description:
        "We carefully craft your product, testing every button, screen, and feature to make sure everything works without a hitch.",
      details: ["Regular progress updates", "Thorough quality testing", "Tested on all devices"],
    },
    {
      step: "04",
      title: "Launch & Friendly Support",
      description:
        "We make your site live for the world to see, ensure everything runs smoothly, and stay right by your side to help.",
      details: ["Smooth public launch", "30 days of free support", "You own 100% of the work"],
    },
  ];

  const qualityStandards = [
    { name: "Super Fast Loading", role: "Opens in under a second" },
    { name: "Mobile Friendly", role: "Looks great on all phones & tablets" },
    { name: "Bank-Grade Security", role: "Safe & protected customer data" },
    { name: "Simple Online Payments", role: "Accept cards & Apple Pay easily" },
    { name: "Google Search Ready", role: "Helps local clients discover you" },
    { name: "Smart AI Capabilities", role: "Automate everyday work" },
    { name: "24/7 High Reliability", role: "No unexpected crashes or downtime" },
    { name: "Easy To Update", role: "Simple to make changes anytime" },
  ];

  const valueProps = [
    {
      icon: IconHeartHandshake,
      title: "Direct Communication",
      desc: "You speak directly with the creators building your project. No confusing middlemen or frustrating delays.",
    },
    {
      icon: IconSparkles,
      title: "Made Just For You",
      desc: "Everything is crafted specifically for your business goals. We don't force you into rigid, cookie-cutter templates.",
    },
    {
      icon: IconShieldCheck,
      title: "Honest, Fixed Pricing",
      desc: "Clear upfront quotes with zero hidden surprises. You get what we promised, on time, and you own everything 100%.",
    },
    {
      icon: IconBolt,
      title: "Built For Growth",
      desc: "We build reliable digital tools that keep running smoothly and scale effortlessly as your business gets more customers.",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-background relative overflow-x-hidden">
      <Header />

      {/* Hero Banner Section */}
      <section className="relative w-full pt-28 sm:pt-32 pb-16 sm:pb-20 bg-[#FFFFFF] border-b border-[#EAE5F0] overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#AA076B]/8 via-[#61045F]/5 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
          {/* Breadcrumb Back Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#6F6878] hover:text-[#AA076B] transition-colors mb-6 group"
          >
            <IconArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
            <span>Back to Home</span>
          </Link>

          {/* Headline */}
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-[#17131F] leading-[1.15] mb-5">
              Digital Solutions{" "}
              <span className="relative inline-block text-[#AA076B] pb-1">
                Made Simple
                <HandDrawnUnderline color="#AA076B" />
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-[#6F6878] font-normal leading-relaxed mb-8 max-w-2xl">
              From custom online software and smart time-saving tools to fast, modern websites—we build digital experiences that help your business attract more customers and grow with confidence.
            </p>

            {/* CTA Button */}
            <div className="flex items-center">
              <button
                type="button"
                onClick={openContactModal}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-r font-['poppins-r'] text-[#090814] bg-[#00F5D4] hover:bg-[#00E5FF] shadow-sm hover:shadow-[0_0_20px_rgba(0,245,212,0.45)] transition-all duration-200 cursor-pointer group"
              >
                <span>Tell Us About Your Project</span>
                <IconArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="relative w-full py-16 sm:py-24 bg-[#FAF9FF]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
            <div>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#AA076B] mb-2 block">
                How We Can Help You
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#17131F]">
                Our Core Services
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#6F6878] max-w-md font-normal leading-relaxed">
              Every project is designed to be simple for you to manage, dependable for your business, and enjoyable for your customers to use.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 pt-4 items-stretch">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                index={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                onClick={() => openContactModal({ service: service.title })}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How We Work: 4-Step Process */}
      <section className="relative w-full py-16 sm:py-24 bg-[#FFFFFF] border-y border-[#EAE5F0]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#AA076B] mb-2 block">
              Simple 4-Step Process
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#17131F] mb-4">
              From First Idea to Successful Launch
            </h2>
            <p className="text-xs sm:text-sm text-[#6F6878] font-normal leading-relaxed">
              We guide you through every step with clear, straightforward updates, so you always know what we're working on and when it will be ready.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="relative bg-[#FAF9FF] p-6 sm:p-7 rounded-3xl border border-[#EAE5F0] flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-[#AA076B]/30 tracking-tighter mb-4 font-mono">
                    {step.step}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#17131F] mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#6F6878] leading-relaxed mb-4 font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EAE5F0]/80 space-y-1.5">
                  {step.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-1.5 text-[11px] text-[#2E2838]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#AA076B]" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose DevRep Labs: Value Props */}
      <section className="relative w-full py-16 sm:py-24 bg-[#FAF9FF]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#AA076B] mb-2 block">
              The DevRep Difference
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#17131F]">
              Why Businesses Love Working With Us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((item, index) => {
              const IconItem = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-[#EAE5F0] shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#AA076B]/15 to-[#61045F]/15 text-[#AA076B] flex items-center justify-center mb-4">
                    <IconItem className="size-5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#17131F] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#6F6878] leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Standards Grid (Friendly & Non-Technical) */}
      <section className="relative w-full py-14 sm:py-20 bg-[#FFFFFF] border-t border-[#EAE5F0]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14 text-center">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#AA076B] mb-2 block">
            Quality You Can Count On
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#17131F] mb-3">
            Built To The Highest Quality Standards
          </h2>
          <p className="text-xs sm:text-sm text-[#6F6878] max-w-xl mx-auto mb-10 font-normal">
            We take care of all the complex technical work behind the scenes, so you get an effortless, reliable experience.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {qualityStandards.map((item) => (
              <div
                key={item.name}
                className="px-4 py-2 rounded-2xl bg-[#FAF8FF] border border-[#EAE5F0] flex items-center gap-2 hover:border-[#8364E8]/40 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-[#00F5D4]" />
                <span className="text-xs font-semibold text-[#17131F]">{item.name}</span>
                <span className="text-[10px] text-[#6F6878]">({item.role})</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Footer Call to Action */}
      <PreFooterCta />

      {/* Footer */}
      <Footer />
    </main>
  );
}
