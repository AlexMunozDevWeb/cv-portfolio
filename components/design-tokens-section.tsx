"use client";

import React from "react";
import { motion } from "framer-motion";

export function DesignTokensSection() {
  return (
    <section id="tokens" className="border-t border-outline-variant/30 py-24">
      <div className="mb-12">
        <h3 className="text-3xl font-bold tracking-tight text-text-primary">
          Design System
        </h3>
        <p className="mt-2 font-mono text-xs tracking-widest text-text-muted uppercase">
          TOKENS & SPECIFICATIONS // DIGITAL ARCHITECT SYSTEM
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Palette */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          <p className="font-mono text-xs tracking-wider text-text-muted">
            COLOR PALETTE
          </p>
          <div className="space-y-3 font-mono text-xs">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded border border-outline-variant/40 bg-[#0c1324]" />
              <div>
                <p className="font-bold text-text-primary">#0C1324</p>
                <p className="text-[11px] text-text-muted">Base Surface</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded bg-[#4cd7f6]" />
              <div>
                <p className="font-bold text-text-primary">#4CD7F6</p>
                <p className="text-[11px] text-text-muted">Primary Cyan</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded bg-[#06b6d4]" />
              <div>
                <p className="font-bold text-text-primary">#06B6D4</p>
                <p className="text-[11px] text-text-muted">Container Glow</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded border border-outline-variant/40 bg-[#0F172A]" />
              <div>
                <p className="font-bold text-text-primary">#0F172A</p>
                <p className="text-[11px] text-text-muted">Elevated Panel</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Typography */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="space-y-6"
        >
          <p className="font-mono text-xs tracking-wider text-text-muted">
            TYPOGRAPHY
          </p>
          <div className="space-y-4">
            <div>
              <p className="font-sans text-2xl font-bold text-text-primary">
                Inter Display
              </p>
              <p className="font-mono text-xs text-text-muted">
                Headlines &amp; Core Content
              </p>
            </div>
            <div>
              <p className="font-mono text-lg text-primary">JetBrains Mono</p>
              <p className="font-mono text-xs text-text-muted">
                Code &amp; System Metadata
              </p>
            </div>
            <div>
              <p className="font-mono text-sm tracking-widest text-on-surface-variant uppercase">
                Space Grotesk
              </p>
              <p className="font-mono text-xs text-text-muted">
                Technical Badges &amp; Labels
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tokens & Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="space-y-6"
        >
          <p className="font-mono text-xs tracking-wider text-text-muted">
            SYSTEM RULES
          </p>
          <div className="space-y-2 font-mono text-xs">
            <div className="flex justify-between rounded border border-outline-variant/30 bg-surface-elevated p-3">
              <span className="text-text-muted">Grid Gap</span>
              <span className="font-bold text-primary">24px</span>
            </div>
            <div className="flex justify-between rounded border border-outline-variant/30 bg-surface-elevated p-3">
              <span className="text-text-muted">Border Rule</span>
              <span className="font-bold text-primary">
                No-Line Tonal Shifts
              </span>
            </div>
            <div className="flex justify-between rounded border border-outline-variant/30 bg-surface-elevated p-3">
              <span className="text-text-muted">Glow Radius</span>
              <span className="font-bold text-primary">20px Accent</span>
            </div>
            <div className="flex justify-between rounded border border-outline-variant/30 bg-surface-elevated p-3">
              <span className="text-text-muted">Corner Radius</span>
              <span className="font-bold text-primary">0.75rem (xl)</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
