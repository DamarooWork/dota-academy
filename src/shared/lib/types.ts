export interface IPlan {
  id: string
  name: string
  price: number
  discount: number
  plan: string[]
}
export interface IReview {
  id: number
  name: string
  content: string
  tgLink?: string
}
export interface IHashLink {
  hash: string
  title: string
}
export interface ISocialMediaLink {
  id: string
  url: string
  network?: string
}
