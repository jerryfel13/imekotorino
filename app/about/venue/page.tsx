import { MapPin, Building, Calendar, Users, Wifi, Utensils, Car } from 'lucide-react'

export default function Venue() {
  const venueInfo = [
    {
      icon: MapPin,
      title: 'Location',
      content: 'Torino, Italy - At the foot of the Alps',
    },
    {
      icon: Building,
      title: 'Venue Details',
      content: 'The conference will be held at a prestigious venue in Torino, easily accessible from the city center and major transportation hubs.',
    },
    {
      icon: Calendar,
      title: 'Dates',
      content: 'September 14-17, 2025',
    },
    {
      icon: Users,
      title: 'Capacity',
      content: 'Designed to accommodate hundreds of participants with multiple parallel sessions.',
    },
  ]

  const facilities = [
    { icon: Wifi, name: 'High-Speed WiFi', description: 'Free wireless internet throughout the venue' },
    { icon: Utensils, name: 'Catering Services', description: 'Coffee breaks and lunch options available' },
    { icon: Car, name: 'Parking', description: 'Parking facilities available nearby' },
    { icon: Building, name: 'Accessibility', description: 'Fully accessible venue with modern facilities' },
  ]

  const attractions = [
    {
      title: 'Egyptian Museum',
      description: 'One of the world\'s most important collections of Egyptian antiquities',
    },
    {
      title: 'Royal Palaces',
      description: 'UNESCO World Heritage sites from the House of Savoy',
    },
    {
      title: 'Mole Antonelliana',
      description: 'The symbol of Torino, housing the National Cinema Museum',
    },
    {
      title: 'Culinary Delights',
      description: 'Experience authentic Piedmontese cuisine and world-renowned wines',
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
            Discover Torino, the beautiful host city for the 2025 IMEKO Joint Conference
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

        {/* About Torino */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Torino</h2>
          <div className="prose prose-lg max-w-none text-gray-700 mb-8">
            <p className="text-lg mb-4">
              Piedmont's capital, Torino is a city with a unique charm, an important history that has left its mark 
              on this metropolis that speaks of the past, whilst constantly looking to the future.
            </p>
            <p className="text-lg mb-4">
              At the foot of the Alps, Turin was once the capital of the House of Savoy and birthplace of the Italian resurgence. 
              Today, it is an innovation hub of Italian industry, rich in art and culture.
            </p>
            <p className="text-lg">
              Dynamic and baroque, Turin wows with its renowned Egyptian museum, architectural and monumental wonders, 
              art galleries, international events and delicious traditional food.
            </p>
          </div>
        </div>

        {/* Local Attractions */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Local Attractions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {attractions.map((attraction, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-lg border border-primary-200 hover:border-primary-400 hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{attraction.title}</h3>
                <p className="text-gray-700">{attraction.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Travel Information */}
        <div className="mt-12 bg-primary-50 border-l-4 border-primary-600 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Travel Information</h3>
          <p className="text-gray-800 mb-4">
            Torino is easily accessible by:
          </p>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li><strong>Air:</strong> Torino-Caselle Airport (TRN) is approximately 16 km from the city center</li>
            <li><strong>Train:</strong> Torino Porta Nuova and Porta Susa stations connect to major Italian and European cities</li>
            <li><strong>Road:</strong> Well-connected via major highways (A4, A5, A6)</li>
          </ul>
          <p className="text-gray-800 mt-4">
            Detailed travel information and accommodation recommendations will be provided in the conference registration materials.
          </p>
        </div>
      </div>
    </div>
  )
}




