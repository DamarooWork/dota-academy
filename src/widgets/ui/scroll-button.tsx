'use client'
import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'
import { Button } from '@/shared/ui'
import { Container } from '@/shared/components'

export function ScrollButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollTop = window.pageYOffset
      setIsVisible(scrollTop > 100)
    }
    window.addEventListener('scroll', toggleVisibility)
    toggleVisibility()
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!isVisible) {
    return null
  }

  return (
    <Container>
      <Button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 size-12 rounded-full shadow-xs hover:shadow-sm shadow-foreground border-border transition-all duration-300 hover:scale-110 active:scale-95 will-change-transform"
        aria-label="Scroll to top of page"
      >
        <ChevronUp className="size-6" />
      </Button>
    </Container>
  )
}
