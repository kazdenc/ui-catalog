import { BentoGrid, BentoGridItem } from "./component"

const bars = [40, 65, 30, 80, 55, 45, 70, 60, 35, 75]

export default function BentoGridDemo() {
  return (
    <BentoGrid>
      <BentoGridItem colSpan={2} rowSpan={2}>
        <div className="flex h-full flex-col justify-between">
          <div>
            <div className="mb-3 inline-block rounded-lg bg-indigo-500/10 px-2.5 py-1 text-xs font-medium text-indigo-300">
              Featured
            </div>
            <h3 className="text-lg font-semibold text-card-foreground">
              Large hero cell
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Spans 2 columns and 2 rows for maximum visual impact. Use for
              primary content or a key visual.
            </p>
          </div>
          <div className="mt-4 h-24 rounded-lg bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent" />
        </div>
      </BentoGridItem>

      <BentoGridItem colSpan={2}>
        <h3 className="text-sm font-semibold text-card-foreground">Activity</h3>
        <p className="mt-1 text-xs text-muted-foreground">Last 10 days</p>
        <div className="mt-3 flex items-end gap-1.5" style={{ height: 48 }}>
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-emerald-500/30 transition-colors group-hover:bg-emerald-500/50"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </BentoGridItem>

      <BentoGridItem>
        <div className="mb-3 h-8 w-8 rounded-lg bg-gradient-to-br from-amber-500/30 to-orange-500/10" />
        <h3 className="text-sm font-semibold text-card-foreground">Flexible</h3>
        <p className="mt-1 text-xs text-muted-foreground">Any span combination.</p>
      </BentoGridItem>

      <BentoGridItem>
        <div className="mb-3 h-8 w-8 rounded-lg bg-gradient-to-br from-sky-500/30 to-cyan-500/10" />
        <h3 className="text-sm font-semibold text-card-foreground">Responsive</h3>
        <p className="mt-1 text-xs text-muted-foreground">
          Collapses gracefully on smaller screens.
        </p>
      </BentoGridItem>

      <BentoGridItem colSpan={2}>
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 shrink-0 rounded-full bg-gradient-to-br from-rose-500/30 to-pink-500/10" />
          <div>
            <h3 className="text-sm font-semibold text-card-foreground">
              Composable cells
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">
              Each cell is a plain div. Put anything inside: text, charts,
              images, or other components.
            </p>
          </div>
        </div>
      </BentoGridItem>

      <BentoGridItem colSpan={2}>
        <h3 className="text-sm font-semibold text-card-foreground">Pure CSS layout</h3>
        <p className="mt-1 text-xs text-muted-foreground">
          No JavaScript layout computation. Built on CSS Grid with Tailwind
          responsive breakpoints and auto-sizing rows.
        </p>
      </BentoGridItem>
    </BentoGrid>
  )
}
