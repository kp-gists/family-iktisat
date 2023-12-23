// This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// The config you add here will be used whenever one of the edge features is loaded.
// Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
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
