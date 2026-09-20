<script setup>
const props = defineProps({ name: { type: String, required: true } })

const icons = {
  HTML: 'html5.svg',
  CSS: 'css3.svg',
  JavaScript: 'javascript.svg',
  'Tailwind CSS': 'tailwindcss.svg',
  PHP: 'php.svg',
  'Node.js': 'nodejs.svg',
  MySQL: 'mysql-original-wordmark.svg',
  Laravel: 'laravel.svg',
  'Vue.js': 'vuejs.svg',
  Git: 'git.svg',
  GitHub: 'github.svg',
  'VS Code': 'vscode.svg',
  Figma: 'figma.svg',
  Notion: 'notion.svg',
  Vite: 'vite.svg',
  Vercel: 'vercel.svg',
}
</script>

<template>
  <img
    class="skill-icon"
    :class="{ 'skill-icon-light-background': ['GitHub', 'Notion', 'Vercel'].includes(props.name), 'skill-icon-mysql': props.name === 'MySQL' }"
    :src="`/skills/${icons[props.name]}`"
    alt=""
    loading="lazy"
    decoding="async"
  />
</template>
