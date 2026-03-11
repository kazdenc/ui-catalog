## Installation

```bash
npx shadcn add https://ui-catalog.dev/r/pricing-card.json
```

## Usage

```tsx
import { Button } from "@/components/ui/button"
import {
  PricingCard,
  PricingCardHeader,
  PricingCardFeatures,
  PricingCardFooter,
} from "@/components/ui/pricing-card"

export default function Example() {
  return (
    <PricingCard popular>
      <PricingCardHeader
        tier="Pro"
        price="$19"
        period="/month"
        description="For growing teams."
      />
      <PricingCardFeatures
        features={["Unlimited projects", "Priority support"]}
      />
      <PricingCardFooter>
        <Button className="w-full">Get started</Button>
      </PricingCardFooter>
    </PricingCard>
  )
}
```

## Props

### PricingCard

- **popular** -- `boolean`. Adds accent border and "Popular" badge. Default: `false`
- Extends all native `<div>` HTML attributes.

### PricingCardHeader

- **tier** -- `string`. Tier name (e.g. "Pro"). Required.
- **price** -- `string`. Display price (e.g. "$19"). Required.
- **period** -- `string`. Billing period. Default: `"/month"`
- **description** -- `string`. Short description below the price.

### PricingCardFeatures

- **features** -- `string[]`. List of feature strings. Each renders with a check icon.

### PricingCardFooter

- Slot for a CTA button or any content. Uses `mt-auto` to push to the bottom.
