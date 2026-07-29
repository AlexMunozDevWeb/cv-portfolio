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
      className="border-outline-variant/20 border-t py-12 md:py-24"
    >
      <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h2 className="text-text-primary text-3xl font-bold tracking-tight">
            {sectionLabels.projects.title}
          </h2>
          <p className="text-text-muted mt-2 font-mono text-xs uppercase tracking-widest">
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
            <Card className="bg-surface-elevated hover:border-primary/50 group relative flex h-full flex-col overflow-hidden">
              {/* Image Preview Container */}
              <div className="bg-surface-container-low relative aspect-video w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-80 grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="from-surface-elevated absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-90" />
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-outline-variant/30 bg-surface-container-high/80 text-primary hover:bg-primary absolute right-4 top-4 rounded-full border p-2 opacity-0 backdrop-blur-md transition-opacity hover:text-white group-hover:opacity-100 group-focus-visible:opacity-100"
                  aria-label={`${project.title} (abrir en nueva ventana)`}
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
                    aria-label={`${project.title} (abrir en nueva ventana)`}
                    className="text-text-primary hover:text-primary mb-3 flex items-center gap-2 text-2xl font-bold transition-colors"
                  >
                    {project.title}
                    <ExternalLink className="h-4 w-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                  <p className="text-on-surface-variant/80 mb-6 font-sans text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border-outline-variant/30 bg-surface-container text-primary rounded border px-2.5 py-0.5 font-mono text-[11px]"
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
          className="text-primary focus-visible:ring-primary group inline-flex items-center gap-2 rounded font-mono text-sm hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        >
          <span>{sectionLabels.projects.archiveLink}</span>
          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
