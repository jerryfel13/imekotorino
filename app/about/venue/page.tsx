import { MapPin, Building, Calendar, Users, Wifi, Utensils, Car } from 'lucide-react'
import Image from 'next/image'

export default function Venue() {
  const venueInfo = [
    {
      icon: MapPin,
      title: 'Location',
      content: 'Metro Manila, Philippines',
    },
    {
      icon: Building,
      title: 'Venue Details',
      content: 'Specific venue will be announced soon. The venue to be chosen is near the international airport and easily accessible to major transportation hubs.',
    },
    {
      icon: Calendar,
      title: 'Dates',
      content: '26-29 August 2026',
    },
    {
      icon: Users,
      title: 'Capacity',
      content: 'Venue to be chosen can accommodate hundreds of participants with facilities ideal for both plenary lectures and parallel sessions.',
    },
  ]

  const facilities = [
    { icon: Wifi, name: 'WiFi Connectivity', description: 'Free wireless internet throughout the venue' },
    { icon: Utensils, name: 'Catering Services', description: 'Coffee breaks and lunch options available' },
    { icon: Car, name: 'Parking', description: 'Parking facilities available nearby' },
    { icon: Building, name: 'Accessibility', description: 'Fully accessible venue with modern facilities' },
  ]

  const attractions = [
    {
      title: 'Intramuros',
      description: 'Intramuros, "The Walled City," is the oldest district in Manila. This is what remains of the fortified city, which was the seat of power during Spanish Colonial times (1521-1898).',
      image: '/intramurosfullview.jpg',
    },
    {
      title: 'Fort Santiago',
      description: 'This museum and public park was built as a stone fortress at the turn of the 17th century and marked the beginning of the walled city\'s riverside barricades.',
      image: '/intramuros-2.jpg',
    },
    {
      title: 'National Museum',
      description: 'This grand exhibit house features the country\'s most historic works of culture and national heritage, including the paintings of heralded Philippine artist Felix Resurreccion Hidalgo.',
      image: '/nationalmuseum.jpg',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <MapPin className="h-12 w-12 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Conference Venue</h1>
          </div>
          <p className="text-xl text-primary-100 mt-4">
            Discover Metro Manila, the beautiful Capital of the Republic of the Philippines, the host city for the 2026 IMEKO Joint Conference
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Venue Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Venue Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {venueInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-lg border border-primary-200"
                >
                  <div className="flex items-start">
                    <Icon className="h-8 w-8 text-primary-600 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{info.title}</h3>
                      <p className="text-gray-700">{info.content}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Facilities */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Venue Facilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => {
              const Icon = facility.icon
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all text-center"
                >
                  <Icon className="h-10 w-10 text-primary-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{facility.name}</h3>
                  <p className="text-sm text-gray-600">{facility.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* About Metro Manila */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Metro Manila</h2>
          <div className="prose prose-lg max-w-none text-gray-700 mb-8">
            <p className="text-lg mb-4">
              Metro Manila, the bustling capital region of the Philippines, is a dynamic metropolis that seamlessly blends 
              centuries-old heritage with modern innovation, creating a vibrant urban landscape that honors its storied past 
              while embracing a promising future.
            </p>
            <p className="text-lg mb-4">
              Comprising 16 cities and one municipality, Metro Manila serves as the nation's political, economic, and cultural 
              heart. From the historic Intramuros, the walled city that tells the story of Spanish colonial times, to the 
              gleaming skyscrapers of Makati and BGC, this megacity showcases the Philippines' remarkable transformation 
              into a thriving center of commerce and technology in Southeast Asia.
            </p>
            <p className="text-lg">
              Rich in culture and tradition, Metro Manila captivates visitors with its world-class museums, colonial-era 
              architecture, vibrant festivals, diverse culinary scene featuring both local delicacies and international cuisine, 
              and warm Filipino hospitality that makes every experience memorable and welcoming.
            </p>
          </div>
        </div>

        {/* Local Attractions */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Local Attractions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {attractions.map((attraction, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-white rounded-lg border border-primary-200 hover:border-primary-400 hover:shadow-md transition-all overflow-hidden"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={attraction.image}
                    alt={attraction.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{attraction.title}</h3>
                  <p className="text-gray-700 text-sm">{attraction.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mt-8 text-center">
            More facts about <strong>THE PHILIPPINES</strong> can be explored at{' '}
            <a
              href="https://www.tourism.gov.ph/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 font-semibold underline"
            >
              tourism.gov.ph
            </a>
          </p>
        </div>

        {/* Travel Information */}
        <div className="mt-12 bg-primary-50 border-l-4 border-primary-600 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Travel Information</h3>
          <ul className="list-disc list-inside text-gray-800 space-y-3">
            <li>Metro Manila, Republic of the Philippines is easily accessible by air through entry point at the Ninoy Aquino International Airport (NAIA).</li>
            <li>
              Upon arrival, all foreign nationals are required to accomplish the Philippine Travel Information System (
              <a
                href="https://etravel.gov.ph/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 font-semibold underline"
              >
                eTravel
              </a>
              ).
            </li>
            <li>Detailed travel information and accommodation recommendations will be posted soon.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}





