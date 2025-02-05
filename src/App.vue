<template>
  <navbar-list :categories="categories"></navbar-list>
  <products-list :products="products"></products-list>
</template>

<script>
import NavbarList from "./components/navbar/NavbarList.vue";
import ProductsList from "./components/products/ProductsList.vue";

export default {
  components: {
    NavbarList,
    ProductsList,
  },
  methods: {
    // generateId() {
    //   const characters = "abcdefghijklmnopqrstuvwxyz";
    //   let id = "";
    //   for (let i = 0; i < 8; i++) {
    //     id += characters.charAt(Math.floor(Math.random() * characters.length));
    //   }
    //   return id;
    // },
  },
  data() {
    return {
      categories: [
        { id: "clothing", name: "Clothing" },
        { id: "electronics", name: "Electronics" },
        { id: "home-and-kitchen", name: "Home & Kitchen" },
        { id: "accessories", name: "Accessories" },
        { id: "shoes", name: "Shoes" },
        { id: "books", name: "Books" },
        { id: "furniture", name: "Furniture" },
        { id: "sports-and-outdoors", name: "Sports & Outdoors" },
      ],
      products: [],
    };
  },
  mounted() {
    fetch("products.json")
      .then(response => response.json())
      .then(data => {
        this.products = data;
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
</style>
