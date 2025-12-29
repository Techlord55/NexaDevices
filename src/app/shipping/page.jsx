// src/app/shipping/page.jsx
'use client'

import { Truck, Package, Zap, Globe, Shield, Clock } from 'lucide-react'

export default function ShippingPage() {
  const shippingMethods = [
    {
      icon: Truck,
      name: 'Standard Shipping',
      time: '3-5 Business Days',
      price: 'FREE on orders over $50',
      description: 'Reliable delivery with tracking'
    },
    {
      icon: Zap,
      name: 'Express Shipping',
      time: '1-2 Business Days',
      price: '$15.00',
      description: 'Fast delivery for urgent orders'
    },
    {
      icon: Package,
      name: 'Next Day Delivery',
      time: 'Next Business Day',
      price: '$25.00',
      description: 'Order by 2 PM for next day delivery'
    },
    {
      icon: Globe,
      name: 'International Shipping',
      time: '7-14 Business Days',
      price: 'Varies by location',
      description: 'Worldwide shipping available'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16" data-aos="fade-up">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Shipping <span className="text-electric">Information</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Fast, reliable shipping to get your electronics to you quickly and safely
        </p>
      </div>

      {/* Shipping Methods */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {shippingMethods.map((method, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="card p-6 hover:border-electric/50 transition-all"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-electric/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <method.icon className="text-electric" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">{method.name}</h3>
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-electric font-semibold">{method.time}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-400">{method.price}</span>
                </div>
                <p className="text-gray-400 text-sm">{method.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-6 mb-16" data-aos="fade-up">
        <div className="card p-6 text-center">
          <Shield className="text-electric mx-auto mb-4" size={40} />
          <h3 className="text-lg font-bold mb-2">Secure Packaging</h3>
          <p className="text-gray-400 text-sm">
            All items carefully packaged to prevent damage during transit
          </p>
        </div>

        <div className="card p-6 text-center">
          <Clock className="text-electric mx-auto mb-4" size={40} />
          <h3 className="text-lg font-bold mb-2">Real-time Tracking</h3>
          <p className="text-gray-400 text-sm">
            Track your order every step of the way with live updates
          </p>
        </div>

        <div className="card p-6 text-center">
          <Package className="text-electric mx-auto mb-4" size={40} />
          <h3 className="text-lg font-bold mb-2">Signature Required</h3>
          <p className="text-gray-400 text-sm">
            High-value items require signature for added security
          </p>
        </div>
      </div>

      {/* Shipping Details */}
      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        <div data-aos="fade-right" className="card p-8">
          <h2 className="text-2xl font-bold mb-6">Domestic Shipping</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2 text-electric">Processing Time</h3>
              <p className="text-gray-400">
                Orders are processed within 1-2 business days. Orders placed on weekends or holidays 
                will be processed the next business day.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-electric">Shipping Costs</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Orders under $50: $7.99 standard shipping</li>
                <li>• Orders over $50: FREE standard shipping</li>
                <li>• Express shipping: $15.00 (1-2 days)</li>
                <li>• Next day delivery: $25.00</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-electric">Delivery Areas</h3>
              <p className="text-gray-400">
                We ship to all 50 states. P.O. boxes accepted for standard shipping only.
                Alaska and Hawaii may have extended delivery times.
              </p>
            </div>
          </div>
        </div>

        <div data-aos="fade-left" className="card p-8">
          <h2 className="text-2xl font-bold mb-6">International Shipping</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2 text-electric">Available Countries</h3>
              <p className="text-gray-400">
                We ship to over 100 countries worldwide. Shipping costs and delivery times 
                vary by destination.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-electric">Customs & Duties</h3>
              <p className="text-gray-400">
                International orders may be subject to customs duties and taxes. These fees are 
                the responsibility of the recipient and are not included in the product price.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-electric">Delivery Time</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Canada & Mexico: 5-7 business days</li>
                <li>• Europe: 7-10 business days</li>
                <li>• Asia Pacific: 10-14 business days</li>
                <li>• Rest of World: 14-21 business days</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Tracking Section */}
      <div data-aos="fade-up" className="card p-8 bg-gradient-to-r from-electric/10 to-electric-dark/10 border-electric/30">
        <h2 className="text-2xl font-bold mb-4 text-center">Track Your Order</h2>
        <p className="text-gray-400 text-center mb-6">
          Enter your tracking number to see real-time updates on your shipment
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Enter tracking number"
            className="input flex-1"
          />
          <button className="btn-primary whitespace-nowrap">
            Track Order
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div data-aos="fade-up" className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Shipping <span className="text-electric">FAQ</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="font-bold mb-2">When will my order ship?</h3>
            <p className="text-gray-400 text-sm">
              Most orders ship within 1-2 business days. You'll receive a tracking number via email 
              once your order ships.
            </p>
          </div>

          <div className="card p-6">
            <h3 className="font-bold mb-2">Can I change my shipping address?</h3>
            <p className="text-gray-400 text-sm">
              Address changes can be made within 1 hour of placing your order. Contact us immediately 
              if you need to update your address.
            </p>
          </div>

          <div className="card p-6">
            <h3 className="font-bold mb-2">What if my package is damaged?</h3>
            <p className="text-gray-400 text-sm">
              If your package arrives damaged, take photos and contact us within 48 hours. We'll 
              arrange a replacement or refund.
            </p>
          </div>

          <div className="card p-6">
            <h3 className="font-bold mb-2">Do you ship on weekends?</h3>
            <p className="text-gray-400 text-sm">
              We process and ship orders Monday through Friday. Weekend orders will be processed 
              the following business day.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}