import * as React from "react"

import { Github } from "lucide-react"
import { SearchForm } from "@/components/search-form"
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

export function AppSidebar({
  categories,
  ...props
}: React.ComponentProps<typeof Sidebar> & { categories: NavCategory[] }) {
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
        {categories.map((category) => (
          <SidebarGroup key={category.title}>
            <SidebarGroupLabel>{category.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {category.items.map((item) => (
                  <SidebarMenuItem key={item.slug}>
                    <SidebarMenuButton
                      isActive={item.isActive}
                      render={<a href={`/docs/${item.slug}`} />}
                    >
                      {item.title}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
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
