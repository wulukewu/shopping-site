<template>
  <navbar-list :categories="categories" :cart="cart"></navbar-list>
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
        const apiUrl = process.env.VUE_APP_BASE_URL;

        console.log('api URL:', apiUrl);
        const response = await fetch(`${apiUrl}/products`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`, // Important: Include the token!
            'Content-Type': 'application/json', // Specify content type
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`); // Handle non-200 responses
        }

        const data = await response.json(); // Parse JSON response
        this.products = data;
      } catch (error) {
        console.error('Error fetching products:', error);
        // Optionally set an error state to display an error message to the user
      }
    },
    async loadCartFromDb() {
      try {
        const token = localStorage.getItem('token');
        const apiUrl = process.env.VUE_APP_BASE_URL;
        const response = await fetch(`${apiUrl}/cart/load`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const cartData = await response.json();
        this.cart = cartData;
        this.updateCart(this.cart);
      } catch (error) {
        console.error('Error loading cart from DB:', error);
      }
    },
    addToCart(productId, quantity) {
      if (!localStorage.getItem('token')) {
        alert('Please log in to add items to your cart.');
        this.$router.push('/login');
        return;
      }

      console.log(
        'addToCart called with productId:',
        productId,
        'quantity:',
        quantity
      );

      const product = this.products.find((product) => product.id === productId);

      if (product) {
        console.log('Product found:', product);

        const cartItem = this.cart.find((item) => item.id === productId);

        if (cartItem) {
          console.log('Cart item found, increasing quantity');
          cartItem.quantity += quantity;
        } else {
          console.log('Cart item not found, adding new item');
          const item = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity,
          };
          this.cart.unshift(item);
        }

        console.log('Cart after adding item:', this.cart); // **Important!**

        this.updateCart(this.cart);
      } else {
        console.log('Product not found with id:', productId);
      }
    },
    async saveCartToDb() {
      try {
        const token = localStorage.getItem('token');
        const apiUrl = process.env.VUE_APP_BASE_URL;

        // Convert to a plain JavaScript array before stringifying
        const cartData = JSON.parse(JSON.stringify(this.cart)); // **Important!**

        console.log('Sending cart data:', cartData); // Check the format

        const response = await fetch(`${apiUrl}/cart/save`, {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(cartData), // Now stringify the plain array
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        console.log('Cart saved to DB successfully!');
      } catch (error) {
        console.error('Error saving cart to DB:', error);
      }
    },
    updateCart(updatedCart) {
      this.cart = updatedCart;
      this.cartTotal = this.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      this.saveCartToDb(); // Save to DB on every update
    },
  },
  mounted() {
    this.fetchProducts();
    if (localStorage.getItem('token')) {
      this.loadCartFromDb(); // Load cart when component mounts
    }
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
