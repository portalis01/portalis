export interface ServiceCard {
  id: string;
  title: string;
  image: string;
}

export interface ServiceDetail {
  title: string;
  tagline: string;
  image: string;
  gallery: string[];
  description: string;
  pillars: ServicePillar[];
  process: ServiceProcessStep[];
  whatsIncluded: string[];
  ctaHeadline: string;
  ctaDescription: string;
}

export interface ServicePillar {
  icon: string;
  label: string;
}

export interface ServiceProcessStep {
  step: string;
  title: string;
  desc: string;
}

export interface ServiceListItem {
  slug: string;
  title: string;
  tagline: string;
  image: string;
  description: string;
  whatsIncluded: string[];
}
