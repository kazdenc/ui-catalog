import * as React from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface PricingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  popular?: boolean
}

const PricingCard = React.forwardRef<HTMLDivElement, PricingCardProps>(
  ({ className, popular = false, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative flex flex-col rounded-xl border bg-card p-6",
        popular && "border-primary shadow-sm",
        className,
      )}
      {...props}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-medium text-primary-foreground">
          Popular
        </div>
      )}
      {children}
    </div>
  ),
)
PricingCard.displayName = "PricingCard"

interface PricingCardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  tier: string
  price: string
  period?: string
  description?: string
}

const PricingCardHeader = React.forwardRef<
  HTMLDivElement,
  PricingCardHeaderProps
>(({ className, tier, price, period = "/month", description, ...props }, ref) => (
  <div ref={ref} className={cn("mb-6", className)} {...props}>
    <p className="text-sm font-medium text-muted-foreground">{tier}</p>
    <div className="mt-2 flex items-baseline gap-1">
      <span className="text-4xl font-bold tracking-tight text-card-foreground">
        {price}
      </span>
      {period && (
        <span className="text-sm text-muted-foreground">{period}</span>
      )}
    </div>
    {description && (
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    )}
  </div>
))
PricingCardHeader.displayName = "PricingCardHeader"

interface PricingCardFeaturesProps
  extends React.HTMLAttributes<HTMLUListElement> {
  features: string[]
}

const PricingCardFeatures = React.forwardRef<
  HTMLUListElement,
  PricingCardFeaturesProps
>(({ className, features, ...props }, ref) => (
  <ul ref={ref} className={cn("mb-6 flex flex-col gap-3", className)} {...props}>
    {features.map((feature) => (
      <li key={feature} className="flex items-start gap-2 text-sm text-card-foreground">
        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
        {feature}
      </li>
    ))}
  </ul>
))
PricingCardFeatures.displayName = "PricingCardFeatures"

interface PricingCardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const PricingCardFooter = React.forwardRef<
  HTMLDivElement,
  PricingCardFooterProps
>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("mt-auto pt-2", className)} {...props}>
    {children}
  </div>
))
PricingCardFooter.displayName = "PricingCardFooter"

export {
  PricingCard,
  PricingCardHeader,
  PricingCardFeatures,
  PricingCardFooter,
}
export type {
  PricingCardProps,
  PricingCardHeaderProps,
  PricingCardFeaturesProps,
  PricingCardFooterProps,
}
