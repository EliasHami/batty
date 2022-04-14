import Head from 'next/head'

import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { Nav } from 'components'

function Batty({ Component, pageProps }: AppProps) {
  return (
  <>
    <Head>
      <title>Batty</title>
       {/* bootstrap css */}
    </Head>
    <div className="app-container bg-light">
      <Nav />
      {/* <Alert /> */}
      <div className='container pt-4 bp-4'>
        <Component {...pageProps} />
      </div>
    </div> 
  </>)
}

export default Batty
