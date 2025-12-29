// src/components/search/SearchBar.jsx
'use client'

import { useState, useRef, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useAuth } from '@clerk/nextjs'
import { Search, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import api from '@/lib/api'

export default function SearchBar({ onClose }) {
  const [query, setQuery] = useState('')
  const { getToken } = useAuth()
  const searchRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setQuery('')
        onClose?.()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [onClose])

  const { data: results, isLoading } = useQuery({
    queryKey: ['search', query],
    queryFn: async () => {
      if (query.length < 2) return []
      const token = await getToken()
      const { data } = await api.get('/products/search/', { 
        params: { q: query },
        headers: token ? { Authorization: `Bearer ${token}` } : {}
      })
      return data
    },
    enabled: query.length >= 2,
  })

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for products..."
          className="input w-full pl-12 pr-10 text-base md:text-sm"
          autoFocus
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {/* Results */}
      {query.length >= 2 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-dark-lighter border border-dark-light rounded-xl shadow-2xl max-h-[70vh] md:max-h-96 overflow-y-auto z-50">
          {isLoading ? (
            <div className="p-8 text-center text-gray-400">Searching...</div>
          ) : results?.length === 0 ? (
            <div className="p-8 text-center text-gray-400">No products found</div>
          ) : (
            <div className="p-2">
              {results?.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  onClick={() => {
                    setQuery('')
                    onClose?.()
                  }}
                  className="flex gap-3 md:gap-4 p-3 hover:bg-dark-light rounded-lg transition-colors"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 relative rounded-lg overflow-hidden bg-dark flex-shrink-0">
                    {product.primary_image && (
                      <Image
                        src={product.primary_image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold mb-1 truncate text-sm md:text-base">{product.name}</h4>
                    <p className="text-xs md:text-sm text-gray-400 mb-1">{product.category.name}</p>
                    <p className="text-electric font-bold text-sm md:text-base">${product.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}