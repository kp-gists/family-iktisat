import { DefaultUser } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user?: DefaultUser & {
      id: string
      stripeCustomerId: string
      isActive: boolean
      profileId?: string | number
      strapiUserId: string | number
    }
  }
  interface User extends DefaultUser {
    stripeCustomerId: string
    isActive: boolean
  }
}

export type AppCode =
  | 'cwk'
  | 'aroma-landing'
  | 'point-food'
  | 'endry-2008'
  | 'natural-stones'
  | 'fi'

export type AppConfig = {
  appCode: AppCode
  graphqlCmsUrl: string
}
