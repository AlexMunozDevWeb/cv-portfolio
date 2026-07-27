"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, Layers, Network } from "lucide-react";
import { Card } from "@/components/ui/card";

export function SkillsSection() {
  return (
    <section id="skills" className="border-t border-outline-variant/20 py-24">
      <h3 className="mb-12 text-3xl font-bold tracking-tight text-text-primary">
        Core Competencies
      </h3>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        {/* Card 1: Systems Architecture (Featured Bento 2 columns) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2"
        >
          <Card className="flex h-full flex-col justify-between bg-surface-elevated p-8 hover:border-primary/50">
            <div>
              <div className="mb-6 w-fit rounded-lg border border-outline-variant/30 bg-surface-container p-3 text-primary">
                <Network className="h-8 w-8" />
              </div>
              <h4 className="mb-3 text-2xl font-bold text-text-primary">
                Systems Architecture
              </h4>
              <p className="text-sm leading-relaxed text-text-muted">
                Designing fault-tolerant microservices, event-driven
                architectures, and distributed databases with focus on high
                availability, low latency, and zero-downtime deployment
                pipelines.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Kubernetes",
                "AWS Cloud",
                "Distributed Systems",
                "Docker",
                "gRPC",
                "Kafka",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-outline-variant/30 bg-surface-container-high px-3 py-1 font-mono text-xs text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Card 2: Backend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Card className="flex h-full flex-col justify-between bg-surface-elevated p-8 hover:border-primary/50">
            <div>
              <div className="mb-6 w-fit rounded-lg border border-outline-variant/30 bg-surface-container p-3 text-primary">
                <Terminal className="h-6 w-6" />
              </div>
              <h4 className="mb-4 text-xl font-bold text-text-primary">
                Backend
              </h4>
              <ul className="space-y-3 font-mono text-sm text-text-muted">
                <li className="flex items-center gap-2">
                  <span className="text-primary">&gt;</span> Go / Rust
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">&gt;</span> Node.js / Bun
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">&gt;</span> PostgreSQL /
                  CockroachDB
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">&gt;</span> Redis / Memcached
                </li>
              </ul>
            </div>
          </Card>
        </motion.div>

        {/* Card 3: Frontend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="flex h-full flex-col justify-between bg-surface-elevated p-8 hover:border-primary/50">
            <div>
              <div className="mb-6 w-fit rounded-lg border border-outline-variant/30 bg-surface-container p-3 text-primary">
                <Layers className="h-6 w-6" />
              </div>
              <h4 className="mb-4 text-xl font-bold text-text-primary">
                Frontend
              </h4>
              <ul className="space-y-3 font-mono text-sm text-text-muted">
                <li className="flex items-center gap-2">
                  <span className="text-primary">&gt;</span> React / Next.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">&gt;</span> TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">&gt;</span> Tailwind CSS
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">&gt;</span> WebGL / Framer
                  Motion
                </li>
              </ul>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
