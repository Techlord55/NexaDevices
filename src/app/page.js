// src/app/page.tsx
'use client'

import { useQuery } from '@tanstack/react-query'
import { fetchProducts, fetchCategories } from '@/lib/api'
import HeroSection from '@/components/home/HeroSection'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import CategoryGrid from '@/components/home/CategoryGrid'
import PromoSection from '@/components/home/PromoSection'

export default function HomePage() {
  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  })

  const { data: featuredProducts } = useQuery({
    queryKey: ['featured-products'],
    queryFn: () => fetchProducts({ featured: true }),
  })

  return (
    <div>
      <HeroSection />
      
      {/* Categories */}
      {categories && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div data-aos="fade-up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Shop by <span className="text-electric">Category</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our wide range of electronics across multiple categories
            </p>
          </div>
          <CategoryGrid categories={categories.results || categories} />
        </section>
      )}

      {/* Featured Products */}
      {featuredProducts && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div data-aos="fade-up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-electric">Products</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Handpicked selection of the best electronics
            </p>
          </div>
          <FeaturedProducts products={featuredProducts.results || featuredProducts} />
        </section>
      )}

      {/* Promo Section */}
      <PromoSection />
    </div>
  )
}
