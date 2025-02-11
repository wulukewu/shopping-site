<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      error: null,
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:3000/login', {
          username: this.username,
          password: this.password,
        });

        // Store the token in localStorage or a Vuex store
        localStorage.setItem('token', response.data.token);
        console.log('Login successful. Token:', response.data.token);
        this.$router.push('/'); // Redirect to home page after successful login
      } catch (error) {
        this.error = error.response?.data?.message || 'Login failed';
        console.error('Login error:', error);
      }
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
