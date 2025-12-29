'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react'
import toast from 'react-hot-toast'
import api from '@/lib/api'
import Script from 'next/script'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await api.post('/contact/submit/', formData)
      toast.success("Message sent successfully! We'll get back to you soon.")
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Contact form error:', error)
      toast.error(error.response?.data?.message || 'Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
   {/* Tawk.to Script Integration - Using Next.js Script Component */}
<Script id="tawk-to-script" strategy="afterInteractive">
  {`
    var Tawk_API = Tawk_API || {};
    var Tawk_LoadStart = new Date();

    // Define visitor data before the script runs
    Tawk_API.visitor = {
      name: 'User Name Here',  // Replace with dynamic data from your auth session
      email: 'user@email.com'  // Replace with dynamic data from your auth session
    };

    (function(){
      var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
      s1.async=true;
      s1.src='https://embed.tawk.to/695267c63169ac197f3fc2fd/1jdkuao3d';
      s1.charset='UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode.insertBefore(s1,s0);
    })();
  `}
</Script>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Get in <span className="text-electric">Touch</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have questions? We're here to help. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <div data-aos="fade-up" className="card p-6 text-center">
            <div className="w-16 h-16 bg-electric/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-electric" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <p className="text-gray-400 mb-3">Our team is here to help</p>
            <a href="mailto:support@nexadevices.com" className="text-electric hover:underline">
              support@nexadevices.com
            </a>
          </div>

          <div data-aos="fade-up" data-aos-delay="100" className="card p-6 text-center">
            <div className="w-16 h-16 bg-electric/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-electric" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="text-gray-400 mb-3">Mon-Fri from 8am to 6pm</p>
            <a href="tel:+1234567890" className="text-electric hover:underline">
              +1 (234) 567-890
            </a>
          </div>

          <div data-aos="fade-up" data-aos-delay="200" className="card p-6 text-center">
            <div className="w-16 h-16 bg-electric/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-electric" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Visit Us</h3>
            <p className="text-gray-400 mb-3">Come say hello</p>
            <p className="text-electric">
              123 Tech Street<br />
              San Francisco, CA 94102
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div data-aos="fade-right">
            <div className="card p-8">
              <div className="flex items-center space-x-3 mb-6">
                <MessageSquare className="text-electric" size={28} />
                <h2 className="text-2xl font-bold">Send us a Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="input w-full"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="input w-full"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className="input w-full"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    rows="5"
                    className="input w-full resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-dark border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Additional Info */}
          <div data-aos="fade-left" className="space-y-6">
            <div className="card p-6">
              <div className="flex items-start space-x-4">
                <Clock className="text-electric flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Business Hours</h3>
                  <div className="space-y-2 text-gray-400">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">Frequently Asked</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-1">How long does shipping take?</h4>
                  <p className="text-gray-400 text-sm">Standard shipping takes 3-5 business days.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">What's your return policy?</h4>
                  <p className="text-gray-400 text-sm">30-day return policy on all products.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Do you offer warranty?</h4>
                  <p className="text-gray-400 text-sm">Yes, all products come with a 2-year manufacturer warranty.</p>
                </div>
              </div>
            </div>

            <div className="card p-6 bg-gradient-to-r from-electric/10 to-electric-dark/10 border-electric/30">
              <h3 className="text-xl font-bold mb-2">Need Immediate Help?</h3>
              <p className="text-gray-400 mb-4">
                Click the chat icon in the bottom right to speak with us instantly!
              </p>
              <button 
                type="button"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.Tawk_API) {
                    window.Tawk_API.toggle();
                  } else {
                    toast.error("Live chat is still loading...");
                  }
                }}
                className="btn-primary w-full"
              >
                Open Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}