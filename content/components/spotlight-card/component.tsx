"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  spotlightColor?: string
  spotlightSize?: number
}

const SpotlightCard = React.forwardRef<HTMLDivElement, SpotlightCardProps>(
  (
    {
      className,
      spotlightColor = "120, 119, 198",
      spotlightSize = 250,
      children,
      ...props
    },
    ref,
  ) => {
    const internalRef = React.useRef<HTMLDivElement>(null)
    const [position, setPosition] = React.useState({ x: 0, y: 0 })
    const [isHovered, setIsHovered] = React.useState(false)

    React.useImperativeHandle(ref, () => internalRef.current!)

    const handleMouseMove = React.useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = internalRef.current?.getBoundingClientRect()
        if (!rect) return
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
      },
      [],
    )

    return (
      <div
        ref={internalRef}
        className={cn(
          "group relative overflow-hidden rounded-xl bg-neutral-950 p-px",
          className,
        )}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        {/* Border glow — sits behind the inner panel, visible through the 1px padding */}
        <div
          className={cn(
            "pointer-events-none absolute inset-0 transition-opacity duration-500",
            isHovered ? "opacity-100" : "opacity-0",
          )}
          style={{
            background: `radial-gradient(${spotlightSize * 1.5}px circle at ${position.x}px ${position.y}px, rgba(${spotlightColor}, 0.7), transparent 70%)`,
          }}
        />

        {/* Inner card surface */}
        <div className="relative rounded-[11px] bg-neutral-900 p-6">
          {/* Main spotlight beam — bright concentrated core with falloff */}
          <div
            className={cn(
              "pointer-events-none absolute inset-0 rounded-[11px] transition-opacity duration-500",
              isHovered ? "opacity-100" : "opacity-0",
            )}
            style={{
              background: `
                radial-gradient(${spotlightSize * 0.4}px circle at ${position.x}px ${position.y}px, rgba(${spotlightColor}, 0.25), transparent),
                radial-gradient(${spotlightSize}px circle at ${position.x}px ${position.y}px, rgba(${spotlightColor}, 0.1), transparent)
              `,
            }}
          />

          {/* Specular highlight — tiny bright hotspot at cursor */}
          <div
            className={cn(
              "pointer-events-none absolute inset-0 rounded-[11px] mix-blend-overlay transition-opacity duration-300",
              isHovered ? "opacity-100" : "opacity-0",
            )}
            style={{
              background: `radial-gradient(${spotlightSize * 0.15}px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.15), transparent)`,
            }}
          />

          <div className="relative z-10">{children}</div>
        </div>
      </div>
    )
  },
)
SpotlightCard.displayName = "SpotlightCard"

export { SpotlightCard }
export type { SpotlightCardProps }
