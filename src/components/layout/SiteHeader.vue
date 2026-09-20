<script setup>
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]
const isDark = ref(document.documentElement.dataset.theme !== 'light')
const activeSection = ref('home')
const nav = ref(null)
let scrollFrame
let clickTimer
let clickedSection = null

function updateActiveSection() {
  scrollFrame = null
  if (route.name === 'project-detail') {
    activeSection.value = 'projects'
    return
  }
  if (clickedSection) return

  const viewportMarker = window.innerHeight * 0.55
  let current = 'home'
  for (const section of sections) {
    const element = document.getElementById(section.id)
    if (element && element.getBoundingClientRect().top <= viewportMarker) {
      current = section.id
    }
  }
  activeSection.value = current
}

function scheduleActiveSectionUpdate() {
  if (scrollFrame == null) scrollFrame = window.requestAnimationFrame(updateActiveSection)
}

function selectSection(id) {
  activeSection.value = id
  clickedSection = id
  window.clearTimeout(clickTimer)
  clickTimer = window.setTimeout(() => {
    clickedSection = null
    scheduleActiveSectionUpdate()
  }, 900)
}

onMounted(() => {
  window.addEventListener('scroll', scheduleActiveSectionUpdate, { passive: true })
  window.addEventListener('resize', scheduleActiveSectionUpdate)
  scheduleActiveSectionUpdate()
})

watch(() => route.fullPath, () => nextTick(scheduleActiveSectionUpdate))

watch(activeSection, async () => {
  await nextTick()
  if (!nav.value || nav.value.scrollWidth <= nav.value.clientWidth) return

  const activeLink = nav.value.querySelector('[aria-current="location"]')
  if (!activeLink) return
  const navBounds = nav.value.getBoundingClientRect()
  const linkBounds = activeLink.getBoundingClientRect()
  const left = nav.value.scrollLeft + linkBounds.left - navBounds.left - (navBounds.width - linkBounds.width) / 2
  nav.value.scrollTo({ left, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
})

onUnmounted(() => {
  window.removeEventListener('scroll', scheduleActiveSectionUpdate)
  window.removeEventListener('resize', scheduleActiveSectionUpdate)
  window.cancelAnimationFrame(scrollFrame)
  window.clearTimeout(clickTimer)
})

function toggleTheme() {
  isDark.value = !isDark.value
  const theme = isDark.value ? 'dark' : 'light'
  document.documentElement.dataset.theme = theme
  document.querySelector('meta[name="color-scheme"]')?.setAttribute('content', isDark.value ? 'dark' : 'only light')
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', isDark.value ? '#080808' : '#f7f7f3')

  try {
    localStorage.setItem('portfolio-theme-v2', theme)
  } catch {
    // The switch still works when browser storage is unavailable.
  }
}
</script>

<template>
  <header class="site-header">
    <RouterLink class="site-name" to="/">Tasnima Akther Tisha</RouterLink>
    <nav ref="nav" aria-label="Main navigation">
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
      <RouterLink
        v-for="section in sections"
        :key="section.id"
        :to="`/#${section.id}`"
        :class="{ 'is-active': activeSection === section.id }"
        :aria-current="activeSection === section.id ? 'location' : undefined"
        @click="selectSection(section.id)"
      >{{ section.label }}</RouterLink>
    </nav>
  </header>
</template>
