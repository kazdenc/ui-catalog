## Variants

- **Collapsible** — Sections with chevron toggles (favorites, teams, topics), search header, user dropdown footer
- **Inset** — Dashboard with collapsible sub-routes, notification bell, team switcher. Uses `variant="inset"` + `collapsible="icon"`
- **Floating** — Same layout as Inset but uses `variant="floating"` for a raised panel with shadow/ring
- **Mail** — Dual-pane layout: narrow nav sidebar + searchable mail list + preview pane
- **Slide-out** — Primary nav with secondary panel that slides in for sub-items with descriptions
- **Nested** — Single sidebar that swaps content in-place with back-arrow navigation

## Usage

Each variant is a standalone full-page component using real shadcn `SidebarProvider`, `Sidebar`, `SidebarInset`, etc. Copy any preview file directly into your project:

```tsx
// Example: use the inset variant
import SidebarInset from "./previews/inset"

export default function Layout() {
  return <SidebarInset />
}
```

## Extracting a variant

Each file in `previews/` is self-contained and uses only:
- `@/components/ui/sidebar` (shadcn sidebar primitives)
- `@/components/ui/dropdown-menu` (shadcn dropdown)
- `lucide-react` icons
- `@/lib/utils` for `cn()`

Shared helpers are in `previews/shared.tsx` — copy that too, or inline what you need.

## Notes

All variants use the real shadcn v4 Sidebar with `SidebarProvider` and proper fixed positioning. The preview in this catalog renders them in iframes to contain the layout.
