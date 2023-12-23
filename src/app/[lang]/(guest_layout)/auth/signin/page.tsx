import Test from '@/components/Test'
import { Locale } from '@/i18n-config'
import { getDictionary } from '@/lib/dictionary'

export default async function Login({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)

  return (
    <div className='py-24'>
      <h1 className='text-3xl font-bold'>Login</h1>
      <h1>stripe users</h1>
      <Test />
    </div>
  )
}
