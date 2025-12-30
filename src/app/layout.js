// src/app/layout.jsx
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { Providers } from '@/app/provider'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/cart/CartDrawer'
import ChatWidget from '@/components/common/ChatWidget'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NexaDevices - Global Electronics Marketplace',
  description: 'Shop the latest electronics including drones, laptops, smart cameras, headphones, and more.',
  keywords: 'electronics, drones, laptops, cameras, headphones, gadgets',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark text-white`}>
          <Providers>
            <Header />
            <main className="min-h-screen pt-20">
              {children}
            </main>
            <Footer />
            <CartDrawer />
            
            {/* Global Chat Widget - Shows on all pages */}
            <ChatWidget />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}