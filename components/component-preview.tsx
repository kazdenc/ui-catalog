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
        {controls && (
          <div className="flex items-center justify-between border-b px-4 py-2">
            {controls}
          </div>
        )}
        <div className="flex min-h-[200px] w-full items-center justify-center p-8">
          {children}
        </div>
      </div>

      {expanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setExpanded(false)}
        >
          <div
            className="relative m-2 flex h-[calc(100svh-16px)] w-[calc(100svw-16px)] flex-col rounded-xl bg-background"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b px-4 py-2">
              {controls ?? <span />}
              <button
                onClick={() => setExpanded(false)}
                className="ml-4 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                title="Collapse"
              >
                <Minimize2 className="h-4 w-4" />
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center p-8">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
