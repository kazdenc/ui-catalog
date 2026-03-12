"use client"

import { TextGradient } from "./component"

export default function TextGradientDemo() {
  return (
    <div className="flex flex-col items-center gap-6">
      <TextGradient className="text-4xl font-bold tracking-tight">
        Animated Gradient Text
      </TextGradient>

      <TextGradient
        colors={["#22d3ee", "#a78bfa", "#f472b6"]}
        direction={135}
        className="text-2xl font-semibold"
      >
        Custom Colors &amp; Direction
      </TextGradient>

      <TextGradient
        colors={["#34d399", "#3b82f6"]}
        animate={false}
        className="text-xl font-medium"
      >
        Static Gradient (no animation)
      </TextGradient>

      <TextGradient
        as="h2"
        colors={["#f97316", "#ef4444", "#ec4899", "#f97316"]}
        className="text-3xl font-extrabold"
      >
        Rendered as an h2 element
      </TextGradient>
    </div>
  )
}
