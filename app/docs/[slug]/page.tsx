import { notFound } from "next/navigation"
import dynamic from "next/dynamic"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {
  getAllComponents,
  getAllPages,
  getComponentBySlug,
  getPageBySlug,
} from "@/lib/content"
import { MarkdownRenderer } from "@/components/markdown-renderer"
import { ComponentPreview } from "@/components/component-preview"

// Map of slug -> dynamic demo component
const demoModules: Record<
  string,
  React.ComponentType
> = {
  "glow-button": dynamic(
    () => import("@/content/components/glow-button/demo"),
  ),
  "glass-card": dynamic(
    () => import("@/content/components/glass-card/demo"),
  ),
  "loader": dynamic(
    () => import("@/content/components/loader/demo"),
  ),
  "sidebar-collapsible": dynamic(
    () => import("@/content/components/sidebar-collapsible/demo"),
  ),
  "spotlight-card": dynamic(
    () => import("@/content/components/spotlight-card/demo"),
  ),
  "tilt-card": dynamic(
    () => import("@/content/components/tilt-card/demo"),
  ),
  "flip-card": dynamic(
    () => import("@/content/components/flip-card/demo"),
  ),
  "bento-grid": dynamic(
    () => import("@/content/components/bento-grid/demo"),
  ),
  "expandable-card": dynamic(
    () => import("@/content/components/expandable-card/demo"),
  ),
  "pricing-card": dynamic(
    () => import("@/content/components/pricing-card/demo"),
  ),
  "progress-bar": dynamic(
    () => import("@/content/components/progress-bar/demo"),
  ),
}

export function generateStaticParams() {
  const pages = getAllPages().map((p) => ({ slug: p.slug }))
  const components = getAllComponents().map((c) => ({ slug: c.slug }))
  return [...pages, ...components]
}

export default async function DocPage(props: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await props.params

  // Try as a component first
  const comp = getComponentBySlug(slug)
  if (comp) {
    const DemoComponent = demoModules[slug]
    return (
      <>
        <DocHeader category={comp.meta.category} title={comp.meta.title} />
        <article className="mx-auto w-full max-w-3xl px-6 py-10">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">
              {comp.meta.title}
            </h1>
            {comp.meta.description && (
              <p className="mt-2 text-lg text-muted-foreground">
                {comp.meta.description}
              </p>
            )}
            {comp.meta.date && (
              <span className="mt-2 inline-block rounded-md bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                {formatDate(comp.meta.date)}
              </span>
            )}
          </div>

          {DemoComponent && comp.meta.controls ? (
            <DemoComponent />
          ) : DemoComponent ? (
            <ComponentPreview slug={slug}>
              <DemoComponent />
            </ComponentPreview>
          ) : null}

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <MarkdownRenderer content={comp.markdown} />
          </div>
        </article>
      </>
    )
  }

  // Try as a static page
  const page = getPageBySlug(slug)
  if (page) {
    return (
      <>
        <DocHeader category={page.meta.category} title={page.meta.title} />
        <article className="mx-auto w-full max-w-3xl px-6 py-10">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">
              {page.meta.title}
            </h1>
            {page.meta.description && (
              <p className="mt-2 text-lg text-muted-foreground">
                {page.meta.description}
              </p>
            )}
          </div>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <MarkdownRenderer content={page.content} />
          </div>
        </article>
      </>
    )
  }

  notFound()
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00")
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

function DocHeader({
  category,
  title,
}: {
  category: string
  title: string
}) {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator
        orientation="vertical"
        className="mr-2 data-vertical:h-4 data-vertical:self-auto"
      />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href="/docs/introduction">
              {category}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden md:block" />
          <BreadcrumbItem>
            <BreadcrumbPage>{title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  )
}
