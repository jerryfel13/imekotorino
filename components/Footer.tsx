import Link from 'next/link'
import Image from 'next/image'
import { Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <Image
                src="/logo_imekoto25.png"
                alt="IMEKO Joint Conference Logo"
                width={250}
                height={100}
                className="h-auto w-full max-w-xs object-contain"
              />
            </div>
            <h3 className="text-xl font-bold mb-4">2025 IMEKO Joint Conference</h3>
            <p className="text-gray-400 text-sm">
              TC8 - Traceability in Metrology<br />
              TC11 - Measurement in Testing, Inspection and Certification<br />
              TC24 - Chemical Measurements
            </p>
            <p className="text-gray-400 text-sm mt-2">
              METRO MANILA, PHILIPPINES / SEPTEMBER 14-17, 2025
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about/organizing-committee" className="text-gray-400 hover:text-white transition-colors">
                  Organizing Committee
                </Link>
              </li>
              <li>
                <Link href="/about/venue" className="text-gray-400 hover:text-white transition-colors">
                  Venue
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="text-gray-400 hover:text-white transition-colors">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="flex items-center text-gray-400 text-sm">
              <Mail className="mr-2 h-5 w-5" />
              <a href="mailto:info@imekotorino2025.org" className="hover:text-white transition-colors">
                info@imekotorino2025.org
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Metro Manila, Philippines<br />
              September 14-17, 2025
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© Copyright 2025. All Rights Reserved.</p>
          <p className="mt-2">2025 IMEKO Joint Conference - Metro Manila, Philippines</p>
        </div>
      </div>
    </footer>
  )
}

