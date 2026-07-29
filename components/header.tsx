"use client";

import { useMemo } from "react";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { menuItems, headerLabels } from "@/data";
import Link from "next/link";
import { useScrollSpy } from "@/lib/hooks/use-scroll-spy";

export function Header() {
  const sectionIds = useMemo(
    () => [...menuItems.map((item) => item.href.substring(1)), "contact"],
    []
  );
  const { activeSection, scrolled } = useScrollSpy(sectionIds);

  return (
    <>
      {/* Top Desktop Navigation */}
      <header
        className={`fixed top-0 right-0 left-0 z-50 hidden transition-all duration-300 md:block ${
          scrolled
            ? "border-b border-outline-variant/30 bg-background/80 py-3 shadow-lg shadow-black/20 backdrop-blur-md"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="mx-auto flex h-12 max-w-7xl items-center justify-between px-6 md:px-16">
          {/* Desktop Nav Items */}
          <div className="hidden items-center gap-6 md:flex lg:gap-8">
            {menuItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative py-1 font-mono text-xs tracking-wider transition-all duration-200 ${
                    isActive
                      ? "font-bold text-primary"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute right-0 bottom-0 left-0 h-[2px] animate-pulse rounded-full bg-primary" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Action CTA */}
          <div className="flex items-center gap-3">
            <Button
              variant="primary"
              size="sm"
              onClick={() => window.open("#contact", "_self")}
              className="flex items-center gap-2"
            >
              <FileText className="h-4 w-4" />
              <span>{headerLabels.contactButton}</span>
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile Bottom Navigation Bar*/}
      <nav className="fixed right-0 bottom-0 left-0 z-50 flex items-center justify-around border-t border-outline-variant/40 bg-surface-container-high/90 px-4 py-2 shadow-2xl backdrop-blur-lg md:hidden">
        {headerLabels.nav.map(({ id, label, icon: Icon }) => (
          <Link
            key={id}
            href={`#${id}`}
            className={`flex flex-col items-center gap-1 ${
              activeSection === id ? "text-primary" : "text-on-surface-variant"
            }`}
          >
            <Icon className="h-5 w-5" />
            <span className="font-mono text-[10px]">{label}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}
