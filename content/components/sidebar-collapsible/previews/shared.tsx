"use client"

import * as React from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import {
  ChevronDown,
  LogOut,
  Settings,
  User,
} from "lucide-react"
import type { ElementType } from "react"

// ── Types ──────────────────────────────────────────────────────────────

export interface NavItem {
  id: string
  title: string
  icon: ElementType
  isActive?: boolean
}

export interface LabelItem {
  title: string
  color: string
}

// ── Collapsible Section ────────────────────────────────────────────────

export function CollapsibleSection({
  title,
  defaultOpen = false,
  children,
}: {
  title: string
  defaultOpen?: boolean
  children: React.ReactNode
}) {
  const [open, setOpen] = React.useState(defaultOpen)

  return (
    <SidebarGroup>
      <SidebarGroupLabel
        className="cursor-pointer select-none text-sm hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        onClick={() => setOpen((v) => !v)}
      >
        {title}
        <ChevronDown
          className={cn(
            "ml-auto size-4 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </SidebarGroupLabel>
      {open && (
        <SidebarGroupContent>
          <SidebarMenu>{children}</SidebarMenu>
        </SidebarGroupContent>
      )}
    </SidebarGroup>
  )
}

// ── User Footer ────────────────────────────────────────────────────────

export function NavUserFooter({
  name,
  email,
  initials,
}: {
  name: string
  email: string
  initials: string
}) {
  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <SidebarMenuButton size="lg" className="w-full" />
              }
            >
              <div className="flex size-8 items-center justify-center rounded-full bg-muted text-xs font-medium">
                {initials}
              </div>
              <div className="flex-1 text-left min-w-0 group-data-[collapsible=icon]:hidden">
                <div className="text-sm font-medium truncate">{name}</div>
                <div className="text-xs text-muted-foreground truncate">{email}</div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="top" className="w-56">
              <DropdownMenuItem>
                <User className="mr-2 size-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 size-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LogOut className="mr-2 size-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  )
}

// ── Simple User Footer (no dropdown) ───────────────────────────────────

export function SimpleUserFooter({
  name,
  email,
  initials,
}: {
  name: string
  email: string
  initials: string
}) {
  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" className="w-full">
            <div className="flex size-8 items-center justify-center rounded-full bg-muted text-xs font-medium">
              {initials}
            </div>
            <div className="flex-1 text-left min-w-0">
              <div className="text-sm font-medium truncate">{name}</div>
              <div className="text-xs text-muted-foreground truncate">{email}</div>
            </div>
            <LogOut className="size-4 shrink-0 text-muted-foreground" />
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  )
}

// ── Team Switcher ──────────────────────────────────────────────────────

export interface Team {
  name: string
  logo: ElementType
  plan: string
}

export function TeamSwitcher({ teams }: { teams: Team[] }) {
  const [active, setActive] = React.useState(teams[0])
  const ActiveLogo = active.logo

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={<SidebarMenuButton size="lg" className="w-full" />}
          >
            <div className="flex size-8 items-center justify-center rounded-lg bg-sidebar-accent text-sidebar-accent-foreground">
              <ActiveLogo className="size-4" />
            </div>
            <div className="flex-1 text-left min-w-0 group-data-[collapsible=icon]:hidden">
              <div className="text-sm font-medium truncate">{active.name}</div>
              <div className="text-xs text-muted-foreground truncate">{active.plan}</div>
            </div>
            <ChevronDown className="size-4 text-muted-foreground group-data-[collapsible=icon]:hidden" />
          </DropdownMenuTrigger>
          <DropdownMenuContent side="bottom" align="start" className="w-56">
            {teams.map((team) => (
              <DropdownMenuItem key={team.name} onClick={() => setActive(team)}>
                <team.logo className="mr-2 size-4" />
                {team.name}
                <span className="ml-auto text-xs text-muted-foreground">{team.plan}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

// ── Content Placeholder ────────────────────────────────────────────────

export function ContentPlaceholder({ label }: { label?: string }) {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex-1 p-6">
        <div className="mb-4 text-sm text-muted-foreground">{label ?? "Dashboard"}</div>
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-28 rounded-lg bg-muted/40" />
          ))}
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          {[4, 5].map((i) => (
            <div key={i} className="h-40 rounded-lg bg-muted/40" />
          ))}
        </div>
      </div>
    </div>
  )
}
