import { Plus_Jakarta_Sans } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'

const PJS = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Java2Ind',
  description: 'Java2Ind Translation',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=  {PJS.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
