import { Search } from "lucide-react"
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
  )
}
