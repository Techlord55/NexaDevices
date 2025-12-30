// src/store/cartStore.js
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      
      addItem: (product) => {
        const items = get().items
        const existingItem = items.find(item => item.product.id === product.id)
        
        if (existingItem) {
          set({
            items: items.map(item =>
              item.product.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          })
        } else {
          set({ items: [...items, { product, quantity: 1 }] })
        }
      },
      
      removeItem: (productId) => {
        set({ items: get().items.filter(item => item.product.id !== productId) })
      },
      
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId)
        } else {
          set({
            items: get().items.map(item =>
              item.product.id === productId ? { ...item, quantity } : item
            )
          })
        }
      },
      
      clearCart: () => set({ items: [] }),
      
      toggleCart: () => set({ isOpen: !get().isOpen }),
    }),
    {
      name: 'cart-storage',
    }
  )
)

// Selector hooks for computed values
export const useCartTotal = () => 
  useCartStore((state) => 
    state.items.reduce((sum, item) => {
      const price = parseFloat(item.product.price) || 0
      const quantity = parseInt(item.quantity) || 0
      return sum + (price * quantity)
    }, 0)
  )

export const useCartItemCount = () => 
  useCartStore((state) => 
    state.items.reduce((sum, item) => sum + item.quantity, 0)
  )