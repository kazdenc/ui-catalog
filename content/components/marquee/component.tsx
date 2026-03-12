"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Duration in seconds for one full scroll cycle */
  speed?: number
  /** Scroll direction */
  direction?: "left" | "right"
  /** Pause animation on hover */
  pauseOnHover?: boolean
  /** Show gradient fade on edges */
  fade?: boolean
}

const Marquee = React.forwardRef<HTMLDivElement, MarqueeProps>(
  (
    {
      className,
      children,
      speed = 30,
      direction = "left",
      pauseOnHover = true,
      fade = true,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative flex gap-4 overflow-x-clip",
          fade &&
            "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
          className,
        )}
        {...props}
      >
        <div
          className={cn(
            "flex shrink-0 items-center gap-4 animate-marquee",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
          )}
          style={{
            animationDuration: `${speed}s`,
            animationDirection: direction === "right" ? "reverse" : "normal",
          }}
        >
          {children}
        </div>
        <div
          aria-hidden
          className={cn(
            "flex shrink-0 items-center gap-4 animate-marquee",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
          )}
          style={{
            animationDuration: `${speed}s`,
            animationDirection: direction === "right" ? "reverse" : "normal",
          }}
        >
          {children}
        </div>
      </div>
    )
  },
)
Marquee.displayName = "Marquee"

export { Marquee }
export type { MarqueeProps }
