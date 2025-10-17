'use client'
import { ThemeProvider } from './theme-provider'
import { Toaster } from '@/shared/ui'
import NextTopLoader from 'nextjs-toploader'
interface Props {
  children: React.ReactNode
}
export function Providers({ children }: Props) {
  return (
    <ThemeProvider>
        <NextTopLoader
          color={'oklch(0.541 0.281 293.009)'}
          showSpinner={false}
        />
        <Toaster richColors />
        {children}
    </ThemeProvider>
  )
}
