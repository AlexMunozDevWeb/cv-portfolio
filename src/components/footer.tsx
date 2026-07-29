import Link from "next/link";

import { Cpu } from "lucide-react";
import { footerData } from "@/data";

export function Footer() {
  return (
    <footer className="border-outline-variant/30 bg-background mb-16 mt-20 border-t py-12 md:mb-0">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-16">
        {/* Copyright / Info */}
        <div className="text-on-surface text-text-muted font-mono text-xs">
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
              className="text-text-muted hover:text-primary flex items-center gap-1.5 font-mono text-xs transition-all hover:-translate-y-0.5"
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
        <div className="border-outline-variant/30 bg-surface-container text-text-muted flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[10px]">
          <Cpu className="text-primary h-3.5 w-3.5" />
          <span>{footerData.version}</span>
        </div>
      </div>
    </footer>
  );
}
