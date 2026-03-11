"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ExpandableCardProps extends React.HTMLAttributes<HTMLDivElement> {
  expanded?: boolean
  onToggle?: () => void
  duration?: number
}

const ExpandableCard = React.forwardRef<HTMLDivElement, ExpandableCardProps>(
  (
    {
      className,
      expanded = false,
      onToggle,
      duration = 400,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative cursor-pointer overflow-hidden rounded-xl border bg-card transition-colors hover:border-foreground/20",
          className,
        )}
        onClick={onToggle}
        style={{
          transition: `border-color 150ms, box-shadow 150ms`,
        }}
        {...props}
      >
        {children}
      </div>
    )
  },
)
ExpandableCard.displayName = "ExpandableCard"

interface ExpandableCardHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const ExpandableCardHeader = React.forwardRef<
  HTMLDivElement,
  ExpandableCardHeaderProps
>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("p-6", className)} {...props}>
    {children}
  </div>
))
ExpandableCardHeader.displayName = "ExpandableCardHeader"

interface ExpandableCardContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  expanded?: boolean
  duration?: number
}

const ExpandableCardContent = React.forwardRef<
  HTMLDivElement,
  ExpandableCardContentProps
>(({ className, expanded = false, duration = 400, children, ...props }, ref) => {
  const contentRef = React.useRef<HTMLDivElement>(null)
  const [height, setHeight] = React.useState(0)

  React.useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight)
    }
  }, [children])

  return (
    <div
      ref={ref}
      className={cn("overflow-hidden", className)}
      style={{
        maxHeight: expanded ? `${height}px` : "0px",
        opacity: expanded ? 1 : 0,
        transition: `max-height ${duration}ms cubic-bezier(0.4, 0, 0.2, 1), opacity ${duration * 0.6}ms ${expanded ? `${duration * 0.2}ms` : "0ms"} ease`,
      }}
      {...props}
    >
      <div ref={contentRef} className="px-6 pb-6">
        {children}
      </div>
    </div>
  )
})
ExpandableCardContent.displayName = "ExpandableCardContent"

export { ExpandableCard, ExpandableCardHeader, ExpandableCardContent }
export type {
  ExpandableCardProps,
  ExpandableCardHeaderProps,
  ExpandableCardContentProps,
}
