<script setup></script>

<template>
  <section id="footer">
    <div class="footer">
      <div class="footer-container">
        <div>
          <a href="/">
          <img
            class="logo-tasky"
            src="https://raw.githubusercontent.com/borjagonz/FINAL-PROJECT-BGONZ/refs/heads/main/src/logo/tasky-logo-white.png"
            alt=""
          />
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
.footer {
  padding: 80px 0px;
  background-color: #004eff;
  margin-top: 120px;
  align-items: center;
}

.footer-container {
  max-width: 1200px;
  min-width: none;
  display: flex;
  align-items: center;
}

.ul-links {
  display: flex;
  list-style-type: none;
}

.il-link {
  font-size: 14px;
  font-family: Gotham;
  display: flex;
  margin: none;
  padding: 0px 0px 0px 0px;
  width: 120px;
  color: #ecf1f3;
  text-decoration: none;
}
</style>
