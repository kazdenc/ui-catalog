## Installation

```bash
npx shadcn add https://ui-catalog.dev/r/glow-button.json
```

## Usage

```tsx
import { GlowButton } from "@/components/ui/glow-button"

export default function Example() {
  return <GlowButton>Click me</GlowButton>
}
```

## Props

- **glowColor** — CSS color string for the glow. Default: `rgba(99, 102, 241, 0.6)`
- Extends all native `<button>` HTML attributes.

## Notes

Hover to see the glow effect. The glow color is customizable via the `glowColor` prop, which sets a CSS custom property under the hood.
