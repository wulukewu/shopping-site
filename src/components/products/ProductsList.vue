<template>
  <div class="products">
    <ul>
      <li
        v-for="product in filteredProducts"
        :key="product.id"
        @click="$router.push(`/product/${product.id}`)"
      >
        <img
          :src="require(`@/components/products/images/${product.id}.png`)"
          :alt="product.name"
        />
        <h3>{{ product.name }}</h3>
        <p>$ {{ product.price.toLocaleString() }}</p>
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
  data() {
    return {
      filteredProducts: [],
    };
  },
  watch: {
    '$route.params.category': {
      immediate: true,
      handler(newCategory) {
        this.filterProducts(newCategory, this.$route.query.q);
      },
    },
    '$route.query.q': {
      immediate: true,
      handler(newQuery) {
        this.filterProducts(this.$route.params.category, newQuery);
      },
    },
    products: {
      immediate: true,
      handler() {
        this.filterProducts(this.$route.params.category, this.$route.query.q);
      },
    },
  },
  methods: {
    filterProducts(category, query) {
      let filtered = this.products;

      if (category) {
        filtered = filtered.filter((product) =>
          product.category.includes(category)
        );
      }

      if (query) {
        const lowerCaseQuery = query.toLowerCase();
        filtered = filtered.filter((product) =>
          product.name.toLowerCase().includes(lowerCaseQuery)
        );
      }

      this.filteredProducts = filtered;
    },
  },
  mounted() {
    this.filterProducts(this.$route.params.category, this.$route.query.q);
  },
};
</script>

<style scoped>
.products {
  display: flex;
  justify-content: center;
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
  cursor: pointer;
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
