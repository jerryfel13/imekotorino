'use client'

import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would send the form data to a server
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <Mail className="h-12 w-12 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          </div>
          <p className="text-xl text-primary-100 mt-4">
            Get in touch with the organizing committee
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-primary-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                  <a
                    href="mailto:info_manila2026@imeko.org"
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    info_manila2026@imeko.org
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-primary-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Location</h3>
                  <p className="text-gray-700">
                    Metro Manila, Philippines<br />
                    26-29 August 2026
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-primary-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Conference Office</h3>
                  <p className="text-gray-700">
                    For general inquiries and registration information, email correspondence.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Office Hours</h3>
              <p className="text-gray-700 mb-4">
                The conference office is available to assist you with:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Registration and payment inquiries</li>
                <li>Abstract and paper submission support</li>
                <li>Travel and accommodation information</li>
                <li>General conference information</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Message subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Links</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="/about/organizing-committee"
              className="block p-6 bg-gradient-to-br from-primary-50 to-white rounded-lg border border-primary-200 hover:border-primary-400 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Organizing Committee</h3>
              <p className="text-gray-600 text-sm">Meet the team organizing the conference</p>
            </a>
            <a
              href="/about/venue"
              className="block p-6 bg-gradient-to-br from-primary-50 to-white rounded-lg border border-primary-200 hover:border-primary-400 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Venue Information</h3>
              <p className="text-gray-600 text-sm">Learn about Metro Manila, Philippines</p>
            </a>
            <a
              href="https://conferences.imeko.org/event/15/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-gradient-to-br from-primary-50 to-white rounded-lg border border-primary-200 hover:border-primary-400 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Call for Papers</h3>
              <p className="text-gray-600 text-sm">Submit your abstract for paper presentation</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}





