"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="pt:16 relative flex min-h-[85vh] flex-col items-start justify-center pb-16 md:pt-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl space-y-6"
      >
        {/* Version Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-outline-variant/30 bg-surface-container px-3 py-1.5 font-mono text-xs tracking-widest text-primary">
          <Terminal className="h-3.5 w-3.5" />
          <span>PORTFOLIO.V4</span>
        </div>

        {/* Title & Subtitle */}
        <div className="space-y-2">
          <h1 className="text-5xl leading-tight font-extrabold tracking-tight text-text-primary md:text-7xl">
            Alex Muñoz
          </h1>
          <h2 className="text-2xl font-bold tracking-tight text-on-surface-variant/90 md:text-4xl">
            Software Engineer
          </h2>
        </div>

        {/* Hero Bio */}
        <p className="max-w-2xl font-sans text-base leading-relaxed text-on-surface-variant/80 md:text-lg">
          Architecting scalable digital systems with surgical precision. I
          specialize in building high-performance distributed architectures,
          fluid user interfaces, and developer tools that bridge the gap between
          complex engineering and art.
        </p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-4 pt-6"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              const el = document.getElementById("projects");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group"
          >
            <span>VIEW PROJECTS</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>

          <Button
            variant="secondary"
            size="lg"
            onClick={() => {
              const el = document.getElementById("contact");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span>CONNECT</span>
          </Button>
        </motion.div>

        {/* Decorative Code Badge */}
        <div className="flex items-center gap-4 pt-8 font-mono text-xs text-text-muted opacity-60">
          <span>{"// STATUS: AVAILABLE FOR ARCHITECTURAL CONSULTING"}</span>
          <span className="h-2 w-2 animate-ping rounded-full bg-emerald-400" />
        </div>
      </motion.div>
    </section>
  );
}
