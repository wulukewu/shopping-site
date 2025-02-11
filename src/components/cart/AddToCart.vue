<template>
  <form>
    <label for="quantity">Quantity</label>
    <div class="quantity-control">
      <button type="button" @click="decreaseQuantity">
        <i class="fas fa-minus"></i>
      </button>
      <input type="number" id="quantity" v-model="quantity" />
      <button type="button" @click="increaseQuantity">
        <i class="fas fa-plus"></i>
      </button>
    </div>
    <button class="add-to-cart-button" @click.prevent="addToCart">
      Add to Cart
    </button>
  </form>
</template>

<script>
export default {
  emits: ['add-to-cart'],
  data() {
    return {
      quantity: 1,
    };
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.quantity);
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    increaseQuantity() {
      this.quantity++;
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  width: 100%;
}

label {
  font-size: 1.2em;
  margin-bottom: 10px;
}

.quantity-control {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  max-width: 200px;
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

.quantity-control input[type='number'] {
  width: 50px;
  padding: 5px;
  font-size: 1em;
  text-align: center;
  margin: 0 10px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 5px;
}

.quantity-control input[type='number']::-webkit-outer-spin-button,
.quantity-control input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.add-to-cart-button {
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  max-width: 200px;
}

.add-to-cart-button:hover {
  background-color: #0056b3;
}
</style>
◊
