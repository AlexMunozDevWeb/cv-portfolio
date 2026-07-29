"use client";

import Image from "next/image";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import { projects } from "@/data";

import { motion } from "framer-motion";
import { ExternalLink, ChevronRight } from "lucide-react";
import { sectionLabels } from "@/data";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="border-t border-outline-variant/20 py-12 md:py-24"
    >
      <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h3 className="text-3xl font-bold tracking-tight text-text-primary">
            {sectionLabels.projects.title}
          </h3>
          <p className="mt-2 font-mono text-xs tracking-widest text-text-muted uppercase">
            {sectionLabels.projects.subtitle}
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <Card className="group relative flex h-full flex-col overflow-hidden bg-surface-elevated hover:border-primary/50">
              {/* Image Preview Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-surface-container-low">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-80 grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated via-transparent to-transparent opacity-90" />
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 rounded-full border border-outline-variant/30 bg-surface-container-high/80 p-2 text-primary opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100 hover:bg-primary hover:text-white"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* Card Details */}
              <div className="flex flex-grow flex-col justify-between p-8">
                <div>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-3 flex items-center gap-2 text-2xl font-bold text-text-primary transition-colors hover:text-primary"
                  >
                    {project.title}
                    <ExternalLink className="h-4 w-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                  <p className="mb-6 font-sans text-sm leading-relaxed text-on-surface-variant/80">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-outline-variant/30 bg-surface-container px-2.5 py-0.5 font-mono text-[11px] text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* View Archive Link */}
      <div className="mt-12 text-center">
        <Link
          href={sectionLabels.projects.archiveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 font-mono text-sm text-primary hover:underline focus:outline-none"
        >
          <span>{sectionLabels.projects.archiveLink}</span>
          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
