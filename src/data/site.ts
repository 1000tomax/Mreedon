import type { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Mreedon',
  title: 'Mreedon - Developer Portfolio',
  description:
    'Portfolio showcasing web development projects including gaming tools, financial calculators, and more.',
  url: 'https://mreedon.com',
  author: 'Mreedon',
  social: [
    {
      platform: 'GitHub',
      url: 'https://github.com/1000tomax',
    },
  ],
};

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/#projects' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];
