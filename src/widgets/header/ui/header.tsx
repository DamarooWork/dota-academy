import { Caveat } from 'next/font/google'
import { ThemeSelector } from '@/widgets'
import { cn } from '@/shared/lib/utils'
import { Container } from '@/shared/components'
import Link from 'next/link'
import { Navigation } from '@/widgets/header/ui'
const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400'],
})
interface Props {
  className?: string
}
export function Header({ className }: Props) {
  return (
    <header
      className={cn(
        className,
        'sticky inset-x-0 top-0 z-50 flex items-center justify-between h-20 bg-background/85'
      )}
    >
      <Container className="flex items-center justify-between h-full text-2xl font-bold">
        <Link
          href={'/'}
          className={`${caveat.className} text-3xl mr-16 text-center motion-preset-focus motion-delay-2100`}
        >
          Damaroo Dota Academy
        </Link>
        <Navigation />
        <ThemeSelector />
      </Container>
    </header>
  )
}
