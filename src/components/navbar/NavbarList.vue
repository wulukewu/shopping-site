<template>
  <div class="nav-belt">
    <div class="logo">
      <router-link to="/">
        <img
          alt="shopping logo"
          src="../../assets/logo/shopping-high-resolution-logo-transparent.png"
        />
      </router-link>
    </div>
  </div>
  <div class="nav-main">
    <div class="nav-links">
      <ul>
        <router-link to="/">Home</router-link>
        <router-link
          v-for="category in categories"
          :key="category.id"
          :to="`/category/${category.id}`"
        >
          {{ category.name }}
        </router-link>
        <router-link to="/cart">Cart</router-link>
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
.nav-main,
.nav-belt {
  position: fixed;
  left: 0;
  width: 100%;
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.nav-belt {
  top: 0;
  height: 55px;
  background-color: #cecece;
}

.nav-main {
  top: 55px;
  height: 50px;
  background-color: #e8e8e8;
}

.nav-belt .logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.nav-belt .logo a {
  display: flex;
  align-items: center;
  height: 100%;
}

.nav-belt .logo img {
  height: 60%;
  width: auto;
  object-fit: contain;
}

.nav-links ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  padding-right: 20px;
}

.nav-links a {
  margin-right: 20px;
  cursor: pointer;
  color: #2c3e50;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s ease;
  align-content: center;
}

.nav-links a:hover,
.nav-links a.active {
  color: #007bff;
}
</style>
