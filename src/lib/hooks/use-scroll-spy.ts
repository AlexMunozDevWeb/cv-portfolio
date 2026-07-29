"use client";

import { useEffect, useState } from "react";

interface UseScrollSpyOptions {
  offset?: number;
  scrollThreshold?: number;
}

export function useScrollSpy(
  sectionIds: string[],
  options: UseScrollSpyOptions = {}
) {
  const { offset = 200, scrollThreshold = 20 } = options;
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(
    () => typeof window !== "undefined" && window.scrollY > scrollThreshold
  );

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > scrollThreshold);

      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (
          rect.top <= offset ||
          (rect.top < window.innerHeight && rect.bottom > 0)
        ) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds, offset, scrollThreshold]);

  return { activeSection, scrolled };
}
