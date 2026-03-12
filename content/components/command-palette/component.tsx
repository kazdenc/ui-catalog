"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Search } from "lucide-react"

export type CommandPaletteItem = {
  id: string
  label: string
  description?: string
  icon?: React.ReactNode
  group?: string
  onSelect?: () => void
}

interface CommandPaletteProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  items: CommandPaletteItem[]
  placeholder?: string
  onSelect?: (item: CommandPaletteItem) => void
  className?: string
}

const CommandPalette = React.forwardRef<HTMLDivElement, CommandPaletteProps>(
  (
    {
      open,
      onOpenChange,
      items,
      placeholder = "Type a command or search...",
      onSelect,
      className,
    },
    ref,
  ) => {
    const [query, setQuery] = React.useState("")
    const [activeIndex, setActiveIndex] = React.useState(0)
    const inputRef = React.useRef<HTMLInputElement>(null)

    const filtered = React.useMemo(() => {
      if (!query) return items
      const lower = query.toLowerCase()
      return items.filter((item) => item.label.toLowerCase().includes(lower))
    }, [items, query])

    const groups = React.useMemo(() => {
      const map = new Map<string, CommandPaletteItem[]>()
      for (const item of filtered) {
        const group = item.group ?? ""
        if (!map.has(group)) map.set(group, [])
        map.get(group)!.push(item)
      }
      return map
    }, [filtered])

    // Build flat index for keyboard nav
    const flatItems = React.useMemo(() => {
      const result: CommandPaletteItem[] = []
      for (const items of groups.values()) {
        result.push(...items)
      }
      return result
    }, [groups])

    // Reset state when opening/closing
    React.useEffect(() => {
      if (open) {
        setQuery("")
        setActiveIndex(0)
        // Auto-focus input after mount
        requestAnimationFrame(() => {
          inputRef.current?.focus()
        })
      }
    }, [open])

    // Reset active index when filtered results change
    React.useEffect(() => {
      setActiveIndex(0)
    }, [filtered.length])

    // Handle escape key
    React.useEffect(() => {
      if (!open) return
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          e.preventDefault()
          onOpenChange(false)
        }
      }
      document.addEventListener("keydown", handleKeyDown)
      return () => document.removeEventListener("keydown", handleKeyDown)
    }, [open, onOpenChange])

    const handleSelect = React.useCallback(
      (item: CommandPaletteItem) => {
        item.onSelect?.()
        onSelect?.(item)
        onOpenChange(false)
      },
      [onSelect, onOpenChange],
    )

    const handleKeyDown = React.useCallback(
      (e: React.KeyboardEvent) => {
        if (e.key === "ArrowDown") {
          e.preventDefault()
          setActiveIndex((i) => (i + 1) % flatItems.length)
        } else if (e.key === "ArrowUp") {
          e.preventDefault()
          setActiveIndex((i) => (i - 1 + flatItems.length) % flatItems.length)
        } else if (e.key === "Enter") {
          e.preventDefault()
          if (flatItems[activeIndex]) {
            handleSelect(flatItems[activeIndex])
          }
        }
      },
      [flatItems, activeIndex, handleSelect],
    )

    if (!open) return null

    let flatIndex = 0

    return (
      <div className="fixed inset-0 z-50" role="presentation">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/50 animate-in fade-in duration-150"
          onClick={() => onOpenChange(false)}
        />

        {/* Dialog */}
        <div className="fixed inset-x-0 top-[20%] z-50 flex justify-center px-4">
          <div
            ref={ref}
            role="dialog"
            aria-label="Command palette"
            className={cn(
              "w-full max-w-lg overflow-hidden rounded-xl border bg-popover text-popover-foreground shadow-2xl",
              "animate-in fade-in slide-in-from-top-2 duration-200",
              className,
            )}
            onKeyDown={handleKeyDown}
          >
            {/* Search input */}
            <div className="flex items-center gap-2 border-b px-3">
              <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={placeholder}
                className="flex h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                autoComplete="off"
                autoCorrect="off"
                spellCheck={false}
              />
            </div>

            {/* Results */}
            <div className="max-h-72 overflow-y-auto p-1">
              {filtered.length === 0 ? (
                <div className="py-8 text-center text-sm text-muted-foreground">
                  No results found.
                </div>
              ) : (
                Array.from(groups.entries()).map(([group, groupItems]) => (
                  <div key={group} className="mb-1">
                    {group && (
                      <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                        {group}
                      </div>
                    )}
                    {groupItems.map((item) => {
                      const index = flatIndex++
                      const isActive = index === activeIndex
                      return (
                        <button
                          key={item.id}
                          className={cn(
                            "flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left text-sm transition-colors",
                            isActive
                              ? "bg-accent text-accent-foreground"
                              : "text-popover-foreground hover:bg-accent/50",
                          )}
                          onClick={() => handleSelect(item)}
                          onMouseEnter={() => setActiveIndex(index)}
                        >
                          {item.icon && (
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center text-muted-foreground">
                              {item.icon}
                            </span>
                          )}
                          <div className="flex-1 truncate">
                            <div className="truncate font-medium">
                              {item.label}
                            </div>
                            {item.description && (
                              <div className="truncate text-xs text-muted-foreground">
                                {item.description}
                              </div>
                            )}
                          </div>
                        </button>
                      )
                    })}
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-3 border-t px-3 py-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono text-[10px]">
                  &uarr;&darr;
                </kbd>
                navigate
              </span>
              <span className="flex items-center gap-1">
                <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono text-[10px]">
                  &crarr;
                </kbd>
                select
              </span>
              <span className="flex items-center gap-1">
                <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono text-[10px]">
                  esc
                </kbd>
                close
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  },
)
CommandPalette.displayName = "CommandPalette"

export { CommandPalette }
