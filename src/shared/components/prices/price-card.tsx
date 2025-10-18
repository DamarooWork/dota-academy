import { IPlan } from '@/shared/lib/types'
import { Button } from '@/shared/ui'
import Link from 'next/link'

interface PriceCardProps {
  plan: IPlan
}
export function PriceCard({ plan }: PriceCardProps) {
  return (
    <div className="group rounded-lg flex flex-col border-border border-2 shadow-md shadow-primary bg-background/75 p-4 relative  xl:hover:scale-105 transition-all duration-300 will-change-transform  intersect-once intersect:motion-preset-slide-up motion-delay-300">
      <h3 className="text-3xl font-semibold text-center">{plan.name}</h3>
      <div className="text-2xl font-bold text-center">{plan.price}₽</div>
      <div className="flex-1">
        <h4 className="font-semibold text-2xl">Что входит:</h4>
        <ul className="flex flex-col justify-start items-start  ">
          {plan.plan.map((item) => (
            <li key={item} className="text-lg">
              - {item}
            </li>
          ))}
        </ul>
      </div>
      <Link href={`https://t.me/damaroo_coach/12`} target="_blank">
        <Button className="w-full text-xl mt-4">Выбрать</Button>
      </Link>
      {plan.discount > 0 && (
        <div className="absolute -top-4 -right-1 sm:-right-4 text-2xl text-foreground border-primary border-2 bg-background/90 px-2 py-1 rounded-xl rotate-15 shadow-md shadow-primary group-hover:motion-preset-oscillate">
          <span>-{plan.discount}%</span>
        </div>
      )}
    </div>
  )
}
