## Installation

```bash
npx shadcn add https://ui-catalog.dev/r/skeleton-loader.json
```

## Usage

```tsx
import {
  SkeletonText,
  SkeletonAvatar,
  SkeletonCard,
  SkeletonLoaderStyles,
} from "@/components/ui/skeleton-loader"

export default function Example() {
  return (
    <>
      <SkeletonLoaderStyles />

      {/* Profile placeholder */}
      <div className="flex items-center gap-4">
        <SkeletonAvatar size={48} />
        <SkeletonText lines={2} />
      </div>

      {/* Card placeholder */}
      <SkeletonCard />
    </>
  )
}
```

## Components

### SkeletonText

Renders a stack of text-line placeholders.

- **lines** -- `number`. Number of text lines. Default: `3`
- **lastLineWidth** -- `string`. CSS width for the last line. Default: `"60%"`
- Extends all native `<div>` HTML attributes.

### SkeletonAvatar

Renders a circular avatar placeholder.

- **size** -- `number`. Diameter in pixels. Default: `40`
- Extends all native `<div>` HTML attributes.

### SkeletonCard

Renders a card placeholder with an image area and text lines.

- **imageHeight** -- `number`. Height of the image area in pixels. Default: `160`
- Extends all native `<div>` HTML attributes.

## Notes

Include `<SkeletonLoaderStyles />` once in your page to enable the shimmer animation. All presets use the shadcn `Skeleton` primitive as the base and inherit theme tokens for consistent styling across light and dark modes.
