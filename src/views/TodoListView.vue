<script setup lang="ts">
import TodoList from '../components/TodoList.vue'
</script>

<template>
  <div class="todo-view">
    <h1>Todo List App</h1>
    <TodoList />
  </div>
</template>

<style scoped>
.todo-view {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 30px;
}
</style> 