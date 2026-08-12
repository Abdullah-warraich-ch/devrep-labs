"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import ShowcaseCard from "@/components/ui/ShowcaseCard";
import WatermarkHeading from "@/components/ui/WatermarkHeading";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const categories = ["All Projects", "AI & ML", "FinTech", "SaaS & Cloud", "E-Commerce"];

const projects = [
  {
    id: "nexai",
    projectName: "Neuralytic AI Platform",
    projectCategory: "AI & ML",
    projectOverview: "Real-time AI telemetry, model anomaly detection & automated insights engine.",
    projectDescription: "Neuralytic is an enterprise AI analytics platform built for high-throughput machine learning infrastructure. It monitors model drift, optimizes GPU resource allocation, and delivers sub-millisecond alerting across cloud clusters.",
    projectThumbnail: "/projects/nexai.png",
    clientName: "Neuralytic Corp",
    projectDuration: "6 Weeks",
    toolsUsed: "Next.js 16, PyTorch, WebGL",
    metric: "98.4% Accuracy",
    metricLabel: "Model Precision",
    tags: ["Next.js 16", "Python / PyTorch", "TailwindCSS", "WebGL"],
    link: "#",
    featured: true,
  },
  {
    id: "cyberpulse",
    projectName: "CryptoFlow Terminal",
    projectCategory: "FinTech",
    projectOverview: "High-frequency crypto trading terminal with live market sentiment engine.",
    projectDescription: "CryptoFlow provides institutional traders with ultra-low latency WebSocket data streaming, algorithmic order execution controls, and deep liquidity analytics wrapped in a sleek glassmorphic interface.",
    projectThumbnail: "/projects/cyberpulse.png",
    clientName: "Apex Capital Group",
    projectDuration: "8 Weeks",
    toolsUsed: "React, WebSockets, Framer Motion",
    metric: "$68.4M Daily Vol",
    metricLabel: "Execution Volume",
    tags: ["React", "WebSockets", "Framer Motion", "Chart.js"],
    link: "#",
    featured: true,
  },
  {
    id: "aurora",
    projectName: "Aura Horology Studio",
    projectCategory: "E-Commerce",
    projectOverview: "Interactive 3D luxury timepiece configurator & headless shopping suite.",
    projectDescription: "Aura delivers a luxury digital flagship experience featuring real-time WebGL rendering, custom component engraving previews, and dynamic multi-currency checkout for high-end luxury timepieces.",
    projectThumbnail: "/projects/aurora.png",
    clientName: "Maison Aura Geneva",
    projectDuration: "5 Weeks",
    toolsUsed: "Three.js, Next.js, Shopify",
    metric: "+310% Conversion",
    metricLabel: "Sales Growth",
    tags: ["Three.js", "Next.js", "Shopify Headless", "GSAP"],
    link: "#",
    featured: false,
  },
  {
    id: "hyperion",
    projectName: "PixelFlow Orchestrator",
    projectCategory: "SaaS & Cloud",
    projectOverview: "Node-based visual automation platform for cloud engineering pipelines.",
    projectDescription: "PixelFlow empowers cross-functional tech teams to compose complex continuous integration pipelines visually, with automated rollbacks, secret management, and distributed execution nodes.",
    projectThumbnail: "/projects/hyperion.png",
    clientName: "Hyperion Cloud Inc",
    projectDuration: "4 Weeks",
    toolsUsed: "TypeScript, Node.js, GraphQL",
    metric: "3.2x Velocity",
    metricLabel: "Deployment Speed",
    tags: ["TypeScript", "Node.js", "GraphQL", "Tailwind CSS"],
    link: "#",
    featured: false,
  },
];

