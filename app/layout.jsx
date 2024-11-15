import '@fortawesome/fontawesome-svg-core/styles.css'
import { Open_Sans } from 'next/font/google'
import { redirect } from 'next/navigation'
import { SiteInfo } from './data'
import './globals.css'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: SiteInfo.title,
  description: SiteInfo.description,
  icons: {
    icon: '/icon.ico',
  },
}

export default function RootLayout({ children }) {
  redirect('https://afesh-ryad.vercel.app/')
}
