"use client"

import { SpotlightCard } from "./component"

export default function SpotlightCardDemo() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <SpotlightCard>
        <h3 className="text-lg font-semibold text-white">Hover me</h3>
        <p className="mt-2 text-sm text-neutral-400">
          A spotlight beam follows your cursor with a glowing border edge.
        </p>
      </SpotlightCard>
      <SpotlightCard spotlightColor="236, 72, 153">
        <h3 className="text-lg font-semibold text-white">Pink spotlight</h3>
        <p className="mt-2 text-sm text-neutral-400">
          Pass any RGB triplet to change the spotlight color.
        </p>
      </SpotlightCard>
      <SpotlightCard spotlightColor="34, 197, 94" spotlightSize={350}>
        <h3 className="text-lg font-semibold text-white">Larger beam</h3>
        <p className="mt-2 text-sm text-neutral-400">
          Increase the spotlight size for a wider, softer wash of light.
        </p>
      </SpotlightCard>
    </div>
  )
}
