## Installation

```bash
npx shadcn add https://ui-catalog.dev/r/stat-card.json
```

## Usage

```tsx
import { StatCard } from "@/components/ui/stat-card"
import { DollarSign } from "lucide-react"

export default function Example() {
  return (
    <StatCard
      label="Total Revenue"
      value="$45,231.89"
      trend={{ value: 20.1, label: "from last month" }}
      icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
    />
  )
}
```

## Props

- **label** — Metric name displayed above the value.
- **value** — Formatted display value (string).
- **trend** — `{ value: number; label?: string }`. Positive shows green up arrow, negative shows red down arrow.
- **icon** — Optional `ReactNode` rendered in the top-right corner.
- Extends all native `<div>` HTML attributes.

## Notes

The trend indicator automatically colors based on the sign of the value. Pass pre-formatted strings for the value prop to control number formatting.
