## Installation

```bash
npx shadcn add https://ui-catalog.dev/r/glass-card.json
```

## Usage

```tsx
import { GlassCard } from "@/components/ui/glass-card"

export default function Example() {
  return (
    <GlassCard>
      <h3>Title</h3>
      <p>Content goes here.</p>
    </GlassCard>
  )
}
```

## Props

- **blur** — `"sm" | "md" | "lg" | "xl"`. Controls backdrop blur intensity. Default: `"lg"`
- Extends all native `<div>` HTML attributes.

## Notes

For the best visual effect, place the card over a colorful or gradient background. The frosted glass effect uses `backdrop-blur` which is well supported in modern browsers.
