<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import AppSidebar from './components/AppSidebar.vue'

const route = useRoute()
const menuOpen = ref(false)

// Tutup menu mobile setiap kali pindah halaman
watch(
  () => route.path,
  () => {
    menuOpen.value = false
  }
)
</script>

<template>
  <div class="layout">
    <header class="topbar">
      <button class="menu-btn" aria-label="Buka menu" @click="menuOpen = !menuOpen">☰</button>
      <span class="logo-small">Realistek</span>
    </header>

    <div class="overlay" :class="{ show: menuOpen }" @click="menuOpen = false"></div>

    <AppSidebar :open="menuOpen" />

    <main class="content">
      <RouterView />
    </main>
  </div>
</template>
