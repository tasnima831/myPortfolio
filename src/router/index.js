import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/pages/HomePage.vue'
import { projects } from '../data/projects'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/projects/:slug',
      name: 'project-detail',
      component: () => import('../views/pages/ProjectDetailPage.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return { el: to.hash, top: document.querySelector('.site-header')?.offsetHeight ?? 80 }
    }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const project = projects.find((item) => item.slug === to.params.slug)
  document.title = project
    ? `${project.title} | Tasnima Akther Tisha`
    : 'Tasnima Akther Tisha | Full-Stack Developer'
})

export default router
