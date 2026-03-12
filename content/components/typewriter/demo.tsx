"use client"

import { Typewriter } from "./component"

export default function TypewriterDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <span className="text-2xl font-semibold">
          We build{" "}
          <Typewriter
            words={["websites", "apps", "experiences", "interfaces"]}
            className="text-primary"
          />
        </span>
      </div>

      <div>
        <span className="text-lg text-muted-foreground">
          One-shot:{" "}
          <Typewriter
            words={["This only types once."]}
            loop={false}
            typingSpeed={60}
          />
        </span>
      </div>

      <div>
        <span className="text-lg text-muted-foreground">
          Custom speed:{" "}
          <Typewriter
            words={["slow typing", "fast deleting"]}
            typingSpeed={150}
            deletingSpeed={30}
            pauseDuration={2000}
          />
        </span>
      </div>
    </div>
  )
}
