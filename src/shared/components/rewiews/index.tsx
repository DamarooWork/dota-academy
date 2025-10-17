'use client'
import { Carousel, CarouselContent, CarouselItem } from '@/shared/ui'
import Autoscroll from 'embla-carousel-auto-scroll'
import Autoplay from 'embla-carousel-autoplay'
import RewiewItem from './rewiew-item'

const rewiewsArr = [
  {
    id: 1,
    name: 'Александр',
    rewiew:
      'Занятия было классное, очень полезное. Мы разобрали игры на антимаге',
  },
  {
    id: 2,
    name: 'Арсений',
    rewiew:
      'Занятия было классное, очень полезное. Мы разобрали игры на террорблейде',
  },
  {
    id: 3,
    name: 'Сергей',
    rewiew: 'Занятия было классное, очень полезное. Мы разобрали игры на морфе',
  },
  { 
    id: 4,
    name: 'Евгений',
    rewiew: 'Занятия было классное, очень полезное. Мы разобрали игры на pudge',
  },
  { 
    id: 5,
    name: 'Александр',
    rewiew: 'Занятия было классное, очень полезное. Мы разобрали игры на тролле',
  }
]
export function Rewiews() {
  return (
    <section id="rewiews" className='py-8'>
      <h2 className="text-5xl font-bold text-center mb-8 text-primary">Отзывы</h2>
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
          align: 'center',
          loop: true,
        }}
      >
        <CarouselContent>
          {rewiewsArr.map((rewiew) => {
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
    </section>
  )
}
