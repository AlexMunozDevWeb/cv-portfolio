"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import { hero, bioParagraphs } from "@/data/";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="pt:16 relative flex min-h-[85vh] flex-col items-start justify-center pb-12 pt-12 md:pt-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-100 space-y-6 md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-6 md:space-y-0"
      >
        {/* Left column: badge + title */}
        <div className="space-y-3 md:space-y-6">
          <div className="border-outline-variant/30 bg-surface-container text-primary inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-xs tracking-widest">
            <Terminal className="h-3.5 w-3.5" />
            <span>{hero.title}</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-text-primary text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
              {hero.name}
            </h1>
            <h2 className="text-on-surface-variant/90 text-xl font-bold tracking-tight md:text-xl">
              {hero.job}
            </h2>
          </div>
          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-4 pt-6 md:col-span-2"
          >
            <Link
              href="#projects"
              className="from-primary to-primary-container text-on-primary focus-visible:ring-primary inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r px-6 py-3 font-mono text-sm font-bold transition-all hover:opacity-95 hover:shadow-[0_0_20px_rgba(76,215,246,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98]"
            >
              <span>{hero.buttonProjects}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="#contact"
              className="border-primary text-primary hover:bg-primary/10 focus-visible:ring-primary inline-flex items-center justify-center gap-2 rounded-lg border px-6 py-3 font-mono text-sm font-medium transition-all hover:shadow-[0_0_15px_rgba(76,215,246,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98]"
            >
              <span>{hero.buttonContact}</span>
            </Link>
          </motion.div>

          {/* Status badge */}
          <div className="text-text-muted flex items-center gap-4 pt-8 font-mono text-xs opacity-60 md:col-span-2">
            <span>{hero.availability}</span>
            <span className="h-2 w-2 animate-ping rounded-full bg-emerald-400" />
          </div>
        </div>

        {/* Right column: description */}
        <div className="description">
          {bioParagraphs.map((text, i) => (
            <p
              key={i}
              className="text-on-surface-variant/80 mb-4 font-sans text-base leading-relaxed md:text-lg"
            >
              {text.paragraph}
            </p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
