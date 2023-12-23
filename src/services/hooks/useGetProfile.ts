import { useGetUserProfile } from '../generated/graphql'
import { GraphQLClient } from 'graphql-request'
import appConfig from '@/utils/config'

const { graphqlCmsUrl } = appConfig

const useGetProfile = (email: string) => {
  const graphQLClient = new GraphQLClient(graphqlCmsUrl || '')
  return useGetUserProfile(
    graphQLClient,
    { email: email },
    {
      queryKey: ['user-profile']
    }
  )
}

export default useGetProfile
