"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Code, Award } from "lucide-react";

const formationData = [
  {
    period: "2018 — 2022",
    title: "B.Sc. Software Engineering",
    institution: "Massachusetts Institute of Technology (MIT)",
    description:
      "Focused on Distributed Systems, High-Performance Computing, and Human-Computer Interaction. Graduated with Honors.",
    icon: GraduationCap,
    active: true,
  },
  {
    period: "2021",
    title: "Open Source Contributor",
    institution: "React & Developer Tooling Ecosystem",
    description:
      "Early contributions to React core concurrency primitives, state-management RFCs, and open-source CLI utilities.",
    icon: Code,
    active: false,
  },
  {
    period: "2020",
    title: "ACM Collegiate Programming Finalist",
    institution: "ACM ICPC Regional Championship",
    description:
      "Ranked in top 1% for algorithmic optimization, graph theory, and dynamic data structure design under strict time constraints.",
    icon: Award,
    active: false,
  },
];

export function FormationSection() {
  return (
    <section
      id="formation"
      className="border-t border-outline-variant/20 py-24"
    >
      <div className="flex flex-col gap-12 md:flex-row">
        {/* Sticky Header Column */}
        <div className="md:w-1/3">
          <div className="sticky top-28 space-y-2">
            <h3 className="text-3xl font-bold tracking-tight text-text-primary">
              Formation
            </h3>
            <p className="font-mono text-xs tracking-widest text-text-muted uppercase">
              ACADEMIC & EARLY CAREER
            </p>
          </div>
        </div>

        {/* Timeline Items */}
        <div className="space-y-12 md:w-2/3">
          {formationData.map((item, index) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative border-l border-outline-variant/40 pl-8"
              >
                {/* Node marker */}
                <div
                  className={`absolute top-1 -left-[5px] h-2.5 w-2.5 rounded-full transition-all ${
                    item.active
                      ? "bg-primary shadow-[0_0_10px_#4cd7f6]"
                      : "bg-outline-variant group-hover:bg-primary"
                  }`}
                />

                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-semibold text-primary">
                    {item.period}
                  </span>
                  <IconComp className="h-4 w-4 text-text-muted" />
                </div>

                <h4 className="mt-1 text-xl font-bold text-text-primary transition-colors group-hover:text-primary">
                  {item.title}
                </h4>

                <p className="mt-1 font-mono text-sm text-on-surface-variant/80">
                  {item.institution}
                </p>

                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
