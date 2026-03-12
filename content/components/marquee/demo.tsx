"use client"

import { Marquee } from "./component"

const logos = [
  { name: "Acme", color: "bg-blue-500/10 text-blue-600 border-blue-500/20" },
  { name: "Globex", color: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" },
  { name: "Initech", color: "bg-purple-500/10 text-purple-600 border-purple-500/20" },
  { name: "Umbrella", color: "bg-red-500/10 text-red-600 border-red-500/20" },
  { name: "Stark", color: "bg-amber-500/10 text-amber-600 border-amber-500/20" },
  { name: "Wayne", color: "bg-slate-500/10 text-slate-600 border-slate-500/20" },
  { name: "Oscorp", color: "bg-green-500/10 text-green-600 border-green-500/20" },
  { name: "Cyberdyne", color: "bg-pink-500/10 text-pink-600 border-pink-500/20" },
]

export default function MarqueeDemo() {
  return (
    <div className="flex flex-col gap-6">
      <Marquee speed={25}>
        {logos.map((logo) => (
          <div
            key={logo.name}
            className={`flex h-16 w-32 items-center justify-center rounded-lg border font-semibold ${logo.color}`}
          >
            {logo.name}
          </div>
        ))}
      </Marquee>
      <Marquee speed={20} direction="right">
        {logos.map((logo) => (
          <div
            key={logo.name}
            className={`flex h-16 w-32 items-center justify-center rounded-lg border font-semibold ${logo.color}`}
          >
            {logo.name}
          </div>
        ))}
      </Marquee>
    </div>
  )
}
