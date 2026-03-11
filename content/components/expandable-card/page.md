## Installation

```bash
npx shadcn add https://ui-catalog.dev/r/expandable-card.json
```

## Usage

```tsx
import {
  ExpandableCard,
  ExpandableCardHeader,
  ExpandableCardContent,
} from "@/components/ui/expandable-card"

export default function Example() {
  const [open, setOpen] = React.useState(false)

  return (
    <ExpandableCard expanded={open} onToggle={() => setOpen(!open)}>
      <ExpandableCardHeader>
        <h3>Click to expand</h3>
      </ExpandableCardHeader>
      <ExpandableCardContent expanded={open}>
        <p>Hidden content revealed on expand.</p>
      </ExpandableCardContent>
    </ExpandableCard>
  )
}
```

## Props

### ExpandableCard

- **expanded** — `boolean`. Whether the card is expanded. Default: `false`
- **onToggle** — `() => void`. Called when the card is clicked.
- **duration** — `number`. Animation duration in ms. Default: `400`
- Extends all native `<div>` HTML attributes.

### ExpandableCardHeader

- Always-visible section. Style freely.
- Extends all native `<div>` HTML attributes.

### ExpandableCardContent

- **expanded** — `boolean`. Controls the reveal animation. Default: `false`
- **duration** — `number`. Animation duration in ms. Default: `400`
- Extends all native `<div>` HTML attributes.

## Notes

The content measures its scrollHeight on mount and animates max-height between 0 and the measured value. Opacity is staggered slightly after height for a polished feel. For accordion behavior, track which card is open in parent state and pass `expanded` accordingly.
