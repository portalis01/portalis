import type { NavLink, FooterLink } from "@/types/navigation";

export const NAV_LINKS: NavLink[] = [
  { name: "Home", href: "/", anchor: "#home" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/#portfolio", anchor: "#portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/#contact", anchor: "#contact" },
];

export const FOOTER_LINKS: FooterLink[] = [
  { name: "Home", href: "/#home", isAnchor: true, targetId: "home" },
  { name: "About", href: "/about", isAnchor: false },
  { name: "Services", href: "/services", isAnchor: false },
  { name: "Portfolio", href: "/#portfolio", isAnchor: true, targetId: "portfolio" },
  { name: "Blog", href: "/blog", isAnchor: false },
  { name: "Contact", href: "/#contact", isAnchor: true, targetId: "contact" },
];

export const FOOTER_SERVICES = [
  "Design Development",
  "Turnkey Projects",
  "Corporate Interiors",
  "MEP Systems",
  "F&B & Hospitality Fit-Outs",
  "Retail & Wellness / Healthcare",
  "Joinery Services",
  "Approvals & Compliance",
] as const;

/** Section IDs used for scroll-based active detection */
export const HOMEPAGE_SECTIONS = [
  "home",
  "about",
  "gallery",
  "services",
  "portfolio",
  "contact",
] as const;
