<script setup>
</script>

<template>
  <section id="header">
    <div class="header">
      <img class="logo-tasky" src="https://raw.githubusercontent.com/borjagonz/FINAL-PROJECT-BGONZ/refs/heads/main/src/logo/tasky-logo.png" alt="">
      <nav class="nav-buttons">
        <ul class="nav-list">
          <li><a class="button-login" href="">Log In</a></li>
          <li><a class="button-register" href="">Register</a></li>
        </ul>
      </nav>
  </div>
  </section>
</template>

<style scoped>
header {
  max-width: 1200px;
  min-width: none;
}

.header {
  padding-top: 60px;
  max-width: 1200px;
  display: flex;
  align-items: center;
}

.logo-tasky {
}


.nav-list {
  font-size: 20px;
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0px 0px 0px 0px;
  width: 220px;
  justify-content: space-between;
}

.button-login {
  text-decoration: none;
  background-color: #004eff;
  color: white;
  padding: 8px 15px;
  font-family: Gotham;
}

.button-login:hover {
  background-color: #51ca41;
  color: #ecf1f3;
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
}

</style>
