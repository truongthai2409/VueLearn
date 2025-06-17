<template>
    <div class="login">
        <h1>Login</h1>
        <Form :validation-schema="loginSchema" @submit="handleLogin" v-slot="{ errors, isSubmitting }">
            <div class="form-group">
                <label for="username">Username:</label>
                <Field name="username" v-slot="{ field, errorMessage }">
                    <input v-bind="field" type="text" id="username" :class="{ 'is-invalid': errorMessage }" />
                    <span class="error-message">{{ errorMessage }}</span>
                </Field>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <Field name="password" v-slot="{ field, errorMessage }">
                    <input v-bind="field" type="password" id="password" :class="{ 'is-invalid': errorMessage }" />
                    <span class="error-message">{{ errorMessage }}</span>
                </Field>
            </div>
            <button type="submit" :disabled="isSubmitting">
                {{ isSubmitting ? 'Logging in...' : 'Login' }}
            </button>
        </Form>
    </div>
</template>

<script setup lang="ts">
import { Form, Field, type SubmissionHandler } from 'vee-validate'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { loginSchema } from '../validations/auth'


const router = useRouter()
const authStore = useAuthStore()

const handleLogin = (async (values: any) => {
    const success = await authStore.login({
        username: values.username,
        password: values.password,
    })

    if (success) {
        router.push('/dashboard')
    }
}) as SubmissionHandler
</script>

<style scoped>
.login {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

input.is-invalid {
    border-color: #dc3545;
}

.error-message {
    color: #dc3545;
    font-size: 0.875rem;
    margin-top: 4px;
    display: block;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover:not(:disabled) {
    background-color: #0056b3;
}

button:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
}
</style>