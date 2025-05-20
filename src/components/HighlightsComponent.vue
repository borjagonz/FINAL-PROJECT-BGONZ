<script setup>

</script>

<template>
  <section class="highlights">
    <div class="highlight-card">
      <img src="" alt="">
      <div>
        <h2 class="h-card-title">Progress Tracking</h2>
        <p class="h-card-text">Visualize your progress with dynamic dashboards and analytics tailored to your goals.</p>
      </div>
    </div>
    <div class="highlight-card">
      <img src="" alt="">
      <h2 class="h-card-title">Smart Task Management</h2>
      <p class="h-card-text">Create, categorize, and prioritize tasks with ease. Stay on top of your workload with powerful filters, labels, and deadlines.</p>
    </div>
    <div class="highlight-card">
      <img src="" alt="">
      <h2 class="h-card-title">Seamless Scheduling</h2>
      <p class="h-card-text">Integrate tasks with your calendar to keep your day organized and meetings productive.</p>
    </div>
  </section>
</template>

<style scoped>

.highlights {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.highlight-card {
  width: 31%;
  height: 350px;
  margin: 0;
  padding: 20px;
  background-color: #004eff;
  text-align: center;
}

.h-card-title {
  color: #ecf1f3;
  max-width: 150px;
}

.h-card-text {
  padding-top: 30px;
  color: #ecf1f3;
}

</style>
