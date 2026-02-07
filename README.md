# PSEO Growth Stack

Launch Programmatic SEO for free, at any scale.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Components:** Custom shadcn/ui-inspired components

## Features

- 🚀 **SSR/SSG Ready** - Full server-side rendering support
- 🔍 **SEO Optimized** - Meta tags, Open Graph, JSON-LD structured data
- 📱 **Responsive** - Mobile-first design
- ✨ **Smooth Animations** - Scroll-triggered animations with Framer Motion
- 🎨 **Dark Theme** - Beautiful dark UI with gradient accents
- 📄 **Sitemap & Robots.txt** - Auto-generated for search engines

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles & CSS variables
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Home page with JSON-LD
│   ├── sitemap.ts       # Dynamic sitemap
│   └── robots.ts        # Robots.txt config
├── components/
│   ├── landing/         # Landing page sections
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── WhatYouCanBuild.tsx
│   │   ├── FreeLayer.tsx
│   │   ├── PSEOBuilder.tsx
│   │   ├── TwoSidedGrowth.tsx
│   │   ├── ForAudiences.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── FinalCTA.tsx
│   │   └── Footer.tsx
│   └── ui/
│       └── button.tsx   # Reusable button component
└── lib/
    └── utils.ts         # Utility functions
```

## SEO Features

- **Meta Tags:** Title, description, keywords
- **Open Graph:** Full OG support for social sharing
- **Twitter Cards:** Large image cards
- **Structured Data:** SoftwareApplication & Organization schemas
- **Sitemap:** Auto-generated XML sitemap
- **Robots.txt:** Crawler instructions
- **Canonical URLs:** Proper canonical handling

## Deployment

This project is optimized for Vercel deployment:

```bash
vercel
```

Or build and deploy to any Node.js hosting:

```bash
npm run build
npm start
```

## License

© 2026 Programmatic SEO B.V. All rights reserved.
