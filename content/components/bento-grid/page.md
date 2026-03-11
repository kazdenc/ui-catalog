## Installation

```bash
npx shadcn add https://ui-catalog.dev/r/bento-grid.json
```

## Usage

```tsx
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"

export default function Example() {
  return (
    <BentoGrid>
      <BentoGridItem colSpan={2} rowSpan={2}>
        Hero cell
      </BentoGridItem>
      <BentoGridItem>Small cell</BentoGridItem>
      <BentoGridItem>Small cell</BentoGridItem>
    </BentoGrid>
  )
}
```

## Props

### BentoGrid

- Default breakpoints: 1 column on mobile, 2 on `sm`, 4 on `lg`.
- Override with Tailwind grid classes on `className` (e.g. `sm:grid-cols-3 lg:grid-cols-6`).
- Extends all native `<div>` HTML attributes.

### BentoGridItem

- **colSpan** — `1 | 2 | 3 | 4`. Columns to span. Automatically clamps on smaller breakpoints so items never overflow the grid. Default: `1`
- **rowSpan** — `1 | 2 | 3`. Rows to span. Default: `1`
- Extends all native `<div>` HTML attributes.

## Notes

Responsive behavior is built in. A `colSpan={3}` item shows as full-width on mobile (1 col), spans 2 on `sm` (2 col grid), and spans 3 on `lg` (4 col grid). No manual responsive classes needed on individual items.
