'use client'

import Image from 'next/image'
import { Button } from 'antd'
import { getDictionary } from '@/lib/dictionary'
import { Locale } from '@/i18n-config'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useCallback } from 'react'
import { FcGoogle } from 'react-icons/fc'
import useProfile from '@/services/hooks/useProfile'

type Props = {}

const Test = (props: Props) => {
  const { data: session, status, update } = useSession()
  console.log('🚀 ~ file: Test.tsx:15 ~ Test ~ session:', session)

  const getLabel = useCallback(() => {
    if (status === 'authenticated') {
      return (
        <div>
          Hey 👋 <strong>{session?.user?.name}</strong> <br />
          <button onClick={() => signOut()}>sign out</button>
        </div>
      )
    } else {
      return (
        <div className=''>
          Try sign in with google
          <br className='flex sm:hidden' />
        </div>
      )
    }
  }, [session, status])

  const profile = useProfile()
  console.log('🚀 ~ file: Test.tsx:37 ~ Test ~ profile:', profile)
  return (
    <div>
      Test
      {getLabel()}
      <div className='mb-8'>
        <label
          htmlFor='signInput'
          className='mb-4 block hover:cursor-pointer'
        ></label>
        {status === 'unauthenticated' ? (
          <Button
            onClick={() => signIn('google')}
            icon={<FcGoogle />}
            className='flex items-center text-lg text-gray-900 dark:text-gray-100'
          >
            login with Google
          </Button>
        ) : (
          <div>logged in</div>
        )}
      </div>
      <div>
        <h1>{JSON.stringify(profile)}</h1>
      </div>
    </div>
  )
}

export default Test
