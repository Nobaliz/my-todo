import { createRoot } from 'react-dom/client'
import * as Sentry from '@sentry/react'
import App from './App.tsx'
import { initSentry } from './sentry'

// Initialize Sentry before rendering the app
initSentry()

const SentryApp = Sentry.withProfiler(App)

createRoot(document.getElementById('root')!).render(
  <SentryApp />
)
