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
        <p class="eyebrow">Hello, I'm</p>
        <h1 id="hero-title">Tasnima <span class="hero-name-line">Akther <span class="hero-name-accent">Tisha.</span></span></h1>
        <p class="hero-role">Full-stack developer</p>
        <p class="hero-description">I build seamless web applications from frontend to backend, with clean design and solid code.</p>
        <div class="hero-actions">
          <a class="button" href="/resume/Tasnima-Akther-Tisha.pdf" download="Tasnima-Akther-Tisha.pdf">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12m-5-5 5 5 5-5M4 17v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3" /></svg>
            Download Resume
          </a>
          <a class="button button-secondary" href="#projects">View My Work</a>
        </div>
        <div class="hero-social" aria-label="Social links">
          <a href="https://github.com/tasnima831" target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)" title="GitHub">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M9 19c-4.3 1.3-4.3-2.2-6-2.5m12 5v-3.2a3.5 3.5 0 0 0-.9-2.7c3.1-.4 6.4-1.5 6.4-6.9a5.4 5.4 0 0 0-1.5-3.7 5 5 0 0 0-.1-3.7s-1.2-.4-3.9 1.5a13.4 13.4 0 0 0-7 0C5.3.9 4.1 1.3 4.1 1.3A5 5 0 0 0 4 5a5.4 5.4 0 0 0-1.5 3.7c0 5.4 3.3 6.5 6.4 6.9A3.5 3.5 0 0 0 8 18.3V22" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/tasnima-akther-tisha/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)" title="LinkedIn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="3" />
              <circle cx="7" cy="8" r="1" fill="currentColor" stroke="none" />
              <path d="M7 11v7m4 0v-7m0 3a3 3 0 0 1 6 0v4" />
            </svg>
          </a>
          <a href="https://www.youtube.com/@tat7057" target="_blank" rel="noopener noreferrer" aria-label="YouTube (opens in a new tab)" title="YouTube">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="2" y="5" width="20" height="14" rx="4" />
              <path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a href="mailto:shraboniakter554@gmail.com" aria-label="Email me at shraboniakter554@gmail.com" title="Email">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m3 6 9 7 9-7" />
            </svg>
          </a>
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
