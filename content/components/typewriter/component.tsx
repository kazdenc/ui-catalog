"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface TypewriterProps extends React.HTMLAttributes<HTMLSpanElement> {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
  loop?: boolean
  cursor?: string
}

const Typewriter = React.forwardRef<HTMLSpanElement, TypewriterProps>(
  (
    {
      className,
      words,
      typingSpeed = 80,
      deletingSpeed = 50,
      pauseDuration = 1500,
      loop = true,
      cursor = "|",
      ...props
    },
    ref,
  ) => {
    const [displayText, setDisplayText] = React.useState("")
    const [wordIndex, setWordIndex] = React.useState(0)
    const [isDeleting, setIsDeleting] = React.useState(false)
    const [isDone, setIsDone] = React.useState(false)

    React.useEffect(() => {
      if (!words.length || isDone) return

      const currentWord = words[wordIndex]

      if (!isDeleting && displayText === currentWord) {
        // Finished typing the current word
        const isLastWord = wordIndex === words.length - 1

        if (!loop && isLastWord) {
          setIsDone(true)
          return
        }

        const timeout = setTimeout(() => {
          setIsDeleting(true)
        }, pauseDuration)
        return () => clearTimeout(timeout)
      }

      if (isDeleting && displayText === "") {
        // Finished deleting — pause briefly before starting next word
        const timeout = setTimeout(() => {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
        }, typingSpeed * 2)
        return () => clearTimeout(timeout)
      }

      const speed = isDeleting ? deletingSpeed : typingSpeed

      const timeout = setTimeout(() => {
        if (isDeleting) {
          setDisplayText((prev) => prev.slice(0, -1))
        } else {
          setDisplayText(currentWord.slice(0, displayText.length + 1))
        }
      }, speed)

      return () => clearTimeout(timeout)
    }, [
      displayText,
      isDeleting,
      isDone,
      wordIndex,
      words,
      typingSpeed,
      deletingSpeed,
      pauseDuration,
      loop,
    ])

    return (
      <span
        ref={ref}
        className={cn("inline-flex items-baseline", className)}
        {...props}
      >
        <span>{displayText || "\u200B"}</span>
        <span
          className={cn(
            "ml-[1px] inline-block h-[1em] w-[2px] translate-y-[0.1em] bg-current",
            isDone ? "animate-none opacity-0" : "animate-blink",
          )}
          aria-hidden="true"
        />
      </span>
    )
  },
)
Typewriter.displayName = "Typewriter"

export { Typewriter }
export type { TypewriterProps }
