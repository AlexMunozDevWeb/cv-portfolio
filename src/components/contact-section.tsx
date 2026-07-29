"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

import { contact } from "@/data";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="border-outline-variant/20 border-t py-12 md:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div>
          <h3 className="text-text-primary text-3xl font-bold tracking-tight">
            {contact.title}
          </h3>
        </div>

        <p className="text-on-surface-variant/80 max-w-md font-sans text-sm leading-relaxed">
          {contact.description}
        </p>

        <div className="space-y-4 pt-4 font-mono text-sm">
          <a
            href={`mailto:${contact.email}`}
            className="text-on-surface-variant hover:text-primary flex items-center gap-3 transition-colors"
          >
            <div className="border-outline-variant/30 bg-surface-container text-primary rounded border p-2">
              <Mail className="h-4 w-4" />
            </div>
            <span>{contact.email}</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
