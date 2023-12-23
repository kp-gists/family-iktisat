// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs'
if (process.env.NODE_ENV !== 'production') {
  console.log('process.env.NODE_ENV', process.env.NODE_ENV)
} else {
  Sentry.init({
    dsn: 'https://207db0fbe4bfd24e5bf1a5a4611a70d2@o4506087151828992.ingest.sentry.io/4506444870778880',

    // Adjust this value in production, or use tracesSampler for greater control
    tracesSampleRate: 1,

    // Setting this option to true will print useful information to the console while you're setting up Sentry.
    debug: false
  })
}
