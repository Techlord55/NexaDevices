// src/components/home/HeroSection.tsx
'use client'

import Link from 'next/link'
import { ChevronRight, Zap } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric/10 via-dark to-dark" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-electric rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-electric-dark rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div data-aos="fade-up">
          <div className="inline-flex items-center space-x-2 bg-electric/10 border border-electric/30 rounded-full px-4 py-2 mb-6">
            <Zap size={16} className="text-electric" />
            <span className="text-sm text-electric font-semibold">New Arrivals Every Week</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Next-Gen <br />
            <span className="bg-gradient-to-r from-electric via-white to-electric bg-clip-text text-transparent">
              Electronics
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover cutting-edge technology and premium gadgets. 
            From drones to laptops, we've got everything you need.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/products" className="btn-primary inline-flex items-center group">
              Shop Now
              <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/categories" className="btn-secondary">
              Browse Categories
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div data-aos="fade-up" data-aos-delay="200" className="grid grid-cols-3 gap-8 mt-16">
          <div>
            <div className="text-4xl font-bold text-electric mb-2">500+</div>
            <div className="text-gray-400">Products</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-electric mb-2">50K+</div>
            <div className="text-gray-400">Happy Customers</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-electric mb-2">4.9★</div>
            <div className="text-gray-400">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  )
}