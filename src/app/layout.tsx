import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/user-nav'
import GlobalFooter from '@/components/footer'
import AuthProvider from './context/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NextAuth User Dashboard',
  description: 'Dashboard for Companies, Users, Schedules',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          
          <Navbar />
          <main className="flex justify-center items-start p-6 min-h-screen">
            {children}
          </main>
          <GlobalFooter />
        </AuthProvider>
      </body>
    </html>
  )
}
