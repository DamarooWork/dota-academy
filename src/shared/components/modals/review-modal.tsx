'use client'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/shared/ui'
import { useModalStore, ModalType } from '@/shared/store'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

export function ReviewModal() {
  const { isOpen, onClose, type, data } = useModalStore()
  const { review } = data
  const isModalOpen = isOpen && type === ModalType.REVIEW_MODAL

  return (
    <Dialog modal={false} open={isModalOpen} onOpenChange={onClose}>
      <DialogContent
        onOpenAutoFocus={(e) => e.preventDefault()}
        className="overflow-hidden p-6"
      >
        <DialogHeader className="">
          <DialogTitle className="text-2xl text-center font-bold ">
            {review?.name}
            {review?.tgLink && (
              <Link href={review.tgLink} target="_blank">
                <ExternalLink className="size-5 inline ml-2" />
              </Link>
            )}
          </DialogTitle>
          <DialogDescription className="text-center text-foreground text-lg">
            {review?.content}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
