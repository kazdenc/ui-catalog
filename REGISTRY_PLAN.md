# Registry Publication Plan

When you're ready to publish this catalog to the shadcn registry directory, follow these steps.

## Prerequisites

- [ ] Multiple components built in `registry/new-york/`
- [ ] Each component has an entry in `registry.json`
- [ ] Site deployed to a public URL (e.g. Vercel)
- [ ] Repository is open source and public

## registry.json Format

Each component entry in the `items` array follows this schema:

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "ui-catalog",
  "homepage": "https://ui-catalog.dev",
  "items": [
    {
      "name": "glow-button",
      "type": "registry:component",
      "title": "Glow Button",
      "description": "A button with an animated glow effect on hover.",
      "author": "yourname <https://github.com/yourname>",
      "dependencies": [],
      "registryDependencies": ["button"],
      "files": [
        {
          "path": "registry/new-york/glow-button.tsx",
          "type": "registry:component"
        }
      ],
      "categories": ["buttons"]
    }
  ]
}
```

### Item Type Reference

| Type | Use for |
|------|---------|
| `registry:ui` | Low-level primitives (button, input) |
| `registry:component` | Composed components (most daily UI concepts) |
| `registry:block` | Full page sections |
| `registry:hook` | React hooks |
| `registry:lib` | Utility functions |
| `registry:theme` | CSS variable themes |

## Build & Test Locally

```bash
# Build registry JSON files to public/r/
pnpm registry:build

# Verify output exists
ls public/r/

# Test install from local dev server
npx shadcn add http://localhost:3000/r/glow-button.json
```

Each component gets a static JSON file at `public/r/{name}.json`. Users install via URL.

## Deploy

Deploy to Vercel (or any host). Ensure these URLs resolve:
- `https://your-domain.com/r/{name}.json` — individual component JSON
- `https://your-domain.com` — the catalog site itself

## Submit to shadcn Directory

1. Fork `https://github.com/shadcn-ui/ui`
2. Edit `apps/v4/registry/directory.json`, add your entry:

```json
{
  "name": "@yourname",
  "homepage": "https://your-domain.com",
  "url": "https://your-domain.com/r/{name}.json",
  "description": "Daily UI concept components for shadcn",
  "logo": "<svg>...</svg>"
}
```

3. Run `pnpm registry:build` in the shadcn repo
4. Submit a PR

### Directory Requirements

- Open source and publicly accessible
- Valid `registry.json` conforming to `https://ui.shadcn.com/schema/registry.json`
- Files served at flat URLs: `/r/{name}.json`
- No `content` property in the `files` array of your directory listing
- Logo should be an inline SVG using `var(--foreground)` / `var(--background)` for theme compat

## After Listing

Once accepted, users can install your components by namespace:

```bash
npx shadcn add @yourname/glow-button
```
