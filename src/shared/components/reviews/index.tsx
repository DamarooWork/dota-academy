import { reviews } from '@/shared/lib/data'
import { SectionTitle } from '../section-title'
import { ReviewCarousel } from './review-carousel'

export function Reviews() {
  const third = Math.ceil(reviews.length / 3)
  return (
    <section className="py-8 intersect-once intersect:motion-preset-slide-up md:motion-delay-2100">
      <SectionTitle title="Отзывы" id="reviews" />
      <ReviewCarousel reviews={reviews.slice(0, third)} />
      <ReviewCarousel
        reviews={reviews.slice(third, third * 2)}
        direction="rtl"
      />
      <ReviewCarousel reviews={reviews.slice(third * 2)} />
    </section>
  )
}
