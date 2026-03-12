"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type ShimmerButtonSize = "sm" | "md" | "lg"
type ShimmerButtonVariant = "default" | "secondary" | "destructive"

interface ShimmerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ShimmerButtonSize
  variant?: ShimmerButtonVariant
}

const sizeClasses: Record<ShimmerButtonSize, string> = {
  sm: "h-9 px-4 text-xs rounded-lg",
  md: "h-11 px-6 text-sm rounded-xl",
  lg: "h-13 px-8 text-base rounded-xl",
}

const variantClasses: Record<ShimmerButtonVariant, string> = {
  default:
    "bg-gradient-to-b from-primary/90 to-primary text-primary-foreground shadow-[0_1px_2px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-1px_0_rgba(0,0,0,0.15)] [--shimmer-via:rgba(255,255,255,0.35)]",
  secondary:
    "bg-gradient-to-b from-secondary/80 to-secondary text-secondary-foreground shadow-[0_1px_2px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.08)] [--shimmer-via:rgba(255,255,255,0.25)]",
  destructive:
    "bg-gradient-to-b from-destructive/85 to-destructive text-white shadow-[0_1px_2px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-1px_0_rgba(0,0,0,0.15)] [--shimmer-via:rgba(255,255,255,0.35)]",
}

const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    { className, size = "md", variant = "default", children, ...props },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative inline-flex cursor-pointer items-center justify-center overflow-hidden font-semibold tracking-wide transition-all",
          "hover:brightness-110 hover:shadow-[0_2px_8px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.15)]",
          "active:scale-[0.97] active:brightness-95 active:shadow-[0_0px_1px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(0,0,0,0.2)]",
          sizeClasses[size],
          variantClasses[variant],
          className,
        )}
        {...props}
      >
        {/* Top gloss highlight */}
        <span className="pointer-events-none absolute inset-x-0 top-0 h-[45%] rounded-t-[inherit] bg-gradient-to-b from-white/20 to-transparent" />
        {/* Shimmer sweep overlay */}
        <span
          className={cn(
            "pointer-events-none absolute inset-0",
            "bg-[linear-gradient(120deg,transparent_0%,var(--shimmer-via)_50%,transparent_100%)]",
            "bg-[length:200%_100%] bg-[position:200%_0]",
            "transition-none group-hover:animate-[shimmer-sweep_1.5s_ease-in-out_infinite]",
          )}
        />
        {/* Bottom edge shadow for depth */}
        <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px rounded-b-[inherit] bg-black/10" />
        <span className="relative z-10 drop-shadow-[0_1px_0_rgba(0,0,0,0.15)]">{children}</span>
      </button>
    )
  },
)
ShimmerButton.displayName = "ShimmerButton"

export { ShimmerButton }
export type { ShimmerButtonProps }
