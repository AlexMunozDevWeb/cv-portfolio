"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Star, GitFork, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const projects = [
  {
    title: "Aether OS",
    description:
      "A conceptual desktop environment built entirely in WebGL & Rust WebAssembly, exploring new paradigms of spatial organization and 3D window management.",
    stars: "12.4k",
    forks: "820",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
    tags: ["WebGL", "Rust", "WebAssembly", "TypeScript"],
    demoUrl: "#",
  },
  {
    title: "Prism Core",
    description:
      "Low-level benchmarking suite for modern JavaScript runtimes, providing micro-second precision profiling, V8 bytecode analysis, and memory leak tracing.",
    stars: "4.1k",
    forks: "150",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
    tags: ["C++", "V8", "TypeScript", "CLI"],
    demoUrl: "#",
  },
  {
    title: "HyperGrid DB",
    description:
      "Distributed, in-memory key-value engine with automatic raft-consensus partitioning and sub-millisecond query execution speeds under heavy concurrency.",
    stars: "2.9k",
    forks: "95",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    tags: ["Go", "Raft", "Distributed Systems", "gRPC"],
    demoUrl: "#",
  },
  {
    title: "Chrono Vector",
    description:
      "High-throughput event streaming visualization framework built for real-time telemetry rendering at 120 FPS using WebGPU.",
    stars: "1.8k",
    forks: "64",
    image:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1000&auto=format&fit=crop",
    tags: ["WebGPU", "React", "Tailwind CSS", "Shaders"],
    demoUrl: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-outline-variant/20 py-24">
      <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h3 className="text-3xl font-bold tracking-tight text-text-primary">
            Selected Projects
          </h3>
          <p className="mt-2 font-mono text-xs tracking-widest text-text-muted uppercase">
            OPEN SOURCE & ARCHITECTURAL LABS
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
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover opacity-80 grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated via-transparent to-transparent opacity-90" />
                <div className="absolute top-4 right-4 rounded-full border border-outline-variant/30 bg-surface-container-high/80 p-2 text-primary opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100">
                  <ExternalLink className="h-4 w-4" />
                </div>
              </div>

              {/* Card Details */}
              <div className="flex flex-grow flex-col justify-between p-8">
                <div>
                  <h4 className="mb-3 flex items-center gap-2 text-2xl font-bold text-text-primary transition-colors group-hover:text-primary">
                    {project.title}
                  </h4>
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

                  {/* GitHub Metrics */}
                  <div className="flex gap-6 border-t border-outline-variant/20 pt-4 font-mono text-xs text-text-muted">
                    <span className="flex items-center gap-1.5">
                      <Star className="h-3.5 w-3.5 text-primary" />
                      {project.stars} stars
                    </span>
                    <span className="flex items-center gap-1.5">
                      <GitFork className="h-3.5 w-3.5 text-on-surface-variant" />
                      {project.forks} forks
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* View Archive Link */}
      <div className="mt-12 text-center">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 font-mono text-sm text-primary hover:underline focus:outline-none"
        >
          <span>VIEW FULL ARCHIVE ON GITHUB</span>
          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}
