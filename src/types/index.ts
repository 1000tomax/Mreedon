export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  url: string;
  technologies: string[];
  features: string[];
  category: string;
  status: 'active' | 'development' | 'archived';
  image?: string;
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  author: string;
  email?: string;
  social: SocialLink[];
}
