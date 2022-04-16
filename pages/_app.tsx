import Head from 'next/head'

import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { Nav } from 'components'
import { NextPage } from 'next'

const BattyApp:NextPage<AppProps> = ({ Component, pageProps }) => {
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

export default BattyApp
