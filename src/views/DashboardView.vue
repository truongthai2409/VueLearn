<template>
    <div class="dashboard">
        <h1>Dashboard</h1>
        <p>This is a protected route. You can only see this if you're logged in.</p>
        <div v-if="authStore.user">
            <p>Welcome, {{ authStore.user.username }}!</p>
            <button @click="handleLogout">Logout</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '../stores/auth'

const authStore = useAuthStore()

const handleLogout = () => {
    authStore.logout()
}
</script>

<style scoped>
.dashboard {
    padding: 20px;
}

button {
    padding: 8px 16px;
    background-color: #dc3545;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #c82333;
}
</style>