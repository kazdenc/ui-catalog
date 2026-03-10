"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type LoaderVariant =
  | "bounce"
  | "dots"
  | "ping-pong"
  | "morphing"
  | "spinner"
  | "pulse"
  | "bars"

type LoaderSize = "sm" | "md" | "lg"

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: LoaderVariant
  size?: LoaderSize
}

const sizeMap: Record<
  LoaderSize,
  { dot: string; container: string; ring: string; bar: string }
> = {
  sm: { dot: "size-2", container: "gap-1", ring: "size-4", bar: "w-0.5" },
  md: { dot: "size-3", container: "gap-1.5", ring: "size-6", bar: "w-1" },
  lg: { dot: "size-4", container: "gap-2", ring: "size-8", bar: "w-1.5" },
}

const Loader = React.forwardRef<HTMLDivElement, LoaderProps>(
  ({ className, variant = "dots", size = "md", ...props }, ref) => {
    const s = sizeMap[size]

    return (
      <>
        <LoaderStyles />
        <div
          ref={ref}
          role="status"
          aria-label="Loading"
          className={cn("inline-flex items-center", s.container, className)}
          {...props}
        >
          {variant === "bounce" && (
            <div
              className={cn(
                s.dot,
                "rounded-full bg-current animate-[loader-bounce_1s_ease-in-out_infinite]",
              )}
            />
          )}

          {variant === "dots" &&
            [0, 1, 2].map((i) => (
              <div
                key={i}
                className={cn(
                  s.dot,
                  "rounded-full bg-current animate-[loader-bounce_1.2s_ease-in-out_infinite]",
                )}
                style={{ animationDelay: `${i * 0.16}s` }}
              />
            ))}

          {variant === "ping-pong" && (
            <div
              className={cn(
                s.dot,
                "rounded-full bg-current animate-[loader-ping-pong_1s_cubic-bezier(0.45,0.05,0.55,0.95)_infinite_alternate]",
              )}
            />
          )}

          {variant === "morphing" && (
            <div
              className={cn(
                s.dot,
                "bg-indigo-500 animate-[loader-morph_2s_ease-in-out_infinite]",
              )}
            />
          )}

          {variant === "spinner" && (
            <div
              className={cn(
                s.ring,
                "rounded-full border-2 border-current border-t-transparent animate-[loader-spin_0.75s_linear_infinite]",
              )}
            />
          )}

          {variant === "pulse" && (
            <div
              className={cn(
                s.dot,
                "rounded-full bg-current animate-[loader-pulse_1.5s_ease-in-out_infinite]",
              )}
            />
          )}

          {variant === "bars" &&
            [0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={cn(
                  s.bar,
                  "rounded-full bg-current animate-[loader-bars_1s_ease-in-out_infinite]",
                )}
                style={{
                  height: "1em",
                  animationDelay: `${i * 0.12}s`,
                }}
              />
            ))}


          <span className="sr-only">Loading...</span>
        </div>
      </>
    )
  },
)
Loader.displayName = "Loader"

function LoaderStyles() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
@keyframes loader-bounce {
  0%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-0.75em); }
}
@keyframes loader-ping-pong {
  0% { transform: translateX(-0.875em); opacity: 1; }
  100% { transform: translateX(0.875em); opacity: 0.25; }
}
@keyframes loader-morph {
  0%, 100% { border-radius: 15%; transform: rotate(0deg); background-color: #6366f1; }
  50% { border-radius: 50%; transform: rotate(180deg); background-color: #ec4899; }
}
@keyframes loader-spin {
  to { transform: rotate(360deg); }
}
@keyframes loader-pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(2.5); opacity: 0; }
}
@keyframes loader-bars {
  0%, 80%, 100% { transform: scaleY(0.4); }
  40% { transform: scaleY(1); }
}
`,
      }}
    />
  )
}

export { Loader }
export type { LoaderProps, LoaderVariant, LoaderSize }
