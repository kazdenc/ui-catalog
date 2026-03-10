"use client"

import { GlassCard } from "./component"

export default function GlassCardDemo() {
  return (
    <div className="relative min-h-[300px] rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8 flex items-center justify-center">
      <GlassCard className="max-w-sm">
        <h3 className="text-lg font-semibold text-white">Glass Card</h3>
        <p className="mt-2 text-sm text-white/80">
          A frosted glass morphism effect with customizable backdrop blur
          intensity. Works best over colorful backgrounds.
        </p>
      </GlassCard>
    </div>
  )
}
