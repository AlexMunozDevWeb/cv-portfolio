"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

import { contact } from "@/data";

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-outline-variant/20 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div>
          <h3 className="text-3xl font-bold tracking-tight text-text-primary">
            {contact.title}
          </h3>
        </div>

        <p className="max-w-md font-sans text-sm leading-relaxed text-on-surface-variant/80">
          {contact.description}
        </p>

        <div className="space-y-4 pt-4 font-mono text-sm">
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-3 text-on-surface-variant transition-colors hover:text-primary"
          >
            <div className="rounded border border-outline-variant/30 bg-surface-container p-2 text-primary">
              <Mail className="h-4 w-4" />
            </div>
            <span>{contact.email}</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
