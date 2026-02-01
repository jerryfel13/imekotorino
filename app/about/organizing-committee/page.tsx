import { Users, Award, Globe, Building2 } from 'lucide-react'
import Image from 'next/image'

export default function OrganizingCommittee() {
  const tcChairpersons = [
    { name: 'MICHELA SEGA', affiliation: 'Instituto Nazionale di Ricerca Metrologica (INRiM), Italy', tc: 'TC8' },
    { name: 'ÁLVARO SILVA RIBEIRO', affiliation: 'National Laboratory for Civil Engineering, Portugal', tc: 'TC11' },
    { name: 'TATJANA TOMIĆ', affiliation: 'INA Industrija nafte d.d., Croatia', tc: 'TC24' },
  ]

  const localOrganizingCommittee = [
    { name: 'ANNABELLE V. BRIONES' },
    { name: 'ADMER REY C. DABLIO' },
    { name: 'MA. RACHEL V. PARCON' },
  ]

  const ipcTC8 = [
    { name: 'Sergio Oliveira', country: 'Brazil', role: 'Chair of IPC' },
    { name: 'Michela Sega', country: 'Italy' },
    { name: 'Thomas Wiedenhoefer', country: 'Germany' },
    { name: 'Marco Di Luzio', country: 'Italy' },
    { name: 'Giovanni Battista Rossi', country: 'Italy' },
    { name: 'Oleksandr Samoilenko', country: 'Ukraine' },
    { name: 'Antoaneta Yovcheva', country: 'Bulgaria' },
    { name: 'Zoltan Zelenka', country: 'Hungary' },
  ]

  const ipcTC11 = [
    { name: 'Marija Čundeva-Blajer', country: 'North Macedonia', role: 'Chair of IPC' },
    { name: 'Álvaro Silva Ribeiro', country: 'Portugal' },
    { name: 'Mladen Jakovčić', country: 'Croatia' },
    { name: 'Honglei Yang', country: 'China' },
    { name: 'Admer Rey C. Dablio', country: 'Philippines' },
    { name: 'Ivana Ljevaković-Musladin', country: 'Croatia' },
    { name: 'Jose Luis Prieto Calviño', country: 'Spain' },
    { name: 'Maria do Ceu Lopes de Sousa Ferreira', country: 'Portugal' },
    { name: 'Paolo Emilio Roccato', country: 'Italy' },
    { name: 'Rama Dasu Pittala', country: 'India' },
    { name: 'Rola Bou Khozam', country: 'Lebanon' },
    { name: 'Gertrud Mamiya', country: 'Rwanda' },
    { name: 'Annette Röttger', country: 'Germany' },
    { name: 'Vedran Šimunovic', country: 'Croatia' },
    { name: 'Agne Bertasiene', country: 'Lithuania' },
    { name: 'Kiril Demerdziev', country: 'North Macedonia' },
  ]

  const ipcTC24 = [
    { name: 'Leonardo Iannucci', country: 'Italy', role: 'Chair of IPC' },
    { name: 'Tatjana Tomić', country: 'Croatia' },
    { name: 'Hongmei Li', country: 'China' },
    { name: 'Carolina Andrade', country: 'Brazil' },
    { name: 'Sabrina Grassini', country: 'Italy' },
    { name: 'Emma Angelini', country: 'Italy' },
    { name: 'Luca Lombardo', country: 'Italy' },
    { name: 'Leila Es Sebar', country: 'Italy' },
    { name: 'Luisa Vigorelli', country: 'Italy' },
    { name: 'Christabel Tan', country: 'United Kingdom' },
    { name: 'Admer Rey C. Dablio', country: 'Philippines' },
    { name: 'Valnei S Cunha', country: 'Brazil' },
    { name: 'Zhechao Qu', country: 'Germany' },
    { name: 'Thiago de Oliveira Araujo', country: 'Brazil' },
    { name: 'Sandra Babić', country: 'Croatia' },
    { name: 'Pavel Gurikov', country: 'Germany' },
    { name: 'Aleksandra Aleksic', country: 'Serbia' },
    { name: 'Florbela Dias', country: 'Portugal' },
    { name: 'Katarina Hafner-Vuk', country: 'Bosnia and Herzegovina' },
    { name: 'Alleni T. Junsay', country: 'Philippines' },
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
            Meet the dedicated team organizing the 2026 IMEKO Joint Conference
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Conference Chairs */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Award className="h-8 w-8 text-primary-600 mr-3" />
            Conference Chairs
          </h2>

          {/* IMEKO TC Chairpersons */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-gray-800 mb-6">IMEKO TC Chairpersons</h3>
            <div className="space-y-4">
              {tcChairpersons.map((person, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white p-5 rounded-lg border border-gray-200"
                >
                  <h4 className="text-lg font-bold text-gray-900">{person.name}</h4>
                  <p className="text-gray-600 italic">{person.affiliation} <span className="font-semibold text-primary-600">({person.tc})</span></p>
                </div>
              ))}
            </div>
          </div>

          {/* Local Organizing Committee */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-6">Local Organizing Committee</h3>
            <div className="space-y-3">
              {localOrganizingCommittee.map((person, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-lg border border-gray-200"
                >
                  <h4 className="text-lg font-bold text-gray-900">{person.name}</h4>
                </div>
              ))}
              <p className="text-gray-600 italic mt-4">DOST-Industrial Technology Development Institute, Philippines</p>
            </div>
          </div>
        </div>

        {/* International Program Committee */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Globe className="h-8 w-8 text-primary-600 mr-3" />
            International Program Committee
          </h2>

          {/* TC8 */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-primary-700 mb-6 pb-2 border-b-2 border-primary-200">IMEKO TC8</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {ipcTC8.map((person, index) => (
                <div
                  key={index}
                  className="p-3 rounded-lg bg-blue-50 border border-blue-100"
                >
                  <span className="font-semibold text-gray-900">{person.name}</span>
                  <span className="text-gray-600">, {person.country}</span>
                  {person.role && <span className="text-primary-600 font-medium">, {person.role}</span>}
                </div>
              ))}
            </div>
          </div>

          {/* TC11 */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-primary-700 mb-6 pb-2 border-b-2 border-primary-200">IMEKO TC11</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {ipcTC11.map((person, index) => (
                <div
                  key={index}
                  className="p-3 rounded-lg bg-green-50 border border-green-100"
                >
                  <span className="font-semibold text-gray-900">{person.name}</span>
                  <span className="text-gray-600">, {person.country}</span>
                  {person.role && <span className="text-primary-600 font-medium">, {person.role}</span>}
                </div>
              ))}
            </div>
          </div>

          {/* TC24 */}
          <div>
            <h3 className="text-xl font-bold text-primary-700 mb-6 pb-2 border-b-2 border-primary-200">IMEKO TC24</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {ipcTC24.map((person, index) => (
                <div
                  key={index}
                  className="p-3 rounded-lg bg-purple-50 border border-purple-100"
                >
                  <span className="font-semibold text-gray-900">{person.name}</span>
                  <span className="text-gray-600">, {person.country}</span>
                  {person.role && <span className="text-primary-600 font-medium">, {person.role}</span>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Host Organization */}
        <div className="bg-white rounded-xl shadow-lg p-8 mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Building2 className="h-8 w-8 text-primary-600 mr-3" />
            Host Organization
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <Image
                src="/dost-itdi.png"
                alt="DOST-ITDI Logo"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                The <strong>Industrial Technology Development Institute (DOST-ITDI)</strong> is the Philippines' premier 
                multidisciplinary research and development arm under the Department of Science and Technology, tasked with 
                driving national industrialization through the generation and transfer of innovative technologies. 
                Established in 1901 and formerly known as the Bureau of Government Laboratories, it provides a comprehensive 
                range of technical services, including specialized testing, materials characterization, and metrology 
                (standards and calibration), to ensure local industries—particularly MSMEs—remain globally competitive. 
                Its core R&D activities focus on critical sectors such as food processing, materials science, packaging 
                technology, chemicals, and environmental biotechnology, all aimed at modernizing production and improving 
                the quality of life for Filipinos through science and engineering.
              </p>
            </div>
          </div>
        </div>

        {/* Committee Note */}
        <div className="mt-12 bg-primary-50 border-l-4 border-primary-600 p-6 rounded-lg">
          <p className="text-gray-800">
            The organizing committee is composed of experts from leading institutions in metrology, measurement science, 
            analytical testing, inspection, and certification (TIC), and related fields. The committee members are committed 
            to ensuring a high-quality conference experience for all participants.
          </p>
        </div>
      </div>
    </div>
  )
}
