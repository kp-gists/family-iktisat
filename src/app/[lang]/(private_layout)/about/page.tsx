import { Locale } from '@/i18n-config'
import { getDictionary } from '@/lib/dictionary'

export default async function about({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)

  return (
    <div className='py-24'>
      <h1 className='text-3xl font-bold'>{page.about.title}</h1>
    </div>
  )
}
