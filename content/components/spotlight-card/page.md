## Installation

```bash
npx shadcn add https://ui-catalog.dev/r/spotlight-card.json
```

## Usage

```tsx
import { SpotlightCard } from "@/components/ui/spotlight-card"

export default function Example() {
  return (
    <SpotlightCard>
      <h3>Title</h3>
      <p>Content goes here.</p>
    </SpotlightCard>
  )
}
```

## Props

- **spotlightColor** — `string`. RGB triplet for the spotlight (e.g. `"236, 72, 153"`). Default: `"120, 119, 198"`
- **spotlightSize** — `number`. Radius of the spotlight in pixels. Default: `200`
- Extends all native `<div>` HTML attributes.

## Notes

The spotlight effect uses a radial gradient overlay positioned via mouse coordinates. The gradient fades in on hover and out on mouse leave. For best results, use on dark backgrounds or within dark-themed layouts.
