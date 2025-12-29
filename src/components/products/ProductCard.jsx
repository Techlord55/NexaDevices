// src/components/products/ProductCard.jsx
'use client'

import Image from 'next/image'
import { ShoppingCart, Eye } from 'lucide-react'
import { useCartStore } from '@/store/cartStore'
import { useState } from 'react'
import QuickViewModal from './QuickViewModal'
import toast from 'react-hot-toast'

export default function ProductCard({ product }) {
  const [showQuickView, setShowQuickView] = useState(false)
  const addItem = useCartStore(state => state.addItem)

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product)
    toast.success('Added to cart!')
  }

  const handleQuickView = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setShowQuickView(true)
  }

  return (
    <>
      <div className="card group overflow-hidden relative">
        {/* Discount Badge */}
        {product.discount_percentage && product.discount_percentage > 0 && (
          <div className="absolute top-4 right-4 z-10 bg-electric text-dark font-bold px-3 py-1 rounded-full text-sm">
            -{product.discount_percentage}%
          </div>
        )}

        {/* Image */}
        <div className="aspect-square relative bg-dark-light overflow-hidden">
          {product.primary_image ? (
            <Image
              src={product.primary_image}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              No Image
            </div>
          )}
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
            <button
              onClick={handleQuickView}
              className="bg-white text-dark p-3 rounded-full hover:bg-electric transition-colors"
            >
              <Eye size={20} />
            </button>
            <button
              onClick={handleAddToCart}
              className="bg-electric text-dark p-3 rounded-full hover:bg-electric-dark transition-colors"
              disabled={!product.in_stock}
            >
              <ShoppingCart size={20} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="text-xs text-electric mb-1">{product.category.name}</div>
          <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-electric transition-colors">
            {product.name}
          </h3>
          
          <div className="flex items-center space-x-2 mb-3">
            <span className="text-2xl font-bold">${product.price}</span>
            {product.compare_price != null && product.compare_price > 0 && (
              <span className="text-gray-500 line-through text-sm">
                ${product.compare_price}
              </span>
            )}
          </div>

          {/* Stock Status */}
          {product.in_stock ? (
            <div className="text-sm text-green-500">In Stock</div>
          ) : (
            <div className="text-sm text-red-500">Out of Stock</div>
          )}
        </div>
      </div>

      {showQuickView && (
        <QuickViewModal
          product={product}
          onClose={() => setShowQuickView(false)}
        />
      )}
    </>
  )
}