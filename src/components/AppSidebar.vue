<script setup>
import { topics } from '../data/topics'

defineProps({
  open: Boolean, // dikirim dari App.vue, mengatur tampil/sembunyi di mobile
})

const mainLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/help', label: 'Help' },
]
</script>

<template>
  <aside class="sidebar" :class="{ open }">
    <div class="logo">Realistek</div>

    <nav>
      <RouterLink v-for="link in mainLinks" :key="link.to" :to="link.to" class="nav-link">
        {{ link.label }}
      </RouterLink>

      <p class="nav-label">Peripheral</p>

      <RouterLink
        v-for="topic in topics"
        :key="topic.slug"
        :to="`/topik/${topic.slug}`"
        class="nav-link"
      >
        <span class="nav-icon">{{ topic.icon }}</span>
        {{ topic.name }}
      </RouterLink>
    </nav>
  </aside>
</template>
