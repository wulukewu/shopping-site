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
      apiUrl: process.env.VUE_APP_API_URL,
    };
  },
  methods: {
    async fetchProducts() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${this.apiUrl}/products`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.products = response.data;
      } catch (error) {
        console.error('Error fetching products', error);
      }
    },
    async fetchCart() {
      try {
        const token = localStorage.getItem('token');
        console.log("Token being sent: ", token);
        const response = await axios.get(`${this.apiUrl}/cart`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        this.cart = response.data.items.map((item) => ({
          id: item.productId._id,
          name: item.productId.name,
          price: item.productId.price,
          quantity: item.quantity,
        }));
        this.updateCart(this.cart);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    },

    async updateBackendCart(updatedCart) {
      try {
        const token = localStorage.getItem('token');
        await axios.delete(`${this.apiUrl}/cart`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        updatedCart.forEach(async (element) => {
          await axios.post(
            `${this.apiUrl}/cart/items`,
            { productId: element.id, quantity: element.quantity },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
        });
      } catch (error) {
        console.error('Error updating cart to backend:', error);
      }
    },
    addToCart(productId, quantity) {
      if (!localStorage.getItem('token')) {
        alert('Please log in to add items to your cart.');
        this.$router.push('/login');
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
        this.updateBackendCart(this.cart);
      }
    },
    updateCart(updatedCart) {
      this.cart = updatedCart;
      this.cartTotal = this.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    async clearCart() {
      try {
        const token = localStorage.getItem('token');
        await axios.delete(`${this.apiUrl}/cart`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.cart = [];
        this.cartTotal = 0;
      } catch (error) {
        console.error('Error clearing cart:', error);
      }
    },
  },
  async mounted() {
    this.fetchProducts();
    if (localStorage.getItem('token')) {
      await this.fetchCart();
    }
  },

  watch: {
    cart: {
      deep: true,
      handler() {
        this.updateBackendCart(this.cart);
      },
    },
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
