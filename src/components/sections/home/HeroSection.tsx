"use client";

import { useEffect, useRef } from "react";
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
    <section
      id="home"
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-28 pb-20 md:py-16"
    >
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

        {/* Phone: even shade over the whole video so all text is readable */}
        <div className="absolute inset-0 bg-black/50 md:hidden" />

        {/* Desktop: soft shade on the left only, video stays clear */}
        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-black/45 via-black/10 to-transparent" />

        {/* Top shade so the menu stays readable */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/35 to-transparent" />
      </div>

      <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col space-y-4">
        {/* H1 for Google: what we are and where */}
        <h1 className="text-warm-gold text-xs sm:text-sm tracking-[0.25em] uppercase font-semibold drop-shadow-md">
          Interior Fit-Out Company in UAE
        </h1>
        <div className="h-[1px] w-12 bg-warm-gold/60 mt-1 mb-2 md:mb-4" />

        {/* Big headline — the visual statement */}
        <p className="font-heading text-[2.6rem] sm:text-6xl md:text-8xl leading-[1.05] md:leading-[1.08] text-white drop-shadow-lg">
          Timeless Spaces,<br />
          Designed for{" "}
          <span className="italic font-normal font-heading text-warm-gold">Life.</span>
        </p>

        <p className="text-white/90 text-[15px] sm:text-base md:text-lg max-w-xl font-normal leading-relaxed pt-2 md:pt-4 drop-shadow-md">
          We turn your vision into thoughtfully designed spaces, combining creative expertise, precision craftsmanship and seamless execution.
        </p>

        {/* Actions: compact capsules side by side */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 pt-6 md:pt-8">
          <a
            href="#projects"
            onClick={scrollTo("projects")}
            className="rounded-full bg-warm-gold hover:bg-white text-forest-green text-[10px] sm:text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.18em] font-semibold py-2.5 px-5 sm:py-3.5 sm:px-8 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Explore Projects
          </a>
          <a
            href="#contact"
            onClick={scrollTo("contact")}
            className="rounded-full border border-white/70 hover:bg-white hover:text-forest-green text-white text-[10px] sm:text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.18em] font-semibold py-2.5 px-5 sm:py-3.5 sm:px-8 transition-colors duration-300 bg-black/20 backdrop-blur-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Book Consultation
          </a>

          {/* Instagram — plain white icon */}
          <a
            href={SOCIAL_LINKS.instagram.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Portalis on Instagram"
            className="ml-1 sm:ml-2 p-1 text-white hover:text-warm-gold transition-colors duration-300 drop-shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}