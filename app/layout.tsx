"use client"
import './globals.css'
import { Nav, Alert } from 'components'
import CssBaseline from '@mui/material/CssBaseline'
import "@aws-amplify/ui-react/styles.css"
import awsExports from "src/aws-exports"
import { Amplify, Auth } from 'aws-amplify'
import { Authenticator } from '@aws-amplify/ui-react'
import { Button } from '@mui/material'

Amplify.configure(awsExports)
Auth.configure(awsExports)

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="app-container bg-light">
          <CssBaseline />
          <Nav />
          <Authenticator>
            <Button onClick={() => Auth.signOut()} >
              Sign out
            </Button>
            <div className='container pt-4 bp-4'>
              {children}
            </div>
          </Authenticator>
        </div>
        <Alert />
      </body>
    </html>
  )
}
