<template>
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
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const password = ref('')
const error = ref('')

const handleRegister = () => {
  error.value = ''

  if (name.value.trim().length < 2) {
    error.value = 'Name must be at least 2 characters long'
    return
  }

  if (!email.value.includes('@')) {
    error.value = 'Invalid email address'
    return
  }

  if (password.value.length < 6) {
    error.value = 'Password must be at least 6 characters long'
    return
  }

  alert('Registration successful! You can now log in.')
}
</script>

<style scoped>
.register-form {
  max-width: 400px;
  margin: auto;
  margin-top: 120px;
  border: 1px solid #ddd;
  padding: 30px;
}

.signup {
  font-size: 42px;
  text-align: center;
}

.form-group {
  margin: 20px 0px;
  font-family: Gotham;
  color: #004eff;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  font-family: Gotham;
}

::placeholder {
  color: lightgray;
}

button {
  width: 100%;
  padding: 12px;
  font-size: 18px;
  font-family: Gotham;
  background-color: #004eff;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #51ca41;
  color: #ecf1f3;
  transition: 0.3s;
}

.error {
  color: red;
  margin-bottom: 20px;
  font-family: Gotham;
  text-align: center;
}

.actions {
  margin-top: 10px;
  text-align: center;
}

.back-home {
  display: block;
  margin-top: 68px;
  padding: 12px;
  background-color: #004eff;
  width: 150px;
  color: #ecf1f3;
  text-decoration: none;
  font-family: Gotham;
  text-align: center;
}

.back-home:hover {
  background-color: #51ca41;
  color: #ecf1f3;
  transition: 0.3s;
}

.login-text {
  font-size: 16px;
  margin: 25px 0px;
}

.login-link {
  color: #ecf1f3;
  margin-left: 10px;
  padding: 8px 11px;
  background-color: #51ca41;
  text-decoration: none;
  font-family: Gotham;
}

.login-link:hover {
  background-color: white;
  color: #51ca41;
  transition: 0.3s;
}
</style>
