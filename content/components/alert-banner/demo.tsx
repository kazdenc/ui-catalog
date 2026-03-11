"use client"

import { AlertBanner } from "./component"
import { Button } from "@/components/ui/button"

export default function AlertBannerDemo() {
  return (
    <div className="flex flex-col gap-4">
      <AlertBanner variant="info" dismissible>
        A new version is available. Refresh the page to update.
      </AlertBanner>
      <AlertBanner
        variant="warning"
        action={
          <Button variant="outline" size="sm" className="h-7 text-xs">
            Review
          </Button>
        }
      >
        Your trial expires in 3 days. Upgrade to keep access.
      </AlertBanner>
      <AlertBanner variant="error">
        Payment failed. Please check your billing details.
      </AlertBanner>
      <AlertBanner variant="success">
        Your changes have been saved successfully.
      </AlertBanner>
    </div>
  )
}
