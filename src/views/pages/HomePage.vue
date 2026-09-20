<script setup>
import AboutPage from './AboutPage.vue'
import SkillsPage from './SkillsPage.vue'
import EducationPage from './EducationPage.vue'
import ProjectsPage from './ProjectsPage.vue'
import ContactPage from './ContactPage.vue'
</script>

<template>
  <div>
    <section id="home" class="hero" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow">Full-stack developer</p>
        <h1 id="hero-title">Building useful web experiences with <span>care.</span></h1>
        <p class="hero-description">Hi, I'm Tasnima Akther Tisha. I build thoughtful web applications with clean design and solid code.</p>
        <div class="hero-actions">
          <a class="button" href="#projects">Explore my work <span aria-hidden="true">↗</span></a>
          <a class="text-link" href="#contact">Let's talk <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div class="hero-art" aria-hidden="true">
        <div class="hero-art-inner">T<span>.</span></div>
        <span class="hero-art-label">Design &amp; development</span>
      </div>
    </section>
    <AboutPage />
    <SkillsPage />
    <EducationPage />
    <ProjectsPage />
    <ContactPage />
  </div>
</template>
