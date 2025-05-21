<script setup>
import HeaderComponent from './HeaderComponent.vue'
import HeadlineComponent from './HeadlineComponent.vue'
import HighlightsComponent from './HighlightsComponent.vue'
import FooterComponent from './FooterComponent.vue'
import NewsletterComponent from './NewsletterComponent.vue'
</script>

<template>
  <section>
    <HeaderComponent />
    <HeadlineComponent />
    <HighlightsComponent />
    <NewsletterComponent />
    <FooterComponent />
  </section>
</template>

<style scoped>

body{
  background-image: url(https://raw.githubusercontent.com/borjagonz/FINAL-PROJECT-BGONZ/refs/heads/main/src/background/headline-background.png);
  background-size: 200vh;
  background-repeat: no-repeat;
  background-position: top;
}

</style>
