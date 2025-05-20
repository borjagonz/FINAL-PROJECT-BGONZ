<script setup></script>

<template>
  <section class="highlights">
    <div class="highlight-card">
      <img
        class="icon-highlights"
        src="https://raw.githubusercontent.com/borjagonz/FINAL-PROJECT-BGONZ/refs/heads/main/src/icons/progress-tracking.png"
        alt="Progress Tracking"
      />
      <div>
        <h2 class="h-card-title">Progress Tracking</h2>
        <p class="h-card-text">
          Visualize your progress with dynamic dashboards and analytics tailored to your goals.
        </p>
      </div>
    </div>
    <div class="highlight-card">
      <img
        class="icon-highlights"
        src="https://raw.githubusercontent.com/borjagonz/FINAL-PROJECT-BGONZ/refs/heads/main/src/icons/smart-task-management.png"
        alt="Seamless Scheduling"
      />
      <h2 class="h-card-title">Smart Task Management</h2>
      <p class="h-card-text">
        Create, categorize, and prioritize tasks with ease. Stay on top of your workload with
        powerful filters, labels, and deadlines.
      </p>
    </div>
    <div class="highlight-card">
      <img
        class="icon-highlights"
        src="https://raw.githubusercontent.com/borjagonz/FINAL-PROJECT-BGONZ/refs/heads/main/src/icons/seamless-scheduling.png"
        alt="Smart Task Management"
      />
      <h2 class="h-card-title">Seamless Scheduling</h2>
      <p class="h-card-text">
        Integrate tasks with your calendar to keep your day organized and meetings productive.
      </p>
    </div>
  </section>
</template>

<style scoped>
.highlights {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1200px;
  padding: 200px 30px 0px 30px;
}

.highlight-card {
  width: 31%;
  margin: 0;
  padding: 50px 30px;
  background-color: #004eff;
  justify-content: center;
  text-align: center;
}

.highlight-card:hover {
  background-color: #51ca41;
  transition: 0.5s;
}

.icon-highlights {
}

.h-card-title {
  color: #ecf1f3;
  max-width: 150px;
  padding-top: 30px;
}

.h-card-text {
  padding-top: 20px;
  color: #ecf1f3;
}
</style>
