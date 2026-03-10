"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  glowColor?: string
}

const GlowButton = React.forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, glowColor = "rgba(99, 102, 241, 0.6)", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-all",
          "hover:shadow-[0_0_20px_var(--glow-color)] hover:scale-[1.02]",
          "active:scale-[0.98]",
          className,
        )}
        style={{ "--glow-color": glowColor } as React.CSSProperties}
        {...props}
      >
        {children}
      </button>
    )
  },
)
GlowButton.displayName = "GlowButton"

export { GlowButton }
