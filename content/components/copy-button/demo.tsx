"use client"

import { CopyButton } from "./component"

export default function CopyButtonDemo() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <CopyButton value="npm install react" />
      <CopyButton value="hello@example.com" variant="outline">
        Copy Email
      </CopyButton>
      <CopyButton value="sk_live_abc123" variant="ghost" size="sm">
        Copy Key
      </CopyButton>
      <CopyButton value="pnpm dev" size="lg">
        Copy Command
      </CopyButton>
    </div>
  )
}
