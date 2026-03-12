"use client"

import { AvatarGroup } from "./component"

const sampleAvatars = [
  { src: "https://i.pravatar.cc/150?u=a1", alt: "Alice Martin", fallback: "AM" },
  { src: "https://i.pravatar.cc/150?u=b2", alt: "Bob Chen", fallback: "BC" },
  { src: "https://i.pravatar.cc/150?u=c3", alt: "Carol White", fallback: "CW" },
  { alt: "David Kim", fallback: "DK" },
  { src: "https://i.pravatar.cc/150?u=e5", alt: "Eva Lopez", fallback: "EL" },
  { src: "https://i.pravatar.cc/150?u=f6", alt: "Frank Zhao", fallback: "FZ" },
  { alt: "Grace Park", fallback: "GP" },
  { src: "https://i.pravatar.cc/150?u=h8", alt: "Henry Patel", fallback: "HP" },
]

export default function AvatarGroupDemo() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Default (max 5)</p>
        <AvatarGroup avatars={sampleAvatars} />
      </div>

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Small, max 3</p>
        <AvatarGroup avatars={sampleAvatars} size="sm" max={3} />
      </div>

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Large, max 4</p>
        <AvatarGroup avatars={sampleAvatars} size="lg" max={4} />
      </div>

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">No overflow</p>
        <AvatarGroup avatars={sampleAvatars.slice(0, 3)} max={5} />
      </div>
    </div>
  )
}
