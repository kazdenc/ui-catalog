import { NoiseTexture } from "./component"

export default function NoiseTextureDemo() {
  return (
    <div className="grid gap-6 sm:grid-cols-3">
      <NoiseTexture
        variant="grain"
        className="rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 p-6 text-white"
      >
        <h3 className="text-lg font-semibold">Grain</h3>
        <p className="mt-1 text-sm text-white/80">Fine film grain overlay</p>
      </NoiseTexture>

      <NoiseTexture
        variant="static"
        opacity={0.2}
        className="rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 p-6 text-white"
      >
        <h3 className="text-lg font-semibold">Static</h3>
        <p className="mt-1 text-sm text-white/80">Coarser TV static effect</p>
      </NoiseTexture>

      <NoiseTexture
        variant="paper"
        opacity={0.12}
        className="rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 p-6 text-white"
      >
        <h3 className="text-lg font-semibold">Paper</h3>
        <p className="mt-1 text-sm text-white/80">Subtle paper-like texture</p>
      </NoiseTexture>
    </div>
  )
}
