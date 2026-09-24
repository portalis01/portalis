export interface PortfolioProject {
  id: number;
  title: string;
  category: string;
  src: string;
  images: string[];
  desc: string;
}

export interface GalleryCarouselImage {
  num: string;
  label: string;
  src: string;
  alt: string;
}
