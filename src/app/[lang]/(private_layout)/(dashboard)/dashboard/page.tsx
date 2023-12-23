import Welcome from '@/components/dashboard/welcome'
import { Locale } from '@/i18n-config'
import { getDictionary } from '@/lib/dictionary'
import { getServerSession } from 'next-auth'

export default async function Dashboard({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)
  const serverSession = await getServerSession()

  return (
    <div className='py-24'>
      <h1 className='text-3xl font-bold'>dashboard</h1>
      {/* <Test /> */}
      <Welcome email={serverSession?.user?.email as string} />
    </div>
  )
}
