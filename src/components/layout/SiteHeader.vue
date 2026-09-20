<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isDark = ref(document.documentElement.dataset.theme === 'dark')

function toggleTheme() {
  isDark.value = !isDark.value
  const theme = isDark.value ? 'dark' : 'light'
  document.documentElement.dataset.theme = theme
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', isDark.value ? '#0b1220' : '#f7f5f0')

  try {
    localStorage.setItem('portfolio-theme', theme)
  } catch {
    // The switch still works when browser storage is unavailable.
  }
}
</script>

<template>
  <header class="site-header">
    <RouterLink class="site-name" to="/">Tasnima Akther Tisha</RouterLink>
    <nav aria-label="Main navigation">
      <button
        class="theme-toggle"
        type="button"
        :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        :aria-pressed="isDark"
        @click="toggleTheme"
      >
        <svg v-if="isDark" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
        <svg v-else aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.5 15.5A8.5 8.5 0 0 1 8.5 3.5a8.5 8.5 0 1 0 12 12Z" />
        </svg>
      </button>
      <RouterLink to="/#home">Home</RouterLink>
      <RouterLink to="/#about">About</RouterLink>
      <RouterLink to="/#skills">Skills</RouterLink>
      <RouterLink to="/#education">Education</RouterLink>
      <RouterLink to="/#projects">Projects</RouterLink>
      <RouterLink to="/#contact">Contact</RouterLink>
    </nav>
  </header>
</template>
