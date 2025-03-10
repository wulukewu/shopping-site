<template>
  <div class="settings-container">
    <h2>Settings</h2>
    <div class="form-group">
      <label for="username">New Username:</label>
      <input type="text" id="username" v-model="newUsername" />
    </div>
    <div class="form-group">
      <label for="password">New Password:</label>
      <input type="password" id="password" v-model="newPassword" />
    </div>
    <button @click="updateProfile" class="save-button">Save Changes</button>
    <p v-if="successMessage" class="success">{{ successMessage }}</p>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newUsername: '',
      newPassword: '',
      successMessage: null,
      error: null,
    };
  },
  methods: {
    async updateProfile() {
      try {
        const token = localStorage.getItem('token');
        const apiUrl = process.env.VUE_APP_BASE_URL;

        const updateData = {};
        if (this.newUsername) {
          updateData.username = this.newUsername;
        }
        if (this.newPassword) {
          updateData.password = this.newPassword;
        }

        const response = await fetch(`${apiUrl}/users/profile`, {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updateData),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            errorData.message || `Profile update failed: ${response.status}`
          );
        }

        const data = await response.json();

        this.successMessage = data.message || 'Profile updated successfully!';
        this.error = null;
      } catch (error) {
        this.error = error.message || 'Failed to update profile.';
        this.successMessage = null;
        console.error('Profile update error:', error);
      }
    },
  },
};
</script>

<style scoped>
.settings-container {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: left;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
}

.save-button {
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s;
}

.save-button:hover {
  background-color: #218838;
}

.success {
  color: green;
  margin-top: 10px;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
