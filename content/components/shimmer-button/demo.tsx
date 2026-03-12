"use client"

import { ShimmerButton } from "./component"

export default function ShimmerButtonDemo() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <ShimmerButton>Shimmer</ShimmerButton>
      <ShimmerButton variant="secondary">Secondary</ShimmerButton>
      <ShimmerButton variant="destructive">Destructive</ShimmerButton>
      <ShimmerButton size="sm">Small</ShimmerButton>
      <ShimmerButton size="lg">Large</ShimmerButton>
    </div>
  )
}
