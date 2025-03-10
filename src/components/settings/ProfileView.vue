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
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
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
      const apiUrl = process.env.VUE_APP_BASE_URL;

      // Fetch protected data to get user ID
      const response = await fetch(`${apiUrl}/protected`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message ||
            `Failed to fetch protected data: ${response.status}`
        );
      }

      const protectedData = await response.json();
      const userId = protectedData.userId;

      // Fetch user data using the user ID
      const userResponse = await fetch(`${apiUrl}/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!userResponse.ok) {
        const errorData = await userResponse.json();
        throw new Error(
          errorData.message ||
            `Failed to fetch user data: ${userResponse.status}`
        );
      }

      const userData = await userResponse.json();
      this.username = userData.username;
      this.email = userData.email;
    } catch (error) {
      this.error = error.message || 'Failed to load profile data';
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
.error {
  color: red;
  margin-top: 10px;
}
</style>
