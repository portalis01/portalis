"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import FoldText from "@/components/ui/FoldText";
import { SOCIAL_LINKS } from "@/constants/social";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.log("Autoplay failed:", err);
      });
    }
  }, []);

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden py-16">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="/assets/hero_bg.mp4" type="video/mp4" />
        </video>
        {/* Dark green overlay to unify with the color palette */}
        <div className="absolute inset-0 bg-forest-green/45 backdrop-blur-[1px] mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col space-y-4">
        <FoldText
          text="LUXURY INTERIOR DESIGN . FIT-OUT . JOINERY"
          trigger="scroll"
          animationType="slide"
          once={false}
          fontSize="inherit"
          fontWeight="inherit"
          color="var(--color-warm-gold)"
          className="text-xs sm:text-sm tracking-[0.25em] uppercase font-semibold"
          style={{ lineHeight: "inherit", letterSpacing: "inherit" }}
          splitBy="word"
        />
        <div className="h-[1px] w-12 bg-warm-gold/60 mt-1 mb-4" />

        <h1 className="font-heading text-4xl sm:text-6xl md:text-8xl leading-[1.08] text-white">
          Timeless Spaces,<br />
          Designed for{" "}
          <span className="italic font-normal font-heading text-warm-gold">Life.</span>
        </h1>

        <p className="text-white/95 text-sm sm:text-base md:text-lg max-w-xl font-normal leading-relaxed pt-4">
          We create refined residential, commercial, and hospitality interiors that blend elegance, functionality, and timeless craftsmanship.
        </p>

        <div className="flex flex-col gap-3 pt-8 max-w-[480px]">
          {/* Primary Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <a
              href="#portfolio"
              onClick={scrollTo("portfolio")}
              className="bg-warm-gold hover:bg-white text-forest-green text-xs uppercase tracking-[0.2em] py-4 px-6 text-center transition-all duration-300 font-semibold shadow-sm"
            >
              EXPLORE PROJECTS
            </a>
            <a
              href="#contact"
              onClick={scrollTo("contact")}
              className="border border-warm-gold/50 hover:border-white text-warm-gold hover:text-white text-xs uppercase tracking-[0.2em] py-4 px-6 text-center transition-all duration-300 font-semibold shadow-sm bg-transparent"
            >
              BOOK CONSULTATION
            </a>
          </div>

          {/* Secondary Actions */}
          <div className="flex flex-row items-center gap-4 sm:gap-6 pt-1">
            <a
              href={SOCIAL_LINKS.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-warm-gold/50 hover:border-white text-warm-gold hover:text-white text-xs uppercase tracking-[0.2em] py-3 px-5 text-center transition-all duration-300 font-semibold shadow-sm bg-transparent flex items-center justify-center gap-2"
            >
              <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span>INSTAGRAM</span>
            </a>
            <a
              href="#about"
              onClick={scrollTo("about")}
              className="group flex items-center gap-2 text-white/95 hover:text-warm-gold text-xs uppercase tracking-[0.2em] py-3 font-semibold transition-all duration-300"
            >
              OUR PROCESS <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-white/95 group-hover:text-warm-gold" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
