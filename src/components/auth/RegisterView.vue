<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="register">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <button type="submit">Register</button>
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
      email: '',
      error: null,
    };
  },
  methods: {
    async register() {
      try {
        const response = await axios.post('http://localhost:3000/register', {
          username: this.username,
          password: this.password,
          email: this.email,
        });
        console.log(response.data); // Log the response from the server
        this.$router.push('/login'); // Redirect to login page after successful registration
      } catch (error) {
        this.error = error.response?.data?.message || 'Registration failed';
        console.error('Registration error:', error);
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
