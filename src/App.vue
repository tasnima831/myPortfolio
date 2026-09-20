<script setup>
import { RouterView, useRoute } from 'vue-router'
import SiteHeader from './components/layout/SiteHeader.vue'
import SiteFooter from './components/layout/SiteFooter.vue'

const route = useRoute()
</script>

<template>
  <div class="portfolio" :class="{ 'portfolio-detail': route.name === 'project-detail' }">
    <SiteHeader />
    <main class="page-main">
      <RouterView />
    </main>
    <SiteFooter />
  </div>
</template>
