"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  blur?: "sm" | "md" | "lg" | "xl"
}

const blurMap = {
  sm: "backdrop-blur-sm",
  md: "backdrop-blur-md",
  lg: "backdrop-blur-lg",
  xl: "backdrop-blur-xl",
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, blur = "lg", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl border border-white/20 bg-white/10 p-6 shadow-lg",
          blurMap[blur],
          className,
        )}
        {...props}
      >
        {children}
      </div>
    )
  },
)
GlassCard.displayName = "GlassCard"

export { GlassCard }
