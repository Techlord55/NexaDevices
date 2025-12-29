// src/app/categories/page.jsx
'use client'

import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Package } from 'lucide-react'
import api from '@/lib/api'

function CategoriesPage() {
  const { data: categories, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await api.get('/categories/')
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

  const categoryList = categories?.results || categories || []

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16" data-aos="fade-up">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Browse <span className="text-electric">Categories</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Explore our wide range of electronics across multiple categories
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categoryList.map((category, index) => (
          <Link
            key={category.id}
            href={`/products?category=${category.slug}`}
            data-aos="fade-up"
            data-aos-delay={index * 50}
            className="group"
          >
            <div className="card overflow-hidden h-full transition-all duration-300 hover:scale-105">
              {/* Image */}
              <div className="aspect-video relative bg-dark-light overflow-hidden">
                {category.image ? (
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Package size={64} className="text-gray-600" />
                  </div>
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                {/* Product Count Badge */}
                <div className="absolute top-4 right-4 bg-electric text-dark font-bold px-3 py-1 rounded-full text-sm">
                  {category.product_count} Products
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-electric transition-colors">
                  {category.name}
                </h3>
                
                {category.description && (
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {category.description}
                  </p>
                )}

                <div className="flex items-center text-electric font-semibold group-hover:translate-x-2 transition-transform">
                  <span>Browse Products</span>
                  <ArrowRight size={20} className="ml-2" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Empty State */}
      {categoryList.length === 0 && (
        <div className="text-center py-20" data-aos="fade-up">
          <Package size={64} className="mx-auto text-gray-600 mb-4" />
          <h2 className="text-2xl font-bold mb-2">No Categories Found</h2>
          <p className="text-gray-400">Check back later for new categories</p>
        </div>
      )}

      {/* Popular Categories Section */}
      {categoryList.length > 0 && (
        <div className="mt-20" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Popular <span className="text-electric">Categories</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categoryList.slice(0, 4).map((category, index) => (
              <Link
                key={`popular-${category.id}`}
                href={`/products?category=${category.slug}`}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="card p-6 text-center hover:bg-dark-light transition-all group"
              >
                <div className="w-16 h-16 bg-electric/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-electric/20 transition-colors">
                  <Package size={32} className="text-electric" />
                </div>
                <h4 className="font-bold mb-1 group-hover:text-electric transition-colors">
                  {category.name}
                </h4>
                <p className="text-sm text-gray-400">
                  {category.product_count} items
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="mt-20 text-center bg-gradient-to-r from-electric/10 to-electric-dark/10 rounded-2xl p-12 border border-electric/20" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4">
          Can't Find What You're Looking For?
        </h2>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Browse all our products or use our search feature to find exactly what you need
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/products" className="btn-primary inline-block">
            View All Products
          </Link>
          <Link href="/contact" className="btn-secondary inline-block">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CategoriesPage