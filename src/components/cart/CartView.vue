<template>
  <!-- <h2>{{ cart }}</h2> -->
  <div class="cart">
    <h1>Cart</h1>
    <div v-if="cart.length > 0" class="cart-items">
      <div v-for="item in cart" :key="item.id" class="cart-item">
        <div class="cart-item-details">
          <h2>{{ item.name }}</h2>
          <p>Price: $ {{ item.price.toLocaleString() }}</p>
          <p>Quantity: {{ item.quantity }}</p>
        </div>
      </div>
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
