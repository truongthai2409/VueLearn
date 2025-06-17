<template>
    <div class="cart-container">
        <h1>Giỏ hàng</h1>


        <div v-if="cartStore.items.length === 0" class="empty-cart">
            Giỏ hàng trống
        </div>


        <div v-else class="cart-items">
            <div v-for="item in cartStore.items" :key="item.id" class="cart-item">
                <div class="item-info">
                    <h3>{{ item.name }}</h3>
                    <p class="price">{{ formatPrice(item.price) }}đ</p>
                </div>

                <div class="quantity-controls">
                    <button @click="cartStore.updateQuantity(item.id, item.quantity - 1)">-</button>
                    <span>{{ item.quantity }}</span>
                    <button @click="cartStore.updateQuantity(item.id, item.quantity + 1)">+</button>
                </div>

                <button class="remove-btn" @click="cartStore.removeItem(item.id)">
                    Xóa
                </button>
            </div>

            <div class="cart-summary">
                <div class="total-items">
                    Tổng số sản phẩm: {{ cartStore.totalItems }}
                </div>
                <div class="total-price">
                    Tổng tiền: {{ formatPrice(cartStore.totalPrice) }}đ
                </div>
                <button class="clear-cart" @click="cartStore.clearCart">
                    Xóa giỏ hàng
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()

const formatPrice = (price: number) => {
    return price.toLocaleString('vi-VN')
}
</script>

<style scoped>
.cart-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;


}

.empty-cart {
    text-align: center;
    padding: 40px;
    font-size: 1.2em;
    color: #666;
}

.cart-items {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.cart-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    border: 1px solid #eee;
    border-radius: 8px;
}

.item-info {
    flex: 1;
}

.item-info h3 {
    margin: 0;
    font-size: 1.1em;
}

.price {
    color: #e44d26;
    font-weight: bold;
    margin: 5px 0;
}

.quantity-controls {
    display: flex;
    align-items: center;
    gap: 10px;
}

.quantity-controls button {
    width: 30px;
    height: 30px;
    border: 1px solid #ddd;
    background: #f8f8f8;
    border-radius: 4px;
    cursor: pointer;
}

.quantity-controls button:hover {
    background: #eee;
}

.remove-btn {
    padding: 8px 15px;
    background: #ff4444;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.remove-btn:hover {
    background: #cc0000;
}

.cart-summary {
    margin-top: 20px;
    padding: 20px;
    background: #f8f8f8;
    border-radius: 8px;
}

.total-items,
.total-price {
    font-size: 1.1em;
    margin-bottom: 10px;
}

.total-price {
    font-weight: bold;
    color: #e44d26;
}

.clear-cart {
    width: 100%;
    padding: 10px;
    background: #666;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
}

.clear-cart:hover {
    background: #444;
}
</style>