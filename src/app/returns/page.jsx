// src/app/returns/page.jsx
'use client'

import { RotateCcw, CheckCircle, XCircle, Package, Shield, Clock } from 'lucide-react'

export default function ReturnsPage() {
  const returnSteps = [
    {
      step: 1,
      title: 'Request Return',
      description: 'Contact us within 30 days of delivery to initiate your return'
    },
    {
      step: 2,
      title: 'Get Authorization',
      description: 'Receive your RMA number and return shipping label via email'
    },
    {
      step: 3,
      title: 'Pack & Ship',
      description: 'Securely package the item and ship it back using our label'
    },
    {
      step: 4,
      title: 'Get Refund',
      description: 'Receive your refund within 5-7 business days after we receive the item'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16" data-aos="fade-up">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Returns & <span className="text-electric">Refunds</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Not satisfied? No problem. We offer hassle-free returns within 30 days
        </p>
      </div>

      {/* Key Features */}
      <div className="grid md:grid-cols-3 gap-6 mb-16" data-aos="fade-up">
        <div className="card p-6 text-center">
          <div className="w-16 h-16 bg-electric/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Clock className="text-electric" size={32} />
          </div>
          <h3 className="text-lg font-bold mb-2">30-Day Returns</h3>
          <p className="text-gray-400 text-sm">
            Full refund or exchange within 30 days of delivery
          </p>
        </div>

        <div className="card p-6 text-center">
          <div className="w-16 h-16 bg-electric/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Package className="text-electric" size={32} />
          </div>
          <h3 className="text-lg font-bold mb-2">Free Return Shipping</h3>
          <p className="text-gray-400 text-sm">
            We provide prepaid return labels for your convenience
          </p>
        </div>

        <div className="card p-6 text-center">
          <div className="w-16 h-16 bg-electric/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="text-electric" size={32} />
          </div>
          <h3 className="text-lg font-bold mb-2">Money-Back Guarantee</h3>
          <p className="text-gray-400 text-sm">
            100% satisfaction guaranteed or your money back
          </p>
        </div>
      </div>

      {/* Return Process */}
      <div data-aos="fade-up" className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          How to <span className="text-electric">Return</span>
        </h2>
        
        <div className="grid md:grid-cols-4 gap-6">
          {returnSteps.map((item, index) => (
            <div key={index} data-aos="zoom-in" data-aos-delay={index * 100} className="relative">
              <div className="card p-6 text-center h-full">
                <div className="w-12 h-12 bg-electric text-dark font-bold rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
              {index < returnSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-electric">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Return Policy Details */}
      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        <div data-aos="fade-right" className="card p-8">
          <div className="flex items-center space-x-3 mb-6">
            <CheckCircle className="text-green-500" size={28} />
            <h2 className="text-2xl font-bold">Eligible for Return</h2>
          </div>
          
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-start">
              <span className="text-electric mr-2">✓</span>
              <span>Unopened items in original packaging</span>
            </li>
            <li className="flex items-start">
              <span className="text-electric mr-2">✓</span>
              <span>Defective or damaged products</span>
            </li>
            <li className="flex items-start">
              <span className="text-electric mr-2">✓</span>
              <span>Wrong item shipped by mistake</span>
            </li>
            <li className="flex items-start">
              <span className="text-electric mr-2">✓</span>
              <span>Items with all original accessories and documentation</span>
            </li>
            <li className="flex items-start">
              <span className="text-electric mr-2">✓</span>
              <span>Products purchased within the last 30 days</span>
            </li>
            <li className="flex items-start">
              <span className="text-electric mr-2">✓</span>
              <span>Items with valid proof of purchase</span>
            </li>
          </ul>
        </div>

        <div data-aos="fade-left" className="card p-8">
          <div className="flex items-center space-x-3 mb-6">
            <XCircle className="text-red-500" size={28} />
            <h2 className="text-2xl font-bold">Not Eligible for Return</h2>
          </div>
          
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-start">
              <span className="text-red-500 mr-2">✗</span>
              <span>Items opened or used (unless defective)</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">✗</span>
              <span>Products without original packaging</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">✗</span>
              <span>Items purchased over 30 days ago</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">✗</span>
              <span>Software or digital products after activation</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">✗</span>
              <span>Clearance or final sale items</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">✗</span>
              <span>Products damaged by misuse or accident</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Refund Information */}
      <div data-aos="fade-up" className="card p-8 mb-16">
        <h2 className="text-2xl font-bold mb-6">Refund Information</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-3 text-electric">Processing Time</h3>
            <p className="text-gray-400 mb-4">
              Once we receive your returned item, we'll inspect it and process your refund within 
              3-5 business days. You'll receive an email confirmation when your refund is issued.
            </p>
            
            <h3 className="font-semibold mb-3 text-electric">Refund Method</h3>
            <p className="text-gray-400">
              Refunds will be issued to your original payment method. Please allow 5-10 business days 
              for the refund to appear in your account, depending on your bank or card issuer.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-electric">Partial Refunds</h3>
            <p className="text-gray-400 mb-4">
              In some cases, partial refunds may be granted for items that are returned with missing 
              parts, signs of use, or without original packaging.
            </p>
            
            <h3 className="font-semibold mb-3 text-electric">Store Credit</h3>
            <p className="text-gray-400">
              If you prefer, you can opt for store credit instead of a refund. Store credit is issued 
              immediately and never expires.
            </p>
          </div>
        </div>
      </div>

      {/* Exchange Policy */}
      <div data-aos="fade-up" className="card p-8 mb-16">
        <h2 className="text-2xl font-bold mb-6">Exchange Policy</h2>
        
        <p className="text-gray-400 mb-6">
          If you'd like to exchange your item for a different product, we're happy to help! 
          Exchanges follow the same 30-day policy as returns.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-dark-light p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Same Price</h4>
            <p className="text-gray-400 text-sm">Exchange for items of equal value at no additional cost</p>
          </div>
          <div className="bg-dark-light p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Higher Price</h4>
            <p className="text-gray-400 text-sm">Pay the difference for more expensive items</p>
          </div>
          <div className="bg-dark-light p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Lower Price</h4>
            <p className="text-gray-400 text-sm">Receive store credit for the difference</p>
          </div>
        </div>
      </div>

      {/* Start Return */}
      <div data-aos="fade-up" className="card p-8 bg-gradient-to-r from-electric/10 to-electric-dark/10 border-electric/30 text-center">
        <RotateCcw className="text-electric mx-auto mb-4" size={48} />
        <h2 className="text-2xl font-bold mb-4">Ready to Start a Return?</h2>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Contact our support team to initiate your return. We'll guide you through the process and 
          provide everything you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" className="btn-primary inline-block">
            Contact Support
          </a>
          <a href="mailto:returns@electrostore.com" className="btn-secondary inline-block">
            Email Returns Team
          </a>
        </div>
      </div>

      {/* FAQ */}
      <div data-aos="fade-up" className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Return <span className="text-electric">FAQ</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="font-bold mb-2">How long do I have to return an item?</h3>
            <p className="text-gray-400 text-sm">
              You have 30 days from the delivery date to initiate a return. Items must be in 
              original condition with all accessories.
            </p>
          </div>

          <div className="card p-6">
            <h3 className="font-bold mb-2">Who pays for return shipping?</h3>
            <p className="text-gray-400 text-sm">
              We provide free return shipping labels for all eligible returns. If the item is defective 
              or we made an error, we cover all costs.
            </p>
          </div>

          <div className="card p-6">
            <h3 className="font-bold mb-2">Can I return a gift?</h3>
            <p className="text-gray-400 text-sm">
              Yes! Gift recipients can return items for store credit. Original purchasers can return 
              gifts for a full refund to the original payment method.
            </p>
          </div>

          <div className="card p-6">
            <h3 className="font-bold mb-2">What if I lost the receipt?</h3>
            <p className="text-gray-400 text-sm">
              If you have an account, we can look up your order history. Otherwise, we may be able to 
              offer store credit based on the current selling price.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}