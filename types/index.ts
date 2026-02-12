
export type ColorVariant = 'primary' | 'secondary' | 'accent' | 'success' | 'info';

export interface NavItem {
  label: string;
  href: string;
}

export interface Program {
  title: string;
  age: string;
  description: string;
  color: string;
  icon: string;
  image: string;
}

export interface Facility {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  parentOf: string;
  comment: string;
  avatar: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  contact: {
    address: string;
    phone: string;
    email: string;
    whatsapp: string;
    mapsEmbed: string;
    mapsLink: string;
  };
  socials: {
    facebook: string;
    instagram: string;
    youtube: string;
  };
}
