import { Rewiews } from '@/shared/components'
import { PricingComponent } from '@/shared/ui'


interface HomePageProps {}
export function HomePage({}: HomePageProps) {
  return (
    <>
      <Rewiews />
      <p id="prices" className="text-4xl font-bold min-h-screen">
        Цены
      </p>
      <PricingComponent />
    </>
  )
}
