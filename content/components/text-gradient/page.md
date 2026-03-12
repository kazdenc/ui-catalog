## Installation

```bash
npx shadcn add https://ui-catalog.dev/r/text-gradient.json
```

## Usage

```tsx
import { TextGradient } from "@/components/ui/text-gradient"

export default function Example() {
  return (
    <TextGradient className="text-4xl font-bold">
      Hello World
    </TextGradient>
  )
}
```

## Props

- **colors** — Array of CSS color strings for the gradient. Default: `["#6366f1", "#ec4899", "#f59e0b", "#6366f1"]`
- **direction** — Gradient angle in degrees. Default: `90`
- **animate** — Whether the gradient animates. Default: `true`
- **as** — HTML element type to render as. Default: `"span"`
- Extends all native HTML attributes of the rendered element.

## Notes

The gradient animation uses pure CSS (`background-position` shifting on a 200% sized gradient). Hover over the text to see a subtle brightness boost. Set `animate={false}` for a static gradient. Use the `as` prop to render as any element (`h1`, `p`, `div`, etc.).
