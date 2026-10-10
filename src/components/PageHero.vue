<script setup>
defineProps({
  title: String,
  subtitle: String,
  paragraph: String,
  image: String, // opsional, kalau kosong tampil placeholder
})
</script>

<template>
  <section class="hero">
    <div class="hero-text">
      <h1>{{ title }}</h1>
      <h2>{{ subtitle }}</h2>
      <p>{{ paragraph }}</p>
    </div>

    <div class="hero-media">
      <img v-if="image" :src="image" :alt="title" />
      <div v-else class="img-placeholder">Gambar 16:9</div>
    </div>
  </section>
</template>
