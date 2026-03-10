## Installation

```bash
npx shadcn add https://ui-catalog.dev/r/loader.json
```

## Usage

```tsx
import { Loader } from "@/components/ui/loader"

export default function Example() {
  return <Loader variant="dots" />
}
```

## Variants

- **bounce** — Single dot bouncing vertically.
- **dots** — Three dots with staggered bounce (classic loading indicator).
- **ping-pong** — Dot sliding side-to-side with opacity fade.
- **morphing** — Shape that rotates and transitions between colors and border radii.

```tsx
<Loader variant="bounce" />
<Loader variant="dots" />
<Loader variant="ping-pong" />
<Loader variant="morphing" />
```

## Props

- **variant** — `"bounce" | "dots" | "ping-pong" | "morphing"`. Default: `"dots"`
- **size** — `"sm" | "md" | "lg"`. Default: `"md"`
- Extends all native `<div>` HTML attributes.

## Notes

The component uses pure CSS keyframes injected via an inline `<style>` tag, so it works anywhere with no additional CSS setup. Animation values use `em` units to scale with the dot size. The `morphing` variant uses fixed colors (indigo/pink) — override with `className` if needed.
