import type { PortfolioProject, GalleryCarouselImage } from "@/types/portfolio";

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 1,
    title: "Shade (Citywalk)",
    category: "Hospitality",
    src: "/projects/shade-citywalk/img1.webp",
    images: [
      "/projects/shade-citywalk/img1.webp",
      "/projects/shade-citywalk/img2.webp",
      "/projects/shade-citywalk/img3.webp",
      "/projects/shade-citywalk/img4.webp",
      "/projects/shade-citywalk/img5.webp",
    ],
    desc: "High-end luxury salon & premium styling venue combining arched vanity lighting, bespoke joinery, and premium marble finishes at Citywalk, Dubai.",
  },
  {
    id: 2,
    title: "La Brioche",
    category: "Hospitality",
    src: "/projects/labrioche-waters-edge/DSC_00000.webp",
    images: [
      "/projects/labrioche-waters-edge/DSC_00000.webp",
      "/projects/labrioche-waters-edge/DSC_0004.webp",
      "/projects/labrioche-waters-edge/DSC_0007.webp",
      "/projects/labrioche-waters-edge/DSC_0017.webp",
      "/projects/labrioche-waters-edge/DSC_0018.webp",
    ],
    desc: "Bespoke French bistro and bakery interior fit-out at Water's Edge, Abu Dhabi.",
  },
  {
    id: 3,
    title: "Turtle Cove Cafe (Saadiyat Island)",
    category: "Hospitality",
    src: "/projects/turtle-cove-cafe/DSC_0377.webp",
    images: [
      "/projects/turtle-cove-cafe/DSC_0377.webp",
      "/projects/turtle-cove-cafe/DSC_0384.webp",
      "/projects/turtle-cove-cafe/DSC_0389.webp",
      "/projects/turtle-cove-cafe/DSC_0391.webp",
      "/projects/turtle-cove-cafe/DSC_0393.webp",
    ],
    desc: "Artisanal coastal cafe and specialty coffee venue on Saadiyat Island, Abu Dhabi.",
  },
  {
    id: 4,
    title: "Vapiano (ZCC)",
    category: "Hospitality",
    src: "/projects/vapiano-zcc/IMG_0081.webp",
    images: [
      "/projects/vapiano-zcc/IMG_0081.webp",
      "/projects/vapiano-zcc/IMG_0082.webp",
      "/projects/vapiano-zcc/IMG_0084.webp",
      "/projects/vapiano-zcc/IMG_0086.webp",
      "/projects/vapiano-zcc/IMG_0087.webp",
    ],
    desc: "Modern Italian fast-casual restaurant fit-out and joinery work at ZCC, Abu Dhabi.",
  },
  {
    id: 5,
    title: "Domino's (Makani Mall)",
    category: "Hospitality",
    src: "/projects/dominos-makani-mall/DSC_0001-01.webp",
    images: [
      "/projects/dominos-makani-mall/DSC_0001-01.webp",
      "/projects/dominos-makani-mall/DSC_0020-01.webp",
      "/projects/dominos-makani-mall/DSC_0021-01.webp",
      "/projects/dominos-makani-mall/DSC_0024-02.webp",
      "/projects/dominos-makani-mall/DSC_0028-02.webp",
    ],
    desc: "Turnkey interior fit-out and architectural execution for Domino's Pizza at Makani Mall.",
  },
];

export const GALLERY_CAROUSEL_IMAGES: GalleryCarouselImage[] = [
  { num: "01", label: "SHADE RESTOBAR", src: "/projects/shade-citywalk/DSC_0003.webp", alt: "Shade Restobar Citywalk" },
  { num: "02", label: "LA BRIOCHE BISTRO", src: "/projects/labrioche-waters-edge/DSC_00000.webp", alt: "La Brioche Waters Edge" },
  { num: "03", label: "TURTLE COVE CAFE", src: "/projects/turtle-cove-cafe/DSC_0377.webp", alt: "Turtle Cove Cafe Saadiyat" },
  { num: "04", label: "VAPIANO RESTAURANT", src: "/projects/vapiano-zcc/IMG_0081.webp", alt: "Vapiano ZCC" },
  { num: "05", label: "DOMINO'S MAKANI", src: "/projects/dominos-makani-mall/DSC_0001-01.webp", alt: "Dominos Makani Mall" },
  { num: "06", label: "SHADE LOUNGE", src: "/projects/shade-citywalk/DSC_0010.webp", alt: "Shade Lounge Area" },
  { num: "07", label: "LA BRIOCHE INTERIOR", src: "/projects/labrioche-waters-edge/DSC_0007.webp", alt: "La Brioche Interior" },
  { num: "08", label: "TURTLE COVE LOUNGE", src: "/projects/turtle-cove-cafe/DSC_0384.webp", alt: "Turtle Cove Lounge" },
];
