"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    period: "2023 — PRESENT",
    role: "Senior Software Engineer",
    company: "Vercel",
    description:
      "Lead engineering efforts for Edge Functions performance optimization and runtime execution. Collaborated with infrastructure teams to reduce cold-start latency by 40% globally.",
    tags: ["RUST", "NEXT.JS", "WEBASSEMBLY", "EDGE COMPUTING"],
    link: "https://vercel.com",
  },
  {
    period: "2021 — 2023",
    role: "Frontend Engineer",
    company: "Linear",
    description:
      "Developed core features for the desktop application, focusing on keyboard-first navigation, offline synchronization using CRDTs, and sub-10ms UI interaction rendering.",
    tags: ["TYPESCRIPT", "REACT", "ELECTRON", "WEBSOCKETS"],
    link: "https://linear.app",
  },
  {
    period: "2020 — 2021",
    role: "Systems Engineering Intern",
    company: "HashiCorp",
    description:
      "Engineered Terraform plugin provider validation suites and optimized Nomad job scheduling telemetry collection routines across high-density clusters.",
    tags: ["GO", "TERRAFORM", "NOMAD", "DISTRIBUTED LOGGING"],
    link: "https://hashicorp.com",
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="border-t border-outline-variant/20 py-24"
    >
      <div className="flex flex-col gap-12 md:flex-row">
        {/* Sticky Sidebar Header */}
        <div className="md:w-1/3">
          <div className="sticky top-28">
            <h3 className="text-3xl font-bold tracking-tight text-text-primary">
              Professional Experience
            </h3>
            <p className="mt-2 font-mono text-xs tracking-widest text-text-muted uppercase">
              CAREER TRAJECTORY & IMPACT
            </p>
          </div>
        </div>

        {/* Experience List */}
        <div className="space-y-6 md:w-2/3">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group -mx-6 flex flex-col gap-6 rounded-xl border border-transparent p-6 transition-all hover:border-surface-border hover:bg-surface-elevated md:flex-row"
            >
              {/* Date */}
              <div className="pt-1 font-mono text-xs tracking-wider text-text-muted md:w-1/4">
                {exp.period}
              </div>

              {/* Content */}
              <div className="space-y-2 md:w-3/4">
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-lg font-bold text-text-primary transition-colors group-hover:text-primary focus:outline-none"
                >
                  <span>
                    {exp.role} · {exp.company}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                </a>

                <p className="font-sans text-sm leading-relaxed text-on-surface-variant/80">
                  {exp.description}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 pt-3">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-outline-variant/30 bg-surface-container px-2.5 py-1 font-mono text-[10px] tracking-wider text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
