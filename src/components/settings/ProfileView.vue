<template>
  <div class="profile-container">
    <h2>Profile</h2>
    <div class="profile-info">
      <p><strong>Username:</strong> {{ username }}</p>
      <p><strong>Email:</strong> {{ email }}</p>
    </div>

    <button @click="$router.push('/settings')" class="edit-button">
      Edit Profile
    </button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      email: '',
      error: null,
    };
  },
  async mounted() {
    try {
      const token = localStorage.getItem('token');
      const apiUrl = process.env.VUE_APP_API_URL;

      const response = await axios.get(`${apiUrl}/protected`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const userId = response.data.userId;

      const userResponse = await axios.get(`${apiUrl}/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      this.username = userResponse.data.username;
      this.email = userResponse.data.email;
    } catch (error) {
      this.error =
        error.response?.data?.message || 'Failed to load profile data';
      console.error('Error loading profile:', error);
    }
  },
};
</script>

<style scoped>
.profile-container {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: left;
}

.profile-info {
  margin-bottom: 20px;
}

.profile-info p {
  font-size: 1.2em;
  line-height: 1.6;
  color: #333;
}

.profile-info strong {
  font-weight: bold;
  margin-right: 10px;
}

.edit-button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s;
}

.edit-button:hover {
  background-color: #0056b3;
}
</style>
