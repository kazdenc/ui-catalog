"use client"

import * as React from "react"
import { ComponentPreview } from "@/components/component-preview"
import { SubmitButton } from "./component"

type Status = "idle" | "loading" | "success" | "error"

export default function SubmitButtonDemo() {
  const [status, setStatus] = React.useState<Status>("idle")
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null)

  const clearPending = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }

  React.useEffect(() => {
    return () => clearPending()
  }, [])

  const runSequence = (outcome: "success" | "error") => {
    if (status !== "idle") return
    clearPending()
    setStatus("loading")
    timeoutRef.current = setTimeout(() => {
      setStatus(outcome)
      timeoutRef.current = setTimeout(() => {
        setStatus("idle")
      }, 1500)
    }, 1500)
  }

  return (
    <ComponentPreview
      slug="submit-button"
      controls={
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex gap-1">
            <button
              onClick={() => runSequence("success")}
              disabled={status !== "idle"}
              className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:text-card-foreground disabled:opacity-40"
            >
              Simulate Success
            </button>
            <button
              onClick={() => runSequence("error")}
              disabled={status !== "idle"}
              className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:text-card-foreground disabled:opacity-40"
            >
              Simulate Error
            </button>
            <button
              onClick={() => {
                clearPending()
                setStatus("idle")
              }}
              disabled={status === "idle"}
              className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:text-card-foreground disabled:opacity-40"
            >
              Reset
            </button>
          </div>
          <div className="flex gap-1">
            {(["idle", "loading", "success", "error"] as const).map((s) => (
              <button
                key={s}
                onClick={() => {
                  clearPending()
                  setStatus(s)
                }}
                className={`rounded-md px-2.5 py-1 text-xs font-medium capitalize transition-colors ${
                  status === s
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-card-foreground"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      }
    >
      <div className="flex w-full items-center justify-center py-8">
        <SubmitButton
          status={status}
          onClick={() => runSequence("success")}
        >
          Save Changes
        </SubmitButton>
      </div>
    </ComponentPreview>
  )
}
