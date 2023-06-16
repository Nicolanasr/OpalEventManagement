import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
    return <>
        <Head>
            <title>Event Planning Services | Opal Event Management</title>
            <link rel="shortcut icon" href="/opal-logo-round.jpg" type="image/x-icon" />

            <meta name="description" content="Plan your dream event with ease. Our expert event planners will handle every detail, from start to finish, creating unforgettable experiences. Stress-free, personalized, and flawless event coordination awaits. Contact us today!" />
            <meta name="keywords" content="event planning, event management, wedding planner, corporate events, special occasions, professional event coordination" />

            <meta property="og:title" content="Event Planning Services | Opal Event Management" />
            <meta property="og:description" content="Plan your dream event with ease. Our expert event planners will handle every detail, from start to finish, creating unforgettable experiences. Stress-free, personalized, and flawless event coordination awaits. Contact us today!" />
            <meta property="og:image" content="/opal-logo.jpg" />
            <meta property="og:url" content="https://opaleventmanagement.com" />

            <meta name="twitter:title" content="Event Planning Services | Opal Event Management" />
            <meta name="twitter:description" content="Plan your dream event with ease. Our expert event planners will handle every detail, from start to finish, creating unforgettable experiences. Stress-free, personalized, and flawless event coordination awaits. Contact us today!" />
            <meta name="twitter:image" content="/opal-logo.jpg" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="https://opaleventmanagement.com" />

            <meta property="pinterest:title" content="Event Planning Services | Opal Event Management" />
            <meta property="pinterest:description" content="Plan your dream event with ease. Our expert event planners will handle every detail, from start to finish, creating unforgettable experiences. Stress-free, personalized, and flawless event coordination awaits. Contact us today!" />
            <meta property="pinterest:image" content="/opal-logo.jpg" />
        </Head>
        <div className={roboto.className} >
            <Component {...pageProps} />
        </div >
    </>
}
