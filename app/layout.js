import Navigation from './components/Navigation'
import './globals.css'
import { Space_Grotesk as spaceGrotesk } from 'next/font/google'

const inter = spaceGrotesk({
  weight: ['400', '700'],
  subsets: ['latin']
})

export const metadata = {
  title: 'App Next App',
  description: 'Generated by create next app'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
