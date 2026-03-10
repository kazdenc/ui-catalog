---
title: Project Structure
description: How the catalog and registry are organized.
category: Getting Started
order: 2
---

# Project Structure

## Directory Layout

```
content/
├── components/          → One folder per component
│   └── my-component/
│       ├── meta.json    → Title, category, date, order
│       ├── component.tsx → The actual component (standalone React)
│       ├── demo.tsx     → Demo wrapper for preview
│       └── page.md      → Documentation / wiki content
├── pages/               → Static wiki pages (like this one)
public/r/                → Built registry JSON (auto-generated)
registry.json            → Registry manifest
```

## Adding a new component

1. Create a folder: `content/components/my-thing/`
2. Add `meta.json`, `component.tsx`, `demo.tsx`, and `page.md`
3. Add an entry to `registry.json`
4. Run `pnpm registry:build` to generate installable JSON

The sidebar updates automatically — no config needed.

## Routes

- `/docs/<slug>` — Wiki page with embedded preview
- `/docs/<slug>/fullscreen` — Component preview only, no chrome
