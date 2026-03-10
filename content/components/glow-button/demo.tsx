"use client"

import { GlowButton } from "./component"

export default function GlowButtonDemo() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <GlowButton>Default Glow</GlowButton>
      <GlowButton glowColor="rgba(236, 72, 153, 0.6)">Pink Glow</GlowButton>
      <GlowButton glowColor="rgba(34, 197, 94, 0.6)">Green Glow</GlowButton>
    </div>
  )
}
