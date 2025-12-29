// src/app/products/page.jsx
'use client'

import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import { fetchProducts, fetchCategories } from '@/lib/api'
import ProductCard from '@/components/products/ProductCard'
import { SlidersHorizontal } from 'lucide-react'

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const categoryFromUrl = searchParams.get('category')

  const [filters, setFilters] = useState({
    category: '',
    min_price: '',
    max_price: '',
    in_stock: false,
    ordering: '-created_at',
  })

  // Auto-apply category filter from URL
  useEffect(() => {
    if (categoryFromUrl) {
      setFilters(prev => ({
        ...prev,
        category: categoryFromUrl
      }))
    }
  }, [categoryFromUrl])

  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  })

  const { data: productsData, isLoading } = useQuery({
    queryKey: ['products', filters],
    queryFn: () => fetchProducts(filters),
  })

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">All Products</h1>
        <p className="text-gray-400">Discover our complete electronics collection</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Filters */}
        <div className="lg:col-span-1">
          <div className="card p-6 sticky top-24">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-lg">Filters</h3>
              <SlidersHorizontal size={20} className="text-electric" />
            </div>

            {/* Categories */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Category</h4>
              <select
                value={filters.category}
                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                className="input w-full"
              >
                <option value="">All Categories</option>
                {categories?.results?.map((cat) => (
                  <option key={cat.id} value={cat.slug}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Price Range</h4>
              <div className="space-y-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={filters.min_price}
                  onChange={(e) => setFilters({ ...filters, min_price: e.target.value })}
                  className="input w-full"
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={filters.max_price}
                  onChange={(e) => setFilters({ ...filters, max_price: e.target.value })}
                  className="input w-full"
                />
              </div>
            </div>

            {/* Stock */}
            <div className="mb-6">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.in_stock}
                  onChange={(e) => setFilters({ ...filters, in_stock: e.target.checked })}
                  className="w-4 h-4 rounded border-gray-600 bg-dark-light"
                />
                <span>In Stock Only</span>
              </label>
            </div>

            {/* Sort */}
            <div>
              <h4 className="font-semibold mb-3">Sort By</h4>
              <select
                value={filters.ordering}
                onChange={(e) => setFilters({ ...filters, ordering: e.target.value })}
                className="input w-full"
              >
                <option value="-created_at">Newest</option>
                <option value="price">Price: Low to High</option>
                <option value="-price">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="lg:col-span-3">
          {isLoading ? (
            <div className="text-center py-20">
              <div className="inline-block w-12 h-12 border-4 border-electric border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <>
              <div className="mb-6 text-gray-400">
                {productsData?.count || 0} products found
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {productsData?.results?.map((product, index) => (
                  <div key={product.id} data-aos="fade-up" data-aos-delay={index * 50}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}