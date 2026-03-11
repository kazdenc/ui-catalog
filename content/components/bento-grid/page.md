## Installation

```bash
npx shadcn add https://ui-catalog.dev/r/bento-grid.json
```

## Usage

```tsx
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"

export default function Example() {
  return (
    <BentoGrid columns={3}>
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

- **columns** — `number`. Number of grid columns. Default: `4`
- Extends all native `<div>` HTML attributes.

### BentoGridItem

- **colSpan** — `number`. Number of columns to span. Default: `1`
- **rowSpan** — `number`. Number of rows to span. Default: `1`
- Extends all native `<div>` HTML attributes.

## Notes

Rows auto-size with `minmax(8rem, 1fr)`. For responsive layouts, override `columns` at different breakpoints or use Tailwind's responsive grid classes on the BentoGrid className.
