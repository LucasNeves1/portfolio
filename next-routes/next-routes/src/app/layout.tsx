import Menu from '@/components/Menu'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfólio Lucas Neves',
  description: 'Portfólio com projetos e experiência de Lucas Neves. Feito com Nextjs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <main className='p-5'>
          <Menu />
          {children}
        </main>
      </body>
    </html>
  )
}
