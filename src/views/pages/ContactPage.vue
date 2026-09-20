<script setup>
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue'

const form = reactive({ name: '', email: '', projectType: '', message: '' })
const isSending = ref(false)
const submissionStatus = ref('')
const submissionFailed = ref(false)
const projectTypes = ['Website development', 'Laravel application', 'Website redesign', 'Other project']
const isProjectMenuOpen = ref(false)
const projectMenu = ref(null)

function closeProjectMenu(event) {
  if (!projectMenu.value?.contains(event.target)) isProjectMenuOpen.value = false
}

onMounted(() => document.addEventListener('pointerdown', closeProjectMenu))
onBeforeUnmount(() => document.removeEventListener('pointerdown', closeProjectMenu))

function chooseProjectType(type) {
  form.projectType = type
  isProjectMenuOpen.value = false
  projectMenu.value?.querySelector('.project-type-trigger')?.focus()
}

function handleProjectMenuKeydown(event) {
  if (event.key === 'Escape') {
    isProjectMenuOpen.value = false
    projectMenu.value?.querySelector('.project-type-trigger')?.focus()
  }
}

async function sendMessage() {
  if (isSending.value) return

  if (!form.projectType) {
    submissionFailed.value = true
    submissionStatus.value = 'Please choose a project type.'
    projectMenu.value?.querySelector('.project-type-trigger')?.focus()
    return
  }

  isSending.value = true
  submissionStatus.value = ''
  submissionFailed.value = false

  try {
    const response = await fetch('https://formsubmit.co/ajax/shraboniakter554@gmail.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        project_type: form.projectType,
        message: form.message,
        _subject: `Project inquiry: ${form.projectType}`,
        _url: window.location.href,
      }),
    })
    const result = await response.json()
    if (result.success === false || result.success === 'false') {
      if (typeof result.message === 'string' && result.message.toLowerCase().includes('activation')) {
        submissionFailed.value = true
        submissionStatus.value = 'This contact form is awaiting email activation. Please email me directly for now.'
        return
      }
    }
    if (!response.ok || (result.success !== true && result.success !== 'true')) {
      throw new Error('Submission failed')
    }

    submissionStatus.value = 'Your message was submitted. Thank you!'
    Object.assign(form, { name: '', email: '', projectType: '', message: '' })
  } catch {
    submissionFailed.value = true
    submissionStatus.value = 'Your message could not be sent. Please try again or email me directly.'
  } finally {
    isSending.value = false
  }
}
</script>

<template>
  <section id="contact" class="page-section contact-section" aria-labelledby="contact-title">
    <div class="contact-layout">
      <div class="contact-copy">
        <p class="eyebrow">Have an idea? Let's make it happen</p>
        <h2 id="contact-title">Hire me for your next <em>great project.</em></h2>
        <p class="contact-intro">I'd love to turn your vision into a complete web application. Tell me what you have in mind.</p>
        <div class="contact-details">
          <a href="mailto:shraboniakter554@gmail.com">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m3 6 9 7 9-7" /></svg>
            <span>shraboniakter554@gmail.com</span>
          </a>
          <a href="tel:+8801827392160">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 5.2 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L9 10.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 .8 1.1Z" /></svg>
            <span>+880 1827392160</span>
          </a>
          <a href="https://www.linkedin.com/in/tasnima-akther-tisha/" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="3" /><circle cx="7" cy="8" r="1" fill="currentColor" stroke="none" /><path d="M7 11v7m4 0v-7m0 3a3 3 0 0 1 6 0v4" /></svg>
            <span>LinkedIn: Tasnima Akther Tisha</span>
          </a>
          <a href="https://github.com/tasnima831" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 19c-4.3 1.3-4.3-2.2-6-2.5m12 5v-3.2a3.5 3.5 0 0 0-.9-2.7c3.1-.4 6.4-1.5 6.4-6.9a5.4 5.4 0 0 0-1.5-3.7 5 5 0 0 0-.1-3.7s-1.2-.4-3.9 1.5a13.4 13.4 0 0 0-7 0C5.3.9 4.1 1.3 4.1 1.3A5 5 0 0 0 4 5a5.4 5.4 0 0 0-1.5 3.7c0 5.4 3.3 6.5 6.4 6.9A3.5 3.5 0 0 0 8 18.3V22" /></svg>
            <span>GitHub: tasnima831</span>
          </a>
        </div>
      </div>
      <form class="contact-form" @submit.prevent="sendMessage">
        <label for="contact-name">Name</label>
        <input id="contact-name" v-model.trim="form.name" name="name" autocomplete="name" placeholder="Your name" maxlength="100" required />

        <label for="contact-email">Email</label>
        <input id="contact-email" v-model.trim="form.email" name="email" type="email" autocomplete="email" placeholder="you@example.com" maxlength="254" required />

        <label id="contact-type-label">Project type</label>
        <div ref="projectMenu" class="project-type-menu" @keydown="handleProjectMenuKeydown">
          <button
            type="button"
            class="project-type-trigger"
            aria-haspopup="listbox"
            :aria-expanded="isProjectMenuOpen"
            aria-labelledby="contact-type-label contact-type-value"
            @click="isProjectMenuOpen = !isProjectMenuOpen"
            @keydown.down.prevent="isProjectMenuOpen = true"
          >
            <span id="contact-type-value">{{ form.projectType || 'What can I help you with?' }}</span>
            <span class="project-type-chevron" aria-hidden="true">⌄</span>
          </button>
          <div v-if="isProjectMenuOpen" class="project-type-options" role="listbox" aria-labelledby="contact-type-label">
            <button
              v-for="type in projectTypes"
              :key="type"
              type="button"
              class="project-type-option"
              role="option"
              :aria-selected="form.projectType === type"
              @click="chooseProjectType(type)"
            >{{ type }}</button>
          </div>
        </div>

        <label for="contact-message">Message</label>
        <textarea id="contact-message" v-model.trim="form.message" name="message" placeholder="Tell me about your project, timeline, and ideas..." rows="5" minlength="10" maxlength="5000" required />
        <button type="submit" :disabled="isSending">{{ isSending ? 'Sending...' : 'Send message' }}</button>
        <p v-if="submissionStatus" class="contact-form-note" :class="{ 'contact-form-error': submissionFailed }" role="status" aria-live="polite">{{ submissionStatus }}</p>
      </form>
    </div>
  </section>
</template>
