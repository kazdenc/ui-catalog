"use client"

import * as React from "react"
import { CommandPalette, type CommandPaletteItem } from "./component"
import {
  Search,
  FileText,
  Settings,
  User,
  HelpCircle,
  Home,
  LayoutGrid,
  FolderPlus,
} from "lucide-react"

const items: CommandPaletteItem[] = [
  {
    id: "home",
    label: "Home",
    description: "Go to the homepage",
    icon: <Home className="h-4 w-4" />,
    group: "Navigation",
  },
  {
    id: "docs",
    label: "Documentation",
    description: "Browse the docs",
    icon: <FileText className="h-4 w-4" />,
    group: "Navigation",
  },
  {
    id: "components",
    label: "Components",
    description: "View all components",
    icon: <LayoutGrid className="h-4 w-4" />,
    group: "Navigation",
  },
  {
    id: "new-project",
    label: "Create New Project",
    description: "Start a new project from scratch",
    icon: <FolderPlus className="h-4 w-4" />,
    group: "Actions",
  },
  {
    id: "settings",
    label: "Settings",
    description: "Manage your preferences",
    icon: <Settings className="h-4 w-4" />,
    group: "Actions",
  },
  {
    id: "help",
    label: "Help",
    description: "Get help and support",
    icon: <HelpCircle className="h-4 w-4" />,
    group: "Actions",
  },
]

export default function CommandPaletteDemo() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <div className="flex items-center justify-center py-8">
      <button
        onClick={() => setOpen(true)}
        className="flex h-10 w-72 items-center gap-2 rounded-lg border bg-muted/50 px-3 text-sm text-muted-foreground transition-colors hover:bg-muted"
      >
        <Search className="h-4 w-4" />
        <span className="flex-1 text-left">Search commands...</span>
        <kbd className="pointer-events-none hidden select-none rounded border bg-background px-1.5 py-0.5 font-mono text-[10px] font-medium text-muted-foreground sm:inline-block">
          ⌘K
        </kbd>
      </button>

      <CommandPalette
        open={open}
        onOpenChange={setOpen}
        items={items}
        onSelect={() => setOpen(false)}
      />
    </div>
  )
}
