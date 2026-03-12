"use client"

import * as React from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface Step {
  label: string
  description?: string
}

interface StepIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: Step[]
  currentStep: number
  orientation?: "horizontal" | "vertical"
  variant?: "default" | "compact"
}

const StepIndicator = React.forwardRef<HTMLDivElement, StepIndicatorProps>(
  (
    {
      className,
      steps,
      currentStep,
      orientation = "horizontal",
      variant = "default",
      ...props
    },
    ref,
  ) => {
    const isHorizontal = orientation === "horizontal"
    const isCompact = variant === "compact"

    return (
      <div
        ref={ref}
        className={cn(
          "flex",
          isHorizontal ? "flex-row items-start" : "flex-col",
          className,
        )}
        {...props}
      >
        {steps.map((step, index) => {
          const isCompleted = index < currentStep
          const isCurrent = index === currentStep
          const isLast = index === steps.length - 1

          return (
            <div
              key={index}
              className={cn(
                "flex",
                isHorizontal
                  ? "flex-1 flex-col items-center"
                  : "flex-row items-start",
              )}
            >
              <div
                className={cn(
                  "flex",
                  isHorizontal
                    ? "w-full flex-row items-center"
                    : "flex-col items-center",
                )}
              >
                {/* Step circle */}
                <div
                  className={cn(
                    "relative z-10 flex shrink-0 items-center justify-center rounded-full border-2 font-medium transition-colors",
                    isCompact ? "h-7 w-7 text-xs" : "h-9 w-9 text-sm",
                    isCompleted &&
                      "border-primary bg-primary text-primary-foreground",
                    isCurrent &&
                      "border-primary bg-card text-card-foreground ring-2 ring-primary ring-offset-2 ring-offset-background",
                    !isCompleted &&
                      !isCurrent &&
                      "border-muted bg-muted text-muted-foreground",
                  )}
                >
                  {isCompleted ? (
                    <Check className={isCompact ? "h-3.5 w-3.5" : "h-4 w-4"} />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>

                {/* Connector line */}
                {!isLast && (
                  <div
                    className={cn(
                      "transition-colors",
                      isHorizontal
                        ? "mx-1 h-0.5 flex-1"
                        : "my-1 h-8 w-0.5",
                      isCompleted ? "bg-primary" : "bg-muted",
                    )}
                  />
                )}
              </div>

              {/* Label and description */}
              <div
                className={cn(
                  isHorizontal
                    ? "mt-2 flex flex-col items-center text-center"
                    : "ml-3 flex flex-col pb-8",
                  isLast && !isHorizontal && "pb-0",
                )}
              >
                <span
                  className={cn(
                    "font-medium leading-tight",
                    isCompact ? "text-xs" : "text-sm",
                    isCurrent
                      ? "text-card-foreground"
                      : isCompleted
                        ? "text-card-foreground"
                        : "text-muted-foreground",
                  )}
                >
                  {step.label}
                </span>
                {step.description && !isCompact && (
                  <span className="mt-0.5 text-xs text-muted-foreground">
                    {step.description}
                  </span>
                )}
              </div>
            </div>
          )
        })}
      </div>
    )
  },
)
StepIndicator.displayName = "StepIndicator"

export { StepIndicator }
export type { StepIndicatorProps, Step }
