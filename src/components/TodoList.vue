<script setup lang="ts">
import { ref } from 'vue'

interface Todo {
  id: number
  text: string
  completed: boolean
}

const todos = ref<Todo[]>([])
const newTodo = ref('')

const addTodo = () => {
  if (newTodo.value.trim()) {
    todos.value.push({
      id: Date.now(),
      text: newTodo.value.trim(),
      completed: false
    })
    newTodo.value = ''
  }
}

const removeTodo = (id: number) => {
  todos.value = todos.value.filter(todo => todo.id !== id)
}

const toggleTodo = (id: number) => {
  const todo = todos.value.find(todo => todo.id === id)
  if (todo) {
    todo.completed = !todo.completed
  }
}
</script>

<template>
  <div class="todo-list">
    <h2>Todo List</h2>
    
    <!-- Form thêm todo mới -->
    <div class="add-todo">
      <input 
        v-model="newTodo"
        @keyup.enter="addTodo"
        type="text"
        placeholder="Thêm công việc mới..."
        class="todo-input"
      >
      <button @click="addTodo" class="add-button">Thêm</button>
    </div>

    <!-- Danh sách todo -->
    <ul class="todos">
      <li v-for="todo in todos" :key="todo.id" class="todo-item">
        <div class="todo-content">
          <input 
            type="checkbox"
            :checked="todo.completed"
            @change="toggleTodo(todo.id)"
            class="todo-checkbox"
          >
          <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
        </div>
        <button @click="removeTodo(todo.id)" class="delete-button">Xóa</button>
      </li>
    </ul>

    <!-- Thông báo khi không có todo -->
    <p v-if="todos.length === 0" class="empty-message">
      Chưa có công việc nào. Hãy thêm công việc mới!
    </p>
  </div>
</template>

<style scoped>
.todo-list {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

h2 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 20px;
}

.add-todo {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.todo-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.add-button {
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.add-button:hover {
  background-color: #3aa876;
}

.todos {
  list-style: none;
  padding: 0;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background-color: #f8f9fa;
  border-radius: 4px;
  margin-bottom: 8px;
}

.todo-content {
  display: flex;
  align-items: center;
  gap: 10px;
}

.todo-checkbox {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.completed {
  text-decoration: line-through;
  color: #888;
}

.delete-button {
  padding: 6px 12px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.delete-button:hover {
  background-color: #c82333;
}

.empty-message {
  text-align: center;
  color: #666;
  font-style: italic;
}
</style> 