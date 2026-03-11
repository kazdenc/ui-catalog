## Installation

```bash
npx shadcn add https://ui-catalog.dev/r/step-indicator.json
```

## Usage

```tsx
import { StepIndicator } from "@/components/ui/step-indicator"

const steps = [
  { label: "Account", description: "Create your account" },
  { label: "Profile", description: "Set up your profile" },
  { label: "Settings", description: "Configure preferences" },
  { label: "Complete", description: "Review and finish" },
]

export default function Example() {
  return <StepIndicator steps={steps} currentStep={1} />
}
```

## Props

- **steps** -- `{ label: string; description?: string }[]`. Array of step objects to display.
- **currentStep** -- `number`. Zero-indexed active step. Steps before this index are marked as completed.
- **orientation** -- `"horizontal" | "vertical"`. Layout direction. Default: `"horizontal"`
- **variant** -- `"default" | "compact"`. Visual density. Compact hides descriptions and uses smaller circles. Default: `"default"`
- Extends all native `<div>` HTML attributes.

## Notes

The component uses `lucide-react` for the check icon on completed steps. Completed steps display `bg-primary` filled circles, the current step shows a `ring-primary` outlined circle, and upcoming steps use `bg-muted` circles. Connector lines between steps are colored with `bg-primary` for completed segments.
