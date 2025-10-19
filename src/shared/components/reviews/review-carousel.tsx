'use client'
import { Carousel, CarouselContent } from '@/shared/ui'
import Autoscroll from 'embla-carousel-auto-scroll'
import Autoplay from 'embla-carousel-autoplay'
import ReviewItem from './review-item'
import { IReview } from '@/shared/lib/types'
interface ReviewCarouselProps {
  reviews: IReview[]
  direction?: 'ltr' | 'rtl'
}
export function ReviewCarousel({
  reviews,
  direction = 'ltr',
}: ReviewCarouselProps) {
  return (
    <Carousel
      plugins={[
        Autoscroll({
          speed: 1,
          stopOnInteraction: false,
        }),
        Autoplay({
          delay: 1000,
        }),
      ]}
      opts={{
        loop: true,
        direction,
        align: 'start'
      }}
      className="-mx-4 2xl:mx-0  intersect-once intersect:motion-preset-slide-up motion-delay-500"
    >
      <CarouselContent dir={direction}>
        {reviews.map((review) => {
          return <ReviewItem key={review.id} review={review} />
        })}
      </CarouselContent>
    </Carousel>
  )
}
