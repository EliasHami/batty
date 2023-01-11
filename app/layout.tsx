import './globals.css'
import { Nav, Alert } from 'components'

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <div className="app-container bg-light">
          <Nav />
          <Alert />
          <div className='container pt-4 bp-4'>
            {children}
          </div>
        </div> 
      </body>
    </html>
  )
}
