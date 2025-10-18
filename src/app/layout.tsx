import type { Metadata } from 'next'
import { Cormorant_Infant } from 'next/font/google'
import './globals.css'
import { Providers } from '@/shared/components/providers'
import { Header, Footer, ScrollButton } from '@/widgets'
import { ScrollSmootherProvider } from '@/shared/components/providers/scroll-smoother'
import { Container, Curtain } from '@/shared/components'
import { SingularityShaders } from '@/shared/ui'
const caveat = Cormorant_Infant({
  subsets: ['latin'],
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'Damaroo Dota Academy',
  description: 'Damaroo Dota Academy: Coaching and training Dota 2 players',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <link rel="icon/jpg" href="icon.jpg" />
      </head>
      <body className={`${caveat.className} antialiased relative min-h-screen scrollbar`}>
        <Providers>
          <Header />
          <ScrollSmootherProvider>
            <SingularityShaders
              speed={0.7}
              intensity={1}
              size={1.3}
              waveStrength={0.5}
              colorShift={2}
              className="absolute inset-0 -z-10"
            />
            <main className="flex-1 pt-20">
              <Container className="flex flex-col">{children}</Container>
            </main>
            <Footer />
          </ScrollSmootherProvider>
        </Providers>
        <ScrollButton />
        <Curtain />
      </body>
    </html>
  )
}
