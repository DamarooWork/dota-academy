'use client'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/shared/ui'
import { cn } from '@/shared/lib/utils'
interface ThemeSelectorProps {
  className?: string
}
export function ThemeSelector({ className }: ThemeSelectorProps) {
  const { setTheme, theme } = useTheme()

  function handleClick() {
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  }
  return (
    <Button
      className={cn('size-12 rounded-xl', className)}
      onClick={handleClick}
      variant="outline"
      size="icon"
    >
      <Sun className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 delay-200" />
      <Moon className="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
