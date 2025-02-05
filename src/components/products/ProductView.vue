<template>
  <div v-if="product" class="product-view">
    <h1>{{ product.name }}</h1>
    <p>$ {{ product.price }}</p>
    <p>{{ product.description }}</p>
    <img
      :src="require(`@/components/products/images/${product.id}.png`)"
      :alt="product.name"
    />
  </div>
  <div v-else>
    <p>404</p>
    <p>Product not found</p>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      product: null,
    };
  },
  watch: {
    "$route.params.productId": {
      immediate: true,
      handler() {
        this.updateProduct();
      },
    },
    products: {
      immediate: true,
      handler() {
        this.updateProduct();
      },
    },
  },
  methods: {
    updateProduct() {
      this.product = this.products.find(
        (product) => product.id === this.$route.params.productId
      );
    },
  },
  mounted() {
    this.updateProduct();
  },
};
</script>
