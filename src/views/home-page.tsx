import { Rewiews } from '@/shared/components'

interface HomePageProps {}
export function HomePage({}: HomePageProps) {
  return (
    <>
      <Rewiews />
      <p id="prices" className="text-4xl font-bold min-h-screen">
        Цены
      </p>
    </>
  )
}
