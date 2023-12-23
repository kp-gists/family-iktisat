import { options } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'
// @ts-ignore
import { redirect } from 'next/navigation'
import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default async function GuestLayout({ children }: Props) {
  const session = await getServerSession(options)

  if (session) redirect('/dashboard')

  return <>{children}</>
}
