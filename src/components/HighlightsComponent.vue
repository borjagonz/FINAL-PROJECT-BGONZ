<script setup></script>

<template>
  <section id="highlights">
    <div class="h-cards">
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
    </div>
  </section>
</template>

<style scoped>
#highlights {
  padding: 240px 30px 0px 30px;
}

.h-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  gap: 20px;
}

.highlight-card {
  width: 31%;
  margin: 0;
  padding: 40px 40px 50px 40px;
  background-color: #004eff;
  text-align: center;
}

.highlight-card:hover {
  transition: 1s;
  scale: 105%;
}

.icon-highlights {
  scale: 85%;
}

.h-card-title {
  color: #ecf1f3;
  max-width: 150px;
  padding-top: 20px;
  font-size: 22px;
}

.h-card-text {
  padding-top: 20px;
  color: #ecf1f3;
}

@media screen and (min-width: 0px) and (max-width: 768px) {

  #highlights{
    max-width: 768px;
  }

  .h-cards {
  }

  .highlight-card {
    flex: 1 1 100%;
  }
}
</style>
