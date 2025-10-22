import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PointsHUD from '../components/PointsHUD'
import ChatWidget from '../components/ChatWidget'
import WhatsAppFloating from '../components/WhatsAppFloating'
import AdsManager from '../components/AdsManager'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Muscle Levels - Sua Transformação Fitness',
  description: 'Plataforma completa para transformação física com profissionais qualificados, produtos premium e avaliação personalizada.',
  keywords: 'fitness, musculação, suplementos, personal trainer, academia, avaliação física',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"
        />
      </head>
      <body className={`${inter.className} antialiased min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        
        {/* Floating Components */}
        <PointsHUD />
        <ChatWidget />
        <WhatsAppFloating />
        <AdsManager />
      </body>
    </html>
  )
}