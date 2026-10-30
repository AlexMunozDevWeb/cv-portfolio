import { Mail } from "lucide-react";

import { contact } from "@/data";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="border-outline-variant/20 border-t py-12 md:py-24"
    >
      <div className="animate-fade-in-up space-y-6 motion-reduce:animate-none">
        <div>
          <h2
            id="contact-title"
            className="text-text-primary text-3xl font-bold tracking-tight"
          >
            {contact.title}
          </h2>
        </div>

        <p className="text-on-surface-variant/80 max-w-md font-sans text-sm leading-relaxed">
          {contact.description}
        </p>

        <div className="space-y-4 pt-4 font-mono text-sm">
          <a
            href={`mailto:${contact.email}`}
            className="text-on-surface-variant hover:text-primary flex items-center gap-3 transition-colors"
          >
            <div
              aria-hidden="true"
              className="border-outline-variant/30 bg-surface-container text-primary rounded border p-2"
            >
              <Mail className="h-4 w-4" />
            </div>
            <span>{contact.email}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
