'use client'
import { useState } from "react";
import { Button } from "@/shared/ui";

export const PricingComponent = () => {
  const [selectedPlan, setSelectedPlan] = useState("basic");
  
  const plans = [
    { id: "basic", name: "Basic", price: 29 },
    { id: "pro", name: "Pro", price: 59 },
    { id: "enterprise", name: "Enterprise", price: 99 }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {plans.map((plan) => (
        <div key={plan.id} className="rounded-lg border p-6">
          <h3 className="text-xl font-semibold">{plan.name}</h3>
          <div className="text-3xl font-bold">${plan.price}/mo</div>
          <Button className="w-full mt-4">
            Choose Plan
          </Button>
        </div>
      ))}
    </div>
  );
};