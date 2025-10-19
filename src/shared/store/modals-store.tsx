import { create } from 'zustand'
import { IReview } from '@/shared/lib/types'

export const ModalType = {
  REVIEW_MODAL: 'reviewModal',
  
} as const
export type ModalType = (typeof ModalType)[keyof typeof ModalType]

interface ModalData {
  review?: IReview
}

interface ModalStore {
  type: ModalType | null
  data: ModalData
  isOpen: boolean
  onOpen: (type: ModalType, data?: ModalData) => void
  onClose: () => void
}
export const useModalStore = create<ModalStore>((set) => ({
  type: null,
  data: {},
  isOpen: false,
  onOpen: (type, data = {}) =>
    set({ type, isOpen: true, data }),
  onClose: () => set({ type: null, isOpen: false }),
}))
