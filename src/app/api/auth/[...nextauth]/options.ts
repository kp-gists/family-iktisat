import { authWithToken } from '@/services/axios'
import type { NextAuthOptions, Session } from 'next-auth'

import GoogleProvider from 'next-auth/providers/google'

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code'
        }
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt'
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    maxAge: 60 * 60 * 24 * 30
  },
  debug: false,
  pages: {
    signIn: '/auth/signin'
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true
    },
    async jwt({ token, account, profile, session, user }) {
      if (account) {
        token.accessToken = account.id_token
        console.log('called jwt', { user })

        // save to Strapi-CMS
        const iktisatUser = await authWithToken(account.id_token as string)
      }
      return Promise.resolve(token)
    },
    async session({ session, user, token }) {
      session!.accessToken = token?.accessToken
      const iktisatUser = await authWithToken(token?.accessToken as string)

      session!.user!.strapiUserId = iktisatUser.user.id
      session!.user!.profileId = iktisatUser.profileId
      return Promise.resolve(session)
    }
  }
}
