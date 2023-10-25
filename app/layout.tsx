import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../components/Navbar'



export const metadata: Metadata = {
  title: 'Basement Supply',
  description: 'basement is a boutique studio that brings what brands envision to life, through branding, visual design & development of the highest quality.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
