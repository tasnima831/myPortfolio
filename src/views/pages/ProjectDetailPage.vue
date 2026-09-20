<script setup>
import { computed, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { projects } from '../../data/projects'

const route = useRoute()
const project = computed(() => projects.find((item) => item.slug === route.params.slug))
const activeImage = ref(0)

watch(() => route.params.slug, () => {
  activeImage.value = 0
})

function changeImage(direction) {
  if (!project.value) return
  activeImage.value = (activeImage.value + direction + project.value.images.length) % project.value.images.length
}
</script>

<template>
  <article v-if="project" class="project-detail">
    <RouterLink class="project-back" to="/#projects">&larr; Back to projects</RouterLink>
    <header class="project-detail-intro">
      <p class="eyebrow">Selected work / Project details</p>
      <h1>{{ project.title }}</h1>
      <p>{{ project.description }}</p>
      <ul class="project-tags" aria-label="Technologies">
        <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
      </ul>
    </header>

    <section class="detail-gallery" aria-label="Project screenshots">
      <img class="detail-gallery-main" :src="project.images[activeImage].src" :alt="project.images[activeImage].alt" />
      <div class="detail-gallery-controls">
        <button type="button" aria-label="Previous image" @click="changeImage(-1)">&larr;</button>
        <span>{{ String(activeImage + 1).padStart(2, '0') }} / {{ String(project.images.length).padStart(2, '0') }}</span>
        <button type="button" aria-label="Next image" @click="changeImage(1)">&rarr;</button>
      </div>
      <div class="detail-gallery-thumbnails">
        <button v-for="(image, index) in project.images" :key="image.src" type="button" :aria-label="`Show image ${index + 1}`" :aria-pressed="activeImage === index" @click="activeImage = index">
          <img :src="image.src" alt="" loading="lazy" />
        </button>
      </div>
    </section>

    <div class="project-detail-info">
      <p v-if="project.role" class="project-detail-role"><strong>My role</strong><span>{{ project.role }}</span></p>
      <section>
        <h2>Overview</h2>
        <p>{{ project.overview }}</p>
      </section>
      <section>
        <h2>Key features</h2>
        <ul><li v-for="feature in project.features" :key="feature">{{ feature }}</li></ul>
      </section>
      <div class="project-detail-columns">
        <section>
          <h2>Challenges faced</h2>
          <ul><li v-for="challenge in project.challenges" :key="challenge">{{ challenge }}</li></ul>
        </section>
        <section>
          <h2>Future improvements</h2>
          <ul><li v-for="improvement in project.futureImprovements" :key="improvement">{{ improvement }}</li></ul>
        </section>
      </div>
      <a v-if="project.demoUrl" class="project-detail-link" :href="project.demoUrl" target="_blank" rel="noopener noreferrer">Live demo</a>
      <a class="project-detail-link" :href="project.sourceUrl" target="_blank" rel="noopener noreferrer">GitHub repository</a>
    </div>
  </article>
  <section v-else class="project-detail project-not-found">
    <h1>Project not found</h1>
    <RouterLink to="/#projects">Back to projects</RouterLink>
  </section>
</template>
