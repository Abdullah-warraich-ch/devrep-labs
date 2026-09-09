"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowUpRight, IconArrowLeft } from "@tabler/icons-react";
import Header from "@/components/Header";
import PreFooterCta from "@/components/PreFooterCta";
import Footer from "@/components/Footer";
import HandDrawnUnderline from "@/components/ui/HandDrawnUnderline";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "AI & Web Apps", "E-Commerce", "Portals & Tools"];

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "AI & Web Apps")
      return project.category.includes("AI") || project.category.includes("Web App") || project.category.includes("EdTech");
    if (activeCategory === "E-Commerce")
      return project.category.includes("E-Commerce");
    if (activeCategory === "Portals & Tools")
      return project.category.includes("Portal") || project.category.includes("GPS") || project.category.includes("Dashboard");
    return true;
  });

  return (
    <main className="min-h-screen w-full bg-background relative overflow-x-hidden">
      <Header />

      {/* Projects Page Hero Banner */}
      <section className="relative w-full pt-28 sm:pt-32 pb-14 sm:pb-16 bg-[#FFFFFF] border-b border-[#EAE5F0]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14">
          
          {/* Back to Home Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#6F6878] hover:text-[#8364E8] transition-colors mb-6 group"
          >
            <IconArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
            <span>Back to Home</span>
          </Link>

          <div className="max-w-2xl space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#17131F] leading-tight">
              Our Complete{" "}
              <span className="relative inline-block text-[#8364E8] pb-1">
                Portfolio
                <HandDrawnUnderline color="#8364E8" />
              </span>
            </h1>

            <p className="text-sm sm:text-base text-[#6F6878] font-normal leading-relaxed">
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
                    ? "bg-[#8364E8] text-white shadow-sm"
                    : "bg-[#F8F5FF] text-[#6F6878] hover:text-[#17131F] hover:bg-[#F3ECFF]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* All Projects Grid Section */}
      <section className="relative w-full py-16 sm:py-20 bg-[#FAF9FF]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[16/10] border border-[#EAE5F0] bg-gradient-to-br from-[#FAF8FF] via-[#F3ECFF] to-[#EAE1FB] shadow-sm hover:shadow-xl transition-all duration-300 flex items-center justify-center p-3 sm:p-4.5"
              >
                {/* Project Screenshot (Uncropped) */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain rounded-xl drop-shadow-md"
                />

                {/* Gradient Overlay — visible on mobile/tablet, hover on desktop */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/10 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300" />

                {/* Content — visible on mobile/tablet, hover on desktop */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex flex-col justify-end translate-y-0 opacity-100 lg:translate-y-3 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-300 z-10">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-[#00F5D4]">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-white leading-snug mb-1.5">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-white/80 leading-relaxed font-normal mb-4 max-w-md">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-white/15 text-white/90 backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* View Live Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold font-['poppins-m'] text-[#090814] bg-[#00F5D4] hover:bg-[#00E5FF] shadow-sm transition-all duration-200 w-fit"
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
