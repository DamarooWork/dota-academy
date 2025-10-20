'use client'
import { Caveat } from 'next/font/google'
import { ThemeSelector } from '@/widgets'
import { cn } from '@/shared/lib/utils'
import { Container } from '@/shared/components'
import Link from 'next/link'
import { Navigation } from '@/widgets/header/ui'
import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useWindowSize } from 'react-use'
import gsap from 'gsap'
const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400'],
})
interface Props {
  className?: string
}
export function Header({ className }: Props) {
  const [isClient, setIsClient] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { width } = useWindowSize()
  const handleCloseMenu = () => {
    gsap.to(menuRef.current, {
      opacity: 0,
      duration: 0.75,
      ease: 'ease-in-out',
      onComplete: () => {
        setIsMenuOpen(false)
      },
    })
  }
  if (!isClient) {
    return null
  }
  return (
    <header
      className={cn(
        className,
        'fixed inset-x-0 top-0 z-50 flex items-center justify-between h-20 bg-background/85 max-w-screen w-full'
      )}
    >
      <Container className="flex items-center justify-between h-full text-2xl font-bold">
        <Link
          href={'/'}
          className={`${caveat.className}  lg:text-3xl md:mr-16 text-center motion-preset-focus motion-delay-2100`}
        >
          Damaroo Dota Academy
        </Link>
        {width > 768 ? (
          <>
            <Navigation className="flex-1 motion-preset-focus motion-delay-2100  mr-4" />
            <ThemeSelector className="motion-preset-focus motion-delay-2100" />
          </>
        ) : (
          <>
            <Menu
              onClick={() => setIsMenuOpen(true)}
              className="min-w-8 min-h-8 cursor-pointer hover:scale-110 active:scale-105 transition-all duration-300 will-change-transform motion-preset-focus motion-delay-2100"
            />
            {isMenuOpen && (
              <>
                <div
                  ref={menuRef}
                  onClick={handleCloseMenu}
                  className="w-full flex flex-col justify-center items-center gap-8 min-h-screen absolute top-0 left-0 z-10 bg-background/50 backdrop-blur-sm motion-preset-focus cursor-pointer lvh"
                >
                  <X className="size-12  absolute top-4 right-2" />
                  <Navigation className="flex-col text-6xl" />
                  <ThemeSelector className="size-16" />
                </div>
              </>
            )}
          </>
        )}
      </Container>
    </header>
  )
}
