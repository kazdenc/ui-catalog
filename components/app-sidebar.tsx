"use client"

import * as React from "react"

import { usePathname } from "next/navigation"
import { ChevronRight, Github } from "lucide-react"
import { SearchForm } from "@/components/search-form"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import type { NavCategory } from "@/lib/content"

const NON_COLLAPSIBLE = ["Getting Started"]

export function AppSidebar({
  categories,
  ...props
}: React.ComponentProps<typeof Sidebar> & { categories: NavCategory[] }) {
  const pathname = usePathname()

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-1">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground text-xs font-bold">
            UI
          </div>
          <span className="font-semibold text-sm">UI Catalog</span>
        </div>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {categories.map((category) => {
          const isCollapsible = !NON_COLLAPSIBLE.includes(category.title)
          const hasActiveItem = category.items.some(
            (item) => pathname === `/docs/${item.slug}`,
          )

          if (!isCollapsible) {
            return (
              <SidebarGroup key={category.title}>
                <SidebarGroupLabel>{category.title}</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {category.items.map((item) => (
                      <SidebarMenuItem key={item.slug}>
                        <SidebarMenuButton
                          isActive={pathname === `/docs/${item.slug}`}
                          render={<a href={`/docs/${item.slug}`} />}
                        >
                          {item.title}
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            )
          }

          return (
            <Collapsible
              key={category.title}
              defaultOpen={hasActiveItem || true}
            >
              <SidebarGroup>
                <CollapsibleTrigger
                  nativeButton={false}
                  render={
                    <SidebarGroupLabel className="cursor-pointer select-none [&[data-panel-open]>svg]:rotate-90" />
                  }
                >
                  {category.title}
                  <ChevronRight className="ml-auto h-3.5 w-3.5 transition-transform duration-200" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {category.items.map((item) => (
                        <SidebarMenuItem key={item.slug}>
                          <SidebarMenuButton
                            isActive={pathname === `/docs/${item.slug}`}
                            render={<a href={`/docs/${item.slug}`} />}
                          >
                            {item.title}
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </CollapsibleContent>
              </SidebarGroup>
            </Collapsible>
          )
        })}
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center gap-3 px-2 py-1">
          <a
            href="https://github.com/kazdenc/ui-catalog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <Github className="h-3 w-3" />
            <span>Repo</span>
          </a>
          <span className="text-xs text-muted-foreground">
            Made by{" "}
            <a
              href="https://github.com/kazdenc"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:text-primary transition-colors"
            >
              @kazdenc
            </a>
          </span>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
