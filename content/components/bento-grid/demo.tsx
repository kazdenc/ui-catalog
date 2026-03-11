"use client"

import { BentoGrid, BentoGridItem } from "./component"

export default function BentoGridDemo() {
  return (
    <BentoGrid columns={4}>
      <BentoGridItem colSpan={2} rowSpan={2}>
        <div className="flex h-full flex-col justify-between">
          <div>
            <div className="mb-3 inline-block rounded-lg bg-indigo-500/10 px-2.5 py-1 text-xs font-medium text-indigo-300">
              Featured
            </div>
            <h3 className="text-lg font-semibold text-white">
              Large hero cell
            </h3>
            <p className="mt-2 text-sm text-neutral-400">
              Spans 2 columns and 2 rows for maximum visual impact.
            </p>
          </div>
          <div className="mt-4 h-20 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20" />
        </div>
      </BentoGridItem>

      <BentoGridItem colSpan={2}>
        <div className="mb-2 h-6 w-6 rounded bg-amber-500/20" />
        <h3 className="text-sm font-semibold text-white">Performance</h3>
        <p className="mt-1 text-xs text-neutral-400">
          CSS Grid with no JavaScript layout computation.
        </p>
      </BentoGridItem>

      <BentoGridItem>
        <div className="mb-2 h-6 w-6 rounded bg-rose-500/20" />
        <h3 className="text-sm font-semibold text-white">Flexible</h3>
        <p className="mt-1 text-xs text-neutral-400">Any span combo.</p>
      </BentoGridItem>

      <BentoGridItem>
        <div className="mb-2 h-6 w-6 rounded bg-sky-500/20" />
        <h3 className="text-sm font-semibold text-white">Responsive</h3>
        <p className="mt-1 text-xs text-neutral-400">Override columns at breakpoints.</p>
      </BentoGridItem>

      <BentoGridItem colSpan={2}>
        <h3 className="text-sm font-semibold text-white">Wide cell</h3>
        <p className="mt-1 text-xs text-neutral-400">
          Spans 2 columns for horizontal content like charts or stats.
        </p>
        <div className="mt-3 flex gap-2">
          {[40, 65, 30, 80, 55, 45, 70].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-emerald-500/20"
              style={{ height: `${h}%`, minHeight: `${h * 0.6}px` }}
            />
          ))}
        </div>
      </BentoGridItem>

      <BentoGridItem colSpan={2}>
        <h3 className="text-sm font-semibold text-white">Another wide cell</h3>
        <p className="mt-1 text-xs text-neutral-400">
          Mix and match spans to create unique layouts.
        </p>
      </BentoGridItem>
    </BentoGrid>
  )
}
