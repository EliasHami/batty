"use client"
import './globals.css'
import { Nav, Alert } from 'src/components'
import CssBaseline from '@mui/material/CssBaseline'
import "@aws-amplify/ui-react/styles.css"
import awsExports from "src/aws-exports"
import { Amplify, Auth } from 'aws-amplify'
import { Authenticator } from '@aws-amplify/ui-react'
import { Button } from '@mui/material'

// configure Amplify for the client
Amplify.configure(awsExports)
Auth.configure(awsExports)

export default function App({ children }: { children: React.ReactNode }) {
  return (
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
      <Alert />
    </div>
  )
}
