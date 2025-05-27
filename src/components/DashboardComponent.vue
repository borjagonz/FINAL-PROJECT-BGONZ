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

      <div v-if="pendingTasks.length + doneTasks.length === 0" class="no-tasks-message">
        <p class="empty-tasks">No tasks yet. Start by adding one!</p>
      </div>

      <div class="pending-tasks" v-if="pendingTasks.length + doneTasks.length > 0">
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

      <div class="completed-tasks" v-if="pendingTasks.length + doneTasks.length > 0">
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
    <FooterComponent />
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useTaskStore } from '../stores/task.js'
import { storeToRefs } from 'pinia'
import { supabase } from '@/supabase'
import FooterComponent from './FooterComponent.vue'

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
  background-color: #ecf1f3;
}

.header {
  padding: 60px 0 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-tasky {
  width: 125px;
}

.logo-tasky:hover {
  scale: 110%;
  transition: 1s;
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
  background-color: #00e600;
  transition: 0.3s;
  color: #004eff;
}

.dashboard {
  margin-top: 30px;
  padding: 60px 40px;
  text-align: center;
  min-height: 50vh;
  background-color: #ecf1f3;
}

.d-text {
  padding: 30px 0px 30px 0px;
}

.task-form {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 0px 10px;
  gap: 10px;
}

.new-task-container {
  margin: 30px auto;
  padding: 30px;
  max-width: 1200px;
  border: 2px solid #004eff;
  display: flex;
  justify-content: space-between;
}

.new-task {
  padding: 10px;
  font-size: 16px;
  font-family: Gotham;
  background-color: white;
  border: none;
  color: #004eff;
  height: 40px;
  max-width: 320px;
}

::placeholder {
  color: #bfd0d7;
}

.task-description {
  padding: 10px;
  font-size: 16px;
  font-family: Gotham;
  background-color: white;
  border: none;
  color: #004eff;
  height: 40px;
  text-align: start;
  max-width: 320px;
}

.task-edit-input-title {
  margin: 0;
  padding: 6px;
  font-size: 16px;
  font-family: Gotham;
  width: 320px;
  background-color: white;
  color: #004eff;
  border: none;
  height: 40px;
}

.task-edit-input-description {
  margin: 0;
  padding: 6px;
  font-size: 16px;
  font-family: Gotham;
  width: 320px;
  background-color: white;
  color: #004eff;
  border: none;
  height: 40px;
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
  background-color: #00e600;
  color: #004eff;
  transition: 0.3s;
}

.tasks-title {
  padding-bottom: 30px;
}

.pending-tasks {
  margin: 30px auto;
  padding: 30px;
  max-width: 1200px;
  border: 2px solid #004eff;
}

.completed-tasks {
  margin: 30px auto;
  padding: 30px;
  max-width: 1200px;
  border: 2px solid #004eff;
}

.task-list {
  list-style: none;
  padding: 0;
  width: 100%;
}

.task-list li {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

input[type='checkbox'] {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #004eff;
  background-color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 0;
}

input[type='checkbox']:checked {
  background-color: #00e600;
  border-color: #00e600;
}

input[type='checkbox']:checked::after {
  content: '✔';
  color: white;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}

.empty-tasks {
  margin-bottom: 200px;
}

.done {
  color: gray;
  font-family: Gotham;
  padding: 0;
  margin: 0px 80px;
}

.done-tasks {
  margin: 0;
  width: 100%;
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
  margin: 0;
}

.edit-save-btn:hover {
  background-color: #00e600;
  color: #004eff;
  transition: 0.3s;
  margin: 0;
}

.delete-btn {
  background-color: #004eff;
  color: #ecf1f3;
  padding: 8px 15px;
  font-family: Gotham;
  border: none;
  cursor: pointer;
  height: 40px;
  margin: 0;
}

.delete-btn:hover {
  background-color: red;
  transition: 0.3s;
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

.no-tasks-message {
  text-align: center;
  margin-top: 60px;
  font-family: Gotham;
  font-size: 18px;
  color: #004eff;
}

@media screen and (min-width: 0px) and (max-width: 768px) {
  .task-list li {
    flex-wrap: wrap;
  }
}
</style>
