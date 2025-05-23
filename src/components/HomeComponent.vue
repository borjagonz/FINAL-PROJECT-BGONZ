<script setup>
import HeaderComponent from './HeaderComponent.vue'
import HeadlineComponent from './HeadlineComponent.vue'
import HighlightsComponent from './HighlightsComponent.vue'
import FooterComponent from './FooterComponent.vue'
import NewsletterComponent from './NewsletterComponent.vue'
</script>

<template>
  <section class="home">
    <HeaderComponent />
    <HeadlineComponent />
    <HighlightsComponent />
    <NewsletterComponent />
    <FooterComponent />
  </section>
</template>

<style scoped>
.home {
  background-image: url('../background/home-background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
