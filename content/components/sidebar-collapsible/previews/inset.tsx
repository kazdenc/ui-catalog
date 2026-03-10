"use client"

import * as React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import {
  Activity,
  ChevronDown,
  DollarSign,
  Home,
  Infinity as InfinityIcon,
  Link as LinkIcon,
  Package,
  Percent,
  PieChart,
  Settings,
  ShoppingBag,
  Sparkles,
  Store,
  TrendingUp,
  Users,
} from "lucide-react"
import { ContentPlaceholder, TeamSwitcher, type Team } from "./shared"
import type { ElementType } from "react"

interface DashRoute {
  id: string
  title: string
  icon: ElementType
  subs?: { title: string; icon?: ElementType }[]
}

const dashRoutes: DashRoute[] = [
  { id: "home", title: "Home", icon: Home },
  {
    id: "products", title: "Products", icon: Package,
    subs: [
      { title: "Catalogue", icon: Package },
      { title: "Checkout Links", icon: LinkIcon },
      { title: "Discounts", icon: Percent },
    ],
  },
  {
    id: "billing", title: "Usage Billing", icon: PieChart,
    subs: [
      { title: "Meters", icon: PieChart },
      { title: "Events", icon: Activity },
    ],
  },
  { id: "benefits", title: "Benefits", icon: Sparkles },
  { id: "customers", title: "Customers", icon: Users },
  {
    id: "sales", title: "Sales", icon: ShoppingBag,
    subs: [
      { title: "Orders", icon: ShoppingBag },
      { title: "Subscriptions", icon: InfinityIcon },
    ],
  },
  { id: "storefront", title: "Storefront", icon: Store },
  { id: "analytics", title: "Analytics", icon: TrendingUp },
  {
    id: "finance", title: "Finance", icon: DollarSign,
    subs: [{ title: "Incoming" }, { title: "Outgoing" }, { title: "Payout Account" }],
  },
  {
    id: "settings", title: "Settings", icon: Settings,
    subs: [{ title: "General" }, { title: "Webhooks" }, { title: "Custom Fields" }],
  },
]

const teams: Team[] = [
  { name: "Alpha Inc.", logo: Sparkles, plan: "Pro" },
  { name: "Beta Corp.", logo: Package, plan: "Free" },
  { name: "Gamma Tech", logo: TrendingUp, plan: "Enterprise" },
]

function DashboardNav({ routes }: { routes: DashRoute[] }) {
  const [expanded, setExpanded] = React.useState<string | null>("products")
  const { state, toggleSidebar } = useSidebar()

  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {routes.map((route) => {
            const Icon = route.icon
            const isOpen = expanded === route.id
            return (
              <React.Fragment key={route.id}>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    isActive={isOpen}
                    onClick={() => {
                      if (state === "collapsed") {
                        toggleSidebar()
                        setExpanded(route.subs ? route.id : null)
                      } else {
                        setExpanded(isOpen ? null : route.id)
                      }
                    }}
                    tooltip={route.title}
                  >
                    <Icon className="size-4" />
                    <span className="flex-1">{route.title}</span>
                    {route.subs && (
                      <ChevronDown
                        className={cn("size-4 transition-transform", isOpen && "rotate-180")}
                      />
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
                {route.subs && isOpen && (
                  <SidebarMenuSub>
                    {route.subs.map((sub) => (
                      <SidebarMenuSubItem key={sub.title}>
                        <SidebarMenuSubButton>
                          {sub.icon && <sub.icon className="size-3.5" />}
                          <span>{sub.title}</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                )}
              </React.Fragment>
            )
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

export default function SidebarInsetPreview() {
  return (
    <SidebarProvider className="h-svh !min-h-0">
      <Sidebar variant="inset" collapsible="icon">
        <SidebarHeader>
          <div className="flex items-center justify-between group-data-[collapsible=icon]:flex-col group-data-[collapsible=icon]:gap-2">
            <a href="#" className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-lg bg-sidebar-accent">
                <Sparkles className="size-4" />
              </div>
              <span className="font-semibold group-data-[collapsible=icon]:hidden">Acme</span>
            </a>
            <SidebarTrigger />
          </div>
        </SidebarHeader>

        <SidebarContent>
          <DashboardNav routes={dashRoutes} />
        </SidebarContent>

        <SidebarFooter>
          <TeamSwitcher teams={teams} />
        </SidebarFooter>
      </Sidebar>

      <SidebarInset>
        <ContentPlaceholder label="Dashboard — Inset variant" />
      </SidebarInset>
    </SidebarProvider>
  )
}
