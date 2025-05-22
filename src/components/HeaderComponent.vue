<script setup></script>

<template>
  <section id="header">
    <div class="header">
      <a href="/">
        <img class="logo-tasky" src="/src/logo/logo-tasky.svg" alt="Logo Tasky" />
      </a>
      <nav class="nav-buttons">
        <ul class="nav-list">
          <li><a class="button-login" href="/Login">Log In</a></li>
          <li><a class="button-register" href="/Register">Register</a></li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<style scoped>
.header {
  padding: 60px 0 0 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  max-width: 1200px;
  min-width: none;
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

.button-login {
  text-decoration: none;
  background-color: #004eff;
  color: #ecf1f3;
  padding: 8px 15px;
  font-family: Gotham;
}

.button-login:hover {
  background-color: #51ca41;
  color: #ecf1f3;
  transition: 0.3s;
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
  background-color: #51ca41;
  color: #ecf1f3;
  transition: 0.3s;
}
</style>
