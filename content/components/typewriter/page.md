## Installation

```bash
npx shadcn add https://ui-catalog.dev/r/typewriter.json
```

## Usage

```tsx
import { Typewriter } from "@/components/ui/typewriter"

export default function Example() {
  return (
    <Typewriter
      words={["Hello", "World", "React"]}
      typingSpeed={80}
      deletingSpeed={50}
      pauseDuration={1500}
      loop
    />
  )
}
```

## Props

- **words** — Array of strings to cycle through (required)
- **typingSpeed** — Milliseconds per character when typing. Default: `80`
- **deletingSpeed** — Milliseconds per character when deleting. Default: `50`
- **pauseDuration** — Milliseconds to pause after typing a word. Default: `1500`
- **loop** — Whether to loop through the words array. Default: `true`
- **cursor** — Custom cursor character. Default: `"|"`
- Extends all native `<span>` HTML attributes.

## Notes

In loop mode the component cycles through all words indefinitely, typing and deleting each one. In one-shot mode (`loop={false}`) it types the last word and stops with the cursor hidden. The blinking cursor uses a CSS animation that you may need to add to your project (see below).

### Required keyframe

Add this to your global CSS if the `animate-blink` utility is not already defined:

```css
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
```

And register the utility (Tailwind v4 syntax in `globals.css`):

```css
@theme {
  --animate-blink: blink 0.8s step-end infinite;
}
```
