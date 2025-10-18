'use client'
import { SectionTitle } from '@/shared/components'
import { PriceCard } from './price-card'
import { plans } from '@/shared/lib/data'

export const Prices = () => {
  return (
    <section className="flex items-center flex-col">
      <SectionTitle title="Тарифы" id="prices" />
      <div className="grid gap-8 md:grid-cols-2  xl:w-2/3 mt-8">
        {plans.map((plan) => (
          <PriceCard plan={plan} key={plan.id} />
        ))}
      </div>
    </section>
  )
}
