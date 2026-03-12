## Installation

```bash
npx shadcn add https://ui-catalog.dev/r/noise-texture.json
```

## Usage

```tsx
import { NoiseTexture } from "@/components/ui/noise-texture"

export default function Example() {
  return (
    <NoiseTexture variant="grain" className="rounded-xl bg-indigo-500 p-6">
      <h2 className="text-white">Content with grain overlay</h2>
    </NoiseTexture>
  )
}
```

## Props

- **variant** — `"grain"` | `"static"` | `"paper"`. Default: `"grain"`
  - `grain` — Fine film grain using fractal noise
  - `static` — Coarser TV static using turbulence
  - `paper` — Subtle paper-like texture with low frequency fractal noise
- **opacity** — Number between 0 and 1 controlling overlay intensity. Default: `0.15`
- Extends all native `<div>` HTML attributes.

## Notes

The component uses inline SVG with `<feTurbulence>` filters to generate noise procedurally — no external images required. Children render underneath the noise overlay, which is absolutely positioned with `pointer-events-none` so it never blocks interaction.
