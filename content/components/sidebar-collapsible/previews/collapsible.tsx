"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import {
  Bell,
  Calendar,
  CalendarDays,
  CheckCircle2,
  Cog,
  LayoutDashboard,
  ListTodo,
  Megaphone,
  Newspaper,
  Notebook,
  Package,
  Search,
} from "lucide-react"
import {
  CollapsibleSection,
  ContentPlaceholder,
  NavUserFooter,
  type NavItem,
} from "./shared"
import { SidebarGroup } from "@/components/ui/sidebar"

const navMain: NavItem[] = [
  { id: "overview", title: "Overview", icon: LayoutDashboard, isActive: true },
  { id: "tasks", title: "Tasks", icon: ListTodo },
  { id: "meetings", title: "Meetings", icon: CalendarDays },
  { id: "notes", title: "Notes", icon: Notebook },
  { id: "calendar", title: "Calendar", icon: Calendar },
  { id: "completed", title: "Completed", icon: CheckCircle2 },
  { id: "notifications", title: "Notifications", icon: Bell },
]

const favorites = [
  { id: "design", title: "Design", color: "bg-green-400 dark:bg-green-300" },
  { id: "development", title: "Development", color: "bg-blue-400 dark:bg-blue-300" },
  { id: "workshop", title: "Workshop", color: "bg-orange-400 dark:bg-orange-300" },
  { id: "personal", title: "Personal", color: "bg-red-400 dark:bg-red-300" },
]

const teams = [
  { id: "engineering", title: "Engineering", icon: Cog },
  { id: "marketing", title: "Marketing", icon: Megaphone },
]

const topics = [
  { id: "product-updates", title: "Product Updates", icon: Package },
  { id: "company-news", title: "Company News", icon: Newspaper },
]

export default function SidebarCollapsiblePreview() {
  return (
    <SidebarProvider className="h-svh !min-h-0">
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center justify-between px-2 pb-0 pt-3 cursor-pointer">
            <div className="flex flex-1 items-center gap-3">
              <Search className="size-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Search</span>
            </div>
            <kbd className="rounded-md border px-2 py-0.5 text-xs text-muted-foreground">⌘K</kbd>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              {navMain.map((item) => {
                const Icon = item.icon
                return (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton tooltip={item.title} isActive={item.isActive}>
                      <Icon className="size-4" />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroup>

          <CollapsibleSection title="Favorites" defaultOpen>
            {favorites.map((item) => (
              <SidebarMenuItem key={item.id}>
                <SidebarMenuButton>
                  <div className={cn("size-3 rounded", item.color)} />
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </CollapsibleSection>

          <CollapsibleSection title="Teams">
            {teams.map((item) => {
              const Icon = item.icon
              return (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton>
                    <Icon className="size-4" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            })}
          </CollapsibleSection>

          <CollapsibleSection title="Topics">
            {topics.map((item) => {
              const Icon = item.icon
              return (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton>
                    <Icon className="size-4" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            })}
          </CollapsibleSection>
        </SidebarContent>

        <NavUserFooter name="Duncan" email="duncan@example.com" initials="DK" />
      </Sidebar>

      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger />
        </header>
        <ContentPlaceholder />
      </SidebarInset>
    </SidebarProvider>
  )
}
