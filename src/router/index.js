import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TopicPage from '../views/TopicPage.vue'
import InfoView from '../views/InfoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, saved) {
    if (saved) return saved
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/topik/:slug', name: 'topic', component: TopicPage },
    {
      path: '/about',
      name: 'about',
      component: InfoView,
      meta: {
        eyebrow: 'Tentang',
        title: 'Tentang Realistek',
        description:
          'Realistek adalah panduan visual untuk memahami komponen setup desktop. Halaman ini sedang kami siapkan.',
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: InfoView,
      meta: {
        eyebrow: 'Kontak',
        title: 'Hubungi kami',
        description: 'Formulir kontak sedang disiapkan. Untuk sementara, silakan kembali nanti.',
      },
    },
    {
      path: '/help',
      name: 'help',
      component: InfoView,
      meta: {
        eyebrow: 'Bantuan',
        title: 'Pusat bantuan',
        description: 'Panduan penggunaan Realistek sedang disiapkan.',
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: InfoView,
      meta: {
        eyebrow: '404',
        title: 'Halaman tidak ditemukan',
        description: 'Alamat yang kamu buka tidak tersedia. Coba kembali ke beranda.',
      },
    },
  ],
})

export default router