<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import AppSidebar from './components/AppSidebar.vue'

const route = useRoute()
const menuOpen = ref(false)

// Tutup menu mobile setiap pindah halaman
watch(
  () => route.path,
  () => {
    menuOpen.value = false
  }
)

// Kunci scroll body saat menu mobile terbuka
watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

// Tutup menu dengan tombol Esc
function onKey(e) {
  if (e.key === 'Escape') menuOpen.value = false
}

onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})
</script>

<template>
  <div class="layout">
    <header class="topbar">
      <button
        class="menu-btn"
        type="button"
        :aria-expanded="menuOpen"
        aria-label="Buka menu"
        @click="menuOpen = !menuOpen"
      >
        <span class="burger" :class="{ open: menuOpen }"><i></i><i></i><i></i></span>
      </button>
      <span class="brand logo-small">Realistek</span>
    </header>

    <div class="overlay" :class="{ show: menuOpen }" @click="menuOpen = false"></div>

    <AppSidebar :open="menuOpen" />

    <main class="content">
      <RouterView />
    </main>
  </div>
</template>