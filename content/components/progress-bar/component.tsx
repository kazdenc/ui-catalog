"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type ProgressVariant = "default" | "striped" | "gradient" | "segmented"

interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number
  max?: number
  variant?: ProgressVariant
  indeterminate?: boolean
  color?: string
}

const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    {
      className,
      value = 0,
      max = 100,
      variant = "default",
      indeterminate = false,
      color,
      ...props
    },
    ref,
  ) => {
    const pct = Math.min(100, Math.max(0, (value / max) * 100))

    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuenow={indeterminate ? undefined : value}
        aria-valuemin={0}
        aria-valuemax={max}
        className={cn(
          "relative h-2 w-full overflow-hidden rounded-full bg-secondary",
          className,
        )}
        {...props}
      >
        {variant === "segmented" ? (
          <SegmentedFill pct={pct} color={color} />
        ) : (
          <div
            className={cn(
              "h-full rounded-full transition-all duration-500 ease-out",
              indeterminate && "animate-progress-indeterminate",
              !color && variantClasses[variant],
            )}
            style={{
              width: indeterminate ? "40%" : `${pct}%`,
              ...(color && !indeterminate ? { backgroundColor: color } : {}),
              ...(color && variant === "gradient"
                ? {
                    background: `linear-gradient(90deg, ${color}, color-mix(in oklch, ${color}, white 30%))`,
                  }
                : {}),
            }}
          />
        )}
      </div>
    )
  },
)
ProgressBar.displayName = "ProgressBar"

const variantClasses: Record<ProgressVariant, string> = {
  default: "bg-primary",
  striped:
    "bg-primary bg-[length:1rem_1rem] bg-[linear-gradient(45deg,rgba(255,255,255,.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,.15)_50%,rgba(255,255,255,.15)_75%,transparent_75%,transparent)]",
  gradient: "bg-gradient-to-r from-primary to-primary/60",
  segmented: "",
}

function SegmentedFill({ pct, color }: { pct: number; color?: string }) {
  const segments = 10
  const filled = Math.round((pct / 100) * segments)

  return (
    <div className="flex h-full gap-0.5 px-0.5">
      {Array.from({ length: segments }, (_, i) => (
        <div
          key={i}
          className={cn(
            "flex-1 rounded-sm transition-colors duration-300",
            i < filled ? (color ? "" : "bg-primary") : "bg-transparent",
          )}
          style={i < filled && color ? { backgroundColor: color } : undefined}
        />
      ))}
    </div>
  )
}

function ProgressBarStyles() {
  return (
    <style>{`
      @keyframes progress-indeterminate {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(350%); }
      }
      .animate-progress-indeterminate {
        animation: progress-indeterminate 1.5s ease-in-out infinite;
      }
    `}</style>
  )
}

export { ProgressBar, ProgressBarStyles }
export type { ProgressBarProps }
