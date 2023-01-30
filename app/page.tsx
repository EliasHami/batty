"use client"
import { Link } from 'components'
import awsExports from "src/aws-exports"
import { Amplify, Auth } from 'aws-amplify'
import { Authenticator } from '@aws-amplify/ui-react'

Amplify.configure(awsExports)
Auth.configure(awsExports)

export default function Home() {
  return (
    <Authenticator>
      <div>
        <h1>Batty - An app to manage construction projects</h1>
        <p><Link href="/constructions">&gt;&gt; Constructions</Link></p>
      </div>
    </Authenticator>
  )
}