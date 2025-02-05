<template>
  <div v-if="product" class="product-view">
    <div class="product-image">
      <img
        :src="require(`@/components/products/images/${product.id}.png`)"
        :alt="product.name"
      />
    </div>
    <div class="product-details">
      <h1>{{ product.name }}</h1>
      <p class="price">$ {{ product.price }}</p>
      <p class="description">{{ product.description }}</p>
      <add-to-cart @add-to-cart="handleAddToCart"></add-to-cart>
    </div>
  </div>
  <div v-else-if="isLoading" class="is-loading">
    <p>Loading...</p>
  </div>
  <div v-else-if="!isLoading && !product" class="not-found">
    <p>404</p>
    <p>Product not found</p>
  </div>
</template>

<script>
import AddToCart from "../cart/AddToCart.vue";

export default {
  components: {
    AddToCart,
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
    addToCart: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      product: null,
      isLoading: true,
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
      if (!this.products || this.products.length === 0) {
        console.log("Products not yet loaded.  Deferring updateProduct."); // Products haven't loaded yet.
        return;
      }

      this.isLoading = true; // Or a smaller loading indicator for *just* finding the product
      this.product = this.products.find(
        (product) => product.id === this.$route.params.productId
      );
      this.isLoading = false;
      if (!this.product) {
        console.warn(
          `Product with id ${this.$route.params.productId} not found.`
        ); // Handle the case where the product isn't found (e.g., redirect, show an error).
      }
    },
    handleAddToCart(quantity) {
      this.addToCart(this.product.id, quantity);
    },
  },
  mounted() {
    this.updateProduct();
  },
};
</script>

<style scoped>
.product-view {
  display: flex;
  align-items: flex-start;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 90%;
  margin: 20px auto;
}

.product-image {
  flex: 1;
  padding-right: 20px;
}

.product-image img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.product-details {
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
}

.product-details h1 {
  font-size: 2em;
  margin-bottom: 10px;
  color: #333;
}

.product-details .price {
  font-size: 1.5em;
  color: #007bff;
  margin-bottom: 10px;
}

.product-details .description {
  font-size: 1.2em;
  color: #666;
  margin-bottom: 20px;
}

.is-loading {
  text-align: center;
  padding: 20px;
}

.is-loading p {
  font-size: 1.5em;
}

.not-found {
  text-align: center;
  padding: 20px;
}

.not-found p {
  font-size: 1.5em;
  color: #ff0000;
}
</style>
