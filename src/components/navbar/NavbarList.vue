<template>
  <div class="navbar">
    <div class="logo">
      <img
        alt="shopping logo"
        src="../../assets/logo/shopping-high-resolution-logo-transparent.png"
      />
    </div>
    <div class="nav-links">
      <ul>
        <li>Home</li>
        <li v-for="category in categories" :key="category.id">{{ category.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  background-color: #e8e8e8;
  height: 75px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar .logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.navbar .logo img {
  height: 60%;
  width: auto;
  object-fit: contain;
}

.nav-links ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-links li {
  margin-right: 20px;
  cursor: pointer;
  color: #2c3e50;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-links li:hover {
  color: #007bff;
}
</style>
