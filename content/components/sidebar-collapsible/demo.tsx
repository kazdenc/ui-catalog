"use client"

import { useState } from "react"
import { ComponentPreview } from "@/components/component-preview"

type SidebarVariant = "collapsible" | "inset" | "floating" | "mail" | "slide-out" | "replace"

const variants: { value: SidebarVariant; label: string }[] = [
  { value: "collapsible", label: "Collapsible" },
  { value: "inset", label: "Inset" },
  { value: "floating", label: "Floating" },
  { value: "mail", label: "Mail" },
  { value: "slide-out", label: "Slide-out" },
  { value: "replace", label: "Nested" },
]

function ToggleGroup<T extends string>({
  options,
  value,
  onChange,
}: {
  options: { value: T; label: string }[]
  value: T
  onChange: (value: T) => void
}) {
  return (
    <div className="flex gap-1 rounded-lg bg-muted p-1">
      {options.map((o) => (
        <button
          key={o.value}
          onClick={() => onChange(o.value)}
          className={`rounded-md px-2.5 py-1 text-xs font-medium whitespace-nowrap transition-colors ${
            value === o.value
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}

export default function SidebarDemo() {
  const [variant, setVariant] = useState<SidebarVariant>("collapsible")

  return (
    <ComponentPreview
      slug="sidebar-collapsible"
      controls={
        <ToggleGroup options={variants} value={variant} onChange={setVariant} />
      }
    >
      <div className="relative h-[600px] w-full overflow-hidden rounded-lg border">
        <iframe
          key={variant}
          src={`/preview/sidebar-${variant}`}
          className="h-full w-full border-0"
          title={`Sidebar ${variant} preview`}
        />
      </div>
    </ComponentPreview>
  )
}
