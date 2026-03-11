## Installation

```bash
npx shadcn add https://ui-catalog.dev/r/empty-state.json
```

## Usage

```tsx
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  EmptyState,
  EmptyStateIcon,
  EmptyStateTitle,
  EmptyStateDescription,
  EmptyStateAction,
} from "@/components/ui/empty-state"

export default function Example() {
  return (
    <EmptyState>
      <EmptyStateIcon icon={Search} />
      <EmptyStateTitle>No results found</EmptyStateTitle>
      <EmptyStateDescription>
        Try adjusting your search or filters to find what you are looking for.
      </EmptyStateDescription>
      <EmptyStateAction>
        <Button variant="outline" size="sm">
          Clear filters
        </Button>
      </EmptyStateAction>
    </EmptyState>
  )
}
```

## Props

### EmptyState

- Centered flex container for the empty state content.
- Extends all native `<div>` HTML attributes.

### EmptyStateIcon

- **icon** -- `LucideIcon`. The Lucide icon component to render. Required.
- Renders the icon inside a muted circular background.

### EmptyStateTitle

- Renders a semibold heading for the empty state message.
- Extends all native `<h3>` HTML attributes.

### EmptyStateDescription

- Renders muted descriptive text below the title. Max width constrained for readability.
- Extends all native `<p>` HTML attributes.

### EmptyStateAction

- Slot for a CTA button or any action content. Adds top margin spacing.
- Extends all native `<div>` HTML attributes.
