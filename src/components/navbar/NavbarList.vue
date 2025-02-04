<template>
  <div class="navbar">
    <div class="logo">
      <img
        alt="shopping logo"
        src="../../assets/logo/shopping-high-resolution-logo-transparent.png"
      />
    </div>
    <div>
      <ul>
        <li>Home</li>
        <li>Products</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  padding: 0;
  justify-content: space-between;
  align-items: center;
  background-color: #e8e8e8;
  height: 75px;
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

li {
  display: inline;
  margin-right: 15px;
  cursor: pointer;
  color: #2c3e50;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
}
</style>
