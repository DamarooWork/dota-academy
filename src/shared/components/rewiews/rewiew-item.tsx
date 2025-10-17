import { CarouselItem } from '@/shared/ui'

interface RewiewItemProps {
  name: string
  rewiew: string
}
export default function RewiewItem({ name, rewiew }: RewiewItemProps) {
  return (
    <CarouselItem className="md:basis-1/2 lg:basis-1/3 flex flex-col items-center   h-40 border-2 rounded-2xl  border-foreground mr-4 p-4">
      <p className="text-2xl font-bold">{name}</p>
      <p className="text-xl text-center flex-1 flex items-center justify-center">{rewiew}</p>
    </CarouselItem>
  )
}
