"use client"

import * as React from "react"
import { ComponentPreview } from "@/components/component-preview"
import { StepIndicator } from "./component"

const steps = [
  { label: "Account", description: "Create your account" },
  { label: "Profile", description: "Set up your profile" },
  { label: "Settings", description: "Configure preferences" },
  { label: "Complete", description: "Review and finish" },
]

export default function StepIndicatorDemo() {
  const [currentStep, setCurrentStep] = React.useState(1)
  const [orientation, setOrientation] = React.useState<
    "horizontal" | "vertical"
  >("horizontal")
  const [variant, setVariant] = React.useState<"default" | "compact">(
    "default",
  )

  return (
    <ComponentPreview
      slug="step-indicator"
      controls={
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex gap-1">
            <button
              onClick={() => setCurrentStep((s) => Math.max(0, s - 1))}
              disabled={currentStep === 0}
              className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:text-card-foreground disabled:opacity-40"
            >
              Back
            </button>
            <button
              onClick={() =>
                setCurrentStep((s) => Math.min(steps.length, s + 1))
              }
              disabled={currentStep === steps.length}
              className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:text-card-foreground disabled:opacity-40"
            >
              Next
            </button>
          </div>
          <div className="flex gap-1">
            {(["horizontal", "vertical"] as const).map((o) => (
              <button
                key={o}
                onClick={() => setOrientation(o)}
                className={`rounded-md px-2.5 py-1 text-xs font-medium capitalize transition-colors ${
                  orientation === o
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-card-foreground"
                }`}
              >
                {o}
              </button>
            ))}
          </div>
          <div className="flex gap-1">
            {(["default", "compact"] as const).map((v) => (
              <button
                key={v}
                onClick={() => setVariant(v)}
                className={`rounded-md px-2.5 py-1 text-xs font-medium capitalize transition-colors ${
                  variant === v
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-card-foreground"
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>
      }
    >
      <div className="flex w-full items-center justify-center py-8">
        <StepIndicator
          steps={steps}
          currentStep={currentStep}
          orientation={orientation}
          variant={variant}
          className={orientation === "horizontal" ? "w-full" : ""}
        />
      </div>
    </ComponentPreview>
  )
}
