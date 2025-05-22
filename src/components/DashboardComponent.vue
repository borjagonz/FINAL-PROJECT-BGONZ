<template>
  <section class="d-container">
    <div class="header">
      <a href="/dashboard">
        <img class="logo-tasky" src="/src/logo/logo-tasky.svg" alt="Logo Tasky" />
      </a>
      <nav class="nav-buttons">
        <button class="logout-btn" @click="handleLogout">Log out</button>
      </nav>
    </div>
    <div class="dashboard">
      <h1>Task Dashboard</h1>

      <form @submit.prevent="addTask" class="task-form">
        <input v-model="newTask" placeholder="New task..." required />
        <button type="submit">Add Task</button>
      </form>

      <ul class="task-list">
        <li v-for="task in tasks" :key="task.id">
          <label>
            <input type="checkbox" :checked="task.is_done" @change="toggleDone(task)" />
            <span :class="{ done: task.is_done }">{{ task.title }}</span>
          </label>
          <button @click="deleteTask(task)">🗑️</button>
        </li>
      </ul>
    </div>
  </section>
  <section id="footer">
    <div class="footer">
      <div class="footer-container">
        <div>
          <a href="/dashboard">
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

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/supabase'

const router = useRouter()
const newTask = ref('')
const tasks = ref([])
const user = ref(null)

const fetchTasks = async () => {
  const {
    data: { user: currentUser },
  } = await supabase.auth.getUser()
  user.value = currentUser

  if (!user.value) return router.push('/login')

  const { data, error } = await supabase
    .from('tasks')
    .select('*')
    .eq('user_id', user.value.id)
    .order('created_at', { ascending: false })

  if (!error) tasks.value = data
}

const addTask = async () => {
  if (!newTask.value.trim()) return

  const { data, error } = await supabase.from('tasks').insert([
    {
      title: newTask.value,
      is_done: false,
      user_id: user.value.id,
    },
  ])

  if (!error) {
    newTask.value = ''
    fetchTasks()
  }
}

const toggleDone = async (task) => {
  await supabase.from('tasks').update({ is_done: !task.is_done }).eq('id', task.id)

  fetchTasks()
}

const deleteTask = async (task) => {
  await supabase.from('tasks').delete().eq('id', task.id)

  fetchTasks()
}

onMounted(() => {
  fetchTasks()
})

const handleLogout = async () => {
  await supabase.auth.signOut()
  router.push('/')
}

const { data, error } = await supabase
  .from('tasks')
  .insert([
    {
      title: newTask.value,
      is_done: false,
      user_id: user.value.id,
    },
  ])
  .select()
</script>

<style scoped>
.header {
  padding: 60px 0 0 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  max-width: 1200px;
  min-width: none;
}

.logo-tasky {
  width: 125px;
}

.logout-btn {
  text-decoration: none;
  background-color: #004eff;
  color: #ecf1f3;
  padding: 8px 15px;
  font-family: Gotham;
  border: none;
}

.logout-btn:hover {
  cursor: pointer;
  transition: 0.3s;
  background-color: #51ca41;
}

.dashboard {
  margin: 0 auto;
  justify-content: center;
  max-width: 1200px;
  text-align: center;
  background-color: #ecf1f3;
}

.d-title {
  margin-top: 100px;
  text-align: center;
}

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

.logo-tasky {
  width: 125px;
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

.task-form {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
.task-list {
  list-style: none;
  padding: 0;
}
.task-list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}
.done {
  text-decoration: line-through;
  color: gray;
}
</style>
