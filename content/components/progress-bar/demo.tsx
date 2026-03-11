"use client"

import * as React from "react"
import { ComponentPreview } from "@/components/component-preview"
import { ProgressBar, ProgressBarStyles } from "./component"

const variants = [
  { label: "Default", variant: "default" as const },
  { label: "Striped", variant: "striped" as const },
  { label: "Gradient", variant: "gradient" as const },
  { label: "Segmented", variant: "segmented" as const },
]

export default function ProgressBarDemo() {
  const [value, setValue] = React.useState(65)
  const [activeVariant, setActiveVariant] = React.useState(0)
  const [indeterminate, setIndeterminate] = React.useState(false)

  return (
    <ComponentPreview
      slug="progress-bar"
      controls={
        <div className="flex flex-wrap items-center gap-4">
          <label className="flex items-center gap-2 text-sm text-muted-foreground">
            Value
            <input
              type="range"
              min={0}
              max={100}
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
              disabled={indeterminate}
              className="w-24"
            />
            <span className="w-8 text-xs tabular-nums">{value}%</span>
          </label>
          <div className="flex gap-1">
            {variants.map((v, i) => (
              <button
                key={v.variant}
                onClick={() => {
                  setActiveVariant(i)
                  setIndeterminate(false)
                }}
                className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                  activeVariant === i && !indeterminate
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-card-foreground"
                }`}
              >
                {v.label}
              </button>
            ))}
            <button
              onClick={() => setIndeterminate(!indeterminate)}
              className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                indeterminate
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-card-foreground"
              }`}
            >
              Loading
            </button>
          </div>
        </div>
      }
    >
      <ProgressBarStyles />
      <div className="flex w-full flex-col gap-4 py-8">
        <ProgressBar
          value={value}
          variant={variants[activeVariant].variant}
          indeterminate={indeterminate}
        />
      </div>
    </ComponentPreview>
  )
}
