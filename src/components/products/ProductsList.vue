<template>
  <div class="products">
    <ul>
      <li v-for="product in products" :key="product.id">
        <img :src="require(`@/components/products/images/${product.id}.png`)" :alt="product.name" />
        <h3>{{ product.name }}</h3>
        <p>$ {{ product.price }}</p>
      </li>
    </ul>
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
};
</script>

<style scoped>
.products {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.products ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.products li {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    width: 200px;
    text-align: center;
}

.products img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
}

.products h3 {
    font-size: 1.2em;
    margin: 10px 0;
}

.products p {
    font-size: 1em;
    color: #333;
}
</style>