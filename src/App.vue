<template>
  <navbar-list :categories="categories"></navbar-list>
  <div class="content">
    <router-view
      :products="products"
      :cart="cart"
      :cartTotal="cartTotal"
      :add-to-cart="addToCart"
      @update-cart="updateCart"
    ></router-view>
  </div>
</template>

<script>
import NavbarList from './components/navbar/NavbarList.vue';
import axios from 'axios';

export default {
  components: {
    NavbarList,
  },
  data() {
    return {
      categories: [
        { id: 'clothing', name: 'Clothing' },
        { id: 'electronics', name: 'Electronics' },
        { id: 'home-and-kitchen', name: 'Home & Kitchen' },
        { id: 'accessories', name: 'Accessories' },
        { id: 'shoes', name: 'Shoes' },
        { id: 'books', name: 'Books' },
        { id: 'furniture', name: 'Furniture' },
        { id: 'sports-and-outdoors', name: 'Sports & Outdoors' },
      ],
      products: [],
      cart: [],
      cartTotal: 0,
    };
  },
  methods: {
    async fetchProducts() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(
          `${process.env.VUE_APP_API_URL}/products`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Include the JWT
            },
          }
        );
        this.products = response.data;
      } catch (error) {
        console.error('Error fetching products', error);
      }
    },
    addToCart(productId, quantity) {
      if (!localStorage.getItem('token')) {
        alert('Please log in to add items to your cart.');
        this.$router.push('/login'); // Redirect to login
        return;
      }
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
        this.updateCart(this.cart);
      }
    },
    updateCart(updatedCart) {
      this.cart = updatedCart;
      this.cartTotal = this.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
  mounted() {
    this.fetchProducts();
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
  margin-top: 130px;
}
</style>
