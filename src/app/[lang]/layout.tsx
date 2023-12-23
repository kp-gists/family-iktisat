import '@/app/globals.css'
import { Locale, i18n } from '@/i18n-config'
import type { Metadata } from 'next'

import Header from '@/components/Header'
import { Inter } from 'next/font/google'
import NextAuthProvider from '@/services/providers/SessionProvider'
import Providers from '@/services/providers/providers'
import { useSession } from 'next-auth/react'
import HomeNavbar from '@/components/Navbars/HomeNavbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Family Economy',
  description:
    'A simple app for Self Economy, Family Economy keeping track of daily, monthly and yearly expenses,savings and debts '
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <html lang={params.lang} suppressHydrationWarning={true}>
      <body className={inter.className}>
        <Providers>
          <NextAuthProvider>
            <main>
              <HomeNavbar />
              {children}
            </main>
          </NextAuthProvider>
        </Providers>
      </body>
    </html>
  )
}
