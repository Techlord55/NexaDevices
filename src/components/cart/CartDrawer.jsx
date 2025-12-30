// src/components/cart/CartDrawer.tsx
'use client'

import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react'
import { useCartStore, useCartTotal } from '@/store/cartStore'
import { SignInButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

export default function CartDrawer() {
  const { items, isOpen, toggleCart, updateQuantity, removeItem } = useCartStore()
  const total = useCartTotal()
  const { isSignedIn } = useUser()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 animate-fade-in"
          onClick={toggleCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-96 bg-dark-lighter border-l border-dark-light z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-dark-light">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl font-bold">Shopping Cart</h2>
              <button
                onClick={toggleCart}
                className="p-2 hover:bg-dark-light rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <p className="text-gray-400 text-sm">
              {items.length} {items.length === 1 ? 'item' : 'items'}
            </p>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={64} className="text-gray-600 mb-4" />
                <p className="text-gray-400 mb-6">Your cart is empty</p>
                <button onClick={toggleCart} className="btn-primary">
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-4 p-4 bg-dark rounded-lg border border-dark-light"
                  >
                    {/* Image */}
                    <div className="w-20 h-20 relative rounded-lg overflow-hidden bg-dark-light flex-shrink-0">
                      <Image
                        src={item.product.primary_image || '/placeholder.png'}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold mb-1 truncate">
                        {item.product.name}
                      </h3>
                      <p className="text-electric font-bold mb-2">
                        ${item.product.price}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-7 h-7 rounded bg-dark-light hover:bg-dark flex items-center justify-center"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-7 h-7 rounded bg-dark-light hover:bg-dark flex items-center justify-center"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="self-start p-2 text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-dark-light p-6 space-y-4">
              {/* Subtotal */}
              <div className="flex justify-between text-lg">
                <span className="text-gray-400">Subtotal</span>
                <span className="font-bold">${total.toFixed(2)}</span>
              </div>

              {/* Shipping Note */}
              <p className="text-sm text-gray-400 text-center">
                Shipping and taxes calculated at checkout
              </p>

              {/* Checkout Button - Conditional based on auth */}
              {isSignedIn ? (
                <Link
                  href="/checkout"
                  onClick={toggleCart}
                  className="block w-full btn-primary text-center"
                >
                  Proceed to Checkout
                </Link>
              ) : (
                <SignInButton mode="modal">
                  <button className="w-full btn-primary">
                    Sign In to Checkout
                  </button>
                </SignInButton>
              )}

              {/* Continue Shopping */}
              <button
                onClick={toggleCart}
                className="w-full btn-secondary"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}