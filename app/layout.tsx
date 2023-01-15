import './globals.css'
import { Nav, Alert } from 'components'
import CssBaseline from '@mui/material/CssBaseline'

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <div className="app-container bg-light">
          <CssBaseline />
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