export default function Showcase() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [trackPadding, setTrackPadding] = useState(0);
  const [cardGap, setCardGap] = useState(150);

  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter((p) => p.projectCategory === activeCategory);

  // Dynamic Lenis + GSAP ScrollTrigger calculation (gap is half of the peek distance)
  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;

    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    const timer = setTimeout(() => {
      const cards = trackRef.current ? trackRef.current.children : [];
      if (!cards || cards.length === 0) return;

      const totalCards = cards.length;
      const firstCard = cards[0];
      const cardWidth = firstCard.offsetWidth || 440;
      const windowWidth = window.innerWidth;

      // Center padding for initial card
      const paddingLeft = Math.max(16, (windowWidth - cardWidth) / 2);

      // Card gap is set to exactly HALF of the full peek distance
      const fullPeekDistance = (windowWidth / 2) - (cardWidth / 2);
      const gap = Math.max(32, Math.round(fullPeekDistance / 2));

      setTrackPadding(paddingLeft);
      setCardGap(gap);

      // Stride per card step
      const stride = cardWidth + gap;
      const totalTranslation = (totalCards - 1) * stride;

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${totalTranslation}`,
            invalidateOnRefresh: true,
          },
        });

        // Horizontal Track Translation
        tl.to(
          trackRef.current,
          {
            x: -totalTranslation,
            ease: "none",
            duration: totalCards - 1,
          },
          0
        );

        // Animate each card coming from the bottom right corner as user scrolls
        Array.from(cards).forEach((card, index) => {
          if (index === 0) return; // Intro card starts centered

          const startTime = index - 1;

          tl.fromTo(
            card,
            {
              y: 140,
              rotation: 7,
              scale: 0.88,
              opacity: 0.4,
              transformOrigin: "bottom right",
            },
            {
              y: 0,
              rotation: 0,
              scale: 1,
              opacity: 1,
              ease: "power2.out",
              duration: 1,
            },
            startTime
          );
        });
      }, sectionRef);

      return () => {
        ctx.revert();
      };
    }, 100);

    return () => {
      clearTimeout(timer);
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, [filteredProjects]);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative w-full h-screen text-zinc-900 flex flex-col justify-center overflow-hidden"
    >
      {/* BACKGROUND WATERMARK ALIGNED PARALLEL TO ABOUT US & FAQ */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 absolute top-8 left-1/2 -translate-x-1/2 pointer-events-none z-0">
        <WatermarkHeading text="WORK" opacity="opacity-[0.03]" />
      </div>

      {/* HORIZONTAL CARDS TRACK WITH HALF-PEEK GAP & LENIS + GSAP SCROLLTRIGGER */}
      <div className="w-full py-4 z-10 relative">
        <div
          ref={trackRef}
          style={{
            paddingLeft: `${trackPadding}px`,
            paddingRight: `${trackPadding}px`,
            gap: `${cardGap}px`,
          }}
          className="flex items-center w-max"
        >
          {/* CARD 1: INTRO CARD */}
          <div className="w-[360px] sm:w-[500px] lg:w-[560px] shrink-0 h-[540px] sm:h-[600px] lg:h-[640px] p-8 sm:p-12 flex flex-col justify-center items-center text-center relative overflow-hidden group">
            <div className="space-y-8 flex flex-col items-center justify-center relative z-10">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-zinc-900 leading-[1.15]">
                Featured Work <br />
                and Projects
              </h1>
              <div className="pt-2">
                <span className="text-base sm:text-lg font-medium text-zinc-900 underline underline-offset-8 decoration-zinc-900/80 tracking-wide cursor-pointer hover:opacity-75 transition-opacity">
                  Explore Works
                </span>
              </div>
            </div>
          </div>

          {/* PROJECT SHOWCASE CARDS */}
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="w-[360px] sm:w-[500px] lg:w-[560px] shrink-0"
            >
              <ShowcaseCard {...project} />
            </div>
          ))}

          {/* CARD END: FINAL CTA CARD */}
          <div className="w-[360px] sm:w-[500px] lg:w-[560px] shrink-0 h-[540px] sm:h-[600px] lg:h-[640px] p-8 sm:p-12 flex flex-col justify-center items-center text-center relative overflow-hidden group">
            <div className="space-y-6 flex flex-col items-center justify-center relative z-10 max-w-md">
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-zinc-900 leading-[1.15]">
                View Our Work
              </h2>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                Explore all our work and discover high-performing websites and digital experiences.
              </p>
              <div className="pt-4">
                <a
                  href="#contact"
                  className="text-base sm:text-lg font-medium text-zinc-900 underline underline-offset-8 decoration-zinc-900/80 tracking-wide cursor-pointer hover:opacity-75 transition-opacity"
                >
                  Click here
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
