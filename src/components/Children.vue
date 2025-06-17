<template>
    <div>
        <p>Component con</p>
        <p>Count từ component cha: {{ count }}</p>
        <button @click="incrementCount">Tăng count</button>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
    count: number
}>()

const emit = defineEmits<{
    'update-count': [value: number]
}>()

const incrementCount = () => {
    emit('update-count', props.count + 1)
}
</script>

<style scoped></style>