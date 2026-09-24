"use client";

import FoldText from "@/components/ui/FoldText";
import { CardCarousel } from "@/components/ui/CardCarousel";
import { GALLERY_CAROUSEL_IMAGES } from "@/constants/portfolio";

export default function GallerySection() {
  return (
    <section id="gallery" className="relative py-24 px-6 md:px-12 bg-light-cream border-t border-forest-green/10 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 space-y-24">

        {/* PHOTO LIBRARY BLOCK */}
        <div>
          {/* Section Header */}
          <div className="mb-12">
            <span className="text-warm-gold text-xs uppercase tracking-[0.3em] font-semibold block mb-3">
              PHOTO LIBRARY
            </span>
            <div className="h-[2px] w-10 bg-warm-gold/60 mt-3 mb-6" />

            <h2 className="font-heading text-4xl sm:text-5xl md:text-[3.25rem] leading-tight text-forest-green">
              Spaces That Inspire,<br />
              <FoldText
                text="Details That Matter."
                trigger="scroll"
                hinge="top"
                duration={0.65}
                stagger={0.045}
                fontSize="inherit"
                fontWeight="inherit"
                color="var(--color-warm-gold)"
                className="font-heading"
                style={{ lineHeight: "inherit", letterSpacing: "inherit" }}
                once={false}
              />
            </h2>
            <p className="text-charcoal-black/80 text-xs sm:text-sm font-normal max-w-xl mt-4 leading-relaxed">
              A curated collection of moments, textures, and compositions that reflect our design philosophy.
            </p>
          </div>

          {/* Interactive 3D Card Carousel */}
          <div className="pt-4">
            <CardCarousel
              images={GALLERY_CAROUSEL_IMAGES}
              autoplayDelay={2500}
              showPagination={true}
              showNavigation={true}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
