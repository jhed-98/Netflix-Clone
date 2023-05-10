import './globals.css'

import AuthContext from './context/AuthContext'
// import ActiveStatus from './components/ActiveStatus'
import ToasterContext from './context/ToasterContext'

import { Inter } from 'next/font/google'
import getCurrentUser from './actions/getCurrentUser'
import Navbar from './components/navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Wolflix App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <ToasterContext />
          {/* <ActiveStatus /> */}
          {children}
        </AuthContext>
      </body>
    </html>
  )
}
