"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Check, Clipboard } from "lucide-react"

type CopyButtonSize = "sm" | "default" | "lg"
type CopyButtonVariant = "default" | "outline" | "ghost"

interface CopyButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children" | "onCopy"> {
  value: string
  onCopy?: (value: string) => void
  size?: CopyButtonSize
  variant?: CopyButtonVariant
  children?: React.ReactNode
}

const sizeClasses: Record<CopyButtonSize, string> = {
  sm: "h-8 px-3 text-xs gap-1.5",
  default: "h-10 px-4 text-sm gap-2",
  lg: "h-12 px-6 text-base gap-2.5",
}

const iconSizeClasses: Record<CopyButtonSize, string> = {
  sm: "h-3.5 w-3.5",
  default: "h-4 w-4",
  lg: "h-5 w-5",
}

const variantClasses: Record<CopyButtonVariant, string> = {
  default:
    "bg-primary text-primary-foreground hover:bg-primary/90",
  outline:
    "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  ghost:
    "hover:bg-accent hover:text-accent-foreground",
}

const CopyButton = React.forwardRef<HTMLButtonElement, CopyButtonProps>(
  (
    {
      className,
      value,
      onCopy,
      size = "default",
      variant = "default",
      children,
      ...props
    },
    ref,
  ) => {
    const [copied, setCopied] = React.useState(false)

    const handleCopy = React.useCallback(async () => {
      try {
        await navigator.clipboard.writeText(value)
        setCopied(true)
        onCopy?.(value)
        setTimeout(() => setCopied(false), 2000)
      } catch {
        // Clipboard API not available
      }
    }, [value, onCopy])

    const iconSize = iconSizeClasses[size]

    return (
      <button
        ref={ref}
        type="button"
        onClick={handleCopy}
        className={cn(
          "relative inline-flex items-center justify-center rounded-md font-medium transition-all active:scale-[0.98]",
          sizeClasses[size],
          variantClasses[variant],
          className,
        )}
        {...props}
      >
        <span className="relative inline-flex items-center justify-center">
          <Clipboard
            className={cn(
              iconSize,
              "transition-all duration-300",
              copied
                ? "absolute scale-0 opacity-0"
                : "scale-100 opacity-100",
            )}
          />
          <Check
            className={cn(
              iconSize,
              "transition-all duration-300 text-emerald-500",
              copied
                ? "scale-100 opacity-100"
                : "absolute scale-0 opacity-0",
            )}
          />
        </span>
        <span className="transition-opacity duration-200">
          {copied ? "Copied!" : children ?? "Copy"}
        </span>
      </button>
    )
  },
)
CopyButton.displayName = "CopyButton"

export { CopyButton }
export type { CopyButtonProps }
