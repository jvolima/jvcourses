import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { GlobalStyle } from '../styles/global'

function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <GlobalStyle />
    </SessionProvider>
  )
}

export default MyApp
