import '@/app/globals.css'
import CustomLayouts from '@/components/Layouts/CustomLayouts'
import { i18n } from '@/i18n-config'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard Family Economy',
  description:
    'A simple app for Self Economy, Family Economy keeping track of daily, monthly and yearly expenses,savings and debts '
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <CustomLayouts>{children}</CustomLayouts>
}
