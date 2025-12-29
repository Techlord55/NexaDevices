// src/app/terms/page.jsx
'use client'

import { FileText, Scale, ShieldAlert, CreditCard, Package, Users } from 'lucide-react'

export default function TermsPage() {
  const lastUpdated = "December 10, 2025"

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16" data-aos="fade-up">
        <div className="inline-flex items-center space-x-2 bg-electric/10 border border-electric/30 rounded-full px-4 py-2 mb-6">
          <Scale className="text-electric" size={20} />
          <span className="text-sm text-electric font-semibold">Legal Agreement</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Terms of <span className="text-electric">Service</span>
        </h1>
        <p className="text-xl text-gray-400">
          Last Updated: {lastUpdated}
        </p>
      </div>

      {/* Introduction */}
      <div data-aos="fade-up" className="card p-8 mb-12 bg-gradient-to-r from-electric/10 to-electric-dark/10 border-electric/30">
        <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
        <p className="text-gray-400">
          Welcome to ElectroStore. By accessing or using our website and services, you agree to be bound 
          by these Terms of Service. If you disagree with any part of these terms, you may not access our 
          services.
        </p>
      </div>

      {/* Content */}
      <div className="prose prose-invert max-w-none">
        {/* Section 1 */}
        <div data-aos="fade-up" className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <Users className="text-electric" size={28} />
            <h2 className="text-2xl font-bold m-0">Account Terms</h2>
          </div>
          
          <div className="card p-6">
            <div className="space-y-4 text-gray-400">
              <p>When you create an account with us, you must:</p>
              <ul className="space-y-2">
                <li>• Be at least 18 years old or have parental consent</li>
                <li>• Provide accurate, current, and complete information</li>
                <li>• Maintain the security of your account credentials</li>
                <li>• Notify us immediately of any unauthorized access</li>
                <li>• Accept responsibility for all activities under your account</li>
                <li>• Not use the account for any illegal or unauthorized purpose</li>
              </ul>
              <div className="mt-4 p-4 bg-electric/10 border border-electric/30 rounded-lg">
                <p className="text-sm m-0">
                  <strong>Important:</strong> You are responsible for maintaining the confidentiality of your 
                  account and password. ElectroStore will not be liable for any loss or damage arising from 
                  your failure to protect your account information.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div data-aos="fade-up" className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <CreditCard className="text-electric" size={28} />
            <h2 className="text-2xl font-bold m-0">Purchases and Payment</h2>
          </div>
          
          <div className="card p-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-electric">Pricing</h3>
                <p className="text-gray-400">
                  All prices are listed in USD and are subject to change without notice. We reserve the right 
                  to modify or discontinue products at any time. Prices do not include applicable taxes or 
                  shipping fees unless stated otherwise.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-electric">Payment Processing</h3>
                <p className="text-gray-400 mb-2">
                  We use Stripe for secure payment processing. By making a purchase, you agree to:
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Provide valid payment information</li>
                  <li>• Authorize us to charge your payment method</li>
                  <li>• Pay all charges at the prices in effect when incurred</li>
                  <li>• Pay applicable taxes and shipping fees</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-electric">Order Acceptance</h3>
                <p className="text-gray-400">
                  We reserve the right to refuse or cancel any order for any reason, including product 
                  availability, errors in pricing or product information, or suspected fraudulent activity.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div data-aos="fade-up" className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <Package className="text-electric" size={28} />
            <h2 className="text-2xl font-bold m-0">Shipping and Delivery</h2>
          </div>
          
          <div className="card p-6">
            <div className="space-y-4 text-gray-400">
              <p>
                We will ship products to the address you provide during checkout. You are responsible for 
                ensuring the accuracy of shipping information.
              </p>
              <ul className="space-y-2">
                <li>• Delivery times are estimates and not guaranteed</li>
                <li>• Risk of loss passes to you upon delivery to the carrier</li>
                <li>• We are not responsible for delays caused by carriers or customs</li>
                <li>• Undeliverable packages may be subject to return shipping fees</li>
              </ul>
              <p>
                See our <a href="/shipping" className="text-electric hover:underline">Shipping Policy</a> for 
                complete details.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div data-aos="fade-up" className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <FileText className="text-electric" size={28} />
            <h2 className="text-2xl font-bold m-0">Returns and Refunds</h2>
          </div>
          
          <div className="card p-6">
            <div className="space-y-4 text-gray-400">
              <p>
                We offer a 30-day return policy on most products. To be eligible for a return:
              </p>
              <ul className="space-y-2">
                <li>• Items must be unused and in original packaging</li>
                <li>• Returns must be initiated within 30 days of delivery</li>
                <li>• Proof of purchase is required</li>
                <li>• Some products may be non-returnable</li>
              </ul>
              <p>
                Refunds will be processed within 5-7 business days after we receive and inspect the returned 
                item. See our <a href="/returns" className="text-electric hover:underline">Return Policy</a> for 
                complete details.
              </p>
            </div>
          </div>
        </div>

        {/* Section 5 */}
        <div data-aos="fade-up" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Product Warranties</h2>
          <div className="card p-6">
            <div className="space-y-4 text-gray-400">
              <p>
                Products are covered by manufacturer warranties as specified in the product documentation. 
                ElectroStore acts as a facilitator for warranty claims but is not responsible for manufacturer 
                warranty terms or fulfillment.
              </p>
              <div className="bg-dark-light p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-white">Disclaimer of Warranties</h4>
                <p className="text-sm m-0">
                  Products are provided "as is" without warranties of any kind, either express or implied. 
                  We do not warrant that products will meet your requirements or be error-free.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 6 */}
        <div data-aos="fade-up" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
          <div className="card p-6">
            <div className="space-y-4 text-gray-400">
              <p>
                All content on this website, including text, graphics, logos, images, and software, is the 
                property of ElectroStore or its licensors and is protected by copyright and trademark laws.
              </p>
              <p>You may not:</p>
              <ul className="space-y-2">
                <li>• Reproduce, duplicate, or copy any content without permission</li>
                <li>• Modify or create derivative works from our content</li>
                <li>• Use our trademarks or branding without authorization</li>
                <li>• Frame or mirror any part of our website</li>
                <li>• Use automated systems to access our website</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 7 */}
        <div data-aos="fade-up" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">User Conduct</h2>
          <div className="card p-6">
            <div className="space-y-4 text-gray-400">
              <p>You agree not to:</p>
              <ul className="space-y-2">
                <li>• Violate any laws or regulations</li>
                <li>• Infringe on intellectual property rights</li>
                <li>• Transmit viruses or malicious code</li>
                <li>• Harass, abuse, or harm other users</li>
                <li>• Impersonate any person or entity</li>
                <li>• Interfere with website operation or security</li>
                <li>• Collect user information without consent</li>
                <li>• Use the service for unauthorized commercial purposes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 8 */}
        <div data-aos="fade-up" className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <ShieldAlert className="text-electric" size={28} />
            <h2 className="text-2xl font-bold m-0">Limitation of Liability</h2>
          </div>
          
          <div className="card p-6">
            <div className="space-y-4 text-gray-400">
              <p>
                To the maximum extent permitted by law, ElectroStore shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages, including loss of profits, data, use, 
                or other intangible losses.
              </p>
              <p>
                Our total liability for any claims arising from your use of our services shall not exceed the 
                amount you paid for the product or service giving rise to the claim, or $100, whichever is less.
              </p>
              <div className="bg-electric/10 border border-electric/30 p-4 rounded-lg">
                <p className="text-sm m-0">
                  <strong>Important:</strong> Some jurisdictions do not allow limitations on implied warranties 
                  or limitation of liability for incidental or consequential damages. In such jurisdictions, our 
                  liability is limited to the greatest extent permitted by law.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 9 */}
        <div data-aos="fade-up" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Indemnification</h2>
          <div className="card p-6">
            <p className="text-gray-400">
              You agree to indemnify, defend, and hold harmless ElectroStore and its officers, directors, 
              employees, and agents from any claims, damages, losses, liabilities, and expenses (including 
              attorney fees) arising from your use of our services or violation of these terms.
            </p>
          </div>
        </div>

        {/* Section 10 */}
        <div data-aos="fade-up" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Dispute Resolution</h2>
          <div className="card p-6">
            <div className="space-y-4 text-gray-400">
              <div>
                <h4 className="font-semibold mb-2 text-white">Informal Resolution</h4>
                <p>
                  If you have a dispute, please contact us first at legal@electrostore.com. We will attempt 
                  to resolve the dispute informally.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-white">Arbitration</h4>
                <p>
                  If we cannot resolve the dispute informally, any dispute shall be resolved through binding 
                  arbitration in accordance with the rules of the American Arbitration Association. The 
                  arbitration will be conducted in San Francisco, California.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-white">Class Action Waiver</h4>
                <p>
                  You agree to resolve disputes on an individual basis only, and not as part of any class or 
                  representative action.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 11 */}
        <div data-aos="fade-up" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
          <div className="card p-6">
            <p className="text-gray-400">
              These Terms shall be governed by and construed in accordance with the laws of the State of 
              California, United States, without regard to its conflict of law provisions.
            </p>
          </div>
        </div>

        {/* Section 12 */}
        <div data-aos="fade-up" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
          <div className="card p-6">
            <p className="text-gray-400">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately 
              upon posting. Your continued use of our services after changes constitutes acceptance of the 
              modified Terms. We encourage you to review these Terms periodically.
            </p>
          </div>
        </div>

        {/* Section 13 */}
        <div data-aos="fade-up" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Severability</h2>
          <div className="card p-6">
            <p className="text-gray-400">
              If any provision of these Terms is found to be unenforceable or invalid, that provision will be 
              limited or eliminated to the minimum extent necessary, and the remaining provisions will remain 
              in full force and effect.
            </p>
          </div>
        </div>

        {/* Section 14 */}
        <div data-aos="fade-up" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Termination</h2>
          <div className="card p-6">
            <div className="space-y-4 text-gray-400">
              <p>
                We may terminate or suspend your account and access to our services immediately, without prior 
                notice, for any reason, including breach of these Terms.
              </p>
              <p>
                Upon termination, your right to use our services will cease immediately. All provisions that 
                should survive termination shall survive, including ownership provisions, warranty disclaimers, 
                and limitations of liability.
              </p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div data-aos="fade-up">
          <div className="card p-8 bg-gradient-to-r from-electric/10 to-electric-dark/10 border-electric/30 text-center">
            <h2 className="text-2xl font-bold mb-4">Questions About These Terms?</h2>
            <p className="text-gray-400 mb-6">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2 text-gray-400">
              <p><strong>Email:</strong> legal@nexadevices.com</p>
              <p><strong>Phone:</strong> +1 (234) 567-890</p>
              <p><strong>Address:</strong> 123 Tech Street, San Francisco, CA 94102</p>
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-500">
                By using ElectroStore, you acknowledge that you have read, understood, and agree to be bound 
                by these Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}