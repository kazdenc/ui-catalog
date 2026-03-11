"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type FlipTrigger = "hover" | "click"
type FlipDirection = "horizontal" | "vertical"

const FlipDirectionContext = React.createContext<FlipDirection>("horizontal")

interface FlipCardProps extends React.HTMLAttributes<HTMLDivElement> {
  trigger?: FlipTrigger
  direction?: FlipDirection
  duration?: number
}

const FlipCard = React.forwardRef<HTMLDivElement, FlipCardProps>(
  (
    {
      className,
      trigger = "hover",
      direction = "horizontal",
      duration = 600,
      children,
      ...props
    },
    ref,
  ) => {
    const [flipped, setFlipped] = React.useState(false)

    const rotation = direction === "horizontal" ? "rotateY" : "rotateX"
    const transform = flipped ? `${rotation}(180deg)` : `${rotation}(0deg)`

    return (
      <div
        ref={ref}
        className={cn("group perspective-[1000px]", className)}
        onMouseEnter={trigger === "hover" ? () => setFlipped(true) : undefined}
        onMouseLeave={trigger === "hover" ? () => setFlipped(false) : undefined}
        onClick={trigger === "click" ? () => setFlipped((f) => !f) : undefined}
        {...props}
      >
        <FlipDirectionContext.Provider value={direction}>
          <div
            className="relative h-full w-full [transform-style:preserve-3d]"
            style={{
              transform,
              transition: `transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
            }}
          >
            {children}
          </div>
        </FlipDirectionContext.Provider>
      </div>
    )
  },
)
FlipCard.displayName = "FlipCard"

interface FlipCardFaceProps extends React.HTMLAttributes<HTMLDivElement> {}

const FlipCardFront = React.forwardRef<HTMLDivElement, FlipCardFaceProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "absolute inset-0 [backface-visibility:hidden]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  ),
)
FlipCardFront.displayName = "FlipCardFront"

const FlipCardBack = React.forwardRef<HTMLDivElement, FlipCardFaceProps>(
  ({ className, children, style, ...props }, ref) => {
    const direction = React.useContext(FlipDirectionContext)
    const backTransform =
      direction === "horizontal" ? "rotateY(180deg)" : "rotateX(180deg)"

    return (
      <div
        ref={ref}
        className={cn(
          "absolute inset-0 [backface-visibility:hidden]",
          className,
        )}
        style={{ transform: backTransform, ...style }}
        {...props}
      >
        {children}
      </div>
    )
  },
)
FlipCardBack.displayName = "FlipCardBack"

export { FlipCard, FlipCardFront, FlipCardBack }
export type { FlipCardProps, FlipCardFaceProps }
