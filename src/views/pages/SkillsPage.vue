<script setup>
import SkillIcon from '../../components/SkillIcon.vue'

const groups = [
  { name: 'Frontend', skills: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'] },
  { name: 'Backend', skills: ['PHP', 'Node.js'] },
  { name: 'Database', skills: ['MySQL'] },
  { name: 'Frameworks', skills: ['Laravel', 'Vue.js'] },
  { name: 'Tools', skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Notion', 'Vite', 'Vercel'] },
]
</script>

<template>
  <section id="skills" class="page-section skills-section" aria-labelledby="skills-title">
    <h2 id="skills-title">Skills</h2>
    <div class="skill-groups">
      <div v-for="group in groups" :key="group.name" class="skill-group">
        <h3>{{ group.name }}</h3>
        <ul class="skill-items">
          <li v-for="skill in group.skills" :key="skill">
            <SkillIcon :name="skill" />
            <span>{{ skill }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
