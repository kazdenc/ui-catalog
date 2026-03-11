## Installation

```bash
npx shadcn add https://ui-catalog.dev/r/tilt-card.json
```

## Usage

```tsx
import { TiltCard, TiltCardLayer } from "@/components/ui/tilt-card"

export default function Example() {
  return (
    <TiltCard>
      <TiltCardLayer depth={20}>
        <h3>Foreground content</h3>
      </TiltCardLayer>
    </TiltCard>
  )
}
```

## Props

### TiltCard

- **maxTilt** — `number`. Maximum rotation in degrees. Default: `15`
- **perspective** — `number`. CSS perspective value in pixels. Default: `1000`
- **glare** — `boolean`. Enable the light reflection overlay. Default: `true`
- **scale** — `number`. Scale factor on hover. Default: `1.02`
- Extends all native `<div>` HTML attributes.

### TiltCardLayer

- **depth** — `number`. Parallax depth in pixels. Higher values shift more. Default: `0`
- Extends all native `<div>` HTML attributes.

## Notes

Wrap content in `TiltCardLayer` components with increasing `depth` values to create parallax. Layers with higher depth values appear to float further above the card surface and shift more with tilt.
