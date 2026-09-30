"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowUpRight, IconArrowLeft } from "@tabler/icons-react";
import Navbar from "@/components/Navbar";
import PreFooterCta from "@/components/PreFooterCta";
import Footer from "@/components/Footer";
import HandDrawnUnderline from "@/components/ui/HandDrawnUnderline";
import { projects } from "@/data/projects";

export default function ProjectsClient() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "AI & Web Apps", "E-Commerce", "Portals & Tools"];

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "AI & Web Apps")
      return project.category.includes("AI") || project.category.includes("Web App") || project.category.includes("EdTech");
    if (activeCategory === "E-Commerce")
      return project.category.includes("E-Commerce");
    if (activeCategory === "Portals & Tools")
      return project.category.includes("Portal") || project.category.includes("GPS") || project.category.includes("Dashboard") || project.category.includes("Booking");
    return true;
  });

  return (
    <main className="min-h-screen w-full bg-background relative overflow-x-hidden">
      <div className="bg-background">
        <Navbar />
      </div>

      {/* Projects Page Hero Banner */}
      <section className="relative w-full pt-10 sm:pt-14 pb-14 sm:pb-16 bg-background border-b border-foreground/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14">
          
          {/* Back to Home Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/60 hover:text-foreground transition-colors mb-4 group"
          >
            <IconArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
            <span>Back to Home</span>
          </Link>

          <div className="max-w-2xl space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight font-poppins-sb">
              Our Complete{" "}
              <span className="relative inline-block text-primary pb-1">
                Portfolio
                <HandDrawnUnderline />
              </span>
            </h1>

            <p className="text-sm sm:text-base text-foreground/70 font-normal leading-relaxed">
              Explore our full collection of live web applications, AI platforms, and bespoke digital solutions designed to drive measurable growth.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2.5 pt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-sm shadow-primary/30"
                    : "bg-foreground/[0.04] text-foreground/70 hover:text-foreground hover:bg-foreground/[0.08] border border-foreground/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* All Projects Grid Section */}
      <section className="relative w-full py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14">
          <h2 className="sr-only">Our Featured Client Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[16/10] border border-foreground/10 bg-surface shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Project Screenshot (Edge-to-Edge) */}
                <Image
                  src={project.image}
                  alt={`${project.title} — ${project.category}`}
                  title={`${project.title} — ${project.category} | DevRep Labs`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 550px"
                  priority={index < 2}
                  className="object-cover object-top"
                />

                {/* Gradient Overlay — visible on mobile/tablet, hover on desktop */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300" />

                {/* Content — visible on mobile/tablet, hover on desktop */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex flex-col justify-end translate-y-0 opacity-100 lg:translate-y-3 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-300 z-10">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-primary">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-white leading-snug mb-1.5 font-poppins-sb">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-white/80 leading-relaxed font-normal mb-4 max-w-md">
                    {project.description}
                  </p>

                  {/* View Live Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold font-poppins-m text-white bg-primary hover:bg-primary/90 shadow-sm transition-all duration-200 w-fit"
                  >
                    <span>View Live Project</span>
                    <IconArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </motion.div>
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
