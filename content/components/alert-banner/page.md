## Installation

```bash
npx shadcn add https://ui-catalog.dev/r/alert-banner.json
```

## Usage

```tsx
import { AlertBanner } from "@/components/ui/alert-banner"

export default function Example() {
  return (
    <AlertBanner variant="info" dismissible>
      A new version is available.
    </AlertBanner>
  )
}
```

## Props

- **variant** — `"info"` | `"warning"` | `"error"` | `"success"`. Default: `"info"`
- **dismissible** — When `true`, shows a close button. Default: `false`
- **onDismiss** — Callback fired when the dismiss button is clicked. If omitted, the component tracks dismissed state internally.
- **icon** — Optional override for the default variant icon. Pass any Lucide icon component.
- **action** — Optional `ReactNode` rendered to the right of the message (e.g., a button or link).
- Extends all native `<div>` HTML attributes.

## Variants

Each variant applies a tinted background and matching icon:

- **info** — Blue tint with an Info icon
- **warning** — Yellow tint with an AlertTriangle icon
- **error** — Red tint with an XCircle icon
- **success** — Green tint with a CheckCircle2 icon

## Notes

When `dismissible` is `true` and no `onDismiss` callback is provided, the banner manages its own visibility state and removes itself from the DOM on dismiss. Provide `onDismiss` for controlled dismiss behavior.
