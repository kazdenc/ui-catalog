# UI Catalog

A daily UI concept registry built on [shadcn](https://ui.shadcn.com). Browse, preview, and install standalone React components.

## Quick Start

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to browse the catalog.

## Using Components

Every component is installable via the shadcn CLI:

```bash
npx shadcn add https://ui-catalog.dev/r/glow-button.json
```

This copies the component source directly into your project — no package dependency, no iframes, no catalog overhead. Components only depend on standard shadcn primitives and Tailwind CSS.

## How It Works

Each component is a self-contained folder:

```
content/components/glow-button/
  component.tsx   # The actual component (standalone, copy-pasteable)
  demo.tsx        # Live demo for the docs site
  meta.json       # Title, description, category, dependencies
  page.md         # Usage documentation
```

The catalog site is a Next.js app that discovers these folders automatically and renders documentation pages with live previews. But the components themselves have zero dependency on the site — `component.tsx` is the same file you'd use in any React project.

## Current Components

| Component | Category | Description |
|-----------|----------|-------------|
| Glow Button | Buttons | Animated glow effect on hover |
| Glass Card | Cards | Frosted glass morphism card |
| Loader | Feedback | Configurable loading spinner |
| Sidebar Collapsible | Navigation | Collapsible sidebar with 6 layout variants |

## Project Structure

```
content/components/   # Component source, demos, and docs
app/docs/             # Documentation pages
app/preview/          # Isolated preview routes (for iframe rendering)
components/ui/        # shadcn primitives
lib/                  # Utilities and content discovery
```

## Tech Stack

- Next.js 16 with Turbopack
- React 19
- Tailwind CSS v4
- shadcn v4 (base-nova style)
- TypeScript
- pnpm

## Adding a Component

1. Create a folder in `content/components/<your-component>/`
2. Add the four required files: `component.tsx`, `demo.tsx`, `meta.json`, `page.md`
3. Register the demo import in `app/docs/[slug]/page.tsx`
4. The sidebar picks it up automatically

See `content/components/glow-button/` for the simplest example.

## Scripts

```bash
pnpm dev              # Dev server
pnpm build            # Production build
pnpm lint             # Lint
pnpm registry:build   # Build registry JSON files for external installation
```
