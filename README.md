
# UI Developer Challenge 2026

A modern candidate registration application built with **Next.js 16**, **React 19**, and **Tailwind CSS v4**. This project demonstrates advanced front-end development practices including semantic design tokens, accessibility-first architecture, and React Server Components.

![Design System Preview](screenshots/design-system.png)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

### Build for Production

```bash
pnpm run build
pnpm start
```

## Challenge Requirements

This project addresses all requirements from the UI Developer Challenge:

### Design Requirements

| Requirement        | Implementation                                                                     |
| ------------------ | ---------------------------------------------------------------------------------- |
| System Fonts       | Uses native system font stack for optimal performance                              |
| Form Validation    | Comprehensive validation with real-time feedback and accessible error states       |
| Responsive Design  | Mobile-first approach with breakpoints for all viewport sizes                      |
| Accessibility      | WCAG 2.1 AA compliant with semantic HTML, ARIA attributes, and keyboard navigation |
| Component Library  | Custom component library built with Radix UI primitives                            |
| Visual Consistency | Design token system ensuring consistency across all internal services              |

### Technical Requirements

| Requirement     | Implementation                                                   |
| --------------- | ---------------------------------------------------------------- |
| Modern HTML     | Semantic HTML5 with proper document structure                    |
| Modern CSS      | Tailwind CSS v4 with CSS custom properties and OKLCH color space |
| React Framework | Next.js 16 with App Router and React 19 features                 |
| Browser Support | Latest 2 versions of Firefox, Chrome, Edge, and Safari           |
| TypeScript      | Full type safety throughout the codebase                         |

## Architecture

### Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── register/           # Candidate registration page
│   ├── about/              # Challenge information
│   └── docs/               # Design system documentation
│       ├── design-system/  # Color tokens & usage
│       └── components/     # Component showcase
├── components/
│   ├── layout/             # Layout primitives (Container, VStack, Grid, etc.)
│   └── ui/                 # UI components (Button, Form, Dialog, etc.)
├── styles/
│   ├── globals.css         # Global styles and utilities
│   └── colors.css          # Design token definitions
└── lib/                    # Utilities and helpers
```

### Key Design Decisions

#### 1. React Server Components First

All components are RSCs by default. Client components are strategically placed at the leaves of the component tree, limiting their use to interactive elements that require client-side state.

#### 2. Semantic Design Tokens

The color system uses a two-tier approach:

- **Primitive tokens**: Raw color values (`--color-orange-500: #ff6002`)
- **Semantic tokens**: Purpose-driven aliases (`--color-brand: var(--color-orange-500)`)

This enables:

- Consistent theming across services
- Automatic dark mode adaptation
- Easy global style updates

#### 3. Composable Layout Primitives

Layout components like `Container`, `VStack`, `Cluster`, and `Grid` provide consistent spacing and alignment. The `asChild` pattern (via Radix Slot) enables render delegation for semantic HTML.

## Design System

### Brand Colors

| Token        | Value     | Usage                |
| ------------ | --------- | -------------------- |
| `orange-500` | `#FF6002` | Primary accent, CTAs |
| `blue-500`   | `#0B0378` | Information states   |
| `yellow-500` | `#FFCE33` | Warning/alert states |
| `purple-500` | `#BC0067` | Destructive actions  |

### Semantic Tokens

| Category   | Tokens                                               | Purpose              |
| ---------- | ---------------------------------------------------- | -------------------- |
| Label      | `label-primary`, `label-secondary`, `label-tertiary` | Text hierarchy       |
| Background | `background-primary`, `background-secondary`         | Surface colors       |
| Fill       | `fill-primary`, `fill-secondary`                     | Borders and dividers |
| Accent     | `accent`, `accent-foreground`                        | Interactive elements |

View the full [Design System documentation](/docs/design-system) in the running application.

## Accessibility

This project prioritizes accessibility throughout:

- **Semantic HTML**: Proper use of `<article>`, `<section>`, `<header>`, `<main>`, and `<nav>`
- **ARIA Attributes**: `aria-labelledby`, `aria-describedby`, `role="alert"` for dynamic content
- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Focus Management**: Visible focus indicators and logical focus order
- **Screen Reader Support**: `sr-only` content for additional context
- **Error Announcements**: Form errors use `role="alert"` for immediate announcement
- **Color Contrast**: All color combinations meet WCAG AA requirements

## Technology Stack

| Technology                                    | Version | Purpose                           |
| --------------------------------------------- | ------- | --------------------------------- |
| [Next.js](https://nextjs.org/)                | 16.x    | React framework with App Router   |
| [React](https://react.dev/)                   | 19.x    | UI library with Server Components |
| [TypeScript](https://www.typescriptlang.org/) | 5.x     | Type safety                       |
| [Tailwind CSS](https://tailwindcss.com/)      | 4.x     | Utility-first styling             |
| [Radix UI](https://www.radix-ui.com/)         | Latest  | Accessible component primitives   |

## Pages

| Route                 | Description                                       |
| --------------------- | ------------------------------------------------- |
| `/`                   | Home page with project overview                   |
| `/register`           | Candidate registration form                       |
| `/about`              | Challenge requirements and implementation details |
| `/docs/design-system` | Design token documentation                        |
| `/docs/components`    | Interactive component showcase                    |

## License

This project was created as part of a technical challenge evaluation.

---

Built with ❤️ using modern web technologies