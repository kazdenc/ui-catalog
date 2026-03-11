## Installation

```bash
npx shadcn add https://ui-catalog.dev/r/progress-bar.json
```

## Usage

```tsx
import { ProgressBar, ProgressBarStyles } from "@/components/ui/progress-bar"

export default function Example() {
  return (
    <>
      <ProgressBarStyles />
      <ProgressBar value={65} />
    </>
  )
}
```

## Props

- **value** -- `number`. Current progress value. Default: `0`
- **max** -- `number`. Maximum value. Default: `100`
- **variant** -- `"default" | "striped" | "gradient" | "segmented"`. Visual style. Default: `"default"`
- **indeterminate** -- `boolean`. Shows a sliding animation instead of a fixed fill. Default: `false`
- **color** -- `string`. Custom CSS color override for the fill.
- Extends all native `<div>` HTML attributes.

## Notes

Include `<ProgressBarStyles />` once in your page when using the indeterminate variant. The component uses `role="progressbar"` with proper ARIA attributes. The segmented variant renders 10 discrete segments.
