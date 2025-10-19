import { IReview } from '@/shared/lib/types'
import { ModalType, useModalStore } from '@/shared/store'
import { CarouselItem } from '@/shared/ui'
import { Bad_Script } from 'next/font/google'

const bad_Script = Bad_Script({
  subsets: ['latin'],
  weight: ['400'],
})
interface ReviewItemProps {
  review: IReview
}
export default function ReviewItem({ review }: ReviewItemProps) {
  const { onOpen, isOpen, data, onClose, type } = useModalStore()
  const handleOpenModal = () => {
    onOpen(ModalType.REVIEW_MODAL, { review })
  }
  return (
    <CarouselItem
      onClick={handleOpenModal}
      className={`${bad_Script.className} basis-1/2 lg:basis-1/3 flex flex-col items-center justify-evenly  h-40 border-2 rounded-2xl border-border   m-4 p-4  shadow-md shadow-primary bg-background/75 overflow-hidden cursor-pointer `}
    >
      <p className="text-2xl font-bold">{review.name}</p>
      <p className={` text-xl text-center  line-clamp-3`}>{review.content}</p>
    </CarouselItem>
  )
}
