"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface TextGradientProps extends React.HTMLAttributes<HTMLElement> {
  colors?: string[]
  direction?: number
  animate?: boolean
  as?: React.ElementType
}

const TextGradient = React.forwardRef<HTMLElement, TextGradientProps>(
  (
    {
      className,
      colors = ["#6366f1", "#ec4899", "#f59e0b", "#6366f1"],
      direction = 90,
      animate = true,
      as: Component = "span",
      style,
      children,
      ...props
    },
    ref,
  ) => {
    const gradientColors = colors.join(", ")

    return (
      <>
        <style>{`
          @keyframes text-gradient-shift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes text-gradient-shimmer {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
        <Component
          ref={ref}
          className={cn(
            "inline-block bg-clip-text text-transparent",
            "hover:brightness-125 transition-[filter] duration-300",
            className,
          )}
          style={{
            backgroundImage: `linear-gradient(${direction}deg, ${gradientColors})`,
            backgroundSize: animate ? "200% 200%" : "100% 100%",
            animation: animate
              ? "text-gradient-shift 4s ease-in-out infinite"
              : "none",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            ...style,
          }}
          {...props}
        >
          {children}
        </Component>
      </>
    )
  },
)
TextGradient.displayName = "TextGradient"

export { TextGradient }
export type { TextGradientProps }
