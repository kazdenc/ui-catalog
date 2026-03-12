## Installation

```bash
npx shadcn add https://ui-catalog.dev/r/submit-button.json
```

## Usage

```tsx
import { SubmitButton } from "@/components/ui/submit-button"

export default function Example() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function handleSubmit() {
    setStatus("loading")
    try {
      await saveData()
      setStatus("success")
    } catch {
      setStatus("error")
    } finally {
      setTimeout(() => setStatus("idle"), 1500)
    }
  }

  return <SubmitButton status={status} onClick={handleSubmit}>Save Changes</SubmitButton>
}
```

## Props

- **status** — `"idle" | "loading" | "success" | "error"`. Default: `"idle"`
- Extends all native `<button>` HTML attributes.

## Notes

The button smoothly transitions between states with icon animations. Width remains stable across states to prevent layout shift.
