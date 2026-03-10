"use client"

import * as React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
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
  Activity,
  Archive,
  ArrowLeft,
  Bell,
  Bug,
  ChevronRight,
  Cloud,
  FileText,
  Folder,
  Folders,
  GitCommit,
  GitMerge,
  GitPullRequest,
  Home,
  Key,
  LayoutDashboard,
  Lock,
  Play,
  Scan,
  Settings,
  Shield,
  Sparkles,
  Star,
  Target,
  Terminal,
  User,
  UserPlus,
  Webhook,
} from "lucide-react"
import { ContentPlaceholder, SimpleUserFooter, TeamSwitcher, type Team } from "./shared"
import type { ElementType } from "react"

interface SidebarItem {
  id: string
  label: string
  icon: ElementType
  badge?: string
  subItems?: {
    id: string
    label: string
    icon: ElementType
  }[]
}

const sidebarItems: SidebarItem[] = [
  {
    id: "overview", label: "Overview", icon: Home,
    subItems: [
      { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
      { id: "activity", label: "Activity", icon: Activity },
      { id: "insights", label: "Insights", icon: Target },
    ],
  },
  {
    id: "repos", label: "Repositories", icon: Folders, badge: "12",
    subItems: [
      { id: "all", label: "All Repositories", icon: Folder },
      { id: "starred", label: "Starred", icon: Star },
      { id: "archived", label: "Archived", icon: Archive },
    ],
  },
  {
    id: "prs", label: "Pull Requests", icon: GitPullRequest, badge: "3",
    subItems: [
      { id: "open", label: "Open", icon: GitPullRequest },
      { id: "review", label: "Review Requests", icon: Scan },
      { id: "merged", label: "Merged", icon: GitMerge },
    ],
  },
  {
    id: "issues", label: "Issues", icon: Bug, badge: "7",
    subItems: [
      { id: "open", label: "Open Issues", icon: Bug },
      { id: "assigned", label: "Assigned to Me", icon: UserPlus },
      { id: "created", label: "Created by Me", icon: GitCommit },
    ],
  },
  {
    id: "actions", label: "Actions", icon: Play,
    subItems: [
      { id: "workflows", label: "Workflows", icon: Play },
      { id: "runners", label: "Runners", icon: Terminal },
      { id: "deploy", label: "Deployments", icon: Cloud },
    ],
  },
  {
    id: "security", label: "Security", icon: Lock, badge: "2",
    subItems: [
      { id: "alerts", label: "Security Alerts", icon: Shield },
      { id: "secrets", label: "Secrets", icon: Key },
    ],
  },
  {
    id: "settings", label: "Settings", icon: Settings,
    subItems: [
      { id: "profile", label: "Profile", icon: User },
      { id: "notifs", label: "Notifications", icon: Bell },
      { id: "webhooks", label: "Webhooks", icon: Webhook },
      { id: "api", label: "API Keys", icon: Key },
    ],
  },
  { id: "docs", label: "Documentation", icon: FileText },
]

const teams: Team[] = [
  { name: "Anthropic", logo: Target, plan: "Pro" },
  { name: "OpenAI", logo: Sparkles, plan: "Enterprise" },
  { name: "Google", logo: LayoutDashboard, plan: "Free" },
]

export default function SidebarReplacePreview() {
  const [activeItem, setActiveItem] = React.useState<string | null>(null)
  const [selectedSub, setSelectedSub] = React.useState<string | null>(null)
  const activeData = sidebarItems.find((item) => item.id === activeItem)

  return (
    <SidebarProvider className="h-svh !min-h-0">
      <Sidebar collapsible="none" className="w-64 border-r">
        {!activeItem ? (
          <>
            <SidebarHeader>
              <TeamSwitcher teams={teams} />
            </SidebarHeader>

            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {sidebarItems.map((item) => {
                      const Icon = item.icon
                      return (
                        <SidebarMenuItem key={item.id}>
                          <SidebarMenuButton
                            className="h-10 px-3"
                            onClick={() => {
                              if (item.subItems) {
                                setActiveItem(item.id)
                                setSelectedSub(null)
                              }
                            }}
                          >
                            <Icon className="size-4 shrink-0" />
                            <span className="flex-1 truncate">{item.label}</span>
                            <div className="ml-auto flex items-center gap-1.5 shrink-0">
                              {item.badge && (
                                <span className="rounded-md bg-muted px-1.5 py-0.5 text-xs tabular-nums">
                                  {item.badge}
                                </span>
                              )}
                              {item.subItems && (
                                <ChevronRight className="size-4 shrink-0" />
                              )}
                            </div>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      )
                    })}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>

            <SimpleUserFooter name="ephraim" email="ephraim@blocks.so" initials="E" />
          </>
        ) : (
          activeData?.subItems && (
            <>
              <SidebarHeader className="flex flex-row items-center border-b px-4">
                <button
                  onClick={() => {
                    setActiveItem(null)
                    setSelectedSub(null)
                  }}
                  className="flex size-8 items-center justify-center rounded-md hover:bg-sidebar-accent"
                >
                  <ArrowLeft className="size-4" />
                </button>
                <h3 className="flex-1 text-center font-medium">
                  {activeData.label}
                </h3>
                <div className="w-8" />
              </SidebarHeader>

              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {activeData.subItems.map((sub) => {
                        const SubIcon = sub.icon
                        return (
                          <SidebarMenuItem key={sub.id}>
                            <SidebarMenuButton
                              isActive={selectedSub === sub.id}
                              className="h-10 px-3"
                              onClick={() =>
                                setSelectedSub(
                                  selectedSub === sub.id ? null : sub.id,
                                )
                              }
                            >
                              <SubIcon className="size-4 shrink-0" />
                              <span className="truncate">{sub.label}</span>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        )
                      })}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
            </>
          )
        )}
      </Sidebar>

      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger />
        </header>
        <ContentPlaceholder label="Dashboard — Nested variant" />
      </SidebarInset>
    </SidebarProvider>
  )
}
