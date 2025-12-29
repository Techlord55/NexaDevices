// src/components/layout/Footer.tsx
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark-lighter border-t border-dark-light mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold bg-gradient-to-r from-electric to-white bg-clip-text text-transparent mb-4">
             NexaDevices
            </h3>
            <p className="text-gray-400 text-sm">
              Your trusted source for cutting-edge electronics and gadgets.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-electric transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-electric transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-electric transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-electric transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/products" className="hover:text-electric transition-colors">All Products</Link></li>
              <li><Link href="/categories" className="hover:text-electric transition-colors">Categories</Link></li>
              <li><Link href="/deals" className="hover:text-electric transition-colors">Deals</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/contact" className="hover:text-electric transition-colors">Contact Us</Link></li>
              <li><Link href="/shipping" className="hover:text-electric transition-colors">Shipping Info</Link></li>
              <li><Link href="/returns" className="hover:text-electric transition-colors">Returns</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/privacy" className="hover:text-electric transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-electric transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-light mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} NexaDevices. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}