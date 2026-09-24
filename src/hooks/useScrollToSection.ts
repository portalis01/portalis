"use client";

import { useCallback } from "react";

/**
 * Hook for smooth scrolling to a section by ID.
 * Prevents default anchor behavior and scrolls smoothly.
 */
export function useScrollToSection() {
  const scrollToSection = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
      e.preventDefault();
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    },
    []
  );

  return scrollToSection;
}
