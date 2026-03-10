# UI Catalog

A shadcn-compatible component registry and documentation site. Components are standalone and installable via `npx shadcn add`.

## Tech Stack

- **Next.js 16** with Turbopack, React 19, TypeScript
- **Tailwind CSS v4** with `tw-animate-css` for animations
- **shadcn** (v4) — base-nova style, neutral base color, CSS variables, lucide icons
- **@base-ui/react** for composable primitives
- **pnpm** as package manager (do not use npm/yarn)

## Project Structure

```
app/
  layout.tsx              # Root layout with sidebar navigation
  page.tsx                # Homepage
  docs/[slug]/page.tsx    # Component/page documentation routes
  preview/[slug]/page.tsx # Isolated iframe preview routes (bare layout)
  globals.css             # Tailwind config and CSS variables

content/
  components/<slug>/      # Component folders (see below)
  pages/<slug>.md         # Static documentation pages (Getting Started, etc.)

components/
  ui/                     # shadcn primitives (button, sidebar, dropdown-menu, etc.)
  component-preview.tsx   # Preview wrapper with expand/controls toolbar
  sidebar-nav.tsx         # Site navigation sidebar

lib/
  content.ts              # File-system scanner for components and pages
  utils.ts                # cn() utility

registry.json             # shadcn registry manifest (items to publish)
components.json           # shadcn project config
```

## Component Architecture

Each component lives in `content/components/<slug>/` with this structure:

| File | Purpose | Required |
|------|---------|----------|
| `component.tsx` | The standalone, exportable component | Yes |
| `demo.tsx` | Demo rendering for the docs site | Yes |
| `meta.json` | Metadata, category, registry deps | Yes |
| `page.md` | Documentation with install/usage instructions | Yes |
| `previews/` | Multiple variant previews for iframe rendering | Optional |

### Separation of concerns

- **`component.tsx`** must be fully standalone — no imports from the catalog site infrastructure. Only allowed imports: `@/lib/utils` (for `cn()`), `@/components/ui/*` (shadcn primitives), `lucide-react`, React.
- **`demo.tsx`** is site-specific — it imports from `./component` and renders the demo. For components with `"controls": true` in meta.json, the demo manages its own interactive controls via `<ComponentPreview>`.
- **`previews/`** is optional, used for components needing full-page isolation (e.g., sidebars). These render in iframes via `/app/preview/[slug]`.

### meta.json schema

```json
{
  "title": "Component Name",
  "description": "Short description",
  "category": "Category Name",
  "date": "YYYY-MM-DD",
  "order": 10,
  "registryDependencies": ["button", "sidebar"],
  "controls": false
}
```

- `order` — Sort position in the sidebar navigation (lower = higher)
- `registryDependencies` — shadcn components this component depends on
- `controls` — When `true`, demo.tsx renders with ComponentPreview's bottom toolbar

## Adding a New Component

1. Create `content/components/<slug>/` with all four required files
2. Add the demo import to `app/docs/[slug]/page.tsx` in the `demoModules` map
3. If the component needs iframe previews, also add entries to `app/preview/[slug]/page.tsx` in `previewModules`
4. The sidebar navigation auto-discovers components from the filesystem via `lib/content.ts`

## Two-Layer Preview System

1. **Inline preview** (default) — Component demo renders directly in the docs page
2. **Iframe preview** — For components that need layout isolation (fixed positioning, full-viewport). Uses `/app/preview/[slug]` routes with a bare layout that hides Next.js chrome

## Commands

```bash
pnpm dev              # Start dev server with Turbopack
pnpm build            # Production build
pnpm lint             # ESLint
pnpm registry:build   # Build shadcn registry JSON files to public/r/
```

## Registry (shadcn)

Components are publishable via the shadcn registry. The registry manifest is `registry.json`. After populating it, `pnpm registry:build` generates `/public/r/<name>.json` files that external projects consume via:

```bash
npx shadcn add https://ui-catalog.dev/r/<component-name>.json
```

## Code Conventions

- Use `"use client"` directive only when the component needs client-side interactivity
- Use `React.forwardRef` with `displayName` for all exported components
- Use `cn()` from `@/lib/utils` for className merging
- Keep component.tsx free of catalog-specific dependencies
- Follow existing patterns — look at `glow-button` as the simplest reference component
- Tailwind CSS v4 syntax (no tailwind.config.js — config is in globals.css)
