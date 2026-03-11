"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const TiltContext = React.createContext<{
  nx: number
  ny: number
  isHovered: boolean
}>({ nx: 0, ny: 0, isHovered: false })

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  maxTilt?: number
  perspective?: number
  glare?: boolean
  scale?: number
}

const TiltCard = React.forwardRef<HTMLDivElement, TiltCardProps>(
  (
    {
      className,
      maxTilt = 15,
      perspective = 1000,
      glare = true,
      scale = 1.02,
      children,
      ...props
    },
    ref,
  ) => {
    const internalRef = React.useRef<HTMLDivElement>(null)
    const [tilt, setTilt] = React.useState({ nx: 0, ny: 0 })
    const [isHovered, setIsHovered] = React.useState(false)

    React.useImperativeHandle(ref, () => internalRef.current!)

    const handleMouseMove = React.useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = internalRef.current?.getBoundingClientRect()
        if (!rect) return
        const nx = Math.max(
          -1,
          Math.min(1, (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)),
        )
        const ny = Math.max(
          -1,
          Math.min(1, (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)),
        )
        setTilt({ nx, ny })
      },
      [],
    )

    const rotateY = tilt.nx * maxTilt
    const rotateX = -tilt.ny * maxTilt
    const glareAngle =
      Math.atan2(tilt.ny, tilt.nx) * (180 / Math.PI) + 180
    const glareOpacity =
      Math.max(Math.abs(tilt.nx), Math.abs(tilt.ny)) * 0.4

    return (
      <div
        ref={internalRef}
        className={cn("w-fit", className)}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false)
          setTilt({ nx: 0, ny: 0 })
        }}
        style={{
          transform: isHovered
            ? `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`
            : `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
          transition: isHovered
            ? "transform 0.1s ease-out"
            : "transform 0.4s ease-out",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        {...props}
      >
        <TiltContext.Provider value={{ nx: tilt.nx, ny: tilt.ny, isHovered }}>
          <div className="relative overflow-hidden rounded-xl border bg-card p-6">
            {children}
            {glare && (
              <div
                className={cn(
                  "pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-300",
                  isHovered ? "opacity-100" : "opacity-0",
                )}
                style={{
                  background: `linear-gradient(${glareAngle}deg, rgba(255,255,255,${glareOpacity}) 0%, transparent 80%)`,
                }}
              />
            )}
          </div>
        </TiltContext.Provider>
      </div>
    )
  },
)
TiltCard.displayName = "TiltCard"

interface TiltCardLayerProps extends React.HTMLAttributes<HTMLDivElement> {
  depth?: number
}

const TiltCardLayer = React.forwardRef<HTMLDivElement, TiltCardLayerProps>(
  ({ className, depth = 0, children, style, ...props }, ref) => {
    const { nx, ny, isHovered } = React.useContext(TiltContext)
    const translateX = nx * depth
    const translateY = ny * depth

    return (
      <div
        ref={ref}
        className={cn("relative", className)}
        style={{
          transform: isHovered
            ? `translateX(${translateX}px) translateY(${translateY}px) translateZ(${depth}px)`
            : "translateX(0px) translateY(0px) translateZ(0px)",
          transition: isHovered
            ? "transform 0.1s ease-out"
            : "transform 0.4s ease-out",
          transformStyle: "preserve-3d",
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    )
  },
)
TiltCardLayer.displayName = "TiltCardLayer"

export { TiltCard, TiltCardLayer }
export type { TiltCardProps, TiltCardLayerProps }
