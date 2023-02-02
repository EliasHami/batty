"use client"
import "@aws-amplify/ui-react/styles.css"
import { Amplify, Auth } from 'aws-amplify'
import { Authenticator } from '@aws-amplify/ui-react'
import { Button, CssBaseline } from '@mui/material'

import awsExports from "src/aws-exports"

// only third party context providers and css resets that need "use client" should be in this file
// see : https://beta.nextjs.org/docs/rendering/server-and-client-components#rendering-third-party-context-providers-in-server-components

// configure Amplify for the client
Amplify.configure(awsExports)
Auth.configure(awsExports)

export default function ContextProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CssBaseline />
      <Authenticator>
        <Button onClick={() => Auth.signOut()} >
          Sign out
        </Button>
        <div className='container pt-4 bp-4'>
          {children}
        </div>
      </Authenticator>
    </>
  )
}
