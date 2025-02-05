<template>
  <navbar-list :categories="categories"></navbar-list>
  <div class="content">
    <router-view
      :products="products"
      :cart="cart"
      :add-to-cart="addToCart"
      :update-cart="updateCart"
    ></router-view>
  </div>
</template>

<script>
import NavbarList from "./components/navbar/NavbarList.vue";

export default {
  components: {
    NavbarList,
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
    addToCart(productId, quantity) {
      const product = this.products.find((product) => product.id === productId);
      if (product) {
        const cartItem = this.cart.find((item) => item.id === productId);
        if (cartItem) {
          cartItem.quantity += quantity;
        } else {
          const item = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity,
          };
          this.cart.unshift(item);
        }
      }
    },
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
      cart: [],
    };
  },
  mounted() {
    const baseUrl =
      process.env.NODE_ENV === "production" ? "/shopping-site" : "";
    fetch(`${baseUrl}/products.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        this.products = data;
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  },
};
</script>

<style>
#app {
  font-family: Sora, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}

.content {
  margin-top: 90px;
}
</style>
