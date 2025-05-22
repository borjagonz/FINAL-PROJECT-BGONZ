<template>
  <section class="body">
    <div class="login-form">
      <h2 class="login">Log in</h2>

      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            id="email"
            type="email"
            v-model="email"
            required
            placeholder="youremail@example.com"
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input id="password" type="password" v-model="password" required minlength="6" />
        </div>

        <div v-if="error" class="error">{{ error }}</div>

        <button type="submit">Submit</button>
      </form>

      <div class="actions">
        <p class="register-text">Don't have an account?</p>
        <router-link to="/Register" class="register-link"> Register here </router-link>
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
import { supabase } from '@/supabase'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const handleLogin = async () => {
  error.value = ''

  const { error: loginError } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })

  if (loginError) {
    error.value = loginError.message
  } else {
    router.push('/dashboard')
  }
}
</script>

<style scoped>
.body {
  background-color: #004eff;
  height: 100vh;
  margin: 0 auto;
  padding-top: 150px;
}

.login-form {
  max-width: 400px;
  margin: auto;
  border: 1px solid #ddd;
  padding: 30px;
}

.login {
  font-size: 42px;
  text-align: center;
  color: #ecf1f3;
}

.form-group {
  margin: 20px 0px;
  font-family: Gotham;
  color: #ecf1f3;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  font-family: Gotham;
  background-color: #457dff;
  border: 1px solid #ddd;
  color: #ecf1f3;
}

::placeholder {
  color: lightgray;
}

button {
  width: 100%;
  padding: 12px;
  font-size: 18px;
  font-family: Gotham;
  background-color: #ecf1f3;
  color: #004eff;
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
  margin-top: 120px;
  padding: 12px;
  background-color: #ecf1f3;
  width: 150px;
  color: #004eff;
  text-decoration: none;
  font-family: Gotham;
  text-align: center;
}

.back-home:hover {
  background-color: #51ca41;
  color: #ecf1f3;
  transition: 0.3s;
}

.register-text {
  font-size: 16px;
  margin: 25px 0px;
  color: #ecf1f3;
}

.register-link {
  color: #ecf1f3;
  margin-left: 10px;
  padding: 8px 11px;
  background-color: #51ca41;
  text-decoration: none;
  font-family: Gotham;
}

.register-link:hover {
  background-color: white;
  color: #51ca41;
  transition: 0.3s;
}
</style>
