import '@/app/globals.css'
import { Locale, i18n } from '@/i18n-config'
import type { Metadata } from 'next'

import Header from '@/components/Header'
import { Inter } from 'next/font/google'
import NextAuthProvider from '@/services/providers/SessionProvider'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Family Economy',
  description:
    'A simple app for Self Economy, Family Economy keeping track of daily, monthly and yearly expenses,savings and debts '
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function LandingLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <>
      <main className={inter.className}>
        <Header lang={params.lang} />
        <div>{children}</div>
      </main>
    </>
  )
}
