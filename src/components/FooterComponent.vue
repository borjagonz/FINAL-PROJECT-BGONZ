<script setup></script>

<template>
  <section id="footer">
    <div class="footer">
      <div>
        <a href="index.html">
          <img
            class="logo-tasky"
            src="https://raw.githubusercontent.com/borjagonz/FINAL-PROJECT-BGONZ/refs/heads/main/src/logo/tasky-logo.png"
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
  </section>
</template>

<style scoped>
.footer {
  display: flex;
  padding: 80px 0px;
  background-color: #004eff;
  margin-top: 120px;
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
