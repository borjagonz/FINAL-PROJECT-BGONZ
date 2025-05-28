<script setup></script>

<template>
  <section id="footer">
    <div class="footer">
      <div class="footer-container">
        <div>
          <a href="/">
            <img class="logo-tasky" src="/src/logo/logo-tasky-white.svg" alt="" />
          </a>
        </div>
        <div class="links">
          <ul class="ul-links">
            <li><a class="il-link" href="">About Us</a></li>
            <li><a class="il-link" href="">Privacy Policy</a></li>
            <li><a class="il-link" href="">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
footer {
  max-width: 1200px;
  padding: 30;
  margin: 0;
}

.footer {
  padding: 80px 30px;
  background-color: #004eff;
  align-items: center;
}

.footer-container {
  min-width: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.logo-tasky {
  width: 100px;
}

.ul-links {
  display: flex;
  list-style-type: none;
  justify-content: space-between;
}

.il-link {
  font-size: 14px;
  font-family: 'Gotham Black';
  display: flex;
  margin: none;
  color: #ecf1f3;
  padding: 0px 20px;
  text-decoration: none;
}

.il-link:hover {
  text-decoration: underline;
}

@media screen and (min-width: 0px) and (max-width: 768px) {
  .footer-container {
    flex-wrap: wrap;
    gap: 40px;
  }
}
</style>
