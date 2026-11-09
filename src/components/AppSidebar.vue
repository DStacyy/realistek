<script setup>
import { topics } from '../data/topics'

defineProps({
  open: Boolean, // dikirim dari App.vue, mengatur tampil/sembunyi di mobile
})

const mainLinks = [
  { to: '/', label: 'Beranda', icon: '⌂' },
  { to: '/about', label: 'Tentang', icon: 'ⓘ' },
  { to: '/contact', label: 'Kontak', icon: '✉' },
  { to: '/help', label: 'Bantuan', icon: '?' },
]
</script>

<template>
  <aside class="sidebar" :class="{ open }" aria-label="Navigasi utama">
    <RouterLink to="/" class="logo brand">
      <span class="logo-dot"></span>
      Realistek
    </RouterLink>

    <nav>
      <p class="nav-label">Menu</p>
      <RouterLink v-for="link in mainLinks" :key="link.to" :to="link.to" class="nav-link">
        <span class="nav-icon">{{ link.icon }}</span>
        {{ link.label }}
      </RouterLink>

      <p class="nav-label">Komponen</p>
      <RouterLink
        v-for="(topic, i) in topics"
        :key="topic.slug"
        :to="`/topik/${topic.slug}`"
        class="nav-link"
      >
        <span class="nav-icon">{{ topic.icon }}</span>
        {{ topic.name }}
        <span class="nav-index">{{ String(i + 1).padStart(2, '0') }}</span>
      </RouterLink>
    </nav>
  </aside>
</template>