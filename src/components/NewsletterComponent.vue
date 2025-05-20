<script setup></script>

<template>
  <section class="newsletter">
    <div>
      <h2 class="n-title">Get Started with Tasky today</h2>
    </div>
    <div>
      <form action="">
        <div class="form-group">
          <label for="email"></label>
          <input
            class="input-email"
            type="text"
            id="email"
            name="email"
            required
            placeholder="Enter your email"
          />
          <span class="icon"></span>
          <button class="submit-button" type="suscribe">Suscribe</button>
        </div>
      </form>
    </div>
    <div>
      <p class="n-text">By entering an email, you will recieve our newsletter.</p>
    </div>
  </section>
</template>

<style scoped>
.newsletter {
  padding-top: 120px;
  justify-content: center;
  text-align: center;
}

.n-title {
  font-size: 36px;
}

.form-group {
  padding-top: 30px;
}

.input-email {
  height: 60px;
  stroke-width: 0;
  width: 500px;
  border-width: 0px;
  text-align: center;
  font-size: 18px;
  font-family: Gotham;
}

.submit-button {
  background-color: #004eff;
  height: 60px;
  width: 180px;
  font-size: 18px;
  color: white;
  border: none;
  padding: 0;
  margin: 20px;
  font-family: Gotham;
}

.submit-button:hover {
  cursor: pointer;
  transition: 0.3s;
  background-color: #51ca41;
}

.n-text {
  padding-top: 30px;
  font-size: 14px;
}
</style>
