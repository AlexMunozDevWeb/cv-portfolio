"use client";

import { motion } from "framer-motion";
import { formationData, sectionLabels } from "@/data";

export function FormationSection() {
  return (
    <section
      id="formation"
      className="border-outline-variant/20 border-t py-12 md:py-24"
    >
      <div className="flex flex-col gap-12 md:flex-row">
        {/* Sticky Header Column */}
        <div className="md:w-1/3">
          <div className="sticky top-28 space-y-2">
            <h2 className="text-text-primary text-3xl font-bold tracking-tight">
              {sectionLabels.formation.title}
            </h2>
            <p className="text-text-muted font-mono text-xs uppercase tracking-widest">
              {sectionLabels.formation.subtitle}
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
                className="border-outline-variant/40 group relative border-l pl-8"
              >
                {/* Node marker */}
                <div
                  className={`absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full transition-all ${
                    item.active
                      ? "bg-primary shadow-[0_0_10px_#4cd7f6]"
                      : "bg-outline-variant group-hover:bg-primary"
                  }`}
                />

                <div className="flex items-center gap-3">
                  <span className="text-primary font-mono text-xs font-semibold">
                    {item.period}
                  </span>
                  <IconComp className="text-text-muted h-4 w-4" />
                </div>

                <h3 className="text-text-primary group-hover:text-primary mt-1 text-xl font-bold transition-colors">
                  {item.title}
                </h3>

                <p className="text-on-surface-variant/80 mt-1 font-mono text-sm">
                  {item.institution}
                </p>

                <ul className="mt-3 space-y-1.5">
                  {item.description.map((line) => (
                    <li
                      key={line}
                      className="text-text-muted flex items-start gap-2 font-mono text-sm"
                    >
                      <span
                        className="text-primary mt-0.5 shrink-0"
                        aria-hidden="true"
                      >
                        &gt;
                      </span>
                      {line}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
