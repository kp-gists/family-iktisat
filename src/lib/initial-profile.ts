import { useSession } from 'next-auth/react'
import React from 'react'
import { redirect } from 'next/navigation'
import Stripe from 'stripe'
import { updateStripeCustomerId } from '@/services/axios'

const InitialProfile = async () => {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return {
      profile: null,
      status
    }
  } else if (status === 'authenticated') {
    console.log({ session })
    // initialize STRIPE
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2023-10-16'
    })
    /**
     *  1 - fetch user form strapi
     *  2- add user to stripe customer
     *  2 - create user profile and user stripe account
     */
    // TODO fix types with graphql generated types
    const strapiUser: any = null

    if (strapiUser) {
      // session.user.strapiUserId = iktisatUser.user.id
      if (!strapiUser.user.stripe_customer_id) {
        console.log('stripe customer')
        const strapiCustomer = await stripe.customers.create({
          email: strapiUser.user.email,
          name: strapiUser.user.full_name
        })
        if (strapiCustomer) {
          // update user with strapi customer id
          const updatedUser = await updateStripeCustomerId(
            strapiCustomer.id,
            session.accessToken as string
          )
          console.log(
            '🚀 ~ file: options.ts:67 ~ jwt ~ updatedUser:',
            updatedUser
          )
        }
      }
    }
    return {
      profile: {
        email: session.user?.email,
        name: session.user?.name
      }
    }
  } else {
    return redirect('/auth/signin')
  }
}

export default InitialProfile
