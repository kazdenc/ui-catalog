import { Search, Bell, Inbox } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  EmptyState,
  EmptyStateIcon,
  EmptyStateTitle,
  EmptyStateDescription,
  EmptyStateAction,
} from "./component"

export default function EmptyStateDemo() {
  return (
    <div className="grid gap-8 sm:grid-cols-3">
      <EmptyState>
        <EmptyStateIcon icon={Search} />
        <EmptyStateTitle>No results found</EmptyStateTitle>
        <EmptyStateDescription>
          Try adjusting your search or filters to find what you are looking for.
        </EmptyStateDescription>
        <EmptyStateAction>
          <Button variant="outline" size="sm">
            Clear filters
          </Button>
        </EmptyStateAction>
      </EmptyState>

      <EmptyState>
        <EmptyStateIcon icon={Bell} />
        <EmptyStateTitle>No notifications</EmptyStateTitle>
        <EmptyStateDescription>
          You are all caught up. Check back later for new updates.
        </EmptyStateDescription>
      </EmptyState>

      <EmptyState>
        <EmptyStateIcon icon={Inbox} />
        <EmptyStateTitle>Empty inbox</EmptyStateTitle>
        <EmptyStateDescription>
          Your inbox is empty. Start a conversation to see messages here.
        </EmptyStateDescription>
        <EmptyStateAction>
          <Button size="sm">Compose message</Button>
        </EmptyStateAction>
      </EmptyState>
    </div>
  )
}
