"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");

  useEffect(() => {
    if (isStudio) return;

    // Respect "Reduce motion" — keep normal browser scrolling
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      lerp: 0.1,            // smooth but not floaty
      smoothWheel: true,    // smooth mouse wheel / trackpad on desktop
      syncTouch: false,     // phones & tablets keep their own native scrolling
      anchors: { offset: -80 }, // #links glide to sections, clear of the fixed menu
      autoRaf: true,        // Lenis runs its own frame loop — no GSAP needed
    });

    return () => lenis.destroy();
  }, [isStudio]);

  return <>{children}</>;
}