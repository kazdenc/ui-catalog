import { Button } from "@/components/ui/button"
import {
  PricingCard,
  PricingCardHeader,
  PricingCardFeatures,
  PricingCardFooter,
} from "./component"

export default function PricingCardDemo() {
  return (
    <div className="grid gap-6 sm:grid-cols-3">
      <PricingCard>
        <PricingCardHeader
          tier="Free"
          price="$0"
          period="/month"
          description="For individuals getting started."
        />
        <PricingCardFeatures
          features={[
            "Up to 3 projects",
            "Basic analytics",
            "Community support",
          ]}
        />
        <PricingCardFooter>
          <Button variant="outline" className="w-full">
            Get started
          </Button>
        </PricingCardFooter>
      </PricingCard>

      <PricingCard popular>
        <PricingCardHeader
          tier="Pro"
          price="$19"
          period="/month"
          description="For growing teams and projects."
        />
        <PricingCardFeatures
          features={[
            "Unlimited projects",
            "Advanced analytics",
            "Priority support",
            "Custom integrations",
          ]}
        />
        <PricingCardFooter>
          <Button className="w-full">Get started</Button>
        </PricingCardFooter>
      </PricingCard>

      <PricingCard>
        <PricingCardHeader
          tier="Enterprise"
          price="$49"
          period="/month"
          description="For large organizations."
        />
        <PricingCardFeatures
          features={[
            "Everything in Pro",
            "SSO and SAML",
            "Dedicated support",
            "Custom contracts",
            "SLA guarantee",
          ]}
        />
        <PricingCardFooter>
          <Button variant="outline" className="w-full">
            Contact sales
          </Button>
        </PricingCardFooter>
      </PricingCard>
    </div>
  )
}
