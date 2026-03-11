"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: number
}

const BentoGrid = React.forwardRef<HTMLDivElement, BentoGridProps>(
  ({ className, columns = 4, children, style, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("grid auto-rows-[minmax(8rem,1fr)] gap-4", className)}
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  ),
)
BentoGrid.displayName = "BentoGrid"

interface BentoGridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  colSpan?: number
  rowSpan?: number
}

const BentoGridItem = React.forwardRef<HTMLDivElement, BentoGridItemProps>(
  ({ className, colSpan = 1, rowSpan = 1, children, style, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900 p-6 transition-colors hover:border-white/20",
        className,
      )}
      style={{
        gridColumn: `span ${colSpan} / span ${colSpan}`,
        gridRow: `span ${rowSpan} / span ${rowSpan}`,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  ),
)
BentoGridItem.displayName = "BentoGridItem"

export { BentoGrid, BentoGridItem }
export type { BentoGridProps, BentoGridItemProps }
