import { defineStore } from 'pinia'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
  }),

  getters: {
    totalItems: (state) => state.items.reduce((total, item) => total + item.quantity, 0),
    totalPrice: (state) =>
      state.items.reduce((total, item) => total + item.price * item.quantity, 0),
  },

  actions: {
    addItem(item: Omit<CartItem, 'quantity'>) {
      const existingItem = this.items.find((i) => i.id === item.id)

      if (existingItem) {
        existingItem.quantity++
      } else {
        this.items.push({ ...item, quantity: 1 })
      }
    },

    removeItem(itemId: number) {
      const index = this.items.findIndex((item) => item.id === itemId)
      if (index > -1) {
        this.items.splice(index, 1)
      }
    },

    updateQuantity(itemId: number, quantity: number) {
      const item = this.items.find((i) => i.id === itemId)
      if (item) {
        item.quantity = Math.max(0, quantity)
        if (item.quantity === 0) {
          this.removeItem(itemId)
        }
      }
    },

    clearCart() {
      this.items = []
    },
  },
})
