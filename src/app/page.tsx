"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import HeroSection from "@/components/sections/home/HeroSection";
import ApproachSection from "@/components/sections/home/ApproachSection";
import AboutSection from "@/components/sections/home/AboutSection";
import CoreValuesSection from "@/components/sections/home/CoreValuesSection";
import GallerySection from "@/components/sections/home/GallerySection";
import ServicesGridSection from "@/components/sections/home/ServicesGridSection";
import PortfolioSection from "@/components/sections/home/PortfolioSection";
import ContactSection from "@/components/sections/home/ContactSection";
import { PORTFOLIO_PROJECTS } from "@/constants/portfolio";
import { useLightbox } from "@/hooks/useLightbox";

export default function HomePage() {
  const {
    activeProject,
    activeImageIndex,
    lightboxOpen,
    openLightbox,
    closeLightbox,
    handleNextImage,
    handlePrevImage,
    handleSelectImage,
  } = useLightbox(PORTFOLIO_PROJECTS);

  return (
    <>
      <Navbar />

      <main className="flex-1 w-full bg-light-cream">
        <HeroSection />
        <ApproachSection />
        <AboutSection />
        <CoreValuesSection />
        <GallerySection />
        <ServicesGridSection />
        <PortfolioSection
          projects={PORTFOLIO_PROJECTS}
          onOpenLightbox={openLightbox}
        />
        <ContactSection />
      </main>

      <Footer />

      {/* Lightbox for Portfolio Projects */}
      {activeProject && (
        <Lightbox
          isOpen={lightboxOpen}
          project={{
            title: activeProject.title,
            category: activeProject.category,
            desc: activeProject.desc,
            images: activeProject.images,
          }}
          currentIndex={activeImageIndex}
          onClose={closeLightbox}
          onNext={handleNextImage}
          onPrev={handlePrevImage}
          onSelectImage={handleSelectImage}
        />
      )}
    </>
  );
}
