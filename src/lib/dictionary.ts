import 'server-only'
import type { Locale } from '../i18n-config'

const dictionaries = {
  al: () => import('@/dictionaries/al.json').then(module => module.default),
  ar: () => import('@/dictionaries/ar.json').then(module => module.default),
  en: () => import('@/dictionaries/en.json').then(module => module.default),
  it: () => import('@/dictionaries/it.json').then(module => module.default)
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
