"use client";

import { motion } from "framer-motion";
import { formationData } from "@/data/db";

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
              Formación
            </h3>
            <p className="font-mono text-xs tracking-widest text-text-muted uppercase">
              Formación académica
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

                <ul className="mt-3 space-y-1.5">
                  {item.description.map((line) => (
                    <li
                      key={line}
                      className="flex items-start gap-2 font-mono text-sm text-text-muted"
                    >
                      <span className="mt-0.5 shrink-0 text-primary">&gt;</span>
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
