import { rewiews } from '@/shared/lib/data'
import { SectionTitle } from '../section-title'
import { RewiewCarousel } from './rewiew-carousel'

export function Rewiews() {
  const third = Math.ceil(rewiews.length / 3)
  return (
    <section className="py-8 intersect-once intersect:motion-preset-slide-up motion-delay-2000">
      <SectionTitle title="Отзывы" id="rewiews" />
      <RewiewCarousel rewiews={rewiews.slice(0, third)} />
      <RewiewCarousel
        rewiews={rewiews.slice(third, third * 2)}
        direction="rtl"
      />
      <RewiewCarousel rewiews={rewiews.slice(third * 2)} />
    </section>
  )
}
