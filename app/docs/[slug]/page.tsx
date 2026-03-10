import { notFound } from "next/navigation"
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
import { getAllDocs, getDocBySlug } from "@/lib/content"
import { MarkdownRenderer } from "@/components/markdown-renderer"

export function generateStaticParams() {
  return getAllDocs().map((doc) => ({ slug: doc.slug }))
}

export default async function DocPage(props: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await props.params
  const doc = getDocBySlug(slug)
  if (!doc) notFound()

  return (
    <>
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
                {doc.meta.category}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>{doc.meta.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <article className="mx-auto w-full max-w-3xl px-6 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            {doc.meta.title}
          </h1>
          {doc.meta.description && (
            <p className="mt-2 text-muted-foreground text-lg">
              {doc.meta.description}
            </p>
          )}
          {doc.meta.date && (
            <p className="mt-1 text-sm text-muted-foreground">
              {doc.meta.date}
            </p>
          )}
        </div>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <MarkdownRenderer content={doc.content} />
        </div>
      </article>
    </>
  )
}
