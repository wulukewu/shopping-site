<template>
  <div class="nav-belt">
    <div class="logo">
      <router-link to="/" @click="searchQuery = ''">
        <img
          alt="shopping logo"
          src="../../assets/logo/shopping-high-resolution-logo-transparent.png"
        />
      </router-link>
    </div>
    <div class="search-bar">
      <input
        type="text"
        placeholder="Search for products"
        v-model="searchQuery"
        @keyup.enter="doSearch"
      />
      <button type="button" @click="doSearch">
        <i class="fas fa-search"></i>
      </button>
    </div>
    <div class="auth-buttons">
      <template v-if="isLoggedIn">
        <div
          class="profile-dropdown"
          @mouseover="showDropdown"
          @mouseleave="hideDropdown"
        >
          <router-link to="/profile" class="profile-link">
            <i class="fas fa-user"></i>
            Profile
          </router-link>
          <div v-if="dropdownVisible" class="dropdown-menu">
            <router-link to="/profile">View Profile</router-link>
            <router-link to="/settings">Settings</router-link>
            <button @click="logout" class="logout-button">Logout</button>
          </div>
        </div>
      </template>
      <template v-else>
        <div
          class="profile-dropdown"
          @mouseover="showDropdown"
          @mouseleave="hideDropdown"
        >
          <router-link to="/login"><i class="fas fa-user"></i></router-link>
          <div v-if="dropdownVisible" class="dropdown-menu">
            <router-link to="/login" class="login-link">Login</router-link>
            <router-link to="/register" class="register-link"
              >Register</router-link
            >
          </div>
        </div>
      </template>
    </div>
    <div v-if="isLoggedIn" class="cart-container">
      <router-link to="/cart" class="cart-link">
        <i class="fas fa-cart-shopping"></i>
        <span v-if="cartCount > 0" class="cart-count">{{ cartCount }}</span>
        Cart
      </router-link>
    </div>
  </div>
  <div class="nav-main">
    <div class="nav-links">
      <ul>
        <router-link to="/" exact-active-class="active">Home</router-link>
        <router-link
          v-for="category in categories"
          :key="category.id"
          :to="`/category/${category.id}`"
          active-class="active"
        >
          {{ category.name }}
        </router-link>
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
    cart: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isLoggedIn: localStorage.getItem('token') !== null,
      dropdownVisible: false,
      searchQuery: '',
    };
  },
  computed: {
    cartCount() {
      return this.cart.reduce((total, item) => total + item.quantity, 0);
    },
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.isLoggedIn = false;
      this.$router.push('/login');
    },
    showDropdown() {
      this.dropdownVisible = true;
    },
    hideDropdown() {
      this.dropdownVisible = false;
    },
    doSearch() {
      if (this.searchQuery.trim()) {
        this.$router.push({ path: '/search', query: { q: this.searchQuery } });
      }
    },
  },
  watch: {
    $route: function (to, from) {
      console.log(to, from);
      this.isLoggedIn = localStorage.getItem('token') !== null;
    },
  },
};
</script>

<style scoped>
.nav-main,
.nav-belt {
  position: fixed;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 2;
}

.nav-belt {
  top: 0;
  height: 55px;
  background-color: #cecece;
  width: auto;
}

.cart-container {
  position: relative;
  margin-left: 20px;
}

.cart-link {
  color: #2c3e50;
  font-weight: bold;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
}

.cart-link:hover {
  color: #5a74f7;
}

.cart-count {
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 0.8em;
  position: relative;
  top: -0.5em;
  margin: 0;
  margin-left: 5px;
  margin-right: -10px;
  left: -10px;
}

.nav-main {
  top: 55px;
  height: 50px;
  background-color: #e8e8e8;
  z-index: 1;
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

.auth-buttons {
  display: flex;
  align-items: center;
  margin-left: auto;
}

.auth-buttons a,
.auth-buttons button {
  margin-left: 10px;
}

.logout-button {
  background-color: transparent;
  border: none;
  color: #2c3e50;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
}

.logout-button:hover {
  color: #5a74f7;
}

.profile-dropdown {
  position: relative;
}

.profile-link {
  color: #2c3e50;
  font-weight: bold;
  text-decoration: none;
}

.profile-link:hover {
  color: #5a74f7;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 10px;
  z-index: 3;
}

.dropdown-menu a,
.dropdown-menu button {
  margin: 5px 0;
  color: #2c3e50;
  text-decoration: none;
  cursor: pointer;
}

.dropdown-menu a:hover,
.dropdown-menu button:hover {
  color: #007bff;
}

.search-bar {
  display: flex;
  align-items: center;
  margin: 0 20px;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid #ccc;
}

.search-bar input {
  padding: 8px 12px;
  border: none;
  outline: none;
  font-size: 16px;
  flex-grow: 1;
}

.search-bar button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 12px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.search-bar button:hover {
  background-color: #0056b3;
}

.search-bar i {
  margin: 0;
}
</style>
