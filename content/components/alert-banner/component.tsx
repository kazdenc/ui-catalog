"use client"

import * as React from "react"
import { Info, AlertTriangle, XCircle, CheckCircle2, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const variantConfig = {
  info: {
    icon: Info,
    className: "border-blue-500/30 bg-blue-500/10 text-blue-700 dark:text-blue-300",
  },
  warning: {
    icon: AlertTriangle,
    className:
      "border-yellow-500/30 bg-yellow-500/10 text-yellow-700 dark:text-yellow-300",
  },
  error: {
    icon: XCircle,
    className: "border-red-500/30 bg-red-500/10 text-red-700 dark:text-red-300",
  },
  success: {
    icon: CheckCircle2,
    className:
      "border-green-500/30 bg-green-500/10 text-green-700 dark:text-green-300",
  },
} as const

type AlertBannerVariant = keyof typeof variantConfig

interface AlertBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AlertBannerVariant
  dismissible?: boolean
  onDismiss?: () => void
  icon?: React.ElementType
  action?: React.ReactNode
}

const AlertBanner = React.forwardRef<HTMLDivElement, AlertBannerProps>(
  (
    {
      className,
      variant = "info",
      dismissible = false,
      onDismiss,
      icon,
      action,
      children,
      ...props
    },
    ref,
  ) => {
    const [dismissed, setDismissed] = React.useState(false)

    if (dismissed) return null

    const config = variantConfig[variant]
    const IconComponent = icon ?? config.icon

    const handleDismiss = () => {
      if (onDismiss) {
        onDismiss()
      } else {
        setDismissed(true)
      }
    }

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          "flex items-start gap-3 rounded-lg border p-4",
          config.className,
          className,
        )}
        {...props}
      >
        <IconComponent className="mt-0.5 h-5 w-5 shrink-0" />
        <div className="flex-1 text-sm">{children}</div>
        {action && <div className="shrink-0">{action}</div>}
        {dismissible && (
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 shrink-0 hover:bg-transparent"
            onClick={handleDismiss}
            aria-label="Dismiss"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
    )
  },
)
AlertBanner.displayName = "AlertBanner"

export { AlertBanner }
export type { AlertBannerProps, AlertBannerVariant }
