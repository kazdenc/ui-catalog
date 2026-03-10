import fs from "fs"
import path from "path"

export interface DocMeta {
  slug: string
  title: string
  description: string
  category: string
  date: string
  order: number
}

export interface NavCategory {
  title: string
  items: { title: string; slug: string; isActive?: boolean }[]
}

const CONTENT_DIR = path.join(process.cwd(), "content/docs")

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

export function getAllDocs(): DocMeta[] {
  if (!fs.existsSync(CONTENT_DIR)) return []

  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((filename) => {
      const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), "utf-8")
      const { meta } = parseFrontmatter(raw)
      const slug = filename.replace(/\.mdx?$/, "")
      return {
        slug,
        title: meta.title || slug,
        description: meta.description || "",
        category: meta.category || "Uncategorized",
        date: meta.date || "",
        order: parseInt(meta.order || "999", 10),
      }
    })
    .sort((a, b) => a.order - b.order)
}

export function getDocBySlug(slug: string): {
  meta: DocMeta
  content: string
} | null {
  const extensions = [".mdx", ".md"]
  for (const ext of extensions) {
    const filepath = path.join(CONTENT_DIR, slug + ext)
    if (fs.existsSync(filepath)) {
      const raw = fs.readFileSync(filepath, "utf-8")
      const { meta, content } = parseFrontmatter(raw)
      return {
        meta: {
          slug,
          title: meta.title || slug,
          description: meta.description || "",
          category: meta.category || "Uncategorized",
          date: meta.date || "",
          order: parseInt(meta.order || "999", 10),
        },
        content,
      }
    }
  }
  return null
}

export function getNavCategories(activeSlug?: string): NavCategory[] {
  const docs = getAllDocs()
  const categories = new Map<string, NavCategory>()

  for (const doc of docs) {
    if (!categories.has(doc.category)) {
      categories.set(doc.category, { title: doc.category, items: [] })
    }
    categories.get(doc.category)!.items.push({
      title: doc.title,
      slug: doc.slug,
      isActive: doc.slug === activeSlug,
    })
  }

  return Array.from(categories.values())
}
