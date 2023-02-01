import awsExports from "src/aws-exports"
import { Amplify, Auth } from 'aws-amplify'
import App from './App'

// configure Amplify for the server
Amplify.configure({ ...awsExports, ssr: true })
// Auth.configure(awsExports) // TODO should i configure Auth for the server?

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <App>
          {children}
        </App>
      </body>
    </html>
  )
}
