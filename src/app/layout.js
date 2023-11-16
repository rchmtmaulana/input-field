import { Inter } from 'next/font/google'
import '@style/global.css'
import Navbar from '@components/navbar/navbar.js'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Input Field Rachmat Maulana',
  description: 'Tugas Pekan 12 Pemrograman Web',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
