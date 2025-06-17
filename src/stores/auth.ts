import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    user: null as any,
  }),

  actions: {
    login(credentials: { username: string; password: string }) {
      // In a real application, you would make an API call here
      // This is just a mock implementation
      if (credentials.username && credentials.password) {
        this.isAuthenticated = true
        this.user = { username: credentials.username }
        return true
      }
      return false
    },

    logout() {
      this.isAuthenticated = false
      this.user = null
    },
  },

  getters: {
    isLoggedIn: (state) => state.isAuthenticated,
  },
})
