'use client'
import { SectionTitle } from '@/shared/components'
import { PriceCard } from './price-card'
import { Plan } from '@/shared/lib/types'

export const Prices = () => {
  const plans: Plan[] = [
    {
      id: '1',
      name: '1 тренировка',
      price: 1000,
      discount: 0,
      plan: [
        'Знакомство',
        'Обсудим проблемы',
        'Рассмотрим реплей',
        'Сделаем фокус на слабых местах',
        'Сделаем выводы',
        'Поставим цели и задачи',
      ],
    },
    {
      id: '2',
      name: '4 тренировки (3+1)',
      price: 3000,
      discount: 25,
      plan: [
        'Знакомство',
        'Обсудим проблемы и выстроим план',
        'Рассмотрим реплеи ваши, pro игроков',
        'Сделаем фокус на слабых местах, улучшим сильные',
        'Обсудим, как можно стать лучше, выстроим план на игры',
        'Поставим цели и задачи',
      ],
    },
  ]

  return (
    <section className="flex items-center flex-col">
      <SectionTitle title="Тарифы" id="prices" />
      <div className="grid gap-8 md:grid-cols-2  xl:w-1/2 mt-8">
        {plans.map((plan) => (
          <PriceCard plan={plan} key={plan.id} />
        ))}
      </div>
    </section>
  )
}
