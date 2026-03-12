import * as React from "react"
import { cn } from "@/lib/utils"

const variantConfig = {
  grain: { baseFrequency: "0.65", numOctaves: 4, type: "fractalNoise" as const },
  static: { baseFrequency: "0.80", numOctaves: 2, type: "turbulence" as const },
  paper: { baseFrequency: "0.04", numOctaves: 5, type: "fractalNoise" as const },
}

interface NoiseTextureProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "grain" | "static" | "paper"
  opacity?: number
}

const NoiseTexture = React.forwardRef<HTMLDivElement, NoiseTextureProps>(
  ({ variant = "grain", opacity = 0.15, className, children, ...props }, ref) => {
    const config = variantConfig[variant]
    const filterId = `noise-${variant}`

    return (
      <div
        ref={ref}
        className={cn("relative overflow-hidden", className)}
        {...props}
      >
        {children}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full"
          style={{ opacity }}
        >
          <filter id={filterId}>
            <feTurbulence
              type={config.type}
              baseFrequency={config.baseFrequency}
              numOctaves={config.numOctaves}
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter={`url(#${filterId})`} />
        </svg>
      </div>
    )
  },
)
NoiseTexture.displayName = "NoiseTexture"

export { NoiseTexture }
export type { NoiseTextureProps }
