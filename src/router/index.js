import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TopicPage from '../views/TopicPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/topik/:slug', name: 'topic', component: TopicPage },
    // Nanti ditambahkan: about, contact, help, dan /topik/:slug
  ],
})

export default router
