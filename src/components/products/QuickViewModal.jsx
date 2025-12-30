// src/components/products/QuickViewModal.jsx
'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { X, ShoppingCart, Heart, Star, Minus, Plus } from 'lucide-react'
import { useCartStore } from '@/store/cartStore'
import toast from 'react-hot-toast'
import Link from 'next/link'

function ModalContent({ product, onClose }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const addItem = useCartStore(state => state.addItem)

  const images = product.images?.length ? product.images : [{ image: product.primary_image, alt_text: product.name }]

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product)
    }
    toast.success(`Added ${quantity} item(s) to cart!`)
    onClose()
  }

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center p-4 z-[99999]"
      onClick={onClose}
      style={{
        background: 'rgba(0, 0, 0, 0.95)',
        backdropFilter: 'blur(10px)'
      }}
    >
      {/* Modal Box */}
      <div 
        className="relative bg-dark w-full max-w-6xl rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{ maxHeight: '90vh' }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-electric flex items-center justify-center text-white transition-all"
        >
          <X size={20} />
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto" style={{ maxHeight: '90vh' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left - Images */}
            <div className="bg-dark-lighter p-6 lg:p-10">
              {/* Main Image */}
              <div className="relative aspect-square rounded-xl overflow-hidden bg-dark-light mb-4">
                <Image
                  src={images[selectedImage]?.image || product.primary_image || '/placeholder.png'}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                
                {product.discount_percentage > 0 && (
                  <div className="absolute top-4 left-4 bg-electric text-dark font-bold px-4 py-2 rounded-full text-sm">
                    -{product.discount_percentage}%
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                        selectedImage === idx ? 'border-electric' : 'border-white/10 hover:border-white/30'
                      }`}
                    >
                      <Image
                        src={img.image}
                        alt={`${product.name} ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right - Details */}
            <div className="p-6 lg:p-10">
              {/* Category */}
              <div className="inline-block mb-3">
                <span className="text-xs font-bold uppercase text-electric bg-electric/10 px-3 py-1 rounded-full border border-electric/30">
                  {product.category?.name || 'Category'}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl lg:text-3xl font-bold mb-3 text-white">
                {product.name}
              </h2>

              {/* Rating */}
              {product.average_rating > 0 && (
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < Math.floor(product.average_rating) ? 'fill-electric text-electric' : 'text-gray-600'}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-400">
                    ({product.total_reviews || 0})
                  </span>
                </div>
              )}

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-5 pb-5 border-b border-white/10">
                <span className="text-4xl font-bold text-white">${product.price}</span>
                {product.compare_price > product.price && (
                  <>
                    <span className="text-xl text-gray-500 line-through">${product.compare_price}</span>
                    <span className="text-sm font-bold text-electric">
                      Save ${(product.compare_price - product.price).toFixed(2)}
                    </span>
                  </>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-5 text-sm">
                {product.description}
              </p>

              {/* Stock */}
              <div className="mb-5">
                {product.in_stock ? (
                  <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 px-3 py-2 rounded-lg border border-green-500/30 text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="font-semibold">
                      In Stock
                      {product.stock != null && product.stock < 10 && ` • Only ${product.stock} left!`}
                    </span>
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-400 px-3 py-2 rounded-lg border border-red-500/30 text-sm">
                    <span className="font-semibold">Out of Stock</span>
                  </div>
                )}
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2 text-gray-300 uppercase tracking-wide">
                  Quantity
                </label>
                <div className="flex items-center gap-3">
                  <div className="flex items-center bg-dark-light rounded-lg border border-white/10">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 flex items-center justify-center text-white hover:bg-white/5"
                    >
                      <Minus size={18} />
                    </button>
                    <span className="text-lg font-bold w-12 text-center text-white">{quantity}</span>
                    <button
                      onClick={() => setQuantity(Math.min(product.stock || 999, quantity + 1))}
                      className="w-10 h-10 flex items-center justify-center text-white hover:bg-white/5"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                  {product.stock != null && (
                    <span className="text-sm text-gray-400">{product.stock} available</span>
                  )}
                </div>
              </div>

              {/* Buttons */}
              <div className="space-y-3 mb-5">
                <div className="flex gap-3">
                  <button
                    onClick={handleAddToCart}
                    disabled={!product.in_stock}
                    className="flex-1 bg-electric hover:bg-electric/90 text-dark font-bold py-3 px-6 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <ShoppingCart size={18} />
                    Add to Cart
                  </button>
                  
                  <button 
                    onClick={() => toast.success('Added to wishlist!')}
                    className="w-12 h-12 bg-dark-light hover:bg-dark-lighter border border-white/10 rounded-lg flex items-center justify-center text-white hover:text-electric transition-all"
                  >
                    <Heart size={18} />
                  </button>
                </div>

                <Link
                  href={`/products/${product.slug}`}
                  className="block w-full text-center bg-transparent hover:bg-white/5 text-white font-semibold py-3 px-6 rounded-lg border border-white/20 hover:border-electric/50 transition-all"
                  onClick={onClose}
                >
                  View Full Details
                </Link>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-2 pt-5 border-t border-white/10">
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <div className="text-xl mb-1">🚚</div>
                  <div className="text-xs text-gray-400">Free Shipping</div>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <div className="text-xl mb-1">🛡️</div>
                  <div className="text-xs text-gray-400">2 Year Warranty</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function QuickViewModal({ product, onClose }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  if (!mounted) return null

  return createPortal(
    <ModalContent product={product} onClose={onClose} />,
    document.body
  )
}