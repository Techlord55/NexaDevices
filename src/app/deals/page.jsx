// src/app/deals/page.jsx
'use client'

import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { Zap, TrendingDown, Clock, Tag } from 'lucide-react'
import ProductCard from '@/components/products/ProductCard'
import api from '@/lib/api'

export default function DealsPage() {
  const { data: dealsData, isLoading } = useQuery({
    queryKey: ['deals'],
    queryFn: async () => {
      const response = await api.get('/products/', {
        params: {
          ordering: '-discount_percentage',
          page_size: 24
        }
      })
      return response.data
    },
  })

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="inline-block w-12 h-12 border-4 border-electric border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  const products = dealsData?.results || []
  const dealsProducts = products.filter(p => p.discount_percentage > 0)
  const featuredDeals = dealsProducts.slice(0, 3)
  const regularDeals = dealsProducts.slice(3)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16 relative overflow-hidden rounded-3xl bg-gradient-to-r from-electric/20 to-electric-dark/20 p-12 border border-electric/30" data-aos="fade-up">
        <div className="absolute top-0 right-0 w-64 h-64 bg-electric rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-electric-dark rounded-full blur-3xl opacity-20 animate-pulse" />
        
        <div className="relative z-10">
          <div className="inline-flex items-center space-x-2 bg-electric text-dark font-bold px-4 py-2 rounded-full mb-6">
            <Zap size={20} />
            <span>Hot Deals</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Unbeatable <span className="text-electric">Deals</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Save big on premium electronics. Limited time offers on top brands!
          </p>
          
          <div className="flex items-center justify-center gap-8 text-sm">
            <div className="flex items-center space-x-2">
              <TrendingDown className="text-electric" size={20} />
              <span>Up to 70% Off</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="text-electric" size={20} />
              <span>Limited Time</span>
            </div>
            <div className="flex items-center space-x-2">
              <Tag className="text-electric" size={20} />
              <span>Best Prices</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Deals */}
      {featuredDeals.length > 0 && (
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8" data-aos="fade-up">
            🔥 Featured <span className="text-electric">Deals</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDeals.map((product, index) => (
              <div 
                key={product.id} 
                data-aos="zoom-in" 
                data-aos-delay={index * 100}
                className="relative"
              >
                {/* Best Deal Badge */}
                {index === 0 && (
                  <div className="absolute -top-4 -right-4 z-10 bg-gradient-to-r from-electric to-electric-dark text-dark font-bold px-4 py-2 rounded-full text-sm shadow-lg transform rotate-12 animate-pulse">
                    Best Deal!
                  </div>
                )}
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Deal Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16" data-aos="fade-up">
        <Link href="/products?category=drones" className="card p-6 text-center hover:bg-dark-light transition-all group">
          <div className="w-12 h-12 bg-electric/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-electric/20 transition-colors">
            <Zap className="text-electric" size={24} />
          </div>
          <h4 className="font-bold mb-1 group-hover:text-electric transition-colors">Drone Deals</h4>
          <p className="text-xs text-gray-400">Up to 50% Off</p>
        </Link>

        <Link href="/products?category=laptops" className="card p-6 text-center hover:bg-dark-light transition-all group">
          <div className="w-12 h-12 bg-electric/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-electric/20 transition-colors">
            <Zap className="text-electric" size={24} />
          </div>
          <h4 className="font-bold mb-1 group-hover:text-electric transition-colors">Laptop Deals</h4>
          <p className="text-xs text-gray-400">Up to 40% Off</p>
        </Link>

        <Link href="/products?category=cameras" className="card p-6 text-center hover:bg-dark-light transition-all group">
          <div className="w-12 h-12 bg-electric/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-electric/20 transition-colors">
            <Zap className="text-electric" size={24} />
          </div>
          <h4 className="font-bold mb-1 group-hover:text-electric transition-colors">Camera Deals</h4>
          <p className="text-xs text-gray-400">Up to 35% Off</p>
        </Link>

        <Link href="/products?category=headphones" className="card p-6 text-center hover:bg-dark-light transition-all group">
          <div className="w-12 h-12 bg-electric/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-electric/20 transition-colors">
            <Zap className="text-electric" size={24} />
          </div>
          <h4 className="font-bold mb-1 group-hover:text-electric transition-colors">Audio Deals</h4>
          <p className="text-xs text-gray-400">Up to 60% Off</p>
        </Link>
      </div>

      {/* All Deals */}
      {regularDeals.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-8" data-aos="fade-up">
            <h2 className="text-3xl font-bold">
              All <span className="text-electric">Deals</span>
            </h2>
            <div className="text-gray-400">
              {dealsProducts.length} products on sale
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {regularDeals.map((product, index) => (
              <div key={product.id} data-aos="fade-up" data-aos-delay={index * 50}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* No Deals State */}
      {dealsProducts.length === 0 && (
        <div className="text-center py-20" data-aos="fade-up">
          <Tag size={64} className="mx-auto text-gray-600 mb-4" />
          <h2 className="text-2xl font-bold mb-2">No Active Deals</h2>
          <p className="text-gray-400 mb-6">Check back soon for amazing discounts!</p>
          <Link href="/products" className="btn-primary inline-block">
            Browse All Products
          </Link>
        </div>
      )}

      {/* Newsletter Section */}
      <div className="mt-20 bg-gradient-to-r from-electric/10 to-electric-dark/10 rounded-2xl p-12 border border-electric/20 text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4">
          Never Miss a Deal
        </h2>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Subscribe to our newsletter and be the first to know about exclusive deals and offers
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="input flex-1"
          />
          <button className="btn-primary whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}