# Kinwits

Marketing site for Kinwits — built with React, TypeScript, and Tailwind CSS v4.

## Tech stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) with a hand-authored design system (`src/styles/kinwits-design-system.css`) alongside it
- [shadcn/ui](https://ui.shadcn.com/) (Radix primitives) for a few lower-level UI pieces (toasts, tooltips)
- [React Router](https://reactrouter.com/) for routing
- [GSAP](https://gsap.com/) for scroll reveals and the homepage hero animation
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) for the contact form

## Getting started

Requires Node.js 18+ and npm.

```sh
npm install
npm run dev
```

The dev server runs at `http://localhost:8080`.

### Environment variables

The contact form (`src/components/ContactForm.tsx`) posts to an AWS Lambda endpoint:

```sh
VITE_LAMBDA_URL=https://your-lambda-url.on.aws/
```

Set this in `.env` to a real endpoint to test the form locally. In production it's set via Netlify's build environment (`netlify.toml`).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local dev server |
| `npm run build` | Production build to `dist/` |
| `npm run build:dev` | Build in development mode (unminified, useful for debugging a build issue) |
| `npm run preview` | Preview a production build locally |
| `npm run lint` | Run ESLint |

## Project structure

- `src/pages/` — one file per route; `src/App.tsx` has the full route table
- `src/components/layout/` — shared `Layout`, `SiteHeader`, `Footer`, `MobileMenu`
- `src/components/home/` — homepage-only sections
- `src/components/ui/` — shadcn primitives (only the ones actually in use — this folder is pruned, not the full shadcn default set)
- `src/components/ui-kinwits/` — this site's own small primitives (`Reveal`/`RevealGroup` for scroll animations, `Btn`, `ChipList`)
- `src/data/` — content for case studies and insight articles, consumed by their respective page templates
- `src/styles/kinwits-design-system.css` — the site's actual visual design system (typography, buttons, section/card layouts, etc.); `src/index.css` holds design tokens and the Tailwind/shadcn token mapping on top of it

## Deployment

Deploys to Netlify (`netlify.toml`) — pushes to the branch connected in Netlify trigger a build automatically. `main` is production.
