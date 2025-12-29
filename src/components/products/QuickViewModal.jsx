// src/components/products/QuickViewModal.jsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ShoppingCart, Truck, Shield } from 'lucide-react'
import { useCartStore } from '@/store/cartStore'
import toast from 'react-hot-toast'
import Link from 'next/link'

export default function QuickViewModal({ product, onClose }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const addItem = useCartStore(state => state.addItem)

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product)
    }
    toast.success(`Added ${quantity} item(s) to cart!`)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-dark-lighter rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-dark-light animate-zoom-in">
        {/* Header */}
        <div className="sticky top-0 bg-dark-lighter border-b border-dark-light p-4 flex items-center justify-between z-10">
          <h2 className="text-xl font-bold">Quick View</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-dark-light rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 p-6">
          {/* Images */}
          <div>
            <div className="aspect-square relative bg-dark-light rounded-xl overflow-hidden mb-4">
              <Image
                src={product.primary_image || '/placeholder.png'}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div>
            <div className="text-sm text-electric mb-2">{product.category.name}</div>
            <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
            
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-3xl font-bold">${product.price}</span>
              {product.compare_price != null && product.compare_price > 0 && (
                <>
                  <span className="text-gray-500 line-through text-xl">
                    ${product.compare_price}
                  </span>
                  {product.discount_percentage && product.discount_percentage > 0 && (
                    <span className="bg-electric text-dark font-bold px-2 py-1 rounded text-sm">
                      Save {product.discount_percentage}%
                    </span>
                  )}
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-300 mb-6 line-clamp-3">
              {product.description}
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-2 text-sm">
                <Truck className="text-electric" size={20} />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Shield className="text-electric" size={20} />
                <span>2 Year Warranty</span>
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-sm mb-2">Quantity</label>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg bg-dark-light hover:bg-dark flex items-center justify-center"
                >
                  -
                </button>
                <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(product.stock || 999, quantity + 1))}
                  className="w-10 h-10 rounded-lg bg-dark-light hover:bg-dark flex items-center justify-center"
                >
                  +
                </button>
                {product.stock != null && (
                  <span className="text-sm text-gray-400">
                    {product.stock} available
                  </span>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <button
                onClick={handleAddToCart}
                disabled={!product.in_stock}
                className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ShoppingCart size={20} className="mr-2" />
                Add to Cart
              </button>
              <Link
                href={`/products/${product.slug}`}
                className="flex-1 btn-secondary text-center"
                onClick={onClose}
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}