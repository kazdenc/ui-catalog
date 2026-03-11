## Installation

```bash
npx shadcn add https://ui-catalog.dev/r/flip-card.json
```

## Usage

```tsx
import { FlipCard, FlipCardFront, FlipCardBack } from "@/components/ui/flip-card"

export default function Example() {
  return (
    <FlipCard className="h-56 w-44">
      <FlipCardFront className="flex items-center justify-center rounded-xl bg-neutral-900 p-6">
        <p>Front</p>
      </FlipCardFront>
      <FlipCardBack className="flex items-center justify-center rounded-xl bg-indigo-950 p-6">
        <p>Back</p>
      </FlipCardBack>
    </FlipCard>
  )
}
```

## Props

### FlipCard

- **trigger** — `"hover" | "click"`. What triggers the flip. Default: `"hover"`
- **direction** — `"horizontal" | "vertical"`. Flip axis. Default: `"horizontal"`
- **duration** — `number`. Flip animation duration in ms. Default: `600`
- Set explicit `h-*` and `w-*` on the FlipCard — both faces are absolutely positioned.

### FlipCardFront / FlipCardBack

- Style each face freely. Both extend native `<div>` attributes.
- The back face transform is handled automatically based on the `direction` prop.
