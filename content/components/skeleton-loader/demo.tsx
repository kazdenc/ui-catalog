import {
  SkeletonText,
  SkeletonAvatar,
  SkeletonCard,
  SkeletonLoaderStyles,
} from "./component"

export default function SkeletonLoaderDemo() {
  return (
    <>
      <SkeletonLoaderStyles />
      <div className="flex w-full flex-col gap-10">
        {/* User profile skeleton */}
        <div>
          <p className="mb-3 text-sm font-medium text-muted-foreground">
            User profile
          </p>
          <div className="flex items-start gap-4">
            <SkeletonAvatar size={48} />
            <div className="flex-1">
              <SkeletonText lines={2} lastLineWidth="40%" />
            </div>
          </div>
        </div>

        {/* Card skeleton */}
        <div>
          <p className="mb-3 text-sm font-medium text-muted-foreground">
            Card
          </p>
          <SkeletonCard className="max-w-xs" imageHeight={120} />
        </div>

        {/* List skeleton */}
        <div>
          <p className="mb-3 text-sm font-medium text-muted-foreground">
            List
          </p>
          <div className="flex flex-col gap-3">
            {Array.from({ length: 3 }, (_, i) => (
              <div key={i} className="flex items-center gap-3">
                <SkeletonAvatar size={32} />
                <SkeletonText lines={1} className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
