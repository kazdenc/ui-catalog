"use client"

import { FlipCard, FlipCardFront, FlipCardBack } from "./component"

const face =
  "flex h-full w-full flex-col items-center justify-center rounded-xl border border-white/10 p-6"

export default function FlipCardDemo() {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      <FlipCard className="h-56 w-44">
        <FlipCardFront className={`${face} bg-neutral-900`}>
          <span className="text-3xl">🂡</span>
          <p className="mt-3 text-sm font-medium text-white">Hover me</p>
          <p className="mt-1 text-xs text-neutral-500">Horizontal flip</p>
        </FlipCardFront>
        <FlipCardBack className={`${face} bg-indigo-950`}>
          <span className="text-3xl">✦</span>
          <p className="mt-3 text-sm font-medium text-indigo-200">
            Back side
          </p>
          <p className="mt-1 text-xs text-indigo-400">Revealed on hover</p>
        </FlipCardBack>
      </FlipCard>

      <FlipCard trigger="click" className="h-56 w-44">
        <FlipCardFront className={`${face} bg-neutral-900`}>
          <span className="text-3xl">?</span>
          <p className="mt-3 text-sm font-medium text-white">Click me</p>
          <p className="mt-1 text-xs text-neutral-500">Click to reveal</p>
        </FlipCardFront>
        <FlipCardBack className={`${face} bg-emerald-950`}>
          <span className="text-3xl">✓</span>
          <p className="mt-3 text-sm font-medium text-emerald-200">Answer</p>
          <p className="mt-1 text-xs text-emerald-400">
            Click again to flip back
          </p>
        </FlipCardBack>
      </FlipCard>

      <FlipCard direction="vertical" className="h-56 w-44">
        <FlipCardFront className={`${face} bg-neutral-900`}>
          <span className="text-3xl">↕</span>
          <p className="mt-3 text-sm font-medium text-white">Vertical</p>
          <p className="mt-1 text-xs text-neutral-500">Flips on X axis</p>
        </FlipCardFront>
        <FlipCardBack className={`${face} bg-rose-950`}>
          <span className="text-3xl">★</span>
          <p className="mt-3 text-sm font-medium text-rose-200">Flipped!</p>
          <p className="mt-1 text-xs text-rose-400">Vertical direction</p>
        </FlipCardBack>
      </FlipCard>
    </div>
  )
}
