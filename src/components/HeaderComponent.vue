<script setup></script>

<template>
  <section id="header">
    <div class="header">
      <a href="/">
        <img class="logo-tasky" src="/src/logo/logo-tasky.svg" alt="Logo Tasky" />
      </a>
      <nav class="nav-buttons">
        <ul class="nav-list">
          <li><a class="button-login" href="/login">Log In</a></li>
          <li><a class="button-register" href="/register">Register</a></li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<style scoped>


.header {
  padding: 60px 0 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-list {
  font-size: 16px;
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
  width: 200px;
}

.logo-tasky {
  width: 125px;
}

.logo-tasky:hover {
  scale: 110%;
  transition: 1s;
}

.button-login {
  text-decoration: none;
  background-color: #004eff;
  color: #ecf1f3;
  padding: 8px 15px;
  font-family: Gotham;
}

.button-login:hover {
  background-color: #00e600;
  color: #004eff;
  transition: 0.5s;
}

.button-register {
  text-decoration: none;
  background-color: white;
  color: #004eff;
  padding: 8px 15px;
  stroke-width: 2px;
  stroke: blue;
  font-family: Gotham;
}

.button-register:hover {
  background-color: #00e600;
  color: #004eff;
  transition: 0.5s;
}
</style>
