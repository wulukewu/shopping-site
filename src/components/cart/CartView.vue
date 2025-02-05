<template>
  <div class="cart">
    <h1>Shopping Cart</h1>
    <div v-if="cart.length > 0" class="cart-items">
      <div v-for="item in cart" :key="item.id" class="cart-item">
        <img
          :src="require(`@/components/products/images/${item.id}.png`)"
          :alt="item.name"
          class="cart-item-image"
        />
        <div class="cart-item-details">
          <h2>{{ item.name }}</h2>
          <p>Price: $ {{ item.price.toLocaleString() }}</p>
          <p>Quantity: {{ item.quantity }}</p>
        </div>
      </div>
    </div>
    <div v-else class="empty-cart">
      <p>Your cart is empty.</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cart: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.cart {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 90%;
  margin: 20px auto;
}

.cart h1 {
  font-size: 2em;
  margin-bottom: 20px;
  color: #333;
}

.cart-items {
  display: flex;
  flex-direction: column;
}

.cart-item {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
}

.cart-item-image {
  width: 100px;
  height: auto;
  border-radius: 8px;
  margin-right: 20px;
}

.cart-item-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.cart-item-details h2 {
  font-size: 1.5em;
  margin-bottom: 5px;
  color: #007bff;
}

.cart-item-details p {
  font-size: 1.2em;
  color: #666;
  margin-bottom: 5px;
}

.empty-cart {
  text-align: center;
  padding: 20px;
}

.empty-cart p {
  font-size: 1.5em;
}
</style>
