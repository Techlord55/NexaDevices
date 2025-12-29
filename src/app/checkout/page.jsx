// src/app/checkout/page.jsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCartStore } from '@/store/cartStore'
import { useUser } from '@clerk/nextjs'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { createOrder } from '@/lib/api'
import toast from 'react-hot-toast'
import Image from 'next/image'
import Link from 'next/link'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

function CheckoutForm({ clientSecret }) {
  const stripe = useStripe()
  const elements = useElements()
  const router = useRouter()
  const clearCart = useCartStore(state => state.clearCart)
  const [isProcessing, setIsProcessing] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) return

    setIsProcessing(true)

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/order-confirmation`,
      },
    })

    if (error) {
      toast.error(error.message || 'Payment failed')
      setIsProcessing(false)
    } else {
      clearCart()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement />
      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full btn-primary disabled:opacity-50"
      >
        {isProcessing ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  )
}

export default function CheckoutPage() {
  const { items, total } = useCartStore()
  const { user, getToken } = useUser()
  const [clientSecret, setClientSecret] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    if (!user) {
      toast.error('Please sign in to continue')
      return
    }

    setLoading(true)
    try {
      const token = await getToken()
      const orderData = {
        items: items.map(item => ({
          product_id: item.product.id,
          quantity: item.quantity,
        })),
        shipping_address_id: 1, // Replace with actual address
        shipping_method: 'standard',
      }

      const response = await createOrder(orderData, token)
      setClientSecret(response.client_secret)
    } catch (error) {
      toast.error('Failed to create order')
    } finally {
      setLoading(false)
    }
  }

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
        <p className="text-gray-400 mb-8">Add some products to continue</p>
        <Link href="/products" className="btn-primary inline-block">
          Browse Products
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Checkout</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Order Summary */}
        <div className="lg:col-span-2">
          {!clientSecret ? (
            <div className="card p-6">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-4">
                    <div className="w-20 h-20 relative rounded-lg overflow-hidden">
                      <Image
                        src={item.product.primary_image || '/placeholder.png'}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.product.name}</h3>
                      <p className="text-gray-400">Quantity: {item.quantity}</p>
                      <p className="text-electric font-bold">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={handleCheckout}
                disabled={loading}
                className="w-full btn-primary"
              >
                {loading ? 'Processing...' : 'Continue to Payment'}
              </button>
            </div>
          ) : (
            <div className="card p-6">
              <h2 className="text-2xl font-bold mb-6">Payment Details</h2>
              <Elements stripe={stripePromise} options={{ clientSecret }}>
                <CheckoutForm clientSecret={clientSecret} />
              </Elements>
            </div>
          )}
        </div>

        {/* Price Summary */}
        <div className="card p-6 h-fit">
          <h3 className="text-xl font-bold mb-4">Price Details</h3>
          <div className="space-y-3 mb-4">
            <div className="flex justify-between">
              <span className="text-gray-400">Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Shipping</span>
              <span>$10.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Tax</span>
              <span>${(total * 0.08).toFixed(2)}</span>
            </div>
            <div className="border-t border-dark-light pt-3 flex justify-between text-xl font-bold">
              <span>Total</span>
              <span className="text-electric">
                ${(total + 10 + total * 0.08).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}