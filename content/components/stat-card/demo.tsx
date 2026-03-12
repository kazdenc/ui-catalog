"use client"

import { StatCard } from "./component"
import { Activity, DollarSign, TrendingDown, Users } from "lucide-react"

export default function StatCardDemo() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <StatCard
        label="Total Revenue"
        value="$45,231.89"
        trend={{ value: 20.1, label: "from last month" }}
        icon={<DollarSign className="h-4 w-4" />}
      />
      <StatCard
        label="Subscriptions"
        value="+2,350"
        trend={{ value: 180.1, label: "from last month" }}
        icon={<Users className="h-4 w-4" />}
      />
      <StatCard
        label="Active Now"
        value="+573"
        trend={{ value: 12, label: "since last hour" }}
        icon={<Activity className="h-4 w-4" />}
      />
      <StatCard
        label="Bounce Rate"
        value="24.3%"
        trend={{ value: -4.5, label: "from last week" }}
        icon={<TrendingDown className="h-4 w-4" />}
      />
    </div>
  )
}
