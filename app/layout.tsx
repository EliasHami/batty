import awsExports from "src/aws-exports"
import { Amplify } from 'aws-amplify'
import { Nav, Alert, ContextProvider } from 'src/components'

// configure Amplify for the server
Amplify.configure({ ...awsExports, ssr: true })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="app-container bg-light">
          <Nav />
          <ContextProvider>
            {children}
          </ContextProvider>
          <Alert />
        </div>
      </body>
    </html>
  )
}
