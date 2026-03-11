import * as React from "react"
import { type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {}

const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col items-center justify-center px-6 py-16 text-center",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  ),
)
EmptyState.displayName = "EmptyState"

interface EmptyStateIconProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon
}

const EmptyStateIcon = React.forwardRef<HTMLDivElement, EmptyStateIconProps>(
  ({ className, icon: Icon, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary",
        className,
      )}
      {...props}
    >
      <Icon className="h-6 w-6 text-muted-foreground" />
    </div>
  ),
)
EmptyStateIcon.displayName = "EmptyStateIcon"

interface EmptyStateTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

const EmptyStateTitle = React.forwardRef<
  HTMLHeadingElement,
  EmptyStateTitleProps
>(({ className, children, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-lg font-semibold text-card-foreground", className)}
    {...props}
  >
    {children}
  </h3>
))
EmptyStateTitle.displayName = "EmptyStateTitle"

interface EmptyStateDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

const EmptyStateDescription = React.forwardRef<
  HTMLParagraphElement,
  EmptyStateDescriptionProps
>(({ className, children, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("mt-1 max-w-sm text-sm text-muted-foreground", className)}
    {...props}
  >
    {children}
  </p>
))
EmptyStateDescription.displayName = "EmptyStateDescription"

interface EmptyStateActionProps extends React.HTMLAttributes<HTMLDivElement> {}

const EmptyStateAction = React.forwardRef<
  HTMLDivElement,
  EmptyStateActionProps
>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("mt-6", className)} {...props}>
    {children}
  </div>
))
EmptyStateAction.displayName = "EmptyStateAction"

export {
  EmptyState,
  EmptyStateIcon,
  EmptyStateTitle,
  EmptyStateDescription,
  EmptyStateAction,
}
export type {
  EmptyStateProps,
  EmptyStateIconProps,
  EmptyStateTitleProps,
  EmptyStateDescriptionProps,
  EmptyStateActionProps,
}
