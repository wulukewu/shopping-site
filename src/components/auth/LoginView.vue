<template>
  <div class="auth-container">
    <h2>Login</h2>
    <form @submit.prevent="login" class="auth-form">
      <div class="form-group">
        <label for="username">Username: </label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="form-group">
        <label for="password">Password: </label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit" class="auth-button">Login</button>
      <p v-if="error" class="error">{{ error }}</p>
    </form>
    <p class="auth-hint">
      Don't have an account? <router-link to="/register">Register</router-link>
    </p>
  </div>
</template>

<script>
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
        const apiUrl = process.env.VUE_APP_BASE_URL;

        const response = await fetch(`${apiUrl}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: this.username,
            password: this.password,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            errorData.message || `Login failed with status: ${response.status}`
          );
        }

        const data = await response.json();
        localStorage.setItem('token', data.token);
        console.log('Login successful. Token:', data.token);
        this.$router.push('/');
      } catch (error) {
        this.error = error.message || 'Login failed';
        console.error('Login error:', error);
      }
    },
  },
};
</script>

<style scoped>
.auth-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.auth-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 50%;
}

.auth-button {
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-weight: bold;
  cursor: pointer;
  width: 50%;
  align-self: center;
}

.auth-button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  margin-top: 10px;
}

.auth-hint {
  margin-top: 20px;
  text-align: center;
}

.auth-hint a {
  color: #007bff;
  text-decoration: none;
}

.auth-hint a:hover {
  text-decoration: underline;
}
</style>
