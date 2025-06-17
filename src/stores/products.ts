import { defineStore } from 'pinia'

export interface Product {
  id: number
  name: string
  price: number
  image: string
  description: string
}

export const useProductStore = defineStore('products', {
  state: () => ({
    products: [
      {
        id: 1,
        name: 'iPhone 15 Pro',
        price: 24990000,
        image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569',
        description: 'iPhone 15 Pro với chip A17 Pro, camera 48MP',
      },
      {
        id: 2,
        name: 'Samsung Galaxy S24 Ultra',
        price: 29990000,
        image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c',
        description: 'Samsung Galaxy S24 Ultra với camera 200MP',
      },
      {
        id: 3,
        name: 'MacBook Pro M3',
        price: 39990000,
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
        description: 'MacBook Pro với chip M3, màn hình Liquid Retina XDR',
      },
      {
        id: 4,
        name: 'AirPods Pro 2',
        price: 5990000,
        image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434',
        description: 'AirPods Pro 2 với chống ồn chủ động',
      },
      {
        id: 5,
        name: 'iPad Pro M2',
        price: 19990000,
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0',
        description: 'iPad Pro với chip M2, màn hình Liquid Retina',
      },
    ] as Product[],
  }),

  getters: {
    getProductById: (state) => (id: number) => {
      return state.products.find((product) => product.id === id)
    },
  },
})
