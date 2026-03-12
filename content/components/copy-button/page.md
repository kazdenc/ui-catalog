## Installation

```bash
npx shadcn add https://ui-catalog.dev/r/copy-button.json
```

## Usage

```tsx
import { CopyButton } from "@/components/ui/copy-button"

export default function Example() {
  return <CopyButton value="npm install react">Copy</CopyButton>
}
```

## Props

- **value** — The string to copy to the clipboard (required).
- **onCopy** — Optional callback fired after a successful copy, receives the copied value.
- **size** — `"sm"` | `"default"` | `"lg"`. Default: `"default"`.
- **variant** — `"default"` | `"outline"` | `"ghost"`. Default: `"default"`.
- **children** — Custom label text. Defaults to `"Copy"`.
- Extends all native `<button>` HTML attributes.

## Notes

Clicking the button copies the `value` string to the clipboard using `navigator.clipboard.writeText`. The icon smoothly transitions from a clipboard icon to a checkmark, and the label changes to "Copied!" for 2 seconds before reverting.
