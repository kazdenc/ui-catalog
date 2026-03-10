"use client"

import { useState } from "react"
import { Loader, type LoaderVariant, type LoaderSize } from "./component"
import { ComponentPreview } from "@/components/component-preview"

const variants: { value: LoaderVariant; label: string }[] = [
  { value: "dots", label: "Dots" },
  { value: "bounce", label: "Bounce" },
  { value: "ping-pong", label: "Ping Pong" },
  { value: "morphing", label: "Morphing" },
  { value: "spinner", label: "Spinner" },
  { value: "pulse", label: "Pulse" },
  { value: "bars", label: "Bars" },
]

const sizes: { value: LoaderSize; label: string }[] = [
  { value: "sm", label: "S" },
  { value: "md", label: "M" },
  { value: "lg", label: "L" },
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

export default function LoaderDemo() {
  const [variant, setVariant] = useState<LoaderVariant>("dots")
  const [size, setSize] = useState<LoaderSize>("md")

  return (
    <ComponentPreview
      slug="loader"
      controls={
        <>
          <ToggleGroup options={variants} value={variant} onChange={setVariant} />
          <ToggleGroup options={sizes} value={size} onChange={setSize} />
        </>
      }
    >
      <Loader variant={variant} size={size} />
    </ComponentPreview>
  )
}
