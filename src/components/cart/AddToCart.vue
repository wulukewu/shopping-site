<template>
  <form>
    <label for="quantity">Quantity</label>
    <input type="number" id="quantity" v-model="quantity" />
    <button @click.prevent="addToCart">Add to Cart</button>
  </form>
</template>

<script>
export default {
  emits: ["add-to-cart"],
  data() {
    return {
      quantity: 1,
    };
  },
  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.quantity);
    },
  },
};
</script>
