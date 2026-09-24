"use client";

import { useState, useCallback } from "react";
import type { PortfolioProject } from "@/types/portfolio";

/**
 * Hook to manage lightbox state for portfolio project galleries.
 */
export function useLightbox(projects: PortfolioProject[]) {
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = useCallback(
    (index: number) => {
      const proj = projects[index];
      setActiveProject(proj);
      setActiveImageIndex(0);
      setLightboxOpen(true);
    },
    [projects]
  );

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const handleNextImage = useCallback(() => {
    if (!activeProject) return;
    setActiveImageIndex((prev) => (prev + 1) % activeProject.images.length);
  }, [activeProject]);

  const handlePrevImage = useCallback(() => {
    if (!activeProject) return;
    setActiveImageIndex(
      (prev) => (prev - 1 + activeProject.images.length) % activeProject.images.length
    );
  }, [activeProject]);

  const handleSelectImage = useCallback((index: number) => {
    setActiveImageIndex(index);
  }, []);

  return {
    activeProject,
    activeImageIndex,
    lightboxOpen,
    openLightbox,
    closeLightbox,
    handleNextImage,
    handlePrevImage,
    handleSelectImage,
  };
}
