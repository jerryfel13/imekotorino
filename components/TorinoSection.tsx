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
              TORINO, ITALY
            </h2>
            <div className="w-40 h-0.5 bg-primary-600"></div>
          </div>
        </ScrollAnimation>

        {/* Main Content: Video and Text */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Left: Video Player */}
          <ScrollAnimation animationIn="fade-in-up" delay={100}>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl border-2 border-gray-200">
              <iframe
                src="https://www.youtube.com/embed/5KIl4bpaDBM"
                title="Turin in 4K"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </ScrollAnimation>

          {/* Right: Text Description and Buttons */}
          <ScrollAnimation animationIn="fade-in-up" delay={200}>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary-600 mb-5">
                  DISCOVER TORINO
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg">
                  <p>
                    Piedmont's capital, Torino is a city with a unique charm, an important history that has left its mark 
                    on this metropolis that speaks of the past, whilst constantly looking to the future.
                  </p>
                  <p>
                    At the foot of the Alps, Turin was once the capital of the House of Savoy and birthplace of the Italian resurgence. 
                    Today, it is an innovation hub of Italian industry, rich in art and culture.
                  </p>
                  <p>
                    Dynamic and baroque, Turin wows with its renowned Egyptian museum, architectural and monumental wonders, 
                    art galleries, international events and delicious traditional food.
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
                  <span>TORINO</span>
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
                src="/torinoslide_1.jpg"
                alt="Torino - River and Bridge"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-white shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Image
                src="/torinoslide_2.jpg"
                alt="Torino - Mole Antonelliana"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-white shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Image
                src="/torinoslide_3.jpg"
                alt="Torino - Piazza at Night"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-white shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Image
                src="/torinoslide_4.jpg"
                alt="Torino - Aerial View"
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




