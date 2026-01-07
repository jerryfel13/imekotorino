import { Users, Award, Building2 } from 'lucide-react'

export default function OrganizingCommittee() {
  const committees = [
    {
      title: 'Conference Chairs',
      members: [
        { name: 'Prof. Luca Callegaro', affiliation: 'INRIM - Istituto Nazionale di Ricerca Metrologica', role: 'Conference Chair' },
        { name: 'Prof. Marco Parvis', affiliation: 'Politecnico di Torino', role: 'Co-Chair' },
      ],
    },
    {
      title: 'Technical Program Committee',
      members: [
        { name: 'Dr. Maria Luisa Rastello', affiliation: 'IMEKO TC8', role: 'TC8 Chair' },
        { name: 'Dr. Roberto Setola', affiliation: 'IMEKO TC11', role: 'TC11 Chair' },
        { name: 'Dr. Emanuele Bemporad', affiliation: 'IMEKO TC24', role: 'TC24 Chair' },
      ],
    },
    {
      title: 'Organizing Committee',
      members: [
        { name: 'Dr. Alessandro Ferrero', affiliation: 'Politecnico di Milano', role: 'Member' },
        { name: 'Dr. Francesca Pennecchi', affiliation: 'INRIM', role: 'Member' },
        { name: 'Dr. Vincenzo D\'Elia', affiliation: 'INRIM', role: 'Member' },
        { name: 'Dr. Andrea Merlone', affiliation: 'INRIM', role: 'Member' },
      ],
    },
  ]

  const organizations = [
    {
      name: 'INRIM',
      fullName: 'Istituto Nazionale di Ricerca Metrologica',
      description: 'The Italian National Institute of Metrological Research',
      logo: 'inrim',
    },
    {
      name: 'Politecnico di Torino',
      fullName: 'Politecnico di Torino',
      description: 'One of Italy\'s leading technical universities',
      logo: 'polito',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <Users className="h-12 w-12 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Organizing Committee</h1>
          </div>
          <p className="text-xl text-primary-100 mt-4">
            Meet the dedicated team organizing the 2025 IMEKO Joint Conference
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Committees */}
        <div className="space-y-12 mb-16">
          {committees.map((committee, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="h-8 w-8 text-primary-600 mr-3" />
                {committee.title}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {committee.members.map((member, memberIndex) => (
                  <div
                    key={memberIndex}
                    className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-primary-600 font-medium mb-2">{member.role}</p>
                    <p className="text-gray-600">{member.affiliation}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Hosting Organizations */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Building2 className="h-8 w-8 text-primary-600 mr-3" />
            Hosting Organizations
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {organizations.map((org, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-lg border-2 border-primary-200"
              >
                <h3 className="text-2xl font-bold text-primary-700 mb-2">{org.name}</h3>
                <p className="text-lg text-gray-700 mb-4">{org.fullName}</p>
                <p className="text-gray-600">{org.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="mt-12 bg-primary-50 border-l-4 border-primary-600 p-6 rounded-lg">
          <p className="text-gray-800">
            <strong>Note:</strong> The organizing committee is composed of experts from leading institutions 
            in metrology, measurement science, and related fields. The committee members are committed to 
            ensuring a high-quality conference experience for all participants.
          </p>
        </div>
      </div>
    </div>
  )
}




