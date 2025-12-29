// src/components/layout/Header.tsx
'use client'

import Link from 'next/link'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { ShoppingCart, Search, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useCartStore } from '@/store/cartStore'
import SearchBar from '../search/SearchBar'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { itemCount, toggleCart } = useCartStore()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-md border-b border-dark-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-electric to-electric-dark rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <span className="text-dark font-bold text-xl">N</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-electric to-white bg-clip-text text-transparent">
              NexaDevices
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-electric transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-gray-300 hover:text-electric transition-colors">
              Products
            </Link>
            <Link href="/categories" className="text-gray-300 hover:text-electric transition-colors">
              Categories
            </Link>
            <Link href="/deals" className="text-gray-300 hover:text-electric transition-colors">
              Deals
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-gray-300 hover:text-electric transition-colors"
            >
              <Search size={22} />
            </button>

            {/* Cart */}
            <button
              onClick={toggleCart}
              className="relative p-2 text-gray-300 hover:text-electric transition-colors"
            >
              <ShoppingCart size={22} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-electric text-dark text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Auth */}
            <SignedOut>
              <SignInButton mode="modal">
                <button className="btn-primary text-sm">Sign In</button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-electric transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-dark-light">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-300 hover:text-electric transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-gray-300 hover:text-electric transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/categories"
                className="text-gray-300 hover:text-electric transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Categories
              </Link>
              <Link
                href="/deals"
                className="text-gray-300 hover:text-electric transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Deals
              </Link>
            </nav>
          </div>
        )}

        {/* Search Bar */}
        {searchOpen && (
          <div className="py-4 border-t border-dark-light">
            <SearchBar onClose={() => setSearchOpen(false)} />
          </div>
        )}
      </div>
    </header>
  )
}
