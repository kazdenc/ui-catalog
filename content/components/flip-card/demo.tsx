"use client"

import { FlipCard, FlipCardFront, FlipCardBack } from "./component"

const face =
  "flex h-full w-full flex-col items-center justify-center rounded-xl border p-6 text-center"

export default function FlipCardDemo() {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      <FlipCard className="h-56 w-44">
        <FlipCardFront className={`${face} bg-indigo-500/10`}>
          <span className="text-3xl text-indigo-400">&#9830;</span>
          <p className="mt-3 text-sm font-medium text-card-foreground">Hover me</p>
          <p className="mt-1 text-xs text-muted-foreground">Horizontal flip</p>
        </FlipCardFront>
        <FlipCardBack className={`${face} bg-card`}>
          <p className="text-sm font-medium text-card-foreground">
            Back side
          </p>
          <p className="mt-1 text-xs text-muted-foreground">Revealed on hover</p>
        </FlipCardBack>
      </FlipCard>

      <FlipCard trigger="click" className="h-56 w-44">
        <FlipCardFront className={`${face} bg-emerald-500/10`}>
          <span className="text-3xl text-emerald-400">?</span>
          <p className="mt-3 text-sm font-medium text-card-foreground">Click me</p>
          <p className="mt-1 text-xs text-muted-foreground">Click to reveal</p>
        </FlipCardFront>
        <FlipCardBack className={`${face} bg-card`}>
          <p className="text-sm font-medium text-card-foreground">Answer</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Click again to flip back
          </p>
        </FlipCardBack>
      </FlipCard>

      <FlipCard direction="vertical" className="h-56 w-44">
        <FlipCardFront className={`${face} bg-rose-500/10`}>
          <span className="text-3xl text-rose-400">&#9733;</span>
          <p className="mt-3 text-sm font-medium text-card-foreground">Vertical</p>
          <p className="mt-1 text-xs text-muted-foreground">Flips on X axis</p>
        </FlipCardFront>
        <FlipCardBack className={`${face} bg-card`}>
          <p className="text-sm font-medium text-card-foreground">Flipped!</p>
          <p className="mt-1 text-xs text-muted-foreground">Vertical direction</p>
        </FlipCardBack>
      </FlipCard>
    </div>
  )
}
