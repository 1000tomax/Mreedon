# Mreedon Portfolio

A personal developer portfolio built with React, TypeScript, and Vite.


## Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS v4
- **Routing**: React Router v7
- **SEO**: React Helmet Async

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run typecheck` - Run TypeScript type checking

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Page components
├── layouts/        # Layout components
├── data/           # Project and site data
├── types/          # TypeScript type definitions
├── hooks/          # Custom React hooks
├── utils/          # Utility functions
└── index.css       # Global styles with Tailwind
```

## Deployment

This project is configured for Cloudflare Pages deployment.

### Build Settings for Cloudflare Pages

- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/`

### Environment Variables

No environment variables required for basic deployment.

## Projects Featured

- **OSRS Flip Tracker** - Data analysis tool for OSRS flipping
- **401k Calculator** - Personal retirement portfolio tracking
- **GEVault** - OSRS portfolio tracking and notifications

## License

MIT
