<script setup>
import { reactive } from 'vue'
import { RouterLink } from 'vue-router'
import { projects } from '../../data/projects'

const selectedImages = reactive({})
</script>

<template>
  <section id="projects" class="page-section" aria-labelledby="projects-title">
    <h2 id="projects-title">Projects</h2>
    <div class="project-grid">
      <article v-for="project in projects" :key="project.slug" class="project-card">
        <div class="project-image">
          <img :src="project.images[selectedImages[project.slug] ?? 0].src" :alt="project.images[selectedImages[project.slug] ?? 0].alt" loading="lazy" decoding="async" />
          <span class="project-category">{{ project.category }}</span>
          <div class="project-dots" :aria-label="`Choose image for ${project.title}`">
            <button
              v-for="(image, imageIndex) in project.images"
              :key="image.src"
              type="button"
              :aria-label="`Show image ${imageIndex + 1} of ${project.images.length} for ${project.title}`"
              :aria-pressed="(selectedImages[project.slug] ?? 0) === imageIndex"
              @click="selectedImages[project.slug] = imageIndex"
            />
          </div>
        </div>
        <div class="project-card-content">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <ul class="project-tags" :aria-label="`Technologies used for ${project.title}`">
            <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
          </ul>
          <div class="project-card-actions">
            <RouterLink :to="`/projects/${project.slug}`">View details</RouterLink>
            <a :href="project.sourceUrl" target="_blank" rel="noopener noreferrer">Source code</a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
