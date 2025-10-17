import type { Metadata } from 'next'
import { Caveat } from 'next/font/google'
import './globals.css'
import { Providers } from '@/shared/components/providers'
import { Header, Footer } from '@/widgets'
import { ScrollSmootherProvider } from '@/shared/components/providers/scroll-smoother'
import { Container } from '@/shared/components'
import { SingularityShaders } from '@/shared/ui'
const caveat = Caveat({
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon/jpg" href="icon.jpg" />
      </head>
      <body
        className={`${caveat.className} antialiased flex flex-col min-h-screen relative `}
      >
        <Providers>
          <Header />
          <ScrollSmootherProvider>
            <SingularityShaders
              speed={0.7}
              intensity={1.0}
              size={1.0}
              waveStrength={0.5}
              colorShift={1}
              className="absolute top-0 left-0 right-0 bottom-0 w-full h-full -z-10"
            />
            <main className="flex-1 min-h-screen pt-20">
              <Container className="flex flex-col">{children}</Container>
            </main>
            <Footer />
          </ScrollSmootherProvider>
        </Providers>
      </body>
    </html>
  )
}
