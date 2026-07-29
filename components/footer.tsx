import Link from "next/link";

import { Cpu } from "lucide-react";
import { footerData } from "@/data";

export function Footer() {
  return (
    <footer className="mt-20 mb-16 border-t border-outline-variant/30 bg-background py-12 md:mb-0">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-16">
        {/* Copyright / Info */}
        <div className="text-on-surface font-mono text-xs text-text-muted">
          <p>{footerData.copyright}</p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          {footerData.links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-text-muted transition-all hover:-translate-y-0.5 hover:text-primary"
            >
              <svg
                className="h-4 w-4 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d={link.icon} />
              </svg>
              <span>{link.label}</span>
            </Link>
          ))}
        </div>

        {/* System Version Stamp */}
        <div className="flex items-center gap-2 rounded-full border border-outline-variant/30 bg-surface-container px-3 py-1.5 font-mono text-[10px] text-text-muted">
          <Cpu className="h-3.5 w-3.5 text-primary" />
          <span>{footerData.version}</span>
        </div>
      </div>
    </footer>
  );
}
