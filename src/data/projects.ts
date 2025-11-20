import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    slug: 'osrs-flip-tracker',
    title: 'OSRS Flip Tracker',
    description: 'Data analysis tool for Old School RuneScape flipping with integrated flipping copilot plugin.',
    longDescription:
      'A comprehensive data analysis tool designed for Old School RuneScape players interested in item flipping. Features real-time market data analysis, profit tracking, and an integrated flipping copilot plugin that provides intelligent suggestions for maximizing profits in the Grand Exchange.',
    url: 'https://mreedon.com/guest',
    technologies: ['React', 'TypeScript', 'Data Analysis', 'OSRS API'],
    features: [
      'Real-time market data tracking',
      'Profit/loss analysis and reporting',
      'Flipping copilot plugin integration',
      'Historical price trends',
      'Trade history management',
    ],
    category: 'Gaming Tools',
    status: 'active',
  },
  {
    id: '2',
    slug: '401k-calculator',
    title: '401k Calculator',
    description: 'Personal 401k and Roth IRA portfolio tracking tool for retirement planning.',
    longDescription:
      'A personal finance tool for tracking and analyzing 401k and Roth IRA portfolios. Helps users visualize their retirement savings growth, compare different contribution strategies, and plan for their financial future with detailed projections and analytics.',
    url: 'https://401k.mreedon.com',
    technologies: ['React', 'TypeScript', 'Financial Calculations', 'Data Visualization'],
    features: [
      'Portfolio performance tracking',
      '401k contribution optimization',
      'Roth IRA calculations',
      'Retirement projections',
      'Tax implications analysis',
    ],
    category: 'Finance',
    status: 'active',
  },
  {
    id: '3',
    slug: 'gevault',
    title: 'GEVault',
    description: 'OSRS portfolio tracking and notification tool for Grand Exchange investments.',
    longDescription:
      'A sophisticated portfolio management and notification system for Old School RuneScape Grand Exchange investments. Track your in-game investments, set price alerts, and receive notifications when market conditions meet your specified criteria.',
    url: 'https://gevault.com',
    technologies: ['React', 'TypeScript', 'Real-time Notifications', 'OSRS API'],
    features: [
      'Portfolio tracking and management',
      'Custom price alerts and notifications',
      'Investment performance analytics',
      'Multi-account support',
      'Market trend analysis',
    ],
    category: 'Gaming Tools',
    status: 'active',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter((project) => project.category === category);
}
