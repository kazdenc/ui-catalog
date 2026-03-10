"use client"

import * as React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import {
  Archive,
  Flag,
  Mail,
  Star,
} from "lucide-react"
import { SimpleUserFooter } from "./shared"

const navMain = [
  { id: "inbox", title: "Inbox", icon: Mail, isActive: true },
  { id: "starred", title: "Starred", icon: Star },
  { id: "important", title: "Important", icon: Flag },
  { id: "archive", title: "Archive", icon: Archive },
]

const labels = [
  { title: "Personal", color: "bg-green-400 dark:bg-green-300" },
  { title: "Work", color: "bg-blue-400 dark:bg-blue-300" },
  { title: "Travel", color: "bg-orange-400 dark:bg-orange-300" },
  { title: "Receipts", color: "bg-purple-400 dark:bg-purple-300" },
]

const mails = [
  { name: "Nora Patel", subject: "Welcome to Acme Mail", date: "08:15 AM", teaser: "Here's a quick tour of your new inbox.\nPin, label, and schedule messages to stay organized." },
  { name: "Stripe", subject: "Your payout has arrived", date: "Yesterday", teaser: "A payout of $3,245.90 was sent to your bank account.\nView details in your dashboard." },
  { name: "GitHub", subject: "New activity on acme/app", date: "Tue", teaser: "3 pull requests need your review. CI passed on main.\nClick to open the review queue." },
  { name: "Ava Chen", subject: "Agenda for Friday standup", date: "Mon", teaser: "Let's cover onboarding, billing bugs, and Q4 goals.\nReply with anything you want to add." },
  { name: "Figma", subject: "What's new in Figma", date: "Sep 12", teaser: "Variables, auto layout improvements, and dev mode updates.\nWatch the recap to learn more." },
  { name: "Linear", subject: "[ACME-432] Edit modal broken", date: "Sep 11", teaser: "Issue created by Wendy. Repro steps included.\nSeverity: high, priority: P1." },
  { name: "Notion", subject: "Weekly team recap", date: "Sep 09", teaser: "Marketing shipped pricing page revamp. Eng closed 14 issues.\nSee full notes in the doc." },
]

export default function SidebarMailPreview() {
  const [activeNav, setActiveNav] = React.useState("inbox")
  const [query, setQuery] = React.useState("")
  const [selectedMail, setSelectedMail] = React.useState<typeof mails[0] | null>(null)

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return mails
    return mails.filter((m) =>
      [m.name, m.subject, m.teaser].join(" ").toLowerCase().includes(q),
    )
  }, [query])

  return (
    <SidebarProvider className="h-svh !min-h-0">
      {/* Left sidebar: navigation */}
      <Sidebar
        collapsible="none"
        className="border-r"
        style={{ "--sidebar-width": "12rem" } as React.CSSProperties}
      >
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg">
                <div className="flex size-8 items-center justify-center rounded-lg bg-sidebar-accent text-sidebar-accent-foreground">
                  <Mail className="size-4" />
                </div>
                <div className="flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Acme Inc</span>
                  <span className="truncate text-xs text-muted-foreground">Enterprise</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {navMain.map((item) => {
                  const Icon = item.icon
                  return (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton
                        isActive={activeNav === item.id}
                        onClick={() => setActiveNav(item.id)}
                      >
                        <Icon className="size-4" />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel className="text-xs">Labels</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {labels.map((label) => (
                  <SidebarMenuItem key={label.title}>
                    <SidebarMenuButton>
                      <div className={cn("size-3 rounded", label.color)} />
                      <span>{label.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SimpleUserFooter name="ephraim" email="ephraim@blocks.so" initials="E" />
      </Sidebar>

      {/* Middle sidebar: mail list */}
      <Sidebar
        collapsible="none"
        className="hidden flex-1 border-r md:flex min-w-96"
      >
        <SidebarHeader className="gap-3.5 border-b p-4">
          <div className="text-foreground text-base font-medium capitalize">
            {activeNav}
          </div>
          <SidebarInput
            placeholder="Type to search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup className="px-0 pt-0">
            <SidebarGroupContent>
              {filtered.length === 0 && (
                <div className="p-4 text-sm text-muted-foreground">No results</div>
              )}
              {filtered.map((mail) => (
                <a
                  href="#"
                  key={mail.subject}
                  onClick={(e) => {
                    e.preventDefault()
                    setSelectedMail(mail)
                  }}
                  className={cn(
                    "flex flex-col items-start gap-2 border-b p-4 text-sm leading-tight whitespace-nowrap hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                    selectedMail?.subject === mail.subject && "bg-sidebar-accent",
                  )}
                >
                  <div className="flex w-full items-center gap-2">
                    <span>{mail.name}</span>
                    <span className="ml-auto text-xs text-muted-foreground">{mail.date}</span>
                  </div>
                  <span className="font-medium">{mail.subject}</span>
                  <span className="line-clamp-2 w-[260px] text-xs whitespace-break-spaces text-muted-foreground">
                    {mail.teaser}
                  </span>
                </a>
              ))}
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      {/* Main content: mail preview */}
      <div className="flex flex-1 flex-col">
        {selectedMail ? (
          <div className="p-6">
            <h2 className="text-lg font-semibold">{selectedMail.subject}</h2>
            <p className="mt-1 text-sm text-muted-foreground">From: {selectedMail.name}</p>
            <p className="mt-4 text-sm whitespace-pre-line">{selectedMail.teaser}</p>
          </div>
        ) : (
          <div className="flex flex-1 items-center justify-center text-sm text-muted-foreground">
            Select a message to read
          </div>
        )}
      </div>
    </SidebarProvider>
  )
}
