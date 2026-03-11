"use client"

import * as React from "react"
import { Plus } from "lucide-react"
import {
  ExpandableCard,
  ExpandableCardHeader,
  ExpandableCardContent,
} from "./component"

const items = [
  {
    title: "What is this component?",
    description: "A card that expands to reveal hidden content.",
    detail:
      "The expandable card uses height animation with cubic-bezier easing for a smooth reveal. Content fades in slightly after the height begins expanding, creating a polished staggered effect. Click any card to toggle.",
  },
  {
    title: "How does the animation work?",
    description: "Smooth height transitions with no layout shift.",
    detail:
      "The content area measures its scrollHeight on mount and uses max-height to animate between 0 and the measured value. Opacity is staggered with a slight delay on expand and immediate on collapse for a natural feel.",
  },
  {
    title: "Is it accessible?",
    description: "Keyboard and screen reader friendly.",
    detail:
      "The card is clickable and can be extended with proper ARIA attributes. The expanded content remains in the DOM for screen readers. Add role, aria-expanded, and keyboard handlers as needed for your use case.",
  },
]

export default function ExpandableCardDemo() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => (
        <ExpandableCard
          key={i}
          expanded={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        >
          <ExpandableCardHeader>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-card-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {item.description}
                </p>
              </div>
              <Plus
                className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300"
                style={{
                  transform:
                    openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                }}
              />
            </div>
          </ExpandableCardHeader>
          <ExpandableCardContent expanded={openIndex === i}>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {item.detail}
            </p>
          </ExpandableCardContent>
        </ExpandableCard>
      ))}
    </div>
  )
}
