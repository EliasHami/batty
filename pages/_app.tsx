import Head from 'next/head'

import 'src/globals.css'
import type { AppProps } from 'next/app'
import { Nav, Alert } from 'src/components'
import { NextPage } from 'next'
import { Amplify, Auth } from 'aws-amplify'
import { Authenticator } from '@aws-amplify/ui-react'
import { Button, CssBaseline } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import awsExports from "src/aws-exports"

Amplify.configure(awsExports)
Auth.configure(awsExports)

const BattyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Batty</title>
      </Head>
      <div className="app-container bg-light">
        <Nav />
        <Alert />
        <CssBaseline />
        <Authenticator>
          <Button onClick={() => Auth.signOut()} >
            Sign out
          </Button>
          <div className='container pt-4 bp-4'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Component {...pageProps} />
            </LocalizationProvider>
          </div>
        </Authenticator>
      </div>
    </>)
}

export default BattyApp