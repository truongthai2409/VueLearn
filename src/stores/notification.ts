import { defineStore } from 'pinia'

interface Notification {
  id: number
  message: string
  type: 'success' | 'error' | 'info'
}

export const useNotificationStore = defineStore('notification', {
  state: () => ({
    notifications: [] as Notification[],
    nextId: 1,
  }),

  actions: {
    addNotification(message: string, type: 'success' | 'error' | 'info' = 'success') {
      const id = this.nextId++
      this.notifications.push({ id, message, type })

      // Tự động xóa thông báo sau 3 giây
      setTimeout(() => {
        this.removeNotification(id)
      }, 3000)
    },

    removeNotification(id: number) {
      const index = this.notifications.findIndex((n) => n.id === id)
      if (index > -1) {
        this.notifications.splice(index, 1)
      }
    },
  },
})
