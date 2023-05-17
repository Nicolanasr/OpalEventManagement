import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Opal Event Management - Coming Soon</title>
      <link rel="shortcut icon" href="/opal-logo-round.jpg" type="image/x-icon" />
    </Head>
    <div>
      <Component {...pageProps} />
    </div>
  </>
}
