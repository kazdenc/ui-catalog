## Installation

```bash
npx shadcn add https://ui-catalog.dev/r/shimmer-button.json
```

## Usage

```tsx
import { ShimmerButton } from "@/components/ui/shimmer-button"

export default function Example() {
  return <ShimmerButton>Slide to unlock</ShimmerButton>
}
```

## Props

- **size** — `"sm" | "md" | "lg"`. Default: `"md"`
- **variant** — `"default" | "secondary" | "destructive"`. Default: `"default"`
- Extends all native `<button>` HTML attributes.

## Notes

Hover over the button to see the gradient shimmer sweep across. The animation uses a CSS `background-position` keyframe for a smooth, continuous effect.
