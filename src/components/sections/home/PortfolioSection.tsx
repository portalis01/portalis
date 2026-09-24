"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { PortfolioProject } from "@/types/portfolio";

interface PortfolioSectionProps {
  projects: PortfolioProject[];
  onOpenLightbox: (index: number) => void;
}

export default function PortfolioSection({ projects, onOpenLightbox }: PortfolioSectionProps) {
  return (
    <section id="portfolio" className="py-24 px-6 md:px-12 bg-white border-t border-b border-warm-gold/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16">
          <div>
            <span className="text-forest-green text-xs uppercase tracking-[0.3em] block mb-4">
              Our Work
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl leading-tight text-forest-green">
              Our Portfolio
            </h2>
          </div>
          <p className="text-charcoal-black text-xs font-normal max-w-sm mt-4 lg:mt-0 leading-relaxed">
            A selection of refined spaces we have designed, approved, and brought to life in the UAE.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {projects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                onClick={() => onOpenLightbox(index)}
                className="group cursor-pointer border border-warm-gold/20 overflow-hidden flex flex-col justify-between aspect-[0.85] bg-light-cream hover:border-forest-green/40 transition-all duration-300 hover:shadow-md"
              >
                <div className="relative flex-1 overflow-hidden aspect-[4/3] border-b border-warm-gold/10">
                  <Image
                    src={project.src}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 350px"
                  />
                </div>
                <div className="p-6 bg-white flex flex-col space-y-2">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-warm-gold font-semibold">
                    {project.category}
                  </span>
                  <h3 className="font-heading text-lg text-forest-green leading-snug group-hover:text-warm-gold transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-charcoal-black text-xs font-normal leading-relaxed line-clamp-2">
                    {project.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
