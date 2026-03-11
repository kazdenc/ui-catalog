import React from "react"

function parseMarkdown(md: string): React.ReactNode[] {
  const lines = md.split("\n")
  const nodes: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    // Code block
    if (line.startsWith("```")) {
      const lang = line.slice(3).trim()
      const codeLines: string[] = []
      i++
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i])
        i++
      }
      i++ // skip closing ```
      nodes.push(
        <pre
          key={nodes.length}
          className="rounded-lg bg-muted p-4 overflow-x-auto text-sm"
        >
          <code className={lang ? `language-${lang}` : undefined}>
            {codeLines.join("\n")}
          </code>
        </pre>
      )
      continue
    }

    // Headings
    if (line.startsWith("### ")) {
      nodes.push(
        <h3 key={nodes.length} className="mt-8 mb-3 text-lg font-semibold tracking-tight">
          {line.slice(4)}
        </h3>
      )
      i++
      continue
    }
    if (line.startsWith("## ")) {
      nodes.push(
        <h2 key={nodes.length} className="mt-10 mb-4 text-2xl font-semibold tracking-tight">
          {line.slice(3)}
        </h2>
      )
      i++
      continue
    }
    if (line.startsWith("# ")) {
      nodes.push(
        <h1 key={nodes.length} className="mt-8 mb-4 text-3xl font-bold tracking-tight">
          {line.slice(2)}
        </h1>
      )
      i++
      continue
    }

    // List items
    if (line.startsWith("- ")) {
      const listItems: React.ReactNode[] = []
      while (i < lines.length && lines[i].startsWith("- ")) {
        listItems.push(<li key={listItems.length}>{parseInline(lines[i].slice(2))}</li>)
        i++
      }
      nodes.push(
        <ul key={nodes.length} className="my-4 ml-6 list-disc space-y-1">
          {listItems}
        </ul>
      )
      continue
    }

    // Empty line
    if (line.trim() === "") {
      i++
      continue
    }

    // Paragraph
    nodes.push(
      <p key={nodes.length} className="my-4 leading-7">
        {parseInline(line)}
      </p>
    )
    i++
  }

  return nodes
}

function parseInline(text: string): React.ReactNode {
  const parts: React.ReactNode[] = []
  let remaining = text
  let key = 0

  while (remaining.length > 0) {
    // Find the earliest inline pattern (bold or code)
    const codeIdx = remaining.indexOf("`")
    const boldIdx = remaining.indexOf("**")

    // No more patterns
    if (codeIdx === -1 && boldIdx === -1) {
      parts.push(remaining)
      break
    }

    // Pick whichever comes first
    const codeFirst = codeIdx !== -1 && (boldIdx === -1 || codeIdx < boldIdx)

    if (codeFirst) {
      const codeMatch = remaining.match(/^([\s\S]*?)`([^`]+)`([\s\S]*)$/)
      if (codeMatch) {
        if (codeMatch[1]) parts.push(...parseInline_bold(codeMatch[1], key))
        key += countBold(codeMatch[1])
        parts.push(
          <code key={key++} className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">
            {codeMatch[2]}
          </code>
        )
        remaining = codeMatch[3]
        continue
      }
    }

    // Bold
    const boldMatch = remaining.match(/^([\s\S]*?)\*\*([^*]+)\*\*([\s\S]*)$/)
    if (boldMatch) {
      if (boldMatch[1]) parts.push(boldMatch[1])
      parts.push(<strong key={key++}>{boldMatch[2]}</strong>)
      remaining = boldMatch[3]
      continue
    }

    parts.push(remaining)
    break
  }

  return parts.length === 1 ? parts[0] : parts
}

/** Parse only bold markers in a substring (used for text before inline code) */
function parseInline_bold(text: string, startKey: number): React.ReactNode[] {
  const parts: React.ReactNode[] = []
  let remaining = text
  let key = startKey

  while (remaining.length > 0) {
    const boldMatch = remaining.match(/^([\s\S]*?)\*\*([^*]+)\*\*([\s\S]*)$/)
    if (boldMatch) {
      if (boldMatch[1]) parts.push(boldMatch[1])
      parts.push(<strong key={key++}>{boldMatch[2]}</strong>)
      remaining = boldMatch[3]
      continue
    }
    parts.push(remaining)
    break
  }

  return parts
}

function countBold(text: string): number {
  const matches = text.match(/\*\*[^*]+\*\*/g)
  return matches ? matches.length : 0
}

export function MarkdownRenderer({ content }: { content: string }) {
  return <>{parseMarkdown(content)}</>
}
