"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Check, Loader2, X } from "lucide-react"

type SubmitButtonStatus = "idle" | "loading" | "success" | "error"

interface SubmitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  status?: SubmitButtonStatus
}

const SubmitButton = React.forwardRef<HTMLButtonElement, SubmitButtonProps>(
  ({ className, status = "idle", children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || status === "loading"}
        className={cn(
          "relative inline-flex h-10 min-w-[140px] items-center justify-center gap-2 rounded-md px-6 text-sm font-medium transition-all duration-300",
          status === "idle" &&
            "bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.98]",
          status === "loading" &&
            "cursor-not-allowed bg-primary text-primary-foreground opacity-90",
          status === "success" &&
            "bg-emerald-600 text-white dark:bg-emerald-500 dark:text-white",
          status === "error" &&
            "bg-destructive text-destructive-foreground",
          className,
        )}
        {...props}
      >
        <span
          className={cn(
            "flex items-center justify-center gap-2 transition-all duration-300",
            status !== "idle" && "absolute opacity-0 scale-75",
            status === "idle" && "opacity-100 scale-100",
          )}
        >
          {children}
        </span>

        <span
          className={cn(
            "flex items-center justify-center transition-all duration-300",
            status !== "loading" && "absolute opacity-0 scale-75",
            status === "loading" && "opacity-100 scale-100",
          )}
        >
          <Loader2 className="h-4 w-4 animate-spin" />
        </span>

        <span
          className={cn(
            "flex items-center justify-center transition-all duration-300",
            status !== "success" && "absolute opacity-0 scale-75",
            status === "success" && "opacity-100 scale-100",
          )}
        >
          <Check className="h-4 w-4" />
        </span>

        <span
          className={cn(
            "flex items-center justify-center transition-all duration-300",
            status !== "error" && "absolute opacity-0 scale-75",
            status === "error" && "opacity-100 scale-100",
          )}
        >
          <X className="h-4 w-4" />
        </span>
      </button>
    )
  },
)
SubmitButton.displayName = "SubmitButton"

export { SubmitButton }
