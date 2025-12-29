// src/app/privacy/page.jsx
'use client'

import { Shield, Lock, Eye, Database, Users, Bell } from 'lucide-react'

export default function PrivacyPage() {
  const lastUpdated = "December 10, 2025"

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16" data-aos="fade-up">
        <div className="inline-flex items-center space-x-2 bg-electric/10 border border-electric/30 rounded-full px-4 py-2 mb-6">
          <Shield className="text-electric" size={20} />
          <span className="text-sm text-electric font-semibold">Your Privacy Matters</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Privacy <span className="text-electric">Policy</span>
        </h1>
        <p className="text-xl text-gray-400">
          Last Updated: {lastUpdated}
        </p>
      </div>

      {/* Quick Overview */}
      <div data-aos="fade-up" className="card p-8 mb-12 bg-gradient-to-r from-electric/10 to-electric-dark/10 border-electric/30">
        <h2 className="text-2xl font-bold mb-4">Quick Overview</h2>
        <p className="text-gray-400 mb-4">
          At ElectroStore, we take your privacy seriously. This policy explains how we collect, use, 
          and protect your personal information.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-2 text-sm">
            <Lock className="text-electric flex-shrink-0" size={18} />
            <span>Secure Data Storage</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Shield className="text-electric flex-shrink-0" size={18} />
            <span>No Data Selling</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Eye className="text-electric flex-shrink-0" size={18} />
            <span>Full Transparency</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-invert max-w-none">
        {/* Section 1 */}
        <div data-aos="fade-up" className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <Database className="text-electric" size={28} />
            <h2 className="text-2xl font-bold m-0">Information We Collect</h2>
          </div>
          
          <div className="card p-6 mb-6">
            <h3 className="text-xl font-semibold mb-3 text-electric">Personal Information</h3>
            <p className="text-gray-400 mb-4">
              When you create an account or make a purchase, we collect:
            </p>
            <ul className="space-y-2 text-gray-400">
              <li>• Name and contact information (email, phone number)</li>
              <li>• Billing and shipping addresses</li>
              <li>• Payment information (processed securely through Stripe)</li>
              <li>• Order history and preferences</li>
              <li>• Account credentials and profile information</li>
            </ul>
          </div>

          <div className="card p-6 mb-6">
            <h3 className="text-xl font-semibold mb-3 text-electric">Automatically Collected Information</h3>
            <p className="text-gray-400 mb-4">
              We automatically collect certain information when you visit our site:
            </p>
            <ul className="space-y-2 text-gray-400">
              <li>• IP address and browser type</li>
              <li>• Device information and operating system</li>
              <li>• Pages visited and time spent on site</li>
              <li>• Referring website and search terms</li>
              <li>• Cookies and similar tracking technologies</li>
            </ul>
          </div>
        </div>

        {/* Section 2 */}
        <div data-aos="fade-up" className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <Eye className="text-electric" size={28} />
            <h2 className="text-2xl font-bold m-0">How We Use Your Information</h2>
          </div>
          
          <div className="card p-6">
            <p className="text-gray-400 mb-4">
              We use the information we collect to:
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Process Your Orders</h4>
                <p className="text-gray-400 text-sm">
                  Fulfill purchases, process payments, arrange shipping, and provide customer support.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Improve Our Services</h4>
                <p className="text-gray-400 text-sm">
                  Analyze usage patterns, personalize your experience, and enhance our website functionality.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Communicate With You</h4>
                <p className="text-gray-400 text-sm">
                  Send order confirmations, shipping updates, promotional offers, and important account information.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Prevent Fraud</h4>
                <p className="text-gray-400 text-sm">
                  Detect and prevent fraudulent transactions and protect against security threats.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Comply With Legal Obligations</h4>
                <p className="text-gray-400 text-sm">
                  Meet legal and regulatory requirements, respond to legal requests.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div data-aos="fade-up" className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <Users className="text-electric" size={28} />
            <h2 className="text-2xl font-bold m-0">Information Sharing</h2>
          </div>
          
          <div className="card p-6">
            <p className="text-gray-400 mb-4">
              We do not sell your personal information. We may share your information with:
            </p>
            <div className="space-y-4">
              <div className="bg-dark-light p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Service Providers</h4>
                <p className="text-gray-400 text-sm">
                  Third-party companies that help us operate our business (payment processors, shipping 
                  companies, email services). These providers are contractually obligated to protect your data.
                </p>
              </div>
              <div className="bg-dark-light p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Legal Requirements</h4>
                <p className="text-gray-400 text-sm">
                  When required by law, court order, or government request, or to protect our rights and safety.
                </p>
              </div>
              <div className="bg-dark-light p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Business Transfers</h4>
                <p className="text-gray-400 text-sm">
                  In connection with a merger, acquisition, or sale of assets, your information may be transferred 
                  to the new owner.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div data-aos="fade-up" className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <Lock className="text-electric" size={28} />
            <h2 className="text-2xl font-bold m-0">Data Security</h2>
          </div>
          
          <div className="card p-6">
            <p className="text-gray-400 mb-4">
              We implement industry-standard security measures to protect your information:
            </p>
            <ul className="space-y-2 text-gray-400">
              <li>• SSL/TLS encryption for all data transmission</li>
              <li>• Secure payment processing through PCI-DSS compliant providers</li>
              <li>• Regular security audits and vulnerability assessments</li>
              <li>• Access controls and authentication requirements</li>
              <li>• Employee training on data protection practices</li>
              <li>• Encrypted data storage and secure backup systems</li>
            </ul>
            <div className="mt-4 p-4 bg-electric/10 border border-electric/30 rounded-lg">
              <p className="text-sm text-gray-400">
                <strong>Note:</strong> While we strive to protect your information, no method of transmission 
                over the internet is 100% secure. We cannot guarantee absolute security.
              </p>
            </div>
          </div>
        </div>

        {/* Section 5 */}
        <div data-aos="fade-up" className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <Bell className="text-electric" size={28} />
            <h2 className="text-2xl font-bold m-0">Your Rights and Choices</h2>
          </div>
          
          <div className="card p-6">
            <p className="text-gray-400 mb-4">You have the right to:</p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-electric/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-electric text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold">Access Your Data</h4>
                  <p className="text-gray-400 text-sm">Request a copy of the personal information we hold about you.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-electric/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-electric text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold">Correct Inaccuracies</h4>
                  <p className="text-gray-400 text-sm">Update or correct your personal information.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-electric/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-electric text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold">Delete Your Account</h4>
                  <p className="text-gray-400 text-sm">Request deletion of your account and personal data.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-electric/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-electric text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold">Opt-Out of Marketing</h4>
                  <p className="text-gray-400 text-sm">Unsubscribe from promotional emails at any time.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-electric/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-electric text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold">Data Portability</h4>
                  <p className="text-gray-400 text-sm">Receive your data in a structured, machine-readable format.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 6 */}
        <div data-aos="fade-up" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Cookies and Tracking</h2>
          <div className="card p-6">
            <p className="text-gray-400 mb-4">
              We use cookies and similar technologies to enhance your experience. You can control cookie 
              settings through your browser preferences.
            </p>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold mb-1">Essential Cookies</h4>
                <p className="text-gray-400 text-sm">Required for site functionality and cannot be disabled.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Analytics Cookies</h4>
                <p className="text-gray-400 text-sm">Help us understand how visitors use our site.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Marketing Cookies</h4>
                <p className="text-gray-400 text-sm">Used to deliver relevant advertisements.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 7 */}
        <div data-aos="fade-up" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
          <div className="card p-6">
            <p className="text-gray-400">
              Our services are not intended for children under 13 years of age. We do not knowingly collect 
              personal information from children under 13. If you believe we have collected information from 
              a child under 13, please contact us immediately.
            </p>
          </div>
        </div>

        {/* Section 8 */}
        <div data-aos="fade-up" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">International Users</h2>
          <div className="card p-6">
            <p className="text-gray-400">
              If you are accessing our services from outside the United States, please note that your 
              information may be transferred to, stored, and processed in the United States. By using our 
              services, you consent to this transfer and processing.
            </p>
          </div>
        </div>

        {/* Section 9 */}
        <div data-aos="fade-up" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
          <div className="card p-6">
            <p className="text-gray-400">
              We may update this Privacy Policy from time to time. We will notify you of significant changes 
              by posting the new policy on this page and updating the "Last Updated" date. Your continued use 
              of our services after changes constitutes acceptance of the updated policy.
            </p>
          </div>
        </div>

        {/* Contact */}
        <div data-aos="fade-up">
          <div className="card p-8 bg-gradient-to-r from-electric/10 to-electric-dark/10 border-electric/30 text-center">
            <h2 className="text-2xl font-bold mb-4">Questions About Privacy?</h2>
            <p className="text-gray-400 mb-6">
              If you have questions or concerns about our privacy practices, please contact us:
            </p>
            <div className="space-y-2 text-gray-400">
              <p><strong>Email:</strong> privacy@dexadevices.com</p>
              <p><strong>Phone:</strong> +1 (234) 567-890</p>
              <p><strong>Address:</strong> 123 Tech Street, San Francisco, CA 94102</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}