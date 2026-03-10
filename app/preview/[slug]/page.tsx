import dynamic from "next/dynamic"
import { notFound } from "next/navigation"

const previewModules: Record<string, React.ComponentType> = {
  "sidebar-collapsible": dynamic(
    () => import("@/content/components/sidebar-collapsible/previews/collapsible"),
  ),
  "sidebar-inset": dynamic(
    () => import("@/content/components/sidebar-collapsible/previews/inset"),
  ),
  "sidebar-floating": dynamic(
    () => import("@/content/components/sidebar-collapsible/previews/floating"),
  ),
  "sidebar-mail": dynamic(
    () => import("@/content/components/sidebar-collapsible/previews/mail"),
  ),
  "sidebar-slide-out": dynamic(
    () => import("@/content/components/sidebar-collapsible/previews/slide-out"),
  ),
  "sidebar-replace": dynamic(
    () => import("@/content/components/sidebar-collapsible/previews/replace"),
  ),
}

export function generateStaticParams() {
  return Object.keys(previewModules).map((slug) => ({ slug }))
}

export default async function PreviewPage(props: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await props.params
  const Component = previewModules[slug]
  if (!Component) notFound()
  return <Component />
}
