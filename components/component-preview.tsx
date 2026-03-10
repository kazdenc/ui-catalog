"use client"

import * as React from "react"
import { Maximize2, Minimize2 } from "lucide-react"

export function ComponentPreview({
  children,
  controls,
}: {
  slug: string
  children: React.ReactNode
  controls?: React.ReactNode
}) {
  const [expanded, setExpanded] = React.useState(false)

  React.useEffect(() => {
    if (expanded) {
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = ""
      }
    }
  }, [expanded])

  if (controls) {
    return (
      <>
        <div className="relative my-8 flex flex-col rounded-xl border bg-background">
          <div className="flex items-center justify-between border-b px-4 py-2">
            <span className="text-xs font-medium text-muted-foreground">
              Preview
            </span>
            <button
              onClick={() => setExpanded(true)}
              className="inline-flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              title="Expand preview"
            >
              <Maximize2 className="h-3.5 w-3.5" />
            </button>
          </div>
          <div className="flex min-h-[200px] w-full items-center justify-center p-8">
            {children}
          </div>
          <div className="flex items-center px-4 py-2">
            <div className="flex flex-1 items-center justify-between">
              {controls}
            </div>
          </div>
        </div>

        {expanded && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black/50"
            onClick={() => setExpanded(false)}
          >
            <div
              className="relative m-6 flex h-[calc(100svh-48px)] w-[calc(100svw-48px)] flex-col overflow-auto rounded-xl bg-background"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setExpanded(false)}
                className="absolute top-3 right-3 z-10 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                title="Collapse"
              >
                <Minimize2 className="h-4 w-4" />
              </button>
              <div className="flex flex-1 items-center justify-center p-8">
                {children}
              </div>
              <div className="flex items-center px-4 py-2">
                <div className="flex flex-1 items-center justify-between">
                  {controls}
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    )
  }

  return (
    <>
      <div className="relative my-8 rounded-xl border bg-background">
        <div className="flex items-center justify-between border-b px-4 py-2">
          <span className="text-xs font-medium text-muted-foreground">
            Preview
          </span>
          <button
            onClick={() => setExpanded(true)}
            className="inline-flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            title="Expand preview"
          >
            <Maximize2 className="h-3.5 w-3.5" />
          </button>
        </div>
        <div className="flex min-h-[200px] w-full items-center justify-center p-8">
          {children}
        </div>
      </div>

      {expanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black/50"
          onClick={() => setExpanded(false)}
        >
          <div
            className="relative m-6 flex h-[calc(100svh-48px)] w-[calc(100svw-48px)] items-center justify-center overflow-auto rounded-xl bg-background"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setExpanded(false)}
              className="absolute top-3 right-3 z-10 inline-flex h-8 w-8 items-center justify-center rounded-md border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              title="Collapse"
            >
              <Minimize2 className="h-4 w-4" />
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  )
}
