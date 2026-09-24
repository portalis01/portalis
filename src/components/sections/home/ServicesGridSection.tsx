"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FoldText from "@/components/ui/FoldText";
import { SERVICE_CARDS } from "@/constants/services";

export default function ServicesGridSection() {
  return (
    <section id="services" className="relative py-24 px-6 md:px-12 bg-light-cream overflow-hidden">
      {/* Faint Architectural Vault Arches Vector Backdrop */}
      <div className="absolute inset-0 pointer-events-none opacity-5 flex items-center justify-center">
        <svg className="w-[80%] h-[80%] text-forest-green" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M10 90 C 10 30, 90 30, 90 90" />
          <path d="M20 90 C 20 40, 80 40, 80 90" />
          <path d="M30 90 C 30 50, 70 50, 70 90" />
          <path d="M40 90 C 40 60, 60 60, 60 90" />
          <line x1="50" y1="20" x2="50" y2="90" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 space-y-6">
          <div>
            <span className="text-warm-gold text-xs uppercase tracking-[0.3em] font-semibold block">
              OUR SERVICES
            </span>
            <div className="h-[2px] w-10 bg-warm-gold/60 mt-3" />
          </div>

          <div className="flex flex-col items-center text-center space-y-4 pt-4">
            <h3 className="font-heading text-3xl sm:text-[2.5rem] text-forest-green leading-tight">
              We ARE
            </h3>
            <h2 className="font-heading text-4xl sm:text-[3.5rem] leading-none tracking-wide">
              <FoldText
                text="EXPERTISE"
                trigger="scroll"
                hinge="top"
                duration={0.65}
                stagger={0.045}
                fontSize="inherit"
                fontWeight="inherit"
                color="var(--color-warm-gold)"
                className="font-bold font-heading"
                style={{ lineHeight: "inherit", letterSpacing: "inherit" }}
                once={false}
              />{" "}
              <span className="text-forest-green uppercase font-normal">IN</span>
            </h2>

            <div className="pt-2">
              <Link
                href="/services"
                className="circle-reveal-btn border border-warm-gold/50 px-6 py-2.5 text-[10px] uppercase tracking-[0.25em] text-warm-gold hover:text-white hover:border-warm-gold font-medium transition-colors duration-300 inline-flex items-center gap-3"
              >
                Learn More
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>

        {/* 8 rounded cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 w-full">
          {SERVICE_CARDS.map((svc) => (
            <Link
              key={svc.id}
              href={`/services/${svc.id}`}
              className="group flex flex-col items-center"
            >
              <div className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden border border-warm-gold/15 shadow-sm transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-md group-hover:border-warm-gold">
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 300px"
                />
              </div>
              <h3 className="font-heading text-base sm:text-lg text-forest-green leading-snug font-semibold text-center mt-5 group-hover:text-warm-gold transition-colors duration-300">
                {svc.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
