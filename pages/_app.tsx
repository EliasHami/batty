import Head from 'next/head'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Nav } from '../components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <Head>
      <title>Batty</title>
       {/* bootstrap css */}
    </Head>
    <div className="app-container bg-light">
      <Nav />
      {/* <Alert /> */}
      <Component {...pageProps} />
    </div> 
  </>)
}

export default MyApp
