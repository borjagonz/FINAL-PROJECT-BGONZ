import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { supabase } from '@/supabase'

export const useTaskStore = defineStore('task', () => {
  const tasks = ref([])
  const user = ref(null)

  const fetchTasks = async () => {
    const { data: { user: currentUser } } = await supabase.auth.getUser()
    user.value = currentUser
    if (!user.value) return

    const { data, error } = await supabase
      .from('tasks')
      .select('*')
      .eq('user_id', user.value.id)
      .order('created_at', { ascending: false })

    if (!error) tasks.value = data
  }

  const addTask = async (title, description) => {
    if (!user.value || !title.trim()) return

    await supabase.from('tasks').insert([
      {
        title,
        description,
        is_done: false,
        user_id: user.value.id,
      },
    ])
    fetchTasks()
  }

  const toggleDone = async (task) => {
    await supabase
      .from('tasks')
      .update({ is_done: !task.is_done })
      .eq('id', task.id)

    fetchTasks()
  }

  const updateTask = async (taskId, field, value) => {
    await supabase
      .from('tasks')
      .update({ [field]: value })
      .eq('id', taskId)

    fetchTasks()
  }

  const deleteTask = async (taskId) => {
    await supabase.from('tasks').delete().eq('id', taskId)
    fetchTasks()
  }

  const pendingTasks = computed(() => tasks.value.filter(t => !t.is_done))
  const doneTasks = computed(() => tasks.value.filter(t => t.is_done))

  return {
    tasks,
    user,
    fetchTasks,
    addTask,
    toggleDone,
    updateTask,
    deleteTask,
    pendingTasks,
    doneTasks,
  }
})
