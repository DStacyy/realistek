<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="panel info-panel">
    <span class="eyebrow">{{ route.meta.eyebrow }}</span>
    <h1 class="hero-title">{{ route.meta.title }}</h1>
    <p class="hero-p">{{ route.meta.description }}</p>
    <RouterLink to="/" class="btn btn-primary">Kembali ke beranda</RouterLink>
  </div>
</template>