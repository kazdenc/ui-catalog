// This file re-exports the sidebar preview components for direct use.
// Each variant is a full-page component using real shadcn Sidebar primitives.
//
// Variants:
//   collapsible — Sections with favorites, teams, topics
//   inset       — Dashboard nav with collapsible sub-routes (inset variant)
//   floating    — Same as inset but with floating sidebar style
//   mail        — Dual-pane mail layout with search
//   slide-out   — Primary nav + secondary panel slides in
//   replace     — Single sidebar swaps content in-place

export { default as SidebarCollapsible } from "./previews/collapsible"
export { default as SidebarInset } from "./previews/inset"
export { default as SidebarFloating } from "./previews/floating"
export { default as SidebarMail } from "./previews/mail"
export { default as SidebarSlideOut } from "./previews/slide-out"
export { default as SidebarReplace } from "./previews/replace"
