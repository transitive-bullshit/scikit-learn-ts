/* eslint-disable @typescript-eslint/naming-convention */
import { Analytics } from '@vercel/analytics/react'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />

      <Analytics />
    </>
  )
}
