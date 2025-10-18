'use client'
import { ThemeProvider } from './theme-provider'
import { Toaster } from '@/shared/ui'
import NextTopLoader from 'nextjs-toploader'
import ObserverProvider from './observer-provider'
interface Props {
  children: React.ReactNode
}
export function Providers({ children }: Props) {
  return (
    <ObserverProvider>
      <ThemeProvider>
        <NextTopLoader
          color={'oklch(0.541 0.281 293.009)'}
          showSpinner={false}
        />
        <Toaster richColors />
        {children}
      </ThemeProvider>
    </ObserverProvider>
  )
}
