<template>
    <div>
        <p>component cha</p>
        <Children :count="count" @update-count="count = $event" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Children from './Children.vue'

const count = ref(10)
</script>

<style scoped></style>