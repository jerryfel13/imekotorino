import Link from 'next/link'
import Image from 'next/image'
import { Calendar, MapPin, FileText, Users, Download, ArrowRight, Sparkles, Award, BookOpen, Globe } from 'lucide-react'
import ScrollAnimation from '@/components/ScrollAnimation'
import TorinoSection from '@/components/TorinoSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden min-h-[85vh] md:min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/header_torino.jpg"
            alt="Torino, Italy"
            fill
            className="object-cover"
            priority
            quality={90}
            sizes="100vw"
          />
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/65 z-10"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center space-y-10">
            <div className="mb-12 flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Image
                  src="/logo_imekoto25.png"
                  alt="IMEKO Joint Conference 2026"
                  width={600}
                  height={160}
                  className="w-full max-w-4xl h-auto object-contain"
                  priority
                />
              </div>
            </div>
            
            <div className="space-y-10">
              <div>
                <h1 className="text-5xl md:text-7xl font-extrabold mb-8 text-white leading-tight tracking-tight">
                  2026 IMEKO Joint Conference
                </h1>
                <div className="w-24 h-1 bg-primary-400 mx-auto"></div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-lg md:text-xl font-medium">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                  <MapPin className="h-5 w-5" />
                  <span>Torino, Italy</span>
                </div>
                <div className="hidden md:block w-2 h-2 bg-white rounded-full"></div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                  <Calendar className="h-5 w-5" />
                  <span>September 14-17, 2026</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-10">
              <Link
                href="#call-for-papers"
                className="group bg-white text-primary-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover-lift"
              >
                <span>Submit Your Abstract</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              <Link
                href="/about/venue"
                className="group bg-primary-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-primary-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover-lift"
              >
                <span>Learn More</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Introduction with IMEKO Logo */}
      <section className="py-32 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Logo Section */}
            <div className="flex justify-center md:justify-start">
              <div className="relative w-full max-w-md aspect-[3/4]">
                <Image
                  src="/logo_imeko.jpg"
                  alt="IMEKO Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            {/* Content Section */}
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
                  2026 IMEKO
                </h2>
                <h2 className="text-5xl md:text-6xl font-extrabold text-primary-600 leading-tight mb-6">
                  Joint Conference
                </h2>
              </div>
              
              <div className="tech-committee-badge">
                TECHNICAL COMMITTEES
              </div>
              
              <div className="space-y-3">
                {/* TC8 Card */}
                <ScrollAnimation 
                  animationIn="fade-in-up" 
                  animationOut="fade-out" 
                  threshold={0.2}
                  rootMargin="0px 0px -100px 0px"
                  delay={0}
                >
                  <div className="committee-card committee-card-tc8">
                    <div className="committee-badge committee-badge-tc8">
                      TC8
                    </div>
                    <h3 className="committee-title">
                      Traceability in Metrology
                    </h3>
                  </div>
                </ScrollAnimation>
                
                {/* TC11 Card */}
                <ScrollAnimation 
                  animationIn="fade-in-up" 
                  animationOut="fade-out" 
                  threshold={0.2}
                  rootMargin="0px 0px -100px 0px"
                  delay={0}
                >
                  <div className="committee-card committee-card-tc11">
                    <div className="committee-badge committee-badge-tc11">
                      TC11
                    </div>
                    <h3 className="committee-title">
                      Measurement in Testing, Inspection and Certification
                    </h3>
                  </div>
                </ScrollAnimation>
                
                {/* TC24 Card */}
                <ScrollAnimation 
                  animationIn="fade-in-up" 
                  animationOut="fade-out" 
                  threshold={0.2}
                  rootMargin="0px 0px -100px 0px"
                  delay={0}
                >
                  <div className="committee-card committee-card-tc24">
                    <div className="committee-badge committee-badge-tc24">
                      TC24
                    </div>
                    <h3 className="committee-title">
                      Chemical Measurements
                    </h3>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Description with Download Button */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left Column - Logos, Title, Committees, and Description */}
            <div className="space-y-8">
              {/* Logos */}
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <Image
                    src="/Logo_INRIM.jpg"
                    alt="INRIM - Istituto Nazionale di Ricerca Metrologica"
                    width={180}
                    height={60}
                    className="h-auto w-auto object-contain"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/polito.jpg"
                    alt="Politecnico di Torino"
                    width={180}
                    height={60}
                    className="h-auto w-auto object-contain"
                  />
                </div>
              </div>
              
              {/* Conference Title */}
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                2026 IMEKO Joint Conference
              </h2>
              
              {/* Technical Committees Section */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-primary-600 uppercase tracking-wider">
                  TECHNICAL COMMITTEES
                </h3>
                <div className="space-y-3">
                  <div className="bg-gray-100 p-4 rounded-lg border border-gray-200">
                    <p className="text-gray-900 font-medium">
                      <span className="font-bold">TC8:</span> Traceability in Metrology
                    </p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg border border-gray-200">
                    <p className="text-gray-900 font-medium">
                      <span className="font-bold">TC11:</span> Measurement in Testing, Inspection and Certification
                    </p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg border border-gray-200">
                    <p className="text-gray-900 font-medium">
                      <span className="font-bold">TC24:</span> Chemical Measurements
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Conference Description */}
              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  This international conference aims to gather experts both from industry and academia, 
                  covering different topics from the fields of <strong className="font-semibold text-primary-700">'Traceability in Metrology' (IMEKO TC8)</strong>, 
                  <strong className="font-semibold text-primary-700"> 'Measurement in Testing, Inspection and Certification' (IMEKO TC11)</strong>, and <strong className="font-semibold text-primary-700">'Chemical Measurements' (IMEKO TC24)</strong>.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Considering the wide interdisciplinarity of the three Technical Committees, many topics and metrological 
                  issues will be addressed during the Conference, including (but not limited to): certified reference materials, 
                  digitalization in Traceability, digital twins, quality management and conformity assessment in TIC Sector, 
                  chemical and biochemical sensors, gas analysis for climate change and energy transition, chemical metrology.
                </p>
              </div>
            </div>
            
            {/* Right Column - Image and Download Button */}
            <div className="space-y-6">
              <div className="relative w-full">
                <Image
                  src="/cfpimghome.jpg"
                  alt="Torino, Italy"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="flex justify-center md:justify-start">
                <a
                  href="/IMEKO_JointTC8-11-24_v5.pdf"
                  download
                  className="inline-flex items-center justify-center bg-primary-600 text-white px-8 py-4 rounded-lg font-bold text-base hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Download className="h-5 w-5 mr-2" />
                  <span>CLICK HERE TO DOWNLOAD</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Call for Papers Section - Full Width */}
          <div className="mt-16 space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              CALL FOR PAPERS
            </h3>
            <div className="w-full h-0.5 bg-primary-600"></div>
            <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
              <p>
                Authors are invited to submit abstracts of 250 words, related to the topics covered by the 3 IMEKO Technical Committees. 
                After notification of acceptance, Authors will have the opportunity to submit a full paper (3 to 5 pages), 
                to be published in the Conference Proceedings.
              </p>
              <p>
                All contributions will be peer-reviewed and acceptance will be based on quality, originality and relevance. 
                Accepted and presented full papers will be submitted for inclusion in Scopus after the event.
              </p>
              <p>
                After the Conference, selected Authors will be invited to submit an extended version of their papers to 'Measurement' or to 'Acta IMEKO'. 
                Additional information about post-conference special issues will be provided on the conference website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Committees */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animationIn="fade-in-up" delay={0}>
            <div className="text-center mb-12">
              <span className="inline-block px-5 py-2 bg-primary-600 text-white rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                Our Committees
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Technical Committee
              </h2>
              <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
            </div>
          </ScrollAnimation>
          
          <div className="grid md:grid-cols-3 gap-6">
            <ScrollAnimation 
              animationIn="fade-in-up" 
              animationOut="fade-out" 
              threshold={0.2}
              rootMargin="0px 0px -100px 0px"
              delay={0}
            >
              <div className="group p-6 rounded-xl bg-blue-50 border-l-4 border-blue-600 hover:bg-blue-100/80 transition-all duration-300 hover-lift cursor-pointer">
                <div className="text-4xl font-extrabold text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">TC8</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-700 transition-colors duration-300">Traceability in Metrology</h3>
                <p className="text-gray-700 leading-relaxed text-base">
                  Exploring the latest developments in traceability, measurement standards, and metrological infrastructure.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation 
              animationIn="fade-in-up" 
              animationOut="fade-out" 
              threshold={0.2}
              rootMargin="0px 0px -100px 0px"
              delay={0}
            >
              <div className="group p-6 rounded-xl bg-green-50 border-l-4 border-green-600 hover:bg-green-100/80 transition-all duration-300 hover-lift cursor-pointer">
                <div className="text-4xl font-extrabold text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">TC11</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-green-700 transition-colors duration-300">Measurement in Testing, Inspection and Certification</h3>
                <p className="text-gray-700 leading-relaxed text-base">
                  Advancing measurement practices in testing, inspection, and certification processes.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation 
              animationIn="fade-in-up" 
              animationOut="fade-out" 
              threshold={0.2}
              rootMargin="0px 0px -100px 0px"
              delay={0}
            >
              <div className="group p-6 rounded-xl bg-purple-50 border-l-4 border-purple-600 hover:bg-purple-100/80 transition-all duration-300 hover-lift cursor-pointer">
                <div className="text-4xl font-extrabold text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">TC24</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-purple-700 transition-colors duration-300">Chemical Measurements</h3>
                <p className="text-gray-700 leading-relaxed text-base">
                  Focusing on chemical metrology, sensors, and analytical measurement techniques.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>


      {/* Important Dates Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Calendar Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 49px, #9ca3af 49px, #9ca3af 50px),
              repeating-linear-gradient(90deg, transparent, transparent 49px, #9ca3af 49px, #9ca3af 50px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimation animationIn="fade-in-up" delay={0}>
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="h-7 w-7 text-primary-600" />
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                  IMPORTANT DATES
                </h2>
              </div>
              <div className="w-40 h-1 bg-primary-600"></div>
            </div>
          </ScrollAnimation>
          
          <div className="bg-white/95 backdrop-blur-sm rounded-xl border border-gray-200 shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-300">
              <ScrollAnimation animationIn="fade-in-up" delay={100}>
                <div className="p-8 md:p-6 lg:p-8">
                  <div className="flex items-start gap-3 mb-4">
                    <Calendar className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                    <h3 className="text-sm md:text-xs lg:text-sm font-bold text-gray-900 leading-tight uppercase">
                      SPECIAL SESSION PROPOSAL DEADLINE
                    </h3>
                  </div>
                  <p className="text-xl md:text-lg lg:text-xl font-bold text-primary-600 ml-9">
                    February 15, 2026
                  </p>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animationIn="fade-in-up" delay={200}>
                <div className="p-8 md:p-6 lg:p-8">
                  <div className="flex items-start gap-3 mb-4">
                    <Calendar className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                    <h3 className="text-sm md:text-xs lg:text-sm font-bold text-gray-900 leading-tight uppercase">
                      ABSTRACT SUBMISSION DEADLINE
                    </h3>
                  </div>
                  <p className="text-xl md:text-lg lg:text-xl font-bold text-primary-600 ml-9">
                    March 23, 2026
                  </p>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animationIn="fade-in-up" delay={300}>
                <div className="p-8 md:p-6 lg:p-8">
                  <div className="flex items-start gap-3 mb-4">
                    <Calendar className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                    <h3 className="text-sm md:text-xs lg:text-sm font-bold text-gray-900 leading-tight uppercase">
                      FULL PAPER SUBMISSION DEADLINE
                    </h3>
                  </div>
                  <p className="text-xl md:text-lg lg:text-xl font-bold text-primary-600 ml-9">
                    May 8, 2026
                  </p>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animationIn="fade-in-up" delay={400}>
                <div className="p-8 md:p-6 lg:p-8">
                  <div className="flex items-start gap-3 mb-4">
                    <Calendar className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                    <h3 className="text-sm md:text-xs lg:text-sm font-bold text-gray-900 leading-tight uppercase">
                      FINAL PAPER SUBMISSION DEADLINE
                    </h3>
                  </div>
                  <p className="text-xl md:text-lg lg:text-xl font-bold text-primary-600 ml-9">
                    July 1, 2026
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Torino, Italy Section */}
      <TorinoSection />

      {/* Conference Topics */}
      <section id="topics" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block px-6 py-3 bg-primary-600 text-white rounded-full text-xs font-bold uppercase tracking-wider mb-8">
              Topics
            </span>
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Conference Topics
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Certified Reference Materials',
              'Digitalization in Traceability',
              'Digital Twins',
              'Quality Management',
              'Conformity Assessment in TIC Sector',
              'Chemical and Biochemical Sensors',
              'Gas Analysis for Climate Change',
              'Energy Transition',
              'Chemical Metrology',
            ].map((topic, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-white border-2 border-gray-200 hover:border-primary-500 hover:bg-primary-50 transition-all duration-300 hover-lift cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-2.5 h-2.5 bg-primary-600 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                  <p className="text-gray-800 font-semibold text-base group-hover:text-primary-700 transition-colors duration-300">{topic}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Torino */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-6 mb-12">
                <div className="p-4 bg-primary-600 rounded-xl shadow-md">
                  <MapPin className="h-10 w-10 text-white" />
                </div>
                <div>
                  <span className="block text-sm font-bold text-primary-600 mb-2 uppercase tracking-wider">Location</span>
                  <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900">Torino, Italy</h2>
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Piedmont's capital, Torino is a city with a unique charm, an important history that has left its mark 
                  on this metropolis that speaks of the past, whilst constantly looking to the future.
                </p>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  At the foot of the Alps, Turin was once the capital of the House of Savoy and birthplace of the Italian resurgence. 
                  Today, it is an innovation hub of Italian industry, rich in art and culture.
                </p>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Dynamic and baroque, Turin wows with its renowned Egyptian museum, architectural and monumental wonders, 
                  art galleries, international events and delicious traditional food.
                </p>
              </div>
            </div>
            <div className="bg-primary-600 rounded-2xl p-12 shadow-xl">
              <div className="space-y-10">
                <div className="flex items-start gap-5">
                  <div className="p-4 bg-white/20 rounded-xl">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-white mb-2">Conference Dates</h3>
                    <p className="text-white/90 text-xl">September 14-17, 2026</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="p-4 bg-white/20 rounded-xl">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-white mb-2">Location</h3>
                    <p className="text-white/90 text-xl">Torino, Italy</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="p-4 bg-white/20 rounded-xl">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-white mb-2">Participants</h3>
                    <p className="text-white/90 text-xl">Experts from industry and academia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
