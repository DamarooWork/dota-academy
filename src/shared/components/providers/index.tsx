'use client'
import { ThemeProvider } from './theme-provider'
import { Toaster } from '@/shared/ui'
import NextTopLoader from 'nextjs-toploader'
import { ScrollSmootherProvider } from './scroll-smoother'
interface Props {
  children: React.ReactNode
}
export function Providers({ children }: Props) {
  return (
    <ThemeProvider>
        <NextTopLoader
          color={'oklch(58.5% 0.233 277.117)'}
          showSpinner={false}
        />
        <Toaster richColors />
        {children}
    </ThemeProvider>
  )
}
