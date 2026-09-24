export interface NavLink {
  name: string;
  href: string;
  anchor?: string;
}

export interface FooterLink {
  name: string;
  href: string;
  isAnchor: boolean;
  targetId?: string;
}

export interface SocialLink {
  name: string;
  href: string;
  ariaLabel: string;
}
