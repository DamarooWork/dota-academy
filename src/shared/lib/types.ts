export interface Plan {
  id: string
  name: string
  price: number
  discount: number
  plan: string[]
}
export interface Rewiew {
  id: number
  name: string
  rewiew: string
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