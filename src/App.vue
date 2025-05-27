<script>
import router from './router/index.js'

export default {
  setup() {
    return {
      router,
    }
  },
}


</script>

<template>
  <div id="app">
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>

</style>
