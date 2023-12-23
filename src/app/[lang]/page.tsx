import { getDictionary } from '@/lib/dictionary'
import { Locale } from '@/i18n-config'

type HomeProps = {
  params: { lang: Locale }
}

export default async function Home({ params: { lang } }: HomeProps) {
  const { page } = await getDictionary(lang)

  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <h1 className='bold text-3xl'>{page.home.title}</h1>
    </main>
  )
}
