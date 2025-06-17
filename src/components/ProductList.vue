<template>
    <div class="product-list">
        <h2>Danh sách sản phẩm</h2>
        <div class="products-grid">
            <div v-for="product in productStore.products" :key="product.id" class="product-card">
                <div class="product-image">
                    <img :src="product.image" :alt="product.name">
                </div>
                <div class="product-info">
                    <h3>{{ product.name }}</h3>
                    <p class="description">{{ product.description }}</p>
                    <p class="price">{{ formatPrice(product.price) }}đ</p>
                    <button class="add-to-cart-btn" @click="addToCart(product)">
                        Thêm vào giỏ
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/products'
import { useCartStore } from '@/stores/cart'
import { useNotificationStore } from '@/stores/notification'

const productStore = useProductStore()
const cartStore = useCartStore()
const notificationStore = useNotificationStore()

const formatPrice = (price: number) => {
    return price.toLocaleString('vi-VN')
}

const addToCart = (product: { id: number; name: string; price: number }) => {
    cartStore.addItem({
        id: product.id,
        name: product.name,
        price: product.price
    })
    notificationStore.addNotification(`Đã thêm ${product.name} vào giỏ hàng`)
}
</script>

<style scoped>
.product-list {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.product-card {
    border: 1px solid #eee;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.2s, box-shadow 0.2s;
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.product-image {
    width: 100%;
    height: 200px;
    overflow: hidden;
}

.product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.product-info {
    padding: 15px;
}

.product-info h3 {
    margin: 0 0 10px 0;
    font-size: 1.2em;
}

.description {
    color: #666;
    font-size: 0.9em;
    margin-bottom: 10px;
    height: 40px;
    overflow: hidden;
}

.price {
    color: #e44d26;
    font-weight: bold;
    font-size: 1.1em;
    margin: 10px 0;
}

.add-to-cart-btn {
    width: 100%;
    padding: 10px;
    background: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1em;
    transition: background 0.2s;
}

.add-to-cart-btn:hover {
    background: #45a049;
}
</style>