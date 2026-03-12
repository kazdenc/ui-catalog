"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export interface AvatarData {
  src?: string
  alt: string
  fallback: string
}

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  avatars: AvatarData[]
  max?: number
  size?: "sm" | "md" | "lg"
}

const sizeClasses = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-12 w-12 text-base",
}

const overlapClasses = {
  sm: "-ml-2",
  md: "-ml-3",
  lg: "-ml-4",
}

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ avatars, max = 5, size = "md", className, ...props }, ref) => {
    const visible = avatars.slice(0, max)
    const overflow = avatars.length - max

    return (
      <TooltipProvider>
        <div
          ref={ref}
          className={cn(
            "group flex items-center",
            className,
          )}
          {...props}
        >
          {visible.map((avatar, index) => (
            <Tooltip key={index}>
              <TooltipTrigger
                className={cn(
                  "relative rounded-full ring-2 ring-background transition-transform duration-200 ease-out focus:outline-none",
                  "group-hover:translate-x-0",
                  index !== 0 && overlapClasses[size],
                  "group-hover:[&:not(:first-child)]:ml-0",
                )}
                style={{
                  zIndex: visible.length - index,
                }}
              >
                <span
                  className={cn(
                    "flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted font-medium text-muted-foreground",
                    sizeClasses[size],
                  )}
                >
                  {avatar.src ? (
                    <img
                      src={avatar.src}
                      alt={avatar.alt}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    avatar.fallback
                  )}
                </span>
              </TooltipTrigger>
              <TooltipContent>{avatar.alt}</TooltipContent>
            </Tooltip>
          ))}

          {overflow > 0 && (
            <span
              className={cn(
                "relative flex shrink-0 items-center justify-center rounded-full bg-muted font-medium text-muted-foreground ring-2 ring-background transition-transform duration-200 ease-out",
                sizeClasses[size],
                overlapClasses[size],
                "group-hover:ml-0",
              )}
              style={{ zIndex: 0 }}
            >
              +{overflow}
            </span>
          )}
        </div>
      </TooltipProvider>
    )
  },
)
AvatarGroup.displayName = "AvatarGroup"

export { AvatarGroup }
