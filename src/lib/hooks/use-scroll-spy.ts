"use client";

import { useEffect, useState } from "react";

interface UseScrollSpyOptions {
  offset?: number;
  scrollThreshold?: number;
}

export function useScrollSpy(
  sectionIds: readonly string[],
  options: UseScrollSpyOptions = {}
) {
  const { offset = 200, scrollThreshold = 20 } = options;
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(
    () => typeof window !== "undefined" && window.scrollY > scrollThreshold
  );

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    const updateScrolled = () => setScrolled(window.scrollY > scrollThreshold);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: `-${offset}px 0px -55% 0px`, threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateScrolled);
    };
  }, [sectionIds, offset, scrollThreshold]);

  return { activeSection, scrolled };
}
