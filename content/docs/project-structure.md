---
title: Project Structure
description: How the catalog and registry are organized.
category: Getting Started
order: 2
date: 2026-03-09
---

# Project Structure

## Directory Layout

```
registry/new-york/     → Component source files (the registry)
content/docs/          → Documentation pages (what you're reading)
components/ui/         → shadcn primitives used by the site itself
public/r/              → Built registry JSON (auto-generated)
```

## Adding a new component

1. Create the component in `registry/new-york/`
2. Add an entry to `registry.json`
3. Write a doc page in `content/docs/`
4. Run `pnpm registry:build` to generate the installable JSON

## Daily workflow

Each day, pick a UI concept and repeat the steps above. The sidebar navigation auto-updates from the content directory.
