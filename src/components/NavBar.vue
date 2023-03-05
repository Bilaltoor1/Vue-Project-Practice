<template>
  <div class="container">
    <div class="navbar">
      <div class="logo">
        <h3>Logo</h3>
      </div>
      <ul>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/create">Create</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.container {
  width: 100vw;
  height: 75px;
  position: fixed;
  background-color: white;
  z-index: 2;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.5rem;
}

.logo {
  width: 45px;
  object-fit: cover;
  margin-left: 1rem;
}

ul {
  display: flex;
}

ul * {
  margin-right: 10px;
  list-style: none;
  text-decoration: none;
}
</style>