import fs from "fs"
import path from "path"

export interface ComponentMeta {
  slug: string
  title: string
  description: string
  category: string
  date: string
  order: number
  registryDependencies?: string[]
  controls?: boolean
}

export interface PageMeta {
  slug: string
  title: string
  description: string
  category: string
  order: number
}

export interface NavCategory {
  title: string
  items: { title: string; slug: string; isActive?: boolean }[]
}

const COMPONENTS_DIR = path.join(process.cwd(), "content/components")
const PAGES_DIR = path.join(process.cwd(), "content/pages")

// --- Frontmatter parser for .md files ---

function parseFrontmatter(raw: string): {
  meta: Record<string, string>
  content: string
} {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) return { meta: {}, content: raw }

  const meta: Record<string, string> = {}
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":")
    if (idx !== -1) {
      meta[line.slice(0, idx).trim()] = line.slice(idx + 1).trim()
    }
  }
  return { meta, content: match[2] }
}

// --- Component folders (content/components/<slug>/) ---

export function getAllComponents(): ComponentMeta[] {
  if (!fs.existsSync(COMPONENTS_DIR)) return []

  return fs
    .readdirSync(COMPONENTS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => {
      const slug = d.name
      const metaPath = path.join(COMPONENTS_DIR, slug, "meta.json")
      if (!fs.existsSync(metaPath)) return null

      const meta = JSON.parse(fs.readFileSync(metaPath, "utf-8"))
      return {
        slug,
        title: meta.title || slug,
        description: meta.description || "",
        category: meta.category || "Uncategorized",
        date: meta.date || "",
        order: meta.order ?? 999,
        registryDependencies: meta.registryDependencies,
        controls: meta.controls ?? false,
      } satisfies ComponentMeta
    })
    .filter(Boolean)
    .sort((a, b) => a!.order - b!.order) as ComponentMeta[]
}

export function getComponentBySlug(slug: string): {
  meta: ComponentMeta
  markdown: string
  hasDemo: boolean
  componentPath: string
} | null {
  const dir = path.join(COMPONENTS_DIR, slug)
  if (!fs.existsSync(dir)) return null

  const metaPath = path.join(dir, "meta.json")
  if (!fs.existsSync(metaPath)) return null

  const meta = JSON.parse(fs.readFileSync(metaPath, "utf-8"))

  let markdown = ""
  const mdPath = path.join(dir, "page.md")
  if (fs.existsSync(mdPath)) {
    const raw = fs.readFileSync(mdPath, "utf-8")
    const parsed = parseFrontmatter(raw)
    markdown = parsed.content || raw
  }

  const hasDemo = fs.existsSync(path.join(dir, "demo.tsx"))
  const componentPath = path.join(dir, "component.tsx")

  return {
    meta: {
      slug,
      title: meta.title || slug,
      description: meta.description || "",
      category: meta.category || "Uncategorized",
      date: meta.date || "",
      order: meta.order ?? 999,
      registryDependencies: meta.registryDependencies,
      controls: meta.controls ?? false,
    },
    markdown,
    hasDemo,
    componentPath,
  }
}

// --- Static pages (content/pages/<slug>.md) ---

export function getAllPages(): PageMeta[] {
  if (!fs.existsSync(PAGES_DIR)) return []

  return fs
    .readdirSync(PAGES_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const raw = fs.readFileSync(path.join(PAGES_DIR, filename), "utf-8")
      const { meta } = parseFrontmatter(raw)
      const slug = filename.replace(/\.md$/, "")
      return {
        slug,
        title: meta.title || slug,
        description: meta.description || "",
        category: meta.category || "Getting Started",
        order: parseInt(meta.order || "999", 10),
      }
    })
    .sort((a, b) => a.order - b.order)
}

export function getPageBySlug(slug: string): {
  meta: PageMeta
  content: string
} | null {
  const filepath = path.join(PAGES_DIR, slug + ".md")
  if (!fs.existsSync(filepath)) return null

  const raw = fs.readFileSync(filepath, "utf-8")
  const { meta, content } = parseFrontmatter(raw)
  return {
    meta: {
      slug,
      title: meta.title || slug,
      description: meta.description || "",
      category: meta.category || "Getting Started",
      order: parseInt(meta.order || "999", 10),
    },
    content,
  }
}

// --- Navigation (combines pages + components) ---

export function getNavCategories(activeSlug?: string): NavCategory[] {
  const gettingStarted: NavCategory = { title: "Getting Started", items: [] }
  const catalog: NavCategory = { title: "Catalog", items: [] }

  for (const page of getAllPages()) {
    gettingStarted.items.push({
      title: page.title,
      slug: page.slug,
      isActive: page.slug === activeSlug,
    })
  }

  for (const comp of getAllComponents()) {
    catalog.items.push({
      title: comp.title,
      slug: comp.slug,
      isActive: comp.slug === activeSlug,
    })
  }

  const categories: NavCategory[] = []
  if (gettingStarted.items.length) categories.push(gettingStarted)
  if (catalog.items.length) categories.push(catalog)
  return categories
}
