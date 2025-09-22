# Kara Code Project Overview (kara-code.ir)

## Project Description
Kara Code is a premium web development services website built with modern technologies. The site showcases web development services.

## Folder Structure
```
.
├── app/                          # Next.js app directory with pages and layouts
│   ├── globals.css              # Global CSS styles
│   ├── layout.tsx               # Root layout component
│   ├── page.tsx                 # Home page
│   ├── contact/                 # Contact page directory
│   │   └── page.tsx             # Contact page component
│   └── verify-phone/            # Phone verification page directory
│       └── page.tsx             # Phone verification component
├── components/                  # Reusable UI components
│   ├── theme-provider.tsx       # Theme provider component
│   ├── ui/                      # UI component library (shadcn/ui)
│   └── ...
├── hooks/                       # Custom React hooks
├── lib/                         # Utility functions
├── public/                      # Static assets (images, icons)
├── styles/                      # Additional styling files
├── next.config.mjs             # Next.js configuration
├── package.json                # Project dependencies and scripts
├── tsconfig.json               # TypeScript configuration
└── ...
```

## Technologies Used
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with custom configuration
- **UI Components**: shadcn/ui with Radix UI primitives
- **Fonts**: Geist font family from Vercel
- **Icons**: Lucide React icons
- **Form Handling**: React Hook Form with Zod validation
- **State Management**: React Context API
- **Animations**: Tailwind CSS animations
- **Deployment**: Optimized for Vercel with Analytics integration

## Key Dependencies
### Core Framework
- `next`: 14.2.16 - React framework for production
- `react`: ^18 - UI library
- `react-dom`: ^18 - React DOM rendering

### UI & Styling
- `tailwindcss`: ^4.1.9 - Utility-first CSS framework
- `@tailwindcss/postcss`: ^4.1.9 - PostCSS plugin for Tailwind
- `tw-animate-css`: 1.3.3 - Animation library for Tailwind
- `geist`: latest - Vercel's font family
- `lucide-react`: ^0.454.0 - Icon library

### Component Library (shadcn/ui)
- `@radix-ui/react-*`: Multiple Radix UI primitives for accessible UI components
- `class-variance-authority`: ^0.7.1 - Utility for managing component variants
- `clsx`: ^2.1.1 - Utility for constructing className strings
- `tailwind-merge`: ^2.5.5 - Utility for merging Tailwind CSS classes
- `tailwindcss-animate`: ^1.0.7 - Animation utilities for Tailwind

### Forms & Validation
- `react-hook-form`: ^7.60.0 - Performant, flexible forms with easy validation
- `@hookform/resolvers`: ^3.10.0 - Resolvers for React Hook Form
- `zod`: 3.25.67 - TypeScript-first schema declaration and validation

### Utilities
- `date-fns`: 4.1.0 - Modern JavaScript date utility library
- `recharts`: 2.15.4 - Charting library built with D3
- `embla-carousel-react`: 8.5.1 - Carousel/slider library
- `cmdk`: 1.0.4 - Command menu component
- `sonner`: ^1.7.4 - Toast notification library
- `next-themes`: ^0.4.6 - Theme management for Next.js
- `@vercel/analytics`: latest - Analytics for Vercel deployments
