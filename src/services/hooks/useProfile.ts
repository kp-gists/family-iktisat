import { useSession } from 'next-auth/react'
import React from 'react'

const useProfile = () => {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return {
      profile: null,
      status
    }
  } else if (status === 'authenticated') {
    console.log({ session })
    const email = session.user?.email
    return {
      profile: {
        email,
        name: session.user?.name
      }
    }
  }
}

export default useProfile
