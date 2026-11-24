import Image from "next/image";

import Link from "next/link";
import {
  IconArrowRight,
  IconCode,
  IconDeviceDesktop,
  IconBrain,
  IconShoppingCart,
  IconPalette,
  IconShieldCheck,
} from "@tabler/icons-react";
import Navbar from "@/components/Navbar";
import PreFooterCta from "@/components/PreFooterCta";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";

export default function ServicesClient() {

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
      title: "Direct Communication",
      desc: "You speak directly with the creators building your project. No confusing middlemen or frustrating delays.",
    },
    {
      title: "Made Just For You",
      desc: "Everything is crafted specifically for your business goals. We don't force you into rigid, cookie-cutter templates.",
    },
    {
      title: "Honest, Fixed Pricing",
      desc: "Clear upfront quotes with zero hidden surprises. You get what we promised, on time, and you own everything 100%.",
    },
    {
      title: "Built For Growth",
      desc: "We build reliable digital tools that keep running smoothly and scale effortlessly as your business gets more customers.",
    },
  ];

  return (
    <div className="bg-white font-poppins-r text-foreground">
      <Navbar />
      <main>
        <div className="mx-auto max-w-7xl px-5 sm:px-10 lg:px-16">
          <header className="grid items-end gap-8 py-14 sm:py-20 lg:grid-cols-[1.6fr_0.8fr] lg:gap-12">
            <h1 className="font-poppins-sb text-[clamp(2.6rem,7.3vw,6.6rem)] leading-[1.08] tracking-[-0.055em]">
              <span className="block">Websites. <Image src="/images/hero/shape-cube.png" alt="" width={220} height={220} sizes="80px" className="inline-block size-[0.75em] rotate-[-8deg] object-contain align-baseline" /></span>
              <span className="block">Web apps.</span>
              <span className="block">AI tools<span className="text-primary">.</span></span>
            </h1>
            <div className="max-w-sm border-l-2 border-primary pl-5 lg:mb-2">
              <p className="text-base leading-relaxed text-foreground/75">Give customers a place to find you, a way to book or buy, and tools that keep your team’s work moving.</p>
              <Link href="/contact" className="mt-4 inline-flex min-h-11 items-center gap-3 font-poppins-m text-sm underline underline-offset-4 hover:opacity-75">
                Discuss your project <IconArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>
          </header>

          <section aria-labelledby="service-heading" className="pb-14 sm:pb-20">
            <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3">
              <h2 id="service-heading" className="font-poppins-m text-3xl tracking-tight sm:text-4xl">What we do</h2>
              <Link href="/services/custom-web-development" className="py-2 text-sm underline underline-offset-4">Explore custom web development</Link>
            </div>
            <div className="grid gap-x-12 md:grid-cols-2">
              {services.map((service) => <ServiceCard key={service.id} {...service} href="/contact" />)}
            </div>
          </section>
        </div>

        <section className="bg-[#191a20] px-5 py-14 text-white sm:px-10 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-poppins-m text-4xl tracking-tight sm:text-5xl">From idea to launch<span className="text-primary">.</span></h2>
            <ol className="mt-9 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step) => (
                <li key={step.step} className="border-t border-white/25 pt-4">
                  <span className="font-mono text-sm text-white/65">{step.step}</span>
                  <h3 className="mt-4 font-poppins-m text-xl tracking-tight">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">{step.description}</p>
                  <ul className="mt-4 list-disc space-y-1 pl-4 text-xs text-white/75 marker:text-primary">
                    {step.details.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section className="mx-auto grid max-w-7xl gap-7 px-5 py-14 sm:px-10 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-16">
          <h2 className="font-poppins-m text-3xl tracking-tight sm:text-4xl">Working with us</h2>
          <div className="divide-y divide-foreground/15 border-y border-foreground/15">
            {valueProps.map(({ title, desc }) => (
              <details key={title} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between py-4 font-poppins-m [&::-webkit-details-marker]:hidden">
                  {title}<IconArrowRight aria-hidden="true" size={16} className="group-open:rotate-90" />
                </summary>
                <p className="pb-4 text-sm leading-relaxed text-foreground/70">{desc}</p>
              </details>
            ))}
            <details>
              <summary className="cursor-pointer py-4 font-poppins-m">Quality standards</summary>
              <ul className="grid gap-3 pb-5 text-sm sm:grid-cols-2">
                {qualityStandards.map(({ name, role }) => <li key={name}><strong>{name}</strong><br /><span className="text-foreground/65">{role}</span></li>)}
              </ul>
            </details>
          </div>
        </section>
      </main>
      <PreFooterCta />
      <Footer />
    </div>
  );
}
