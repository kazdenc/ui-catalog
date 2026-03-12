## Installation

```bash
npx shadcn add https://ui-catalog.dev/r/command-palette.json
```

## Usage

```tsx
import { CommandPalette, type CommandPaletteItem } from "@/components/ui/command-palette"
import { useState } from "react"

const items: CommandPaletteItem[] = [
  { id: "1", label: "Home", group: "Navigation", onSelect: () => navigate("/") },
  { id: "2", label: "Settings", group: "Actions", onSelect: () => navigate("/settings") },
]

export default function Example() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Command Palette</button>
      <CommandPalette open={open} onOpenChange={setOpen} items={items} />
    </>
  )
}
```

## Props

### CommandPalette

- **open** — Whether the palette is visible.
- **onOpenChange** — Callback when open state changes.
- **items** — Array of `CommandPaletteItem` objects.
- **placeholder** — Input placeholder text. Default: `"Type a command or search..."`
- **onSelect** — Callback when an item is selected.

### CommandPaletteItem

- **id** — Unique identifier.
- **label** — Display text.
- **description** — Optional secondary text.
- **icon** — Optional `ReactNode` icon.
- **group** — Optional group heading.
- **onSelect** — Optional item-specific select handler.

## Notes

The palette supports keyboard navigation with arrow keys, Enter to select, and Escape to close. Items are filtered in real-time as you type. Use the `group` property to organize items under headings.
