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
      <h2>Your Dashboard</h2>
      <p class="d-text">Here you can add tasks, edit or mark them as done and delete them.</p>
      <div class="new-task-container">
        <form @submit.prevent="addTask" class="task-form">
          <input class="new-task" v-model="newTask" placeholder="New task title..." required />
          <input
            class="task-description"
            v-model="newDescription"
            placeholder="Description..."
            rows="2"
          />
          <button class="add-btn" type="submit">Add task</button>
        </form>
      </div>
      <div class="pending-tasks">
        <h3 class="tasks-title">Pending Tasks</h3>
        <ul class="task-list">
          <li v-for="task in pendingTasks" :key="task.id">
            <input
              class="check-btn"
              type="checkbox"
              :checked="task.is_done"
              @change="toggleDone(task)"
            />

            <input
              class="task-edit-input-title"
              v-model="task.title"
              :readonly="!isEditing(task.id)"
            />

            <input
              class="task-edit-input-description"
              v-model="task.description"
              :readonly="!isEditing(task.id)"
            />

            <button class="edit-save-btn" @click="toggleEdit(task)">
              {{ isEditing(task.id) ? 'Save' : 'Edit' }}
            </button>
            <button class="delete-btn" @click="deleteTask(task.id)">Delete</button>
          </li>
        </ul>
      </div>
      <div class="completed-tasks">
        <h3 class="tasks-title">Completed Tasks</h3>
        <div class="done-task">
          <ul class="task-list">
            <li v-for="task in doneTasks" :key="task.id">
              <input type="checkbox" :checked="task.is_done" @change="toggleDone(task)" />
              <span class="done">{{ task.title }}</span>
              <span class="done">{{ task.description }}</span>
              <button class="delete-btn" @click="deleteTask(task.id)">Delete</button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <section id="footer">
      <div class="footer">
        <div class="footer-container">
          <div>
            <a href="/dashboard">
              <img class="logo-tasky" src="/src/logo/logo-tasky-white.svg" alt="Tasky Logo" />
            </a>
          </div>
          <div class="links">
            <ul class="ul-links">
              <li><a class="il-link" href="#">About Us</a></li>
              <li><a class="il-link" href="#">Privacy Policy</a></li>
              <li><a class="il-link" href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useTaskStore } from '../stores/task.js'
import { storeToRefs } from 'pinia'
import { supabase } from '@/supabase'

const router = useRouter()
const newTask = ref('')
const newDescription = ref('')

const taskStore = useTaskStore()
const { pendingTasks, doneTasks } = storeToRefs(taskStore)

onMounted(async () => {
  await taskStore.fetchTasks()
})

const editing = ref(new Set())

const isEditing = (taskId) => editing.value.has(taskId)

const toggleEdit = async (task) => {
  if (editing.value.has(task.id)) {
    if (!task.title.trim()) {
      alert('Title cannot be empty')
      return
    }

    await taskStore.updateTask(task.id, 'title', task.title)
    await taskStore.updateTask(task.id, 'description', task.description)

    editing.value.delete(task.id)
  } else {
    editing.value.add(task.id)
  }
}

const addTask = async () => {
  await taskStore.addTask(newTask.value, newDescription.value)
  newTask.value = ''
  newDescription.value = ''
}

const toggleDone = (task) => {
  taskStore.toggleDone(task)
}

const deleteTask = (taskId) => {
  taskStore.deleteTask(taskId)
}

const handleLogout = async () => {
  await supabase.auth.signOut()
  router.push('/')
}
</script>

<style scoped>
body {
  padding: 0;
  margin: 0 auto;
}

.d-container {
  background-image: url('../background/dashboard-background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.header {
  padding: 30px 0 0 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  max-width: 1200px;
}

.logo-tasky {
  width: 100px;
}

.logout-btn {
  background-color: #004eff;
  color: #ecf1f3;
  padding: 8px 15px;
  font-family: Gotham;
  border: none;
  cursor: pointer;
}

.logout-btn:hover {
  background-color: #51ca41;
  transition: 0.3s;
}

.dashboard {
  margin: 0 auto;
  max-width: 1200px;
  padding-top: 80px;
  text-align: center;
  min-height: 60vh;
}

.d-text {
  padding: 30px 0px 60px 0px;
}

.task-form {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}

.new-task-container {
  max-width: 1200px;
  min-width: none;
  display: flex;
  padding: 20px;
  border: 1px solid #004eff;
}

.new-task {
  padding: 10px;
  font-size: 16px;
  font-family: Gotham;
  background-color: white;
  border: 1px solid #004eff;
  color: #004eff;
  height: 40px;
}

.task-description {
  padding: 10px;
  font-size: 16px;
  font-family: Gotham;
  background-color: white;
  border: 1px solid #004eff;
  color: #004eff;
  height: 40px;
  text-align: left;
  text-align: start;
}

.task-edit-input-title {
  margin: 0 10px;
  padding: 6px;
  font-size: 16px;
  font-family: Gotham;
  width: 30%;
  background-color: transparent;
  color: #004eff;
  border: 1px solid #004eff;
}

.task-edit-input-description {
  margin: 0 10px;
  padding: 6px;
  font-size: 16px;
  font-family: Gotham;
  width: 60%;
  background-color: transparent;
  color: #004eff;
  border: 1px solid #004eff;
}

.add-btn {
  background-color: #004eff;
  color: #ecf1f3;
  padding: 8px 15px;
  font-family: Gotham;
  border: none;
  cursor: pointer;
  height: 40px;
}

.add-btn:hover {
  background-color: #51ca41;
  transition: 0.3s;
}

.tasks-title {
  padding-bottom: 30px;
}

.pending-tasks {
  margin: 30px auto;
  padding: 30px;
  max-width: 1200px;
  min-width: none;
  border: 1px solid #004eff;
}

.completed-tasks {
  margin: 30px auto;
  padding: 30px;
  max-width: 1200px;
  min-width: none;
  border: 1px solid #004eff;
}

.task-list {
  list-style: none;
  padding: 0;
  max-width: 1200px;
  margin: 0 auto 40px;
}

.task-list li {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  margin-bottom: 10px;
}

input[type='checkbox'] {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid #004eff;
  background-color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

input[type='checkbox']:checked {
  background-color: #51ca41;
  border-color: #51ca41;
}

input[type='checkbox']:checked::after {
  content: '✔';
  color: white;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.done {
  text-decoration: line-through;
  color: gray;
  font-family: Gotham;
}

.check-btn {
  background-color: #004eff;
}

.edit-save-btn {
  background-color: #004eff;
  color: #ecf1f3;
  padding: 8px 15px;
  font-family: Gotham;
  border: none;
  cursor: pointer;
  height: 40px;
}

.edit-save-btn:hover {
  background-color: #51ca41;
  transition: 0.3s;
}

.delete-btn {
  background-color: #004eff;
  color: #ecf1f3;
  padding: 8px 15px;
  font-family: Gotham;
  border: none;
  cursor: pointer;
  height: 40px;
}

.delete-btn:hover {
  background-color: red;
  transition: 0.3s;
}

.footer {
  padding: 80px 0;
  background-color: #004eff;
  margin-top: 120px;
}

.footer-container {
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ul-links {
  display: flex;
  list-style-type: none;
  padding: 0;
}

.il-link {
  font-size: 14px;
  font-family: Gotham;
  color: #ecf1f3;
  margin-left: 20px;
  text-decoration: none;
}
</style>
