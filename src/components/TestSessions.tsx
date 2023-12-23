'use client'

import { signOut, useSession } from 'next-auth/react'
import React from 'react'

const TestSessions = () => {
  const session = useSession()
  return (
    <div>
      TestSessions
      <button onClick={() => signOut()}>sign out</button>
      <p>{JSON.stringify(session)}</p>
    </div>
  )
}

export default TestSessions
