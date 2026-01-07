# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with React + TypeScript + Vite, showcasing software development projects with a focus on healthcare and business management systems (Laravel-based). The site is deployed at `https://portofolio.astareyhan.my.id/`.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint

# Preview production build
npm run preview
```

## Architecture & Key Patterns

### Data Structure
The portfolio uses centralized data arrays for content management:
- [src/data/ProjectList.tsx](src/data/ProjectList.tsx) - Array of project objects with interface defining slug, title, descriptions, images, tags, features, challenges, metrics, and URLs
- [src/data/SkillsList.tsx](src/data/SkillsList.tsx) - Array of skill objects with name, icon (React components), and URLs

**When adding content:** Edit these arrays directly. No backend or CMS is used.

### Routing
Uses React Router with two main routes:
- `/` - Single-page scrollable layout with sections: Hero, Skills, Projects, Contact
- `/projects/:slug` - Dynamic project detail pages that look up projects by slug in ProjectList

Project slugs are URL-safe identifiers (e.g., "micro-banking-system", "auto-report").

### Component Structure
```
src/
├── components/
│   ├── ui/           # shadcn/ui components (Button, Card, Badge)
│   ├── Hero.tsx      # Landing section
│   ├── Skills.tsx    # Skills grid from SkillsList
│   ├── Projects.tsx  # Project cards grid from ProjectList
│   ├── ProjectDetail.tsx  # Dynamic project detail page
│   └── Contact.tsx   # Contact form/section
├── contexts/
│   └── ThemeContext.tsx  # Theme provider
├── lib/
│   └── utils.ts      # cn() utility for merging Tailwind classes
└── data/
    └── *.tsx         # Content data arrays
```

### UI Components
Uses shadcn/ui pattern with:
- `class-variance-authority` for variant-based styling
- `clsx` + `tailwind-merge` via the `cn()` utility
- Radix UI primitives (@radix-ui/react-slot)
- All UI components in [src/components/ui/](src/components/ui/)

### Styling
- Tailwind CSS v4 via Vite plugin
- Path alias `@` maps to `./src`
- Responsive design with mobile-first approach (using `md:`, `lg:` breakpoints)
- Custom animations using tw-animate-css

### Project Images
Static images served from `/public/projects/{project-slug}/` directory structure. Each project in ProjectList references images with paths like `/projects/koperasi/dashboard.png`.

## Key Implementation Notes

### Adding a New Project
1. Create project image directory in `/public/projects/{slug}/`
2. Add project object to [ProjectList.tsx](src/data/ProjectList.tsx):
   - Set unique `slug` for routing
   - Include `image` (thumbnail), `images` array (gallery)
   - Add `tags`, `features`, and optionally `challenges`, `metrics`, `demoUrl`, `githubUrl`
   - Set `active: true` to display in projects section

### Project Detail Page
The [ProjectDetail.tsx](src/components/ProjectDetail.tsx) component:
- Looks up project by slug from URL params
- Renders full description, features list, challenges, metrics, tech stack
- Uses ImageGallery component for image carousel
- Includes back navigation that scrolls to projects section
- Redirects to home if slug not found

### Icons
Uses React Icons library:
- `react-icons/si` for brand icons (SiLaravel, SiReact, etc.)
- `react-icons/fa` for FontAwesome icons
- `lucide-react` for UI icons (ArrowLeft, ExternalLink, CheckCircle2)

### TypeScript Configuration
- Path alias `@/*` configured in both [vite.config.ts](vite.config.ts) and tsconfig
- Strict mode enabled
- Dual tsconfig setup (tsconfig.app.json for app, tsconfig.node.json for build)

## Build & Deployment

The project builds to `/dist/` directory. The `homepage` in package.json is set to the deployment URL for asset resolution.
