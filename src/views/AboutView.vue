<script setup lang="ts">
import { ref, computed } from 'vue'
// import button from '@/components/Button.vue'

// Tạo mới một mảng object bất kì
const people = ref([
  { id: 1, name: 'Alice', age: 25, address: "HCM" },
  { id: 2, name: 'Bob', age: 30, address: "HCM" },
  { id: 3, name: 'Charlie', age: 22, address: "HN" },
  { id: 4, name: 'David', age: 28, address: "HN" },
  { id: 5, name: 'Eve', age: 35, address: "HCM" }
])

// Biến để nhập giá trị filter
const minAge = ref(0)

// Hàm filter mảng theo tuổi tối thiểu
const filteredPeople = computed(() => {
  return people.value.filter(person => person.age >= minAge.value)
})

interface Place {
  id: number
  name: string
  address: string
  city: 'hanoi' | 'hcm'
}

const currentFilter = ref('hanoi')

const places = ref<Place[]>([
  { id: 1, name: 'Hồ Hoàn Kiếm', address: 'Quận Hoàn Kiếm', city: 'hanoi' },
  { id: 2, name: 'Văn Miếu', address: 'Quận Đống Đa', city: 'hanoi' },
  { id: 3, name: 'Lăng Bác', address: 'Quận Ba Đình', city: 'hanoi' },
  { id: 4, name: 'Nhà thờ Đức Bà', address: 'Quận 1', city: 'hcm' },
  { id: 5, name: 'Bến Nhà Rồng', address: 'Quận 4', city: 'hcm' },
  { id: 6, name: 'Dinh Độc Lập', address: 'Quận 1', city: 'hcm' }
])

const filteredPlaces = computed(() => {
  return places.value.filter(place => place.city === currentFilter.value)
})
</script>

<template>
  <div class="about">
    <h1>Danh sách địa điểm</h1>
    <div class="filter-buttons">
      <button @click="currentFilter = 'hanoi'" :class="{ active: currentFilter === 'hanoi' }">
        Danh sách ở HN
      </button>
      <button @click="currentFilter = 'hcm'" :class="{ active: currentFilter === 'hcm' }">
        Danh sách ở HCM
      </button>
    </div>

    <div class="list-container">
      <h2>Địa điểm ở {{ currentFilter === 'hanoi' ? 'Hà Nội' : 'Hồ Chí Minh' }}</h2>
      <ul>
        <li v-for="place in filteredPlaces" :key="place.id">
          {{ place.name }} - {{ place.address }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.filter-buttons {
  margin: 20px 0;
  display: flex;
  gap: 10px;
}

.active {
  background-color: #4CAF50;
  color: white;
}

.list-container {
  margin-top: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 10px;
  border-bottom: 1px solid #eee;
}

h2 {
  color: #333;
  margin-bottom: 15px;
}
</style>