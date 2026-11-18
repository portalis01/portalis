"use client";

import Image from "next/image";
import Lightbox from "@/components/Lightbox";
import { useLightbox } from "@/hooks/useLightbox";
import type { PortfolioProject } from "@/types/portfolio";

export default function ProjectGallery({ project }: { project: PortfolioProject }) {
  const {
    activeProject,
    activeImageIndex,
    lightboxOpen,
    openLightbox,
    closeLightbox,
    handleNextImage,
    handlePrevImage,
    handleSelectImage,
  } = useLightbox([project]);

  // Open the viewer on the photo that was clicked
  const openAt = (imageIndex: number) => {
    openLightbox(0);
    handleSelectImage(imageIndex);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
        {project.images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => openAt(i)}
            aria-label={`Open photo ${i + 1} of ${project.title}`}
            className="group relative aspect-[4/3] overflow-hidden bg-forest-green/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-green"
          >
            <Image
              src={src}
              alt={`${project.title}, photo ${i + 1}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </button>
        ))}
      </div>

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