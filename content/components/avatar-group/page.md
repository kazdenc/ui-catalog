## Installation

```bash
npx shadcn add https://ui-catalog.dev/r/avatar-group.json
```

## Usage

```tsx
import { AvatarGroup } from "@/components/ui/avatar-group"

const avatars = [
  { src: "/avatars/alice.jpg", alt: "Alice Martin", fallback: "AM" },
  { src: "/avatars/bob.jpg", alt: "Bob Chen", fallback: "BC" },
  { alt: "Carol White", fallback: "CW" },
]

export default function Example() {
  return <AvatarGroup avatars={avatars} max={3} size="md" />
}
```

## Props

- **avatars** — Array of `{ src?: string, alt: string, fallback: string }` objects. When `src` is omitted, the fallback initials are shown instead.
- **max** — Maximum number of avatars to display before showing the +N overflow badge. Default: `5`.
- **size** — Avatar size: `"sm"`, `"md"`, or `"lg"`. Default: `"md"`.
- **className** — Additional classes for the container.
- Extends all native `<div>` HTML attributes.

## Notes

Hover over the group to see the avatars spread apart. Each avatar has a tooltip showing the person's name. Avatars without a `src` render a fallback with initials on a muted background.
