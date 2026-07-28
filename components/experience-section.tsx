"use client";

import { motion } from "framer-motion";
import { experiences } from "../data/db";

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
              Experiencia
            </h3>
            <p className="mt-2 font-mono text-xs tracking-widest text-text-muted uppercase">
              EXPERIENCIA PROFESIONAL
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
                <div className="inline-flex items-center gap-1.5 text-lg font-bold text-text-primary transition-colors group-hover:text-primary focus:outline-none">
                  <span>
                    {exp.role} · {exp.company}
                  </span>
                </div>

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
