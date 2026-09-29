"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowUpRight, IconArrowRight } from "@tabler/icons-react";
import HandDrawnUnderline from "@/components/ui/HandDrawnUnderline";
import { projects } from "@/data/projects";

export default function ProjectsV2() {
  const landingProjects = projects.slice(0, 4);

  return (
    <section
      id="projects"
      className="dark-theme relative w-full py-20 sm:py-32 bg-[var(--background-even)] overflow-hidden scroll-mt-14"
      style={{ fontFamily: "'poppins-r', 'Poppins', sans-serif" }}
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins-m text-foreground tracking-tight leading-tight mb-4">
            <span className="relative inline-block pb-2">
              Our Projects
              <HandDrawnUnderline />
            </span>
          </h2>
          <p className="text-foreground/60 text-sm sm:text-base leading-relaxed font-normal max-w-xl mx-auto">
            A selection of our recent work — each project designed and built to
            deliver real results for real businesses.
          </p>
        </div>

        {/* Projects Grid — 2 per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
          {landingProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer aspect-[16/10] bg-foreground/5 border border-foreground/10"
            >
              <Image
                src={project.image}
                alt={`${project.title} — ${project.category}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex flex-col justify-end translate-y-0 opacity-100 lg:translate-y-4 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-500 z-10">
                <span className="text-[11px] hidden lg:block font-poppins-sb tracking-wider uppercase text-primary mb-2">
                  {project.category}
                </span>
                <h3 className="text-lg sm:text-xl font-poppins-sb text-white leading-snug mb-2">
                  {project.title}
                </h3>
                <p className="text-sm hidden lg:block text-white/80 mb-6 leading-relaxed font-normal max-w-md">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-poppins-m text-white bg-primary hover:bg-primary/90 shadow-sm transition-all duration-300 w-fit"
                >
                  <span>View Project</span>
                  <IconArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-14 sm:mt-20">
          <Link
            href="/projects"
            className="relative overflow-hidden group cursor-pointer border border-foreground/20 rounded-none bg-transparent text-foreground text-[14px] px-8 py-3.5 hover:border-primary transition-all duration-300 inline-flex items-center gap-2 font-poppins-m"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">View All Projects</span>
            <IconArrowRight size={16} className="relative z-10 transition-transform group-hover:translate-x-1 group-hover:text-white" />
            <span className="absolute inset-0 h-full w-full bg-primary transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
          </Link>
        </div>
      </div>
    </section>
  );
}
