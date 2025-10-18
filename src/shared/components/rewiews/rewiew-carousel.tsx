'use client'
import { Carousel, CarouselContent } from '@/shared/ui'
import Autoscroll from 'embla-carousel-auto-scroll'
import Autoplay from 'embla-carousel-autoplay'
import RewiewItem from './rewiew-item'
import { IRewiew } from '@/shared/lib/types'
interface RewiewCarouselProps {
  rewiews: IRewiew[]
  direction?: 'ltr' | 'rtl'
}
export function RewiewCarousel({
  rewiews,
  direction = 'ltr',
}: RewiewCarouselProps) {
  return (
    <Carousel
      plugins={[
        Autoscroll({
          speed: 1,
          stopOnInteraction: false,
        }),
        Autoplay({
          delay: 2000,
          stopOnInteraction: true,
        }),
      ]}
      opts={{
        loop: true,
        direction,
      }}
      className="-mx-4 2xl:mx-0  intersect-once intersect:motion-preset-slide-up motion-delay-500"
    >
      <CarouselContent dir={direction}>
        {rewiews.map((rewiew) => {
          return (
            <RewiewItem
              key={rewiew.id}
              name={rewiew.name}
              rewiew={rewiew.rewiew}
            />
          )
        })}
      </CarouselContent>
    </Carousel>
  )
}
