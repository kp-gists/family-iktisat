'use client'
import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import request from 'graphql-request'
import {
  GetUserProfileDocument,
  GetUserProfileQuery
} from '@/services/generated/graphql'
// @ts-ignore
import { redirect } from 'next/navigation'
import appConfig from '@/utils/config'

type Props = {
  email: string
}

const { graphqlCmsUrl } = appConfig
const Welcome = ({ email }: Props) => {
  const { data, isFetched } = useQuery<GetUserProfileQuery>({
    queryKey: ['profile'],
    queryFn: async () =>
      request(graphqlCmsUrl, GetUserProfileDocument, {
        email
      })
  })

  //! Hydration Error on mount: resolve hydration error
  const [isMount, setIsMount] = useState(false)

  useEffect(() => {
    setIsMount(true)
  }, [])

  if (isFetched) {
    const isOnBoarded =
      data?.iktisatUsers?.data[0].attributes?.iktisat_profile?.data?.attributes
        ?.isOnBoarded
    if (!isOnBoarded) {
      return redirect('/onboarding')
    }
  }

  console.log('🚀 ~ file: welcome.tsx:12 ~ Welcome ~ data:', data)

  if (!isMount) return null
  return <div>Welcome</div>
}

export default Welcome
