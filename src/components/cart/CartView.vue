<template>
  <div class="cart">
    <h1>Shopping Cart</h1>
    <div v-if="localCart.length > 0" class="cart-items">
      <div v-for="item in localCart" :key="item.id" class="cart-item">
        <img
          :src="require(`@/components/products/images/${item.id}.png`)"
          :alt="item.name"
          class="cart-item-image"
        />
        <div class="cart-item-details">
          <h2>{{ item.name }}</h2>
          <p>Price: $ {{ item.price.toLocaleString() }}</p>
          <div class="quantity-control">
            <button type="button" @click="decreaseQuantity(item)">
              <i v-show="item.quantity == 1" class="fas fa-trash"></i>
              <i v-show="item.quantity > 1" class="fas fa-minus"></i>
            </button>
            <input type="number" v-model="item.quantity" readonly />
            <button type="button" @click="increaseQuantity(item)">
              <i class="fas fa-plus"></i>
            </button>
          </div>
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
  data() {
    return {
      localCart: [],
    };
  },
  watch: {
    cart: {
      immediate: true,
      handler(newCart) {
        this.localCart = [...newCart];
      },
      deep: true,
    },
  },
  methods: {
    decreaseQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        this.localCart.splice(this.localCart.indexOf(item), 1);
      }
      this.updateCart();
    },
    increaseQuantity(item) {
      item.quantity++;
      this.updateCart();
    },
    updateCart() {
      this.$emit("update-cart", this.localCart);
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

.quantity-control {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  max-width: 125px;
}

.quantity-control button {
  padding: 5px 10px;
  font-size: 1em;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  flex: 1;
}

.quantity-control button:hover {
  background-color: #0056b3;
}

.quantity-control input[type="number"] {
  width: 50px;
  padding: 5px;
  font-size: 1em;
  text-align: center;
  margin: 0 10px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 5px;
}

.quantity-control input[type="number"]::-webkit-outer-spin-button,
.quantity-control input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.empty-cart {
  text-align: center;
  padding: 20px;
}

.empty-cart p {
  font-size: 1.5em;
}
</style>
