<script setup>
import { onMounted, ref } from 'vue'

const claimFreeRef = ref(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.unobserve(entry.target)
      }
    },
    {
      threshold: 0.5,
    },
  )

  if (claimFreeRef.value) {
    observer.observe(claimFreeRef.value)
  }
})
</script>

<template>
  <section class="newsletter">
    <div class="register-claim">
      <h2 class="claim-title">Get Started with tasky today!</h2>
      <p class="claim-subtitle">Join now and start organizing your day in seconds,</p>
      <p class="claim-free" ref="claimFreeRef" :class="{ 'fade-in': isVisible }">
        it's totally free.
      </p>
      <a class="register-now" href="/register">Register now</a>
    </div>
    <div class="n-container">
      <div>
        <h2 class="n-title">Stay on track every week</h2>
        <p>One email a week to help you stay focused and finish more.</p>
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
            <p class="n-text">By entering an email, you will recieve our newsletter.</p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.newsletter {
  padding-top: 100px;
  justify-content: center;
  text-align: center;
  /*background: linear-gradient(to top, rgba(236, 241, 243, 0.8), rgba(0, 0, 0, 0));*/
}

.form-group {
  padding-top: 20px;
}

.input-email {
  height: 50px;
  stroke-width: 0;
  width: 400px;
  border-width: 0px;
  text-align: center;
  font-size: 18px;
  font-family: Gotham;
}

.register-claim {
  margin-bottom: 120px;
  max-width: 1200px;
  padding: 80px 30px 95px 30px;
}

.register-now {
  background-color: #004eff;
  height: 60px;
  width: 180px;
  font-size: 18px;
  color: #ecf1f3;
  border: none;
  padding: 20px 30px;
  font-family: Gotham;
  text-decoration: none;
}

.register-now:hover {
  cursor: pointer;
  transition: 0.3s;
  background-color: #00e600;
  color: #004eff;
  transition: 1s;
  scale: 120%;
}

.claim-title {
  margin-bottom: 40px;
  font-size: 60px;
}

.claim-subtitle {
  font-size: 24px;
  margin-bottom: 25px;
}

.claim-free {
  color: #004eff;
  margin-bottom: 80px;
  font-size: 32px;
  opacity: 0;
  transform: scale(0);
  transition: opacity 1s ease, transform 1s ease;
}

::placeholder {
  color: #a3b6bd;
}

.submit-button {
  background-color: #004eff;
  height: 50px;
  width: 120px;
  font-size: 18px;
  color: #ecf1f3;
  border: none;
  padding: 0;
  margin: 20px 10px;
  font-family: Gotham;
}

.submit-button:hover {
  cursor: pointer;
  transition: 0.3s;
  background-color: #00e600;
  color: #004eff;
}

.n-container {
  padding: 90px 30px 110px 30px;
  background-color: #ecf1f3;
}

.n-title {
  font-size: 42px;
  margin-bottom: 40px;
}

.n-text {
  padding-top: 20px;
  font-size: 12px;
}

.fade-in {
  opacity: 1;
  transform: scale(1);
  padding: 10px;
  border: 2px solid #004eff;
  width: 300px;
}
</style>
