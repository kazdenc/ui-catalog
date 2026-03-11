"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"

/* ------------------------------------------------------------------ */
/*  Shimmer overlay                                                    */
/* ------------------------------------------------------------------ */

function ShimmerOverlay() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent"
      aria-hidden
    />
  )
}

function SkeletonLoaderStyles() {
  return (
    <style>{`
      @keyframes shimmer {
        100% { transform: translateX(100%); }
      }
    `}</style>
  )
}

/* ------------------------------------------------------------------ */
/*  SkeletonText                                                       */
/* ------------------------------------------------------------------ */

interface SkeletonTextProps extends React.HTMLAttributes<HTMLDivElement> {
  lines?: number
  lastLineWidth?: string
}

const SkeletonText = React.forwardRef<HTMLDivElement, SkeletonTextProps>(
  ({ className, lines = 3, lastLineWidth = "60%", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-2", className)}
        {...props}
      >
        {Array.from({ length: lines }, (_, i) => (
          <div key={i} className="relative overflow-hidden rounded-md">
            <Skeleton
              className="h-4 w-full"
              style={
                i === lines - 1 ? { width: lastLineWidth } : undefined
              }
            />
            <ShimmerOverlay />
          </div>
        ))}
      </div>
    )
  },
)
SkeletonText.displayName = "SkeletonText"

/* ------------------------------------------------------------------ */
/*  SkeletonAvatar                                                     */
/* ------------------------------------------------------------------ */

interface SkeletonAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number
}

const SkeletonAvatar = React.forwardRef<HTMLDivElement, SkeletonAvatarProps>(
  ({ className, size = 40, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative overflow-hidden rounded-full", className)}
        style={{ width: size, height: size }}
        {...props}
      >
        <Skeleton className="h-full w-full rounded-full" />
        <ShimmerOverlay />
      </div>
    )
  },
)
SkeletonAvatar.displayName = "SkeletonAvatar"

/* ------------------------------------------------------------------ */
/*  SkeletonCard                                                       */
/* ------------------------------------------------------------------ */

interface SkeletonCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageHeight?: number
}

const SkeletonCard = React.forwardRef<HTMLDivElement, SkeletonCardProps>(
  ({ className, imageHeight = 160, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "overflow-hidden rounded-xl border bg-card",
          className,
        )}
        {...props}
      >
        {/* Image area */}
        <div
          className="relative overflow-hidden"
          style={{ height: imageHeight }}
        >
          <Skeleton className="h-full w-full rounded-none" />
          <ShimmerOverlay />
        </div>

        {/* Text lines */}
        <div className="flex flex-col gap-2 p-4">
          <div className="relative overflow-hidden rounded-md">
            <Skeleton className="h-5 w-3/4" />
            <ShimmerOverlay />
          </div>
          <div className="relative overflow-hidden rounded-md">
            <Skeleton className="h-4 w-full" />
            <ShimmerOverlay />
          </div>
          <div className="relative overflow-hidden rounded-md">
            <Skeleton className="h-4 w-5/6" />
            <ShimmerOverlay />
          </div>
        </div>
      </div>
    )
  },
)
SkeletonCard.displayName = "SkeletonCard"

/* ------------------------------------------------------------------ */
/*  Exports                                                            */
/* ------------------------------------------------------------------ */

export {
  SkeletonText,
  SkeletonAvatar,
  SkeletonCard,
  SkeletonLoaderStyles,
}
export type { SkeletonTextProps, SkeletonAvatarProps, SkeletonCardProps }
