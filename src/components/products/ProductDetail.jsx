// src/components/products/ProductDetail.jsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ShoppingCart, Truck, Shield, Heart, Share2 } from 'lucide-react'
import { useCartStore } from '@/store/cartStore'
import toast from 'react-hot-toast'
import ProductCard from './ProductCard'

export default function ProductDetail({ product }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 })
  const [isZooming, setIsZooming] = useState(false)
  const addItem = useCartStore(state => state.addItem)

  const images = product.images?.length ? product.images : [{ image: product.primary_image, alt_text: product.name }]

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product)
    }
    toast.success(`Added ${quantity} item(s) to cart!`)
  }

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setZoomPosition({ x, y })
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Images */}
        <div data-aos="fade-right">
          {/* Main Image */}
          <div
            className="aspect-square relative bg-dark-lighter rounded-2xl overflow-hidden mb-4 cursor-zoom-in"
            onMouseEnter={() => setIsZooming(true)}
            onMouseLeave={() => setIsZooming(false)}
            onMouseMove={handleMouseMove}
          >
            <Image
              src={images[selectedImage]?.image || '/placeholder.png'}
              alt={product.name}
              fill
              className="object-cover"
              style={isZooming ? {
                transform: `scale(2)`,
                transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                transition: 'transform 0.1s ease-out'
              } : {}}
            />
          </div>

          {/* Thumbnail Gallery */}
          {images.length > 1 && (
            <div className="grid grid-cols-6 gap-2">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square relative rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-electric' : 'border-dark-light hover:border-electric/50'
                  }`}
                >
                  <Image
                    src={img.image}
                    alt={img.alt_text || product.name}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div data-aos="fade-left">
          <div className="text-sm text-electric mb-2">{product.category.name}</div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

          {/* Price */}
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-4xl font-bold">${product.price}</span>
            {product.compare_price != null && product.compare_price > 0 && (
              <>
                <span className="text-2xl text-gray-500 line-through">
                  ${product.compare_price}
                </span>
                {product.discount_percentage && product.discount_percentage > 0 && (
                  <span className="bg-electric text-dark font-bold px-3 py-1 rounded-full text-sm">
                    Save {product.discount_percentage}%
                  </span>
                )}
              </>
            )}
          </div>

          {/* Stock Status */}
          <div className="mb-6">
            {product.in_stock ? (
              <div className="inline-flex items-center space-x-2 bg-green-500/10 text-green-500 px-4 py-2 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-semibold">In Stock - {product.stock} available</span>
              </div>
            ) : (
              <div className="inline-flex items-center space-x-2 bg-red-500/10 text-red-500 px-4 py-2 rounded-lg">
                <span className="font-semibold">Out of Stock</span>
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-300 mb-8 leading-relaxed">{product.description}</p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center space-x-3 p-4 bg-dark-lighter rounded-lg">
              <Truck className="text-electric flex-shrink-0" size={24} />
              <div>
                <div className="font-semibold text-sm">Free Shipping</div>
                {product.estimated_delivery_days && (
                  <div className="text-xs text-gray-400">
                    Estimated {product.estimated_delivery_days} days
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-dark-lighter rounded-lg">
              <Shield className="text-electric flex-shrink-0" size={24} />
              <div>
                <div className="font-semibold text-sm">2 Year Warranty</div>
                <div className="text-xs text-gray-400">Full coverage</div>
              </div>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mb-8">
            <label className="block text-sm font-semibold mb-3">Quantity</label>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-12 h-12 rounded-lg bg-dark-lighter hover:bg-dark-light flex items-center justify-center text-xl font-bold transition-colors"
              >
                -
              </button>
              <span className="text-2xl font-bold w-16 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(Math.min(product.stock || 999, quantity + 1))}
                className="w-12 h-12 rounded-lg bg-dark-lighter hover:bg-dark-light flex items-center justify-center text-xl font-bold transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={handleAddToCart}
              disabled={!product.in_stock}
              className="flex-1 btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ShoppingCart size={20} className="mr-2" />
              Add to Cart
            </button>
            <button className="w-12 h-12 btn-secondary flex items-center justify-center">
              <Heart size={20} />
            </button>
            <button className="w-12 h-12 btn-secondary flex items-center justify-center">
              <Share2 size={20} />
            </button>
          </div>

          {/* Specifications */}
          {product.specifications && Object.keys(product.specifications).length > 0 && (
            <div className="border-t border-dark-light pt-8">
              <h3 className="text-xl font-bold mb-4">Specifications</h3>
              <div className="space-y-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-dark-light">
                    <span className="text-gray-400">{key}</span>
                    <span className="font-semibold">{String(value)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      {product.related_products && product.related_products.length > 0 && (
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8" data-aos="fade-up">
            Related <span className="text-electric">Products</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {product.related_products.map((relatedProduct, index) => (
              <div key={relatedProduct.id} data-aos="fade-up" data-aos-delay={index * 50}>
                <ProductCard product={relatedProduct} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}