<template>
  <navbar-list :categories="categories"></navbar-list>
</template>

<script>
import NavbarList from "./components/navbar/NavbarList.vue";

export default {
  components: {
    NavbarList,
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
    };
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
