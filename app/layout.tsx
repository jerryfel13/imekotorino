import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: '2025 IMEKO Joint Conference - Metro Manila, Philippines',
  description: 'IMEKO Joint Conference 2025: TC8 - Traceability in Metrology, TC11 - Measurement in Testing, Inspection and Certification, TC24 - Chemical Measurements. September 14-17, 2025, Metro Manila, Philippines.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navigation />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

