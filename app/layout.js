import './globals.css'
import { Playfair, Nanum_Gothic } from 'next/font/google'

const playfair = Playfair({ subsets: ['latin'] })

export const metadata = {
  title: 'HSSC',
  description: 'The HSSC Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={playfair.className}>{children}</body>
    </html>
  )
}
