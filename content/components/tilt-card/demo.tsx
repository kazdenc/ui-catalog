"use client"

import { TiltCard, TiltCardLayer } from "./component"

export default function TiltCardDemo() {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      <TiltCard>
        <TiltCardLayer depth={0}>
          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-indigo-500/10 to-purple-500/10" />
        </TiltCardLayer>
        <TiltCardLayer depth={20}>
          <h3 className="text-lg font-semibold text-white">Parallax layers</h3>
          <p className="mt-2 max-w-56 text-sm text-neutral-400">
            Nested layers shift at different depths for a 3D parallax effect.
          </p>
        </TiltCardLayer>
        <TiltCardLayer depth={40} className="mt-4">
          <span className="inline-block rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-medium text-indigo-300">
            depth: 40
          </span>
        </TiltCardLayer>
      </TiltCard>

      <TiltCard glare={false} maxTilt={25}>
        <h3 className="text-lg font-semibold text-white">No glare</h3>
        <p className="mt-2 max-w-56 text-sm text-neutral-400">
          Higher tilt range with the reflection overlay disabled.
        </p>
      </TiltCard>

      <TiltCard maxTilt={8} perspective={1500}>
        <h3 className="text-lg font-semibold text-white">Subtle tilt</h3>
        <p className="mt-2 max-w-56 text-sm text-neutral-400">
          Lower max tilt and higher perspective for a refined, gentle effect.
        </p>
      </TiltCard>
    </div>
  )
}
