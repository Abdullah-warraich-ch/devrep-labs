"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowUpRight } from "@tabler/icons-react";
import HandDrawnUnderline from "@/components/ui/HandDrawnUnderline";
import { projects } from "@/data/projects";

export default function Projects() {
  // First four projects from Portfolio-2
  const landingProjects = projects.slice(0, 4);

  return (
    <section
      id="projects"
      className="relative w-full py-16 sm:py-24 bg-[#FFFFFF] overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[28px] xl:text-[32px] font-semibold text-[#17131F] leading-snug tracking-tight mb-3">
            <span className="relative inline-block pb-1">
              Our Projects
              <HandDrawnUnderline color="#8364E8" />
            </span>
          </h2>
          <p className="text-[#6F6878] text-xs sm:text-[13px] md:text-sm leading-relaxed font-normal max-w-lg mx-auto">
            A selection of our recent work — each project designed and built to
            deliver real results for real businesses.
          </p>
        </div>

        {/* Projects Grid — 2 per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {landingProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[16/10] bg-gradient-to-br from-[#FAF8FF] via-[#F3ECFF] to-[#EAE1FB] border border-[#EAE5F0] shadow-sm flex items-center justify-center p-3 sm:p-4.5"
            >
              {/* Project Screenshot Image (Uncropped) */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain rounded-xl drop-shadow-md"
              />

              {/* Gradient Overlay — visible on mobile/tablet, hover on desktop */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/10 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300" />

              {/* Content — visible on mobile/tablet, hover on desktop */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex flex-col justify-end translate-y-0 opacity-100 lg:translate-y-3 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-300 z-10">
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-[#00F5D4] mb-1.5">
                  {project.category}
                </span>
                <h3 className="text-base sm:text-lg font-semibold text-white leading-snug mb-1">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-white/80 leading-relaxed font-normal mb-4 max-w-sm">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium font-['poppins-m'] text-[#090814] bg-[#00F5D4] hover:bg-[#00E5FF] shadow-sm transition-all duration-200 w-fit"
                >
                  <span>View Project</span>
                  <IconArrowUpRight className="size-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button — Links to /projects */}
        <div className="flex justify-center mt-10 sm:mt-14">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium font-['poppins-m'] text-[#17131F] bg-transparent border border-[#17131F]/20 hover:border-[#8364E8] hover:text-[#8364E8] transition-all duration-200 cursor-pointer group"
          >
            <span>View All Projects</span>
            <IconArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
