import NextAuth from 'next-auth'
import { options } from './options'

const handler = NextAuth(options)

export { handler as GET, handler as POST }

declare module 'next-auth' {
  interface Session {
    error?: 'RefreshAccessTokenError'
    accessToken?: string | unknown
  }
}

// declare module '@auth/core/jwt' {
//   interface JWT {
//     access_token?: string;
//     expires_at: number;
//     refresh_token: string;
//     error?: 'RefreshAccessTokenError';
//   }
// }
