'use client'
import InitialProfile from '@/lib/initial-profile'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React, { useState } from 'react'

const OnBoarding = () => {
  const [step, setStep] = useState<number>(1)

  const { data: session, status } = useSession()
  console.log('🚀 ~ file: page.tsx:11 ~ OnBoarding ~ session:', session?.user)

  return (
    <div>
      <h1>Welcome to Family Iktisat</h1>
      <p>
        We are very happy to have you on board, finish this quick steps for your
        profile
      </p>

      {/* temp leading to dashboard */}
      <Link href='/dashboard'>Dashboard</Link>
    </div>
  )
}

export default OnBoarding
