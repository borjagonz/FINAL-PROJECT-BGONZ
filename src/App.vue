<script setup>
  import HeaderComponent from './components/HeaderComponent.vue'
  import HeadlineComponent from './components/HeadlineComponent.vue'
  import HighlightsComponent from './components/HighlightsComponent.vue';
  import NewsletterComponent from './components/NewsletterComponent.vue';
  import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
  <section>
    <HeaderComponent></HeaderComponent>
  </section>
  <section>
    <HeadlineComponent></HeadlineComponent>
  </section>
  <section>
    <HighlightsComponent></HighlightsComponent>
  </section>
  <section>
    <NewsletterComponent></NewsletterComponent>
  </section>
  <section>
    <FooterComponent></FooterComponent>
  </section>
</template>

<style scoped>

</style>
