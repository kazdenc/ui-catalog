import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { getNavCategories } from "@/lib/content"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const categories = getNavCategories()

  return (
    <SidebarProvider>
      <AppSidebar categories={categories} />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  )
}
