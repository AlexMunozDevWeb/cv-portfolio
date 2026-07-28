"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { bioParagraphs } from "@/data/db";

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
        className="max-100 space-y-6 md:grid md:grid-cols-2 md:space-y-0 md:gap-x-12 md:gap-y-6"
      >
        {/* Left column: badge + title */}
        <div className="space-y-3 md:space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-outline-variant/30 bg-surface-container px-3 py-1.5 font-mono text-xs tracking-widest text-primary">
            <Terminal className="h-3.5 w-3.5" />
            <span>PORTFOLIO</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-5xl leading-tight font-extrabold tracking-tight text-text-primary md:text-7xl">
              Alex Muñoz
            </h1>
            <h2 className="text-xl font-bold tracking-tight text-on-surface-variant/90 md:text-xl">
              WordPress & Next.js Developer
            </h2>
          </div>
          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-4 pt-6 md:col-span-2"
          >
            <Button
              variant="primary"
              size="md"
              onClick={() => {
                const el = document.getElementById("projects");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group"
            >
              <span>VER PROYECTOS</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              variant="secondary"
              size="md"
              onClick={() => {
                const el = document.getElementById("contact");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>Contacto</span>
            </Button>
          </motion.div>

          {/* Status badge */}
          <div className="flex items-center gap-4 pt-8 font-mono text-xs text-text-muted opacity-60 md:col-span-2">
            <span>{"// DISPONIBLE PARA NUEVOS PROYECTOS"}</span>
            <span className="h-2 w-2 animate-ping rounded-full bg-emerald-400" />
          </div>
        </div>

        {/* Right column: description */}
        <div className="description">
          {bioParagraphs.map((text, i) => (
            <p
              key={i}
              className="mb-4 font-sans text-base leading-relaxed text-on-surface-variant/80 md:text-lg"
            >
              {text.paragraph}
            </p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
