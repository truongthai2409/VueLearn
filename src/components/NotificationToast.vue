<template>
    <div class="notification-container">
        <TransitionGroup name="notification">
            <div v-for="notification in notificationStore.notifications" :key="notification.id"
                :class="['notification', notification.type]">
                <div class="notification-content">
                    <span class="message">{{ notification.message }}</span>
                    <button class="close-btn" @click="notificationStore.removeNotification(notification.id)">
                        ×
                    </button>
                </div>
            </div>
        </TransitionGroup>
    </div>
</template>

<script setup lang="ts">
import { useNotificationStore } from '@/stores/notification'

const notificationStore = useNotificationStore()
</script>

<style scoped>
.notification-container {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.notification {
    min-width: 300px;
    padding: 15px;
    border-radius: 8px;
    background: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.notification.success {
    border-left: 4px solid #4CAF50;
}

.notification.error {
    border-left: 4px solid #f44336;
}

.notification.info {
    border-left: 4px solid #2196F3;
}

.notification-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.message {
    flex: 1;
    margin-right: 10px;
}

.close-btn {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: #666;
    padding: 0 5px;
}

.close-btn:hover {
    color: #333;
}

/* Animation */
.notification-enter-active,
.notification-leave-active {
    transition: all 0.3s ease;
}

.notification-enter-from {
    opacity: 0;
    transform: translateX(30px);
}

.notification-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>