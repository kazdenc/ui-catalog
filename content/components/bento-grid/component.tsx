import * as React from "react"
import { cn } from "@/lib/utils"

interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {}

const BentoGrid = React.forwardRef<HTMLDivElement, BentoGridProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "grid auto-rows-[minmax(8rem,1fr)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  ),
)
BentoGrid.displayName = "BentoGrid"

interface BentoGridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  colSpan?: 1 | 2 | 3 | 4
  rowSpan?: 1 | 2 | 3
}

const spanClasses: Record<number, string> = {
  1: "col-span-1",
  2: "col-span-1 sm:col-span-2",
  3: "col-span-1 sm:col-span-2 lg:col-span-3",
  4: "col-span-1 sm:col-span-2 lg:col-span-4",
}

const rowSpanClasses: Record<number, string> = {
  1: "row-span-1",
  2: "row-span-2",
  3: "row-span-3",
}

const BentoGridItem = React.forwardRef<HTMLDivElement, BentoGridItemProps>(
  ({ className, colSpan = 1, rowSpan = 1, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "group relative overflow-hidden rounded-xl border bg-card p-6 transition-colors hover:border-foreground/20",
        spanClasses[colSpan],
        rowSpanClasses[rowSpan],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  ),
)
BentoGridItem.displayName = "BentoGridItem"

export { BentoGrid, BentoGridItem }
export type { BentoGridProps, BentoGridItemProps }
