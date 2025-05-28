<template>
  <section class="body">
    <a href="/">
      <img class="logo-tasky" src="/src/logo/logo-tasky-white.svg" alt="" />
    </a>
    <div class="register-form">
      <h2 class="signup">Sign Up</h2>

      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <label for="name">Full Name</label>
          <input id="name" type="text" v-model="name" required placeholder="Your full name" />
        </div>
        <div class="form-group">
          <label for="email">Email Address</label>
          <input id="email" type="email" v-model="email" required placeholder="your@email.com" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input id="password" type="password" v-model="password" required minlength="6" />
        </div>
        <div v-if="error" class="error">{{ error }}</div>
        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            v-model="confirmPassword"
            required
            minlength="6"
          />
        </div>
        <div v-if="confirmPassword" :class="{ match: passwordsMatch, 'no-match': !passwordsMatch }">
          {{ passwordsMatch ? 'Passwords match' : 'Passwords do not match' }}
        </div>
        <button type="submit">Create Account</button>
      </form>
      <div class="actions">
        <p class="login-text">Already have an account?</p>
        <router-link to="/login" class="login-link">Log in here</router-link>
      </div>
    </div>
    <div>
      <router-link to="/" class="back-home"> Back to Home </router-link>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/supabase.js'

const router = useRouter()

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const error = ref('')
const success = ref(false)

const handleRegister = async () => {
  error.value = ''
  success.value = false

  if (password.value !== confirmPassword.value) {
    error.value = 'Passwords do not match'
    return
  }

  const { error: signUpError } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
  })

  if (signUpError) {
    error.value = signUpError.message
  } else {
    success.value = true
    email.value = ''
    password.value = ''
    confirmPassword.value = ''
    setTimeout(() => router.push('/login'), 2000)
  }
}

import { computed } from 'vue'

const passwordsMatch = computed(() => {
  return confirmPassword.value === '' || password.value === confirmPassword.value
})
</script>

<style scoped>
.body {
  background-image: url('../background/register-background-2B.png');
  background-size: cover;
  background-position: top;
  height: 100vh;
  margin: 0 auto;
  padding-top: 60px;
  justify-items: center;
}

.logo-tasky {
  width: 100px;
}

.logo-tasky:hover {
  scale: 120%;
  transition: 1s;
}

.register-form {
  max-width: 400px;
  margin: auto;
  border: 2px solid #004eff;
  padding: 30px;
  margin-top: 50px;
}

.signup {
  font-size: 42px;
  text-align: center;
  color: #ecf1f3;
}

.form-group {
  margin: 20px 0px;
  font-family: 'Gotham Black';
  color: #ecf1f3;
}

input {
  width: 100%;
  margin-top: 5px;
  padding: 10px;
  font-size: 16px;
  font-family: 'Gotham Black';
  background-color: #ecf1f3;
  border: none;
  color: #004eff;
}

::placeholder {
  color: #a3b6bd;
}

button {
  width: 100%;
  padding: 12px;
  font-size: 18px;
  font-family: 'Gotham Black';
  background-color: #004eff;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #00e600;
  color: #004eff;
  transition: 0.3s;
}

.error {
  color: red;
  margin-bottom: 20px;
  font-family: 'Gotham Black';
  text-align: center;
}

.actions {
  margin-top: 10px;
  display: flex;
  align-items: center;
  width: 100%;
}

.back-home {
  display: block;
  margin-top: 50px;
  padding: 12px;
  background-color: #004eff;
  width: 150px;
  color: #ecf1f3;
  text-decoration: none;
  font-family: 'Gotham Black';
  text-align: center;
}

.back-home:hover {
  background-color: #00e600;
  color: #004eff;
  transition: 0.3s;
}

.login-text {
  font-size: 16px;
  margin: 25px 0px 25px 0px;
  color: #ecf1f3;
}

.login-link {
  color: #ecf1f3;
  margin-left: 10px;
  padding: 8px 11px;
  background-color: #004eff;
  text-decoration: none;
  font-family: 'Gotham Black';
}

.login-link:hover {
  background-color: #00e600;
  color: #004eff;
  transition: 0.5s;
}

.match {
  font-family: 'Gotham Black';
  color: #004eff;
  padding: 5px;
  margin-bottom: 20px;
  font-size: 12px;
  background-color: #00e600;
  text-align: center;
}

.no-match {
  font-family: 'Gotham Black';
  color: #ecf1f3;
  padding: 5px;
  margin-bottom: 20px;
  font-size: 12px;
  background-color: red;
  text-align: center;
}
</style>
