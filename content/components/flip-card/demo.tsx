"use client"

import { FlipCard, FlipCardFront, FlipCardBack } from "./component"

const face =
  "flex h-full w-full flex-col items-center justify-center rounded-xl border p-6"

export default function FlipCardDemo() {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      <FlipCard className="h-56 w-44">
        <FlipCardFront className={`${face} bg-card`}>
          <span className="text-3xl">🂡</span>
          <p className="mt-3 text-sm font-medium text-card-foreground">Hover me</p>
          <p className="mt-1 text-xs text-muted-foreground">Horizontal flip</p>
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
        <FlipCardFront className={`${face} bg-card`}>
          <span className="text-3xl">?</span>
          <p className="mt-3 text-sm font-medium text-card-foreground">Click me</p>
          <p className="mt-1 text-xs text-muted-foreground">Click to reveal</p>
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
        <FlipCardFront className={`${face} bg-card`}>
          <span className="text-3xl">↕</span>
          <p className="mt-3 text-sm font-medium text-card-foreground">Vertical</p>
          <p className="mt-1 text-xs text-muted-foreground">Flips on X axis</p>
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
