'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MapPin, BookOpen, ChevronUp } from 'lucide-react'
import ScrollAnimation from '@/components/ScrollAnimation'

export default function TorinoSection() {
  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Scroll to top arrow */}
        <div className="flex justify-center mb-6">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-gray-400 hover:text-primary-600 transition-colors"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-5 w-5" />
          </button>
        </div>

        {/* Header */}
        <ScrollAnimation animationIn="fade-in-up" delay={0}>
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
              METRO MANILA, PHILIPPINES
            </h2>
            <div className="w-40 h-0.5 bg-primary-600"></div>
          </div>
        </ScrollAnimation>

        {/* Main Content: Video and Text */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Left: Video Players */}
          <div className="space-y-8">
            <ScrollAnimation animationIn="fade-in-up" delay={100}>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl border-2 border-gray-200">
                <iframe
                  src="https://www.youtube.com/embed/-76dmlwj_fQ"
                  title="IMEKO Joint Conference"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </ScrollAnimation>
            
            {/* Second Video */}
            <ScrollAnimation animationIn="fade-in-up" delay={150}>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl border-2 border-gray-200">
                <iframe
                  src="https://www.youtube.com/embed/SpQpWCcNIlg"
                  title="Metro Manila, Philippines"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </ScrollAnimation>
          </div>

          {/* Right: Text Description and Buttons */}
          <ScrollAnimation animationIn="fade-in-up" delay={200}>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary-600 mb-5">
                  DISCOVER METRO MANILA
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg">
                  <p>
                    Metro Manila, the bustling capital region of the Philippines, is a dynamic metropolis that seamlessly blends 
                    centuries-old heritage with modern innovation, creating a vibrant urban landscape that honors its storied past 
                    while embracing a promising future.
                  </p>
                  <p>
                    Comprising 16 cities and one municipality, Metro Manila serves as the nation's political, economic, and cultural 
                    heart. From the historic Intramuros, the walled city that tells the story of Spanish colonial times, to the 
                    gleaming skyscrapers of Makati and BGC, this megacity showcases the Philippines' remarkable transformation 
                    into a thriving center of commerce and technology in Southeast Asia.
                  </p>
                  <p>
                    Rich in culture and tradition, Metro Manila captivates visitors with its world-class museums, colonial-era 
                    architecture, vibrant festivals, diverse culinary scene featuring both local delicacies and international cuisine, 
                    and warm Filipino hospitality that makes every experience memorable and welcoming.
                  </p>
                </div>
              </div>

             
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link
                  href="#"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-primary-600 bg-white text-primary-600 font-bold text-base rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <BookOpen className="h-5 w-5" />
                  <span>MANILA</span>
                </Link>
                <Link
                  href="/about/venue"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-primary-600 bg-white text-primary-600 font-bold text-base rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <MapPin className="h-5 w-5" />
                  <span>CONFERENCE VENUE</span>
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Image Gallery */}
        <ScrollAnimation animationIn="fade-in-up" delay={300}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-white shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Image
                src="/intramurosfullview.jpg"
                alt="Metro Manila - Intramuros Aerial View"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-white shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Image
                src="/nationalmuseum.jpg"
                alt="Metro Manila - National Museum of Natural History"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-white shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Image
                src="/rizal_statue.jpg"
                alt="Metro Manila - Rizal Monument"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-white shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Image
                src="/intramuros-2.jpg"
                alt="Metro Manila - Intramuros Gate"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}





