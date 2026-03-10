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
  X,
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
    description: string
  }[]
}

const sidebarItems: SidebarItem[] = [
  {
    id: "overview", label: "Overview", icon: Home,
    subItems: [
      { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, description: "Project overview and activity" },
      { id: "activity", label: "Activity", icon: Activity, description: "Recent commits and changes" },
      { id: "insights", label: "Insights", icon: Target, description: "Code analytics and metrics" },
    ],
  },
  {
    id: "repos", label: "Repositories", icon: Folders, badge: "12",
    subItems: [
      { id: "all", label: "All Repositories", icon: Folder, description: "Browse all your repositories" },
      { id: "starred", label: "Starred", icon: Star, description: "Your starred repositories" },
      { id: "archived", label: "Archived", icon: Archive, description: "Archived repositories" },
    ],
  },
  {
    id: "prs", label: "Pull Requests", icon: GitPullRequest, badge: "3",
    subItems: [
      { id: "open", label: "Open", icon: GitPullRequest, description: "Open pull requests" },
      { id: "review", label: "Review Requests", icon: Scan, description: "PRs awaiting your review" },
      { id: "merged", label: "Merged", icon: GitMerge, description: "Recently merged PRs" },
    ],
  },
  {
    id: "issues", label: "Issues", icon: Bug, badge: "7",
    subItems: [
      { id: "open", label: "Open Issues", icon: Bug, description: "Active issues and bugs" },
      { id: "assigned", label: "Assigned to Me", icon: UserPlus, description: "Issues assigned to you" },
      { id: "created", label: "Created by Me", icon: GitCommit, description: "Issues you've created" },
    ],
  },
  {
    id: "actions", label: "Actions", icon: Play,
    subItems: [
      { id: "workflows", label: "Workflows", icon: Play, description: "CI/CD workflows and pipelines" },
      { id: "runners", label: "Runners", icon: Terminal, description: "Self-hosted runners" },
      { id: "deploy", label: "Deployments", icon: Cloud, description: "Deployment history" },
    ],
  },
  {
    id: "security", label: "Security", icon: Lock, badge: "2",
    subItems: [
      { id: "alerts", label: "Security Alerts", icon: Shield, description: "Vulnerability alerts" },
      { id: "secrets", label: "Secrets", icon: Key, description: "Repository secrets" },
    ],
  },
  {
    id: "settings", label: "Settings", icon: Settings,
    subItems: [
      { id: "profile", label: "Profile", icon: User, description: "Your profile settings" },
      { id: "notifs", label: "Notifications", icon: Bell, description: "Notification preferences" },
      { id: "webhooks", label: "Webhooks", icon: Webhook, description: "Webhook configurations" },
      { id: "api", label: "API Keys", icon: Key, description: "Personal access tokens" },
    ],
  },
  { id: "docs", label: "Documentation", icon: FileText },
]

const teams: Team[] = [
  { name: "OpenAI", logo: Sparkles, plan: "Enterprise" },
  { name: "Anthropic", logo: Target, plan: "Pro" },
  { name: "Google", logo: LayoutDashboard, plan: "Free" },
]

export default function SidebarSlideOutPreview() {
  const [activeItem, setActiveItem] = React.useState<string | null>("overview")
  const [selectedSub, setSelectedSub] = React.useState<string | null>(null)
  const activeData = sidebarItems.find((item) => item.id === activeItem)

  return (
    <SidebarProvider className="h-svh !min-h-0">
      <Sidebar collapsible="none" className="w-64 border-r">
        <SidebarHeader>
          <TeamSwitcher teams={teams} />
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {sidebarItems.map((item) => {
                  const Icon = item.icon
                  const isActive = activeItem === item.id

                  return (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton
                        isActive={isActive}
                        className="h-10 px-3"
                        onClick={() => {
                          if (item.subItems) {
                            setActiveItem(isActive ? null : item.id)
                            if (isActive) setSelectedSub(null)
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
                            <ChevronRight
                              className={cn(
                                "size-4 shrink-0 transition-transform",
                                isActive && "rotate-90",
                              )}
                            />
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
      </Sidebar>

      {/* Secondary slide-out sidebar */}
      {activeItem && activeData?.subItems && (
        <Sidebar
          collapsible="none"
          className="w-72 animate-in slide-in-from-left-5 duration-200 border-r"
        >
          <SidebarHeader className="flex flex-row items-center justify-between border-b px-4">
            <h3 className="font-medium">{activeData.label}</h3>
            <button
              onClick={() => setActiveItem(null)}
              className="flex size-6 items-center justify-center rounded-md hover:bg-sidebar-accent"
            >
              <X className="size-4" />
            </button>
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
                          className="h-auto py-2 px-3"
                          onClick={() =>
                            setSelectedSub(selectedSub === sub.id ? null : sub.id)
                          }
                        >
                          <SubIcon className="size-5 shrink-0 self-start mt-0.5" />
                          <div className="flex-1 text-left min-w-0">
                            <div className="font-medium">{sub.label}</div>
                            <div className="text-xs text-muted-foreground mt-0.5">
                              {sub.description}
                            </div>
                          </div>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    )
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      )}

      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger />
        </header>
        <ContentPlaceholder label="Dashboard — Slide-out variant" />
      </SidebarInset>
    </SidebarProvider>
  )
}
