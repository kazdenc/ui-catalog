## Installation

```bash
npx shadcn add https://ui-catalog.dev/r/marquee.json
```

## Usage

```tsx
import { Marquee } from "@/components/ui/marquee"

export default function Example() {
  return (
    <Marquee speed={25} direction="left" pauseOnHover>
      <div className="h-16 w-32 rounded-lg bg-muted flex items-center justify-center">
        Item 1
      </div>
      <div className="h-16 w-32 rounded-lg bg-muted flex items-center justify-center">
        Item 2
      </div>
      <div className="h-16 w-32 rounded-lg bg-muted flex items-center justify-center">
        Item 3
      </div>
    </Marquee>
  )
}
```

## Props

- **speed** — Duration in seconds for one full scroll cycle. Default: `30`
- **direction** — `"left"` or `"right"`. Default: `"left"`
- **pauseOnHover** — Pause animation when hovering. Default: `true`
- **fade** — Show gradient fade on edges. Default: `true`
- Extends all native `<div>` HTML attributes.

## Notes

The component duplicates its children internally to create a seamless infinite loop. Hover over the marquee to pause it. Use the `speed` prop to control how fast items scroll, and `direction` to reverse the scroll.
