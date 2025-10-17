import { CarouselItem } from '@/shared/ui'
import { Bad_Script } from 'next/font/google'

const bad_Script = Bad_Script({
  subsets: ['latin'],
  weight: ['400'],
})
interface RewiewItemProps {
  name: string
  rewiew: string
}
export default function RewiewItem({ name, rewiew }: RewiewItemProps) {
  return (
    <CarouselItem
      className={`${bad_Script.className} md:basis-1/2 lg:basis-1/3 flex flex-col items-center   h-40 border-2 rounded-2xl border-border   m-4 p-4  shadow-md shadow-primary bg-background/75`}
    >
      <p className="text-2xl font-bold">{name}</p>
      <p
        className={` text-xl text-center flex-1 flex items-center justify-center`}
      >
        {rewiew}
      </p>
    </CarouselItem>
  )
}
