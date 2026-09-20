<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="site-header">
    <RouterLink class="site-name" to="/">Tasnima Akther Tisha</RouterLink>
    <nav aria-label="Main navigation">
      <RouterLink to="/#home">Home</RouterLink>
      <RouterLink to="/#about">About</RouterLink>
      <RouterLink to="/#skills">Skills</RouterLink>
      <RouterLink to="/#education">Education</RouterLink>
      <RouterLink to="/#projects">Projects</RouterLink>
      <RouterLink to="/#contact">Contact</RouterLink>
    </nav>
  </header>
</template>
