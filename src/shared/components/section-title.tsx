import { Great_Vibes } from 'next/font/google'
const caveat = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
})
interface Props {
  className?: string
  title: string
  id?: string
}
export function SectionTitle({ className, title, id }: Props) {
  return (
    <h2
      id={id}
      className={`${caveat.className} ${className} text-5xl font-bold text-center my-8 `}
    >
      {title}
    </h2>
  )
}
